'use client';
import { Card, Button, Badge, Input } from '@/components/ui/primitives';
import { useChat } from '@/lib/chat-store';
import { motion } from 'framer-motion';
import { Droplet, Activity, MessageSquare, ArrowUpRight, Calendar, CheckCircle2 } from 'lucide-react';

export function WashTaskWidget() {
  const { addMessage } = useChat();
  
  const handleQueue = () => {
    addMessage({
      role: 'user',
      text: "Queue a Full Detail wash for fleet unit."
    });
  };

  return (
    <Card className="p-0 border-white/[0.04] shadow-lg">
      <div className="p-4 bg-white/[0.02] border-b border-white/[0.04] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Droplet className="w-4 h-4 text-cyan-400" />
          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-200">Wash Task</h4>
        </div>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors" />
      </div>
      <div className="p-4 space-y-4">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5 block">Target Unit</label>
          <Input placeholder="e.g. KNA-110" className="w-full h-9 text-xs bg-black/50" />
        </div>
        <div className="flex gap-2">
          {['Basic', 'Full', 'VIP'].map((t, i) => (
            <button key={t} className={`flex-1 py-1.5 rounded-lg border text-[10px] font-bold uppercase tracking-wider transition-all ${i === 1 ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-300' : 'bg-white/[0.03] border-white/[0.05] text-slate-400 hover:bg-white/[0.08]'}`}>
              {t}
            </button>
          ))}
        </div>
        <Button onClick={handleQueue} variant="primary" className="w-full py-2 shadow-none">Execute Task</Button>
      </div>
    </Card>
  );
}

export function TurnaroundWidget() {
  return (
    <Card className="p-0 border-white/[0.04] shadow-lg">
      <div className="p-4 bg-white/[0.02] border-b border-white/[0.04]">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-emerald-400" />
          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-200">Fleet Turnaround</h4>
        </div>
      </div>
      <div className="p-4 space-y-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
            <span className="text-xs font-semibold text-slate-300">Ready</span>
          </div>
          <span className="text-sm font-bold text-white">42</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
            <span className="text-xs font-semibold text-slate-300">Cleaning</span>
          </div>
          <span className="text-sm font-bold text-white">12</span>
        </div>
        
        <div className="pt-2">
          <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2">
            <span>SLA Target</span>
            <span className="text-emerald-400">On Track</span>
          </div>
          <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/[0.05]">
            <motion.div 
              initial={{ width: 0 }} 
              animate={{ width: '78%' }} 
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" 
            />
          </div>
        </div>
      </div>
    </Card>
  );
}

export function ShiftSchedulerWidget() {
  return (
    <Card className="p-0 border-white/[0.04] shadow-lg">
      <div className="p-4 bg-white/[0.02] border-b border-white/[0.04]">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-indigo-400" />
          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-200">Shift Scheduler</h4>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="bg-black/40 rounded-xl p-3 border border-white/[0.04] flex items-center justify-between">
          <div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Active Draft</p>
            <p className="text-xs font-bold text-slate-200 mt-0.5">Tomorrow, 08:00</p>
          </div>
          <Badge variant="warning">Review</Badge>
        </div>
        <Button variant="default" className="w-full text-xs">Open Scheduler</Button>
      </div>
    </Card>
  );
}

export function RequestsWidget() {
  return (
    <Card className="p-0 border-white/[0.04] shadow-lg">
      <div className="p-4 bg-white/[0.02] border-b border-white/[0.04] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4 text-rose-400" />
          <h4 className="text-[11px] font-bold uppercase tracking-[0.1em] text-slate-200">Requests</h4>
        </div>
        <div className="w-5 h-5 rounded bg-rose-500/20 text-rose-400 flex items-center justify-center text-[10px] font-bold border border-rose-500/30">
          3
        </div>
      </div>
      <div className="p-2 space-y-1">
        {[
          { type: 'Leave', name: 'Mike R.', status: 'Pending' },
          { type: 'Swap', name: 'Sarah J.', status: 'Review' },
          { type: 'Avail', name: 'Elena', status: 'Draft' }
        ].map((req, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.04] transition-colors cursor-pointer">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/[0.08] flex items-center justify-center text-[10px] font-bold text-slate-400">
                 {req.name.charAt(0)}
               </div>
               <div>
                  <p className="text-xs font-bold text-slate-200">{req.type}</p>
                  <p className="text-[10px] text-slate-500">{req.name}</p>
               </div>
             </div>
             <Badge variant={req.status === 'Pending' ? 'default' : req.status === 'Review' ? 'warning' : 'default'} className="scale-90">
               {req.status}
             </Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}
