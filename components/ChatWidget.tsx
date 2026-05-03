"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import ReactMarkdown from "react-markdown";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: "assistant",
  content:
    "Hi! Welcome to **Cartilage Healthcare**. Ask me about our dialysis machines, critical care equipment, lab solutions, or any of our services.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState<boolean>(false);
  const [msgs, setMsgs] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, loading]);

  async function send(): Promise<void> {
    if (!input.trim() || loading) return;

    const userMsg: Message = { role: "user", content: input.trim() };
    setMsgs((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...msgs, userMsg] }),
      });

      if (!res.ok) throw new Error("Network error");

      const data: { reply: string } = await res.json();
      setMsgs((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMsgs((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please call us at **+91-9871592864** or email cartilagehealthcare@gmail.com.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
    if (e.key === "Enter") send();
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_50px_-30px_rgba(24,95,165,0.85)] transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        <span className="text-lg">{open ? "✕" : "💬"}</span>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(360px,calc(100vw-3rem))] overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 shadow-2xl shadow-slate-950/10 backdrop-blur-xl">
          <div className="bg-primary px-5 py-4 text-primary-foreground">
            <div className="text-sm font-semibold">Cartilage Healthcare Assistant</div>
            <div className="mt-1 text-xs text-primary-foreground/85">
              Medical Equipment Specialists
            </div>
          </div>

          <div className="h-[340px] overflow-y-auto bg-slate-50 px-4 py-4 space-y-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] rounded-[26px] px-4 py-3 text-sm leading-6 ${
                  m.role === "user"
                    ? "self-end rounded-br-[6px] bg-primary text-primary-foreground shadow-[0_18px_40px_-28px_rgba(24,95,165,0.65)]"
                    : "self-start rounded-bl-[6px] border border-slate-200 bg-white text-slate-900 shadow-sm"
                }`}
              >
                {m.role === "user" ? (
                  <span>{m.content}</span>
                ) : (
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => (
                        <p className="m-0 mb-2 last:mb-0">{children}</p>
                      ),
                      strong: ({ children }) => (
                        <strong className="font-semibold text-primary">
                          {children}
                        </strong>
                      ),
                      ol: ({ children }) => (
                        <ol className="mb-2 ml-5 list-decimal space-y-1">{children}</ol>
                      ),
                      ul: ({ children }) => (
                        <ul className="mb-2 ml-5 list-disc space-y-1">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="text-sm leading-6">{children}</li>
                      ),
                      code: ({ children }) => (
                        <code className="rounded-md bg-slate-100 px-1 py-0.5 text-[0.8rem]">
                          {children}
                        </code>
                      ),
                    }}
                  >
                    {m.content}
                  </ReactMarkdown>
                )}
              </div>
            ))}

            {loading && (
              <div className="self-start flex items-center gap-3 rounded-[26px] border border-slate-200 bg-white px-4 py-3 shadow-sm">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-2.5 w-2.5 rounded-full bg-primary/80 animate-bounce"
                    style={{ animationDelay: `${i * 120}ms` }}
                  />
                ))}
                <span className="text-xs text-slate-500">Writing a response...</span>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="flex gap-3 border-t border-slate-200/80 bg-white px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about products or services…"
              disabled={loading}
              className="flex-1 rounded-2xl border border-slate-200/80 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:cursor-not-allowed disabled:bg-slate-100/80"
            />
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={send}
              disabled={loading}
              className="h-11 px-5"
            >
              Send
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

