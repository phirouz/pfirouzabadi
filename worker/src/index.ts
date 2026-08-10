import { resumeContext } from "./resume-context";

export interface Env {
  RATE_LIMIT_KV: KVNamespace;
  OPENAI_API_KEY: string;
  ALLOWED_ORIGIN: string;
  RATE_LIMIT_PER_HOUR: string;
  OPENAI_MODEL: string;
}

const MAX_QUESTION_LENGTH = 500;

const SYSTEM_PROMPT = `You are a helpful assistant embedded in Seyed-Parsa Firouzabadi's personal portfolio website. Answer questions about his resume, experience, skills, and projects using ONLY the information below. Be concise and friendly, and refer to him as "Parsa" in the third person. If asked something not covered by this information, say you don't have that information rather than guessing.

--- RESUME CONTENT START ---
${resumeContext}
--- RESUME CONTENT END ---`;

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const headers = corsHeaders(origin, env.ALLOWED_ORIGIN);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers });
    }

    if (origin !== env.ALLOWED_ORIGIN) {
      return json({ error: "Forbidden" }, 403, headers);
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, headers);
    }

    let body: { question?: unknown };
    try {
      body = await request.json();
    } catch {
      return json({ error: "Invalid JSON body" }, 400, headers);
    }

    const question = typeof body.question === "string" ? body.question.trim() : "";
    if (!question) {
      return json({ error: "Missing 'question' field" }, 400, headers);
    }
    if (question.length > MAX_QUESTION_LENGTH) {
      return json(
        { error: `Question too long (max ${MAX_QUESTION_LENGTH} characters)` },
        400,
        headers,
      );
    }

    const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
    if (await isRateLimited(env, ip)) {
      return json({ error: "Rate limit exceeded. Try again later." }, 429, headers);
    }

    try {
      const answer = await askOpenAI(env, question);
      return json({ answer }, 200, headers);
    } catch (err) {
      console.error("OpenAI request failed", err);
      return json({ error: "Failed to generate a response. Try again shortly." }, 502, headers);
    }
  },
} satisfies ExportedHandler<Env>;

function corsHeaders(origin: string | null, allowedOrigin: string): HeadersInit {
  const headers: Record<string, string> = {
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    Vary: "Origin",
  };
  if (origin === allowedOrigin) {
    headers["Access-Control-Allow-Origin"] = allowedOrigin;
  }
  return headers;
}

function json(data: unknown, status: number, extraHeaders: HeadersInit): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...extraHeaders },
  });
}

// Fixed-window counter per IP per hour. Not perfectly atomic under heavy
// concurrency, but that's an acceptable tradeoff for a portfolio site.
async function isRateLimited(env: Env, ip: string): Promise<boolean> {
  const limit = Number.parseInt(env.RATE_LIMIT_PER_HOUR, 10) || 20;
  const hourBucket = Math.floor(Date.now() / 3_600_000);
  const key = `ratelimit:${ip}:${hourBucket}`;

  const current = Number.parseInt((await env.RATE_LIMIT_KV.get(key)) ?? "0", 10);
  if (current >= limit) return true;

  await env.RATE_LIMIT_KV.put(key, String(current + 1), { expirationTtl: 3600 });
  return false;
}

async function askOpenAI(env: Env, question: string): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: env.OPENAI_MODEL || "gpt-4o-mini",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: question },
      ],
      max_tokens: 500,
      temperature: 0.4,
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`OpenAI API error ${response.status}: ${text}`);
  }

  const data = (await response.json()) as {
    choices?: { message?: { content?: string } }[];
  };
  const answer = data.choices?.[0]?.message?.content?.trim();
  if (!answer) throw new Error("Empty response from OpenAI");
  return answer;
}
