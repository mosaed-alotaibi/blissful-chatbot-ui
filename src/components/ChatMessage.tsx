import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-message transition-all duration-300 hover:shadow-lg",
          isUser
            ? "bg-gradient-primary text-chat-user-fg ml-4"
            : "bg-chat-bot-bg text-chat-bot-fg mr-4 border border-border"
        )}
      >
        <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">
          {message}
        </p>
        <span className="text-xs opacity-70 mt-1 block">
          {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
    </div>
  );
};