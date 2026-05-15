'use client';

/**
 * Chatbot Widget Placeholder
 * 
 * This component provides a floating chat button in the bottom-right corner.
 * The actual chatbot embed code can be uncommented and configured below.
 * 
 * To activate: Uncomment the chatbot embed code and replace YOUR_CHATBOT_ID
 * with your actual chatbot ID from your chatbot provider.
 */
export default function ChatbotWidget() {
  // Example chatbot embed code (commented out):
  // import { useEffect } from 'react';
  // 
  // useEffect(() => {
  //   const script = document.createElement('script');
  //   script.src = 'https://cdn.chatbot.com/widget.js';
  //   script.async = true;
  //   script.id = 'chatbot-script';
  //   document.body.appendChild(script);
  //   
  //   return () => {
  //     const existingScript = document.getElementById('chatbot-script');
  //     if (existingScript) {
  //       existingScript.remove();
  //     }
  //   };
  // }, []);
  // 
  // Add to your chatbot provider's embed code:
  // <chatbot id="YOUR_CHATBOT_ID" />

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      <button
        className="w-14 h-14 bg-[#00ffaa] rounded-full shadow-lg flex items-center justify-center hover:bg-[#00dda0] transition-transform hover:scale-110"
        aria-label="Open chat"
        onClick={() => {
          // Placeholder click handler - replace with actual chatbot trigger
          console.log('Chat widget clicked - integrate your chatbot here');
          alert('Chat feature coming soon! Replace ChatbotWidget.tsx with your chatbot provider code.');
        }}
      >
        <svg
          className="w-7 h-7 text-[#0a0a1a]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Optional: Chat notification dot */}
      <span className="absolute top-0 right-0 w-3 h-3 bg-[#d4af37] rounded-full animate-pulse" />
    </div>
  );
}