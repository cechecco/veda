"use client"

import React, { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from '@/components/ui/textarea';
import { getChatGPTResponse } from '../actions/chatActions';
import { Feature } from '../actions/actions';
import Draggable from 'react-draggable';
import { Subtitle, BodyText } from "./typography"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ChatBubbleIcon, MinusIcon } from '@radix-ui/react-icons';
import { GripVerticalIcon } from 'lucide-react';

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
    const [isOpen, setIsOpen] = useState(false);
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
                    setFeatures(prevFeatures => {
                        const updatedFeatures = prevFeatures.map(f => {
                            const updatedFeature = aiResponse.features.find(af => af.id === f.id);
                            return updatedFeature ? updatedFeature : f;
                        });

                        const newFeatures = aiResponse.features.filter(af =>
                            !prevFeatures.some(f => f.id === af.id)
                        );

                        return [...updatedFeatures, ...newFeatures];
                    });
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
            <div ref={nodeRef} className="absolute bottom-4 right-4">
                {!isOpen ? (
                    <div className="chat-handle cursor-move p-1 bg-primary rounded-full flex items-center">
                        <div className="flex items-center justify-center mr-1">
                            <GripVerticalIcon className="h-4 w-4 text-primary-foreground cursor-move" />
                        </div>
                        <Button
                            onClick={() => setIsOpen(true)}
                            className="rounded-full p-2 ml-auto"
                            variant="outline"
                        >
                            <ChatBubbleIcon className="h-6 w-6" />
                        </Button>
                    </div>
                ) : (
                    <Card className="w-80 h-60 flex flex-col overflow-hidden">
                        <CardHeader className="chat-handle bg-primary text-white p-2 cursor-move items-center">
                            <CardTitle className="flex justify-between items-center w-full">
                                <Subtitle>Chat</Subtitle>
                                <Button
                                onClick={() => setIsOpen(false)}
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-primary-dark"
                            >
                                <MinusIcon className="h-4 w-4" />
                            </Button>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow overflow-auto p-2 space-y-2">
                            {messages.map(message => (
                                <div
                                    key={message.id}
                                    className={`p-2 rounded ${message.sender === 'user' ? 'bg-primary/10 text-right' : 'bg-muted'
                                        }`}
                                >
                                    <BodyText>{message.text}</BodyText>
                                </div>
                            ))}
                        </CardContent>
                        <CardFooter className="p-2 pt-0">
                            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex flex-col gap-2 w-full">
                                <Textarea
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    className="resize-none"
                                    rows={2}
                                />
                                <Button type="submit" disabled={isLoading} className="w-full">
                                    <BodyText>{isLoading ? 'Sending...' : 'Send'}</BodyText>
                                </Button>
                            </form>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </Draggable>
    );
};

export default Chat;
