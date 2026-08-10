"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Send, X } from "lucide-react";
import { accentTextClass, btnMotion } from "@/lib/ui";
import { chatWorkerUrl } from "@/lib/chat-config";

type Message = {
  role: "user" | "assistant" | "error";
  content: string;
};

const INTRO_MESSAGE: Message = {
  role: "assistant",
  content: "Ask me anything about Parsa's experience, projects, or background.",
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INTRO_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const question = input.trim();
    if (!question || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(chatWorkerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = (await res.json().catch(() => null)) as { answer?: string; error?: string } | null;

      if (!res.ok || !data?.answer) {
        const errorText =
          res.status === 429
            ? "I'm getting a lot of questions right now. Please try again in a bit."
            : (data?.error ?? "Something went wrong. Please try again.");
        setMessages((prev) => [...prev, { role: "error", content: errorText }]);
        return;
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.answer! }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "error", content: "Couldn't reach the server. Check your connection and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        aria-expanded={open}
        {...btnMotion}
        className={`fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/20 ${accentTextClass}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={open ? "close" : "chat"}
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          </motion.span>
        </AnimatePresence>
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-label="Chat with an assistant about Parsa's resume"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
            className="fixed bottom-24 right-6 z-50 flex h-[min(560px,70vh)] w-[min(380px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/10"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-foreground">Ask about Parsa</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-foreground-muted">
                  Resume &amp; project Q&amp;A
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="flex size-8 items-center justify-center rounded-full text-foreground-muted transition-colors duration-200 hover:text-accent"
              >
                <X className="size-4" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, i) => (
                <ChatBubble key={i} message={message} />
              ))}
              {loading && <TypingBubble />}
            </div>

            <form onSubmit={sendMessage} className="flex items-center gap-2 border-t border-border p-3">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                maxLength={500}
                disabled={loading}
                className="min-w-0 flex-1 rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-foreground-muted focus:border-accent focus:outline-none disabled:opacity-60"
              />
              <motion.button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
                {...btnMotion}
                className={`flex size-9 shrink-0 items-center justify-center rounded-full bg-accent ${accentTextClass} disabled:cursor-not-allowed disabled:opacity-40`}
              >
                <Send className="size-4" />
              </motion.button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function ChatBubble({ message }: { message: Message }) {
  if (message.role === "user") {
    return (
      <div
        className={`ml-auto max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-accent px-3 py-2 text-sm leading-relaxed ${accentTextClass}`}
      >
        {message.content}
      </div>
    );
  }

  if (message.role === "error") {
    return (
      <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm border border-red-500/30 bg-red-500/5 px-3 py-2 text-sm leading-relaxed text-red-600 dark:text-red-400">
        {message.content}
      </div>
    );
  }

  return (
    <div className="max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-bl-sm border border-border bg-background-alt px-3 py-2 text-sm leading-relaxed text-foreground">
      {message.content}
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex w-fit max-w-[85%] items-center gap-1 rounded-2xl rounded-bl-sm border border-border bg-background-alt px-3 py-2.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="size-1.5 rounded-full bg-foreground-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}
