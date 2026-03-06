'use client';
import { useState, useRef, useEffect } from 'react';
import { useChat } from '@/lib/chat-store';
import { Avatar, Input, Button, Badge } from '@/components/ui/primitives';
import ShiftCard from '@/components/widgets/ShiftCard';
import FleetCard from '@/components/widgets/FleetCard';
import { Send, Mic, Paperclip, Sparkles, Zap, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function ChatArea() {
  const { messages, addMessage, isTyping } = useChat();
  const [inputValue, setInputValue] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!inputValue.trim()) return;
    addMessage({ role: 'user', text: inputValue });
    setInputValue('');
  };

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-[#0A0B10]">
      
      {/* Background Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[20%] w-[50%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[10%] w-[40%] h-[40%] bg-purple-600/5 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-6 md:px-12 py-8 space-y-12 pb-[160px] z-10 relative">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex gap-4 max-w-4xl mx-auto ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-shrink-0 mt-1">
                {msg.role === 'assistant' ? (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center border border-indigo-400/30">
                     <Sparkles className="w-4 h-4 text-white" />
                  </div>
                ) : (
                  <Avatar fallback="ME" className="rounded-xl border border-white/[0.08]" />
                )}
              </div>
              
              <div className={`flex flex-col gap-2.5 ${msg.role === 'user' ? 'items-end' : 'items-start'} flex-1 min-w-0`}>
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-slate-300">
                    {msg.role === 'assistant' ? 'Kinsan AI' : 'Operator'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">{msg.timestamp}</span>
                </div>
                
                {msg.text && (
                  <div className={cn(
                    "px-5 py-4 rounded-2xl text-[14px] leading-relaxed max-w-[85%] shadow-sm",
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-sm shadow-[0_4px_20px_rgba(99,102,241,0.25)] border border-indigo-500' 
                      : 'bg-white/[0.03] border border-white/[0.06] text-slate-200 rounded-tl-sm backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                  )}>
                    {msg.text}
                  </div>
                )}

                {msg.component === 'ShiftCard' && <div className="mt-2"><ShiftCard /></div>}
                {msg.component === 'FleetCard' && <div className="mt-2"><FleetCard /></div>}
              </div>
            </motion.div>
          ))}
          
          {isTyping && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-4 max-w-4xl mx-auto">
               <div className="w-9 h-9 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                 <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
               </div>
              <div className="flex gap-1.5 items-center h-9 px-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                {[0,1,2].map(i => (
                  <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }} transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2 }} className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={bottomRef} className="h-4" />
      </div>

      {/* Floating Composer */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A0B10] via-[#0A0B10]/95 to-transparent pt-16 z-20">
        <div className="max-w-3xl mx-auto">
          
          <div className="flex gap-3 mb-4 opacity-70 hover:opacity-100 transition-opacity ml-2">
            <Badge variant="default" className="cursor-pointer hover:bg-white/10 text-slate-400 border-white/5 py-1">
              <Sparkles className="w-3 h-3 mr-1 text-indigo-400" /> Suggest Schedule
            </Badge>
            <Badge variant="default" className="cursor-pointer hover:bg-white/10 text-slate-400 border-white/5 py-1">
              <Zap className="w-3 h-3 mr-1 text-amber-400" /> Audit Readiness
            </Badge>
          </div>

          <div className="glass-panel p-2 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(99,102,241,0.1)] border-white/[0.08]">
            <div className="flex items-center gap-1.5 px-1">
               <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05]">
                  <Paperclip className="w-4.5 h-4.5" />
               </Button>
               <div className="flex-1">
                  <Input 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Message Kinsan or type a command..."
                    className="w-full bg-transparent border-none focus:ring-0 py-3 px-2 text-[14px] shadow-none placeholder-slate-500 focus:bg-transparent"
                  />
               </div>
               <Button variant="ghost" className="h-10 w-10 p-0 rounded-xl text-slate-400 hover:text-white">
                  <Mic className="w-4.5 h-4.5" />
               </Button>
               <Button onClick={handleSend} variant="primary" className="h-10 w-10 p-0 rounded-xl shadow-[0_0_15px_rgba(99,102,241,0.5)] border-none">
                 <Send className="w-4 h-4 ml-0.5" />
               </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
