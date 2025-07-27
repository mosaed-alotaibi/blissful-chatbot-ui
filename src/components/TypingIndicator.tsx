export const TypingIndicator = () => {
  return (
    <div className="flex justify-start w-full animate-message-in">
      <div className="bg-chat-bot-bg text-chat-bot-fg max-w-[85%] md:max-w-[70%] rounded-2xl px-4 py-3 shadow-message mr-4 border border-border">
        <div className="flex items-center space-x-1">
          <span className="text-sm text-muted-foreground">AI is typing</span>
          <div className="flex space-x-1 ml-2">
            <div 
              className="w-2 h-2 bg-primary rounded-full animate-typing-dots"
              style={{ animationDelay: '0ms' }}
            />
            <div 
              className="w-2 h-2 bg-primary rounded-full animate-typing-dots"
              style={{ animationDelay: '200ms' }}
            />
            <div 
              className="w-2 h-2 bg-primary rounded-full animate-typing-dots"
              style={{ animationDelay: '400ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};