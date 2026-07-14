import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "../../lib/theme";
import { useAuthStore } from "../../stores/authStore";
import { assistantApi } from "../../lib/api";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
}

// ── Context bar — shows the user's live context at the top of the panel ────────
function ContextBar() {
  // In a full implementation these would come from the stores.
  // Using the auth store for user, and relying on the backend context engine
  // for the actual AI context — the bar is a lightweight display.
  const user = useAuthStore((s) => s.user);

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        padding: "10px 16px",
        borderBottom: "1px solid rgba(107,57,145,0.08)",
        overflowX: "auto",
        flexShrink: 0,
      }}
      className="no-scrollbar"
    >
      <p
        style={{
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: "0.10em",
          textTransform: "uppercase",
          color: "#9b8ea5",
          whiteSpace: "nowrap",
          alignSelf: "center",
          marginRight: 4,
        }}
      >
        Nudge can see
      </p>

      {[
        {
          label: user?.temperament || "Profile",
          color: "#6b3991",
          bg: "rgba(107,57,145,0.08)",
        },
        {
          label: `${user?.personalityVibe || "Soft"} mode`,
          color: "#1d6a82",
          bg: "rgba(29,106,130,0.08)",
        },
      ].map((item) => (
        <span
          key={item.label}
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: item.color,
            background: item.bg,
            padding: "3px 10px",
            borderRadius: 9999,
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          {item.label}
        </span>
      ))}
    </div>
  );
}

// ── Single message bubble ──────────────────────────────────────────────────────
function Bubble({
  msg,
  userInitial,
  theme,
}: {
  msg: Message;
  userInitial: string;
  theme: any;
}) {
  const isUser = msg.role === "user";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isUser ? "row-reverse" : "row",
        alignItems: "flex-end",
        gap: 8,
        marginBottom: 14,
        animation: "nudge-pop 0.25s cubic-bezier(0.34,1.56,0.64,1)",
      }}
    >
      {/* Avatar */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          flexShrink: 0,
          background: isUser
            ? "linear-gradient(135deg, #6b3991, #43e8d8)"
            : "rgba(107,57,145,0.10)",
          border: isUser ? "none" : "1px solid rgba(107,57,145,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
          color: isUser ? "#fff" : "#6b3991",
        }}
      >
        {isUser ? userInitial : "N"}
      </div>

      {/* Bubble */}
      <div
        style={{
          maxWidth: "75%",
          background: isUser
            ? "linear-gradient(135deg, #6b3991, #5a2d7d)"
            : theme.cardBg || "#fff",
          border: isUser ? "none" : "1px solid rgba(107,57,145,0.09)",
          borderRadius: isUser ? "18px 4px 18px 18px" : "4px 18px 18px 18px",
          padding: "11px 14px",
          boxShadow: isUser
            ? "0 4px 14px rgba(107,57,145,0.25)"
            : "0 1px 6px rgba(107,57,145,0.07)",
        }}
      >
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            margin: 0,
            color: isUser ? "#ffffff" : "#2f2940",
            whiteSpace: "pre-wrap",
          }}
        >
          {msg.content}
        </p>
      </div>
    </div>
  );
}

// ── Typing indicator ───────────────────────────────────────────────────────────
function TypingIndicator({ theme }: { theme: any }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-end",
        gap: 8,
        marginBottom: 14,
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(107,57,145,0.10)",
          border: "1px solid rgba(107,57,145,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 11,
          fontWeight: 700,
          color: "#6b3991",
        }}
      >
        N
      </div>
      <div
        style={{
          background: theme.cardBg || "#fff",
          border: "1px solid rgba(107,57,145,0.09)",
          borderRadius: "4px 18px 18px 18px",
          padding: "12px 16px",
          display: "flex",
          gap: 5,
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#6b3991",
              opacity: 0.5,
              animation: `nudge-dot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Quick reply chips ──────────────────────────────────────────────────────────
const QUICK_REPLIES = [
  "What should I focus on right now?",
  "Break down my top task",
  "I'm feeling stuck",
  "How's my week looking?",
];

// ── Main panel component ───────────────────────────────────────────────────────
interface NudgePanelProps {
  isOpen: boolean;
  onClose: () => void;
  unreadCount: number;
}

export function NudgePanel({ isOpen, onClose, unreadCount }: NudgePanelProps) {
  const { theme } = useTheme();
  const user = useAuthStore((s) => s.user);

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [historyLoaded, setHistoryLoaded] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const userInitial = user?.displayName?.[0]?.toUpperCase() || "U";

  // Load history when panel first opens
  useEffect(() => {
    if (isOpen && !historyLoaded) {
      loadHistory();
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  async function loadHistory() {
    try {
      const data = await assistantApi.getHistory();

      const normalized: Message[] = data.map(
        (msg: Omit<Message, "role"> & { role: string }) => ({
          ...msg,
          role: msg.role === "assistant" ? "assistant" : "user",
        }),
      );

      setMessages(normalized);
      setHistoryLoaded(true);
    } catch {
      setHistoryLoaded(true);
    }
  }

  const sendMessage = useCallback(
    async (text?: string) => {
      const content = (text || input).trim();
      if (!content || loading) return;

      setInput("");
      setError(null);

      // Optimistic user message
      const tempId = `temp-${Date.now()}`;
      const userMsg: Message = {
        id: tempId,
        role: "user",
        content,
        createdAt: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, userMsg]);
      setLoading(true);

      try {
        const { reply, messageId } = await assistantApi.chat(content);

        // Replace temp user message with real ID isn't needed — just add assistant reply
        const assistantMsg: Message = {
          id: messageId || `reply-${Date.now()}`,
          role: "assistant",
          content: reply,
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      } catch (err: any) {
        const status = err.response?.status;
        if (status === 402 || err.response?.data?.message?.includes("credit")) {
          setError(
            "Nudge is temporarily unavailable. Please try again shortly.",
          );
        } else {
          setError("Something went wrong. Try again.");
        }
      } finally {
        setLoading(false);
      }
    },
    [input, loading],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  const isEmpty = messages.length === 0 && !loading;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(26,15,46,0.35)",
          backdropFilter: "blur(3px)",
          zIndex: 400,
          animation: "nudge-fade 0.2s ease",
        }}
      />

      {/* Panel */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 560,
          height: "82vh",
          maxHeight: 680,
          background: "#f9f9f7",
          borderRadius: "22px 22px 0 0",
          zIndex: 401,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 -8px 40px rgba(26,15,46,0.18)",
          animation: "nudge-slide 0.32s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Drag handle */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 0 6px",
          }}
        >
          <div
            style={{
              width: 36,
              height: 4,
              borderRadius: 9999,
              background: "rgba(107,57,145,0.15)",
            }}
          />
        </div>

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "6px 16px 12px",
            borderBottom: "1px solid rgba(107,57,145,0.08)",
            flexShrink: 0,
          }}
        >
          {/* Nudge avatar */}
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #6b3991, #43e8d8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 15,
              fontWeight: 800,
              color: "#fff",
              marginRight: 10,
              flexShrink: 0,
              boxShadow: "0 3px 10px rgba(107,57,145,0.25)",
            }}
          >
            N
          </div>

          <div style={{ flex: 1 }}>
            <p
              style={{
                fontSize: 15,
                fontWeight: 700,
                color: "#2f2940",
                margin: 0,
                fontFamily: '"DM Serif Display", serif',
              }}
            >
              Nudge
            </p>
            <p
              style={{
                fontSize: 11.5,
                color: "#43e8d8",
                margin: 0,
                fontWeight: 600,
              }}
            >
              ● Active · knows your profile
            </p>
            {unreadCount > 0 && (
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#43e8d8",
                  background: "rgba(67,232,216,0.12)",
                  padding: "2px 8px",
                  borderRadius: 9999,
                }}
              >
                {unreadCount} new
              </span>
            )}
          </div>

          {/* Close */}
          <button
            onClick={onClose}
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              border: "none",
              background: "rgba(107,57,145,0.07)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#9b8ea5",
              fontSize: 16,
            }}
          >
            ×
          </button>
        </div>

        {/* Context bar */}
        <ContextBar />
        {error && (
          <div
            style={{
              margin: "0 16px 10px",
              padding: "12px 14px",
              borderRadius: 14,
              background: "#ffece7",
              color: "#71231d",
              fontSize: 13,
              lineHeight: 1.5,
              border: "1px solid rgba(216, 67, 57, 0.18)",
            }}
          >
            {error}
          </div>
        )}

        {/* Message area */}
        <div
          style={{ flex: 1, overflowY: "auto", padding: "16px 16px 8px" }}
          className="no-scrollbar"
        >
          {isEmpty && (
            <div style={{ textAlign: "center", padding: "32px 20px 20px" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>✦</div>
              <p
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  color: "#2f2940",
                  marginBottom: 6,
                  fontFamily: '"DM Serif Display", serif',
                }}
              >
                Ask Nudge anything
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "#9b8ea5",
                  lineHeight: 1.6,
                  maxWidth: 280,
                  margin: "0 auto",
                }}
              >
                Tasks, habits, how you're feeling — Nudge knows your context and
                responds accordingly.
              </p>
            </div>
          )}

          {messages.map((msg) => (
            <Bubble
              key={msg.id}
              msg={msg}
              userInitial={userInitial}
              theme={theme}
            />
          ))}

          {loading && <TypingIndicator theme={theme} />}
          <div ref={bottomRef} />
        </div>

        {/* Quick replies — only when empty or last message was from assistant */}
        {!loading &&
          (isEmpty || messages[messages.length - 1]?.role === "assistant") && (
            <div
              style={{
                display: "flex",
                gap: 7,
                padding: "0 16px 10px",
                overflowX: "auto",
                flexShrink: 0,
              }}
              className="no-scrollbar"
            >
              {QUICK_REPLIES.map((qr) => (
                <button
                  key={qr}
                  onClick={() => sendMessage(qr)}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#6b3991",
                    background: "rgba(107,57,145,0.07)",
                    border: "1px solid rgba(107,57,145,0.12)",
                    padding: "6px 13px",
                    borderRadius: 9999,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    fontFamily: "inherit",
                    flexShrink: 0,
                    transition: "all 0.15s ease",
                  }}
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

        {/* Input */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: 8,
            padding: "10px 12px 16px",
            borderTop: "1px solid rgba(107,57,145,0.08)",
            flexShrink: 0,
            background: "#f9f9f7",
          }}
        >
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask Nudge anything about your day, tasks, or habits..."
            rows={1}
            style={{
              flex: 1,
              background: "rgba(107,57,145,0.05)",
              border: "1.5px solid rgba(107,57,145,0.12)",
              borderRadius: 14,
              padding: "11px 14px",
              fontSize: 14,
              fontFamily: "inherit",
              color: "#2f2940",
              outline: "none",
              resize: "none",
              lineHeight: 1.5,
              maxHeight: 100,
              overflowY: "auto",
              transition: "border-color 0.18s ease",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#43e8d8")}
            onBlur={(e) =>
              (e.target.style.borderColor = "rgba(107,57,145,0.12)")
            }
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || loading}
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              border: "none",
              background:
                input.trim() && !loading
                  ? "linear-gradient(135deg, #6b3991, #43e8d8)"
                  : "rgba(107,57,145,0.10)",
              cursor: input.trim() && !loading ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 17,
              color: input.trim() && !loading ? "#fff" : "#9b8ea5",
              transition: "all 0.18s ease",
              flexShrink: 0,
            }}
          >
            ↑
          </button>
        </div>
      </div>

      <style>{`
        @keyframes nudge-fade { from { opacity: 0; } to { opacity: 1; } }
        @keyframes nudge-slide {
          from { transform: translateX(-50%) translateY(100%); }
          to   { transform: translateX(-50%) translateY(0); }
        }
        @keyframes nudge-pop {
          from { opacity: 0; transform: scale(0.95) translateY(6px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes nudge-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
          30%            { transform: translateY(-4px); opacity: 1; }
        }
      `}</style>
    </>
  );
}

// ── Floating button — mounts globally inside AppShell ─────────────────────────
export function NudgeFloatingButton({
  onClick,
  unreadCount,
}: {
  onClick: () => void;
  unreadCount: number;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        position: "fixed",
        bottom: 88, // above bottom nav on mobile
        right: 20,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "linear-gradient(135deg, #6b3991, #43e8d8)",
        border: "none",
        borderRadius: 9999,
        padding: "10px 18px 10px 14px",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(107,57,145,0.35)",
        transition: "all 0.2s cubic-bezier(0.34,1.56,0.64,1)",
        fontFamily: "inherit",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform =
          "translateY(-2px) scale(1.04)";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 6px 28px rgba(107,57,145,0.4)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "none";
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 4px 20px rgba(107,57,145,0.35)";
      }}
    >
      {/* Nudge N mark */}
      <span
        style={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: "rgba(255,255,255,0.25)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 800,
          color: "#fff",
          fontFamily: '"DM Serif Display", serif',
          flexShrink: 0,
        }}
      >
        N
      </span>

      <span
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "#fff",
          whiteSpace: "nowrap",
        }}
      >
        Ask Nudge
      </span>

      {/* Unread badge */}
      {unreadCount > 0 && (
        <span
          style={{
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: "#43e8d8",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 10,
            fontWeight: 800,
            color: "#0d3d38",
            flexShrink: 0,
          }}
        >
          {unreadCount > 9 ? "9+" : unreadCount}
        </span>
      )}
    </button>
  );
}
