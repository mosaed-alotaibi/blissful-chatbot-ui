import { useState } from "react";
import { Send, Paperclip, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border bg-background/95 backdrop-blur-sm p-4">
      <form onSubmit={handleSubmit} className="flex items-end gap-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            disabled={disabled}
            className={cn(
              "w-full min-h-[44px] max-h-32 resize-none rounded-xl",
              "bg-chat-input-bg border border-border",
              "px-4 py-3 pr-20 text-sm",
              "placeholder:text-muted-foreground",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
              "transition-all duration-200",
              "shadow-input hover:shadow-lg",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            rows={1}
            style={{
              height: 'auto',
              minHeight: '44px'
            }}
            onInput={(e) => {
              const target = e.target as HTMLTextAreaElement;
              target.style.height = 'auto';
              target.style.height = `${Math.min(target.scrollHeight, 128)}px`;
            }}
          />
          
          {/* Action buttons inside textarea */}
          <div className="absolute right-2 bottom-2 flex items-center gap-1">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-muted"
              disabled={disabled}
            >
              <Paperclip className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0 hover:bg-muted"
              disabled={disabled}
            >
              <Mic className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button
          type="submit"
          disabled={!message.trim() || disabled}
          className={cn(
            "h-11 w-11 p-0 rounded-xl",
            "bg-gradient-primary hover:opacity-90",
            "transition-all duration-200",
            "shadow-input hover:shadow-lg",
            !message.trim() && "opacity-50 cursor-not-allowed"
          )}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>
    </div>
  );
};