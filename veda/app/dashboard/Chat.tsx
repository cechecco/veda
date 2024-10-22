import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      // Here you would typically call an API to get the AI response
      // For now, we'll just simulate an AI response
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: `AI response to: ${inputMessage}`,
          sender: 'ai',
        };
        setMessages(prevMessages => [...prevMessages, aiResponse]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex flex-col border-l-2 w-1/3">
      <div className="flex-grow overflow-auto">
        {messages.map(message => (
          <div
            key={message.id}
            className={`mb-2 p-2 rounded ${
              message.sender === 'user' ? 'bg-primary/10 text-right' : 'bg-muted'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="p-2 w-full">
        <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex w-full gap-2">
          <Textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow"
            rows={1}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
