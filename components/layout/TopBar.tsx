'use client';
import { Input, Avatar, Badge } from '@/components/ui/primitives';
import { Search, Bell, Command, LayoutGrid, Zap } from 'lucide-react';

export default function TopBar() {
  return (
    <header className="h-[72px] border-b border-white/[0.04] bg-transparent flex items-center justify-between px-6 z-20 sticky top-0 backdrop-blur-[40px]">
      
      {/* Central Floating Command Palette Style */}
      <div className="flex-1 max-w-xl relative group ml-2">
        <div className="absolute inset-0 bg-indigo-500/5 blur-xl rounded-full opacity-0 group-focus-within:opacity-100 transition-opacity pointer-events-none" />
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors z-10" />
          <Input 
            placeholder="Search fleets, query schedules, or enter command..." 
            className="w-full pl-11 pr-14 py-2.5 bg-[#12131A]/80 border-white/[0.06] focus:bg-[#161821] focus:border-indigo-500/40 rounded-full text-[13px] shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:border-white/[0.1] transition-all"
          />
          <div className="absolute right-2 flex items-center gap-1">
            <div className="px-2 py-1 rounded bg-white/[0.05] border border-white/[0.05] flex items-center gap-1 text-[10px] text-slate-400 font-medium">
              <Command className="w-3 h-3" /> K
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5 ml-auto">
        
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/[0.05] cursor-pointer hover:bg-white/[0.05] transition-colors">
          <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
          <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wide">Live Sync</span>
        </div>

        <div className="flex items-center gap-2">
           <button className="h-9 w-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all">
            <LayoutGrid className="w-4 h-4" />
          </button>
          
          <button className="relative h-9 w-9 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)] border-2 border-[#0D0E15]" />
          </button>
        </div>

        <div className="h-6 w-px bg-white/[0.08]" />
        
        <Avatar fallback="OP" className="cursor-pointer hover:border-indigo-500/50 transition-colors" />
      </div>
    </header>
  );
}
