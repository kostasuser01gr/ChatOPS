'use client';
import { Button } from '@/components/ui/primitives';
import { useChat } from '@/lib/chat-store';
import { Home, Calendar, Truck, CheckSquare, Plus, Settings, Blocks, Sparkles, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const { addMessage } = useChat();

  const primaryNav = [
    { label: 'Operations', icon: Home, active: true },
    { label: 'Ops Game Plan', icon: CheckSquare },
    { label: 'Next Shift Schedule', icon: Calendar },
    { label: 'Fleet Readiness Tips', icon: Sparkles },
  ];

  const secondaryNav = [
    { label: 'KNA-5321', icon: Truck, alert: true },
    { label: 'KNA-1442', icon: Truck },
    { label: 'Shift Scheduling', icon: Calendar },
    { label: 'Fleet Management', icon: Truck },
    { label: 'Assistant', icon: MessageSquare },
    { label: 'Apps', icon: Blocks },
  ];

  const handleNewChat = () => {
    addMessage({
      role: 'assistant',
      text: "New operational thread created. Standing by for commands.",
    });
  };

  return (
    <aside className="w-[280px] h-full hidden md:flex flex-col border-r border-white/[0.04] bg-[#090A0F]/80 backdrop-blur-3xl z-30 flex-shrink-0">
      <div className="p-5 flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-[0_0_15px_rgba(99,102,241,0.3)] flex items-center justify-center border border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-white/20 mix-blend-overlay" />
            <div className="w-3 h-3 bg-white rounded-[3px] rotate-45" />
          </div>
          <h1 className="text-[13px] font-bold tracking-[0.15em] uppercase text-white">Kinsan Ops</h1>
        </div>

        <Button onClick={handleNewChat} variant="primary" className="w-full py-2.5 rounded-xl text-[12px]">
          <Plus className="w-4 h-4 mr-1 opacity-80" /> 
          New Chat
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto hide-scrollbar px-3 space-y-6 pb-6">
        
        {/* Main Nav */}
        <nav className="space-y-1">
          {primaryNav.map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-medium transition-all group",
                item.active 
                  ? 'bg-indigo-500/10 text-indigo-300 border border-indigo-500/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] relative' 
                  : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
              )}
            >
              <item.icon className={cn("w-4 h-4", item.active ? "text-indigo-400" : "text-slate-500 group-hover:text-slate-300")} />
              {item.label}
              {item.active && <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-4 bg-indigo-500 rounded-r-full" />}
            </a>
          ))}
        </nav>

        {/* Secondary Context */}
        <nav className="space-y-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-slate-500/70 mb-3 px-3">Context</p>
          {secondaryNav.map((item, i) => (
            <a 
              key={i} 
              href="#" 
              className="flex items-center justify-between px-3 py-2.5 rounded-xl text-[13px] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-all group"
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-4 h-4 text-slate-500 group-hover:text-slate-300" />
                {item.label}
              </div>
              {item.alert && <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)]" />}
            </a>
          ))}
        </nav>

      </div>

      <div className="p-4 mt-auto border-t border-white/[0.04] bg-white/[0.01]">
        <a href="#" className="flex items-center justify-between px-3 py-2 rounded-xl text-[13px] font-medium text-slate-400 hover:text-slate-200 hover:bg-white/[0.03] transition-all mb-2">
          <div className="flex items-center gap-3">
            <Settings className="w-4 h-4" />
            Settings
          </div>
        </a>
        
        <div className="p-3 rounded-xl hover:bg-white/[0.03] cursor-pointer transition-colors flex items-center gap-3">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-slate-800 border border-white/[0.08] overflow-hidden shadow-inner">
               <div className="w-full h-full bg-gradient-to-tr from-indigo-500/40 to-purple-500/40" />
            </div>
            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#090A0F]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-semibold text-slate-200 truncate">Commander Alpha</p>
            <div className="flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
               <p className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Ops Lead</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
