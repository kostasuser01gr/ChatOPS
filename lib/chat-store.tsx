'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { mockMessages, ChatMessage } from './mock-data';

interface ChatContextType {
  messages: ChatMessage[];
  addMessage: (msg: Partial<ChatMessage>) => void;
  isTyping: boolean;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [isTyping, setIsTyping] = useState(false);

  const addMessage = (msg: Partial<ChatMessage>) => {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      role: msg.role || 'assistant',
      text: msg.text,
      component: msg.component,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    
    setMessages(prev => [...prev, newMessage]);

    // Simulate AI response if user sent a message
    if (msg.role === 'user') {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages(prev => [...prev, {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          text: "Acknowledged. Updating operational logs.",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        }]);
      }, 1500);
    }
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, isTyping }}>
      {children}
    </ChatContext.Provider>
  );
}

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within a ChatProvider');
  return context;
};
