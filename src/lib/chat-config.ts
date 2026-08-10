// Public endpoint for the portfolio chatbot's Cloudflare Worker. Not a
// secret — the Worker itself restricts who can call it via CORS + rate
// limiting. Replace this after running `wrangler deploy` in /worker.
export const chatWorkerUrl = "https://portfolio-chat-worker.REPLACE_WITH_YOUR_SUBDOMAIN.workers.dev";
