"use client"

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { getChatGPTResponse } from '../actions/chatActions';
import { Feature } from './actions';
import Draggable from 'react-draggable';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
}

interface ChatProps {
  feature: Feature | null;
  features: Feature[];
  setFeature: React.Dispatch<React.SetStateAction<Feature | null>>;
  setFeatures: React.Dispatch<React.SetStateAction<Feature[]>>;
}

const Chat: React.FC<ChatProps> = ({ feature, features, setFeature, setFeatures }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const nodeRef = useRef(null);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setIsLoading(true);

      try {
        const context = { feature, features };
        const aiResponse = await getChatGPTResponse(inputMessage, context);
        
        if ('error' in aiResponse) {
          throw new Error(aiResponse.error);
        }
        
        if (aiResponse.feature) {
            setFeature(aiResponse.feature);
        }

        if (Array.isArray(aiResponse.features) && aiResponse.features.length > 0) {
            setFeatures(prevFeatures =>
                prevFeatures.map(f => {
                    const updatedFeature = aiResponse.features.find(af => af.id === f.id);
                    return updatedFeature ? updatedFeature : f;
                })
            );
        }

        const aiMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: JSON.stringify(aiResponse),
          sender: 'ai',
        };
        setMessages(prevMessages => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error('Error getting AI response:', error);
        // Optionally, you can add an error message to the chat
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <Draggable handle=".chat-handle" nodeRef={nodeRef}>
      <div ref={nodeRef} className="absolute bottom-4 right-4 w-80 h-60 flex flex-col border rounded-lg shadow-lg bg-white overflow-hidden">
        <div className="chat-handle bg-primary text-white p-2 cursor-move">
          Chat
        </div>
        <div className="flex-grow overflow-auto p-2">
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
        <div className="p-2 pt-0">
          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex flex-col gap-1">
            <Textarea
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="resize-none"
              rows={2}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? 'Sending...' : 'Send'}
            </Button>
          </form>
        </div>
      </div>
    </Draggable>
  );
};

export default Chat;
