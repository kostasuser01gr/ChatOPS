'use client';
import { Card, Button, Badge } from '@/components/ui/primitives';
import { mockShifts } from '@/lib/mock-data';
import { useChat } from '@/lib/chat-store';
import { Calendar, CheckCircle2, MoreHorizontal, Users, Clock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShiftCard() {
  const { addMessage } = useChat();

  const handlePublish = () => {
    addMessage({
      role: 'assistant',
      text: "Operational Shift Schedule has been officially published. 18 crew members notified.",
    });
  };

  return (
    <Card className="max-w-[600px] w-full flex flex-col gap-5 border-white/[0.06] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)] p-6 bg-[#10121A]/90">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 border border-indigo-400/30">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-base text-white tracking-tight leading-tight">Shift Scheduling</h3>
            <p className="text-[11px] text-indigo-300 font-semibold uppercase tracking-widest mt-0.5">March 06 — Friday</p>
          </div>
        </div>
        <Badge variant="warning" className="px-2.5 py-1">Draft Review</Badge>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Total Crew', val: '18', icon: Users, alert: false },
          { label: 'Hours', val: '144h', icon: Clock, alert: false },
          { label: 'Coverage', val: '94%', icon: AlertTriangle, alert: true },
        ].map((stat, i) => (
          <div key={i} className="bg-black/30 border border-white/[0.04] p-3 rounded-xl flex flex-col justify-between shadow-inner">
            <div className="flex items-center justify-between mb-2">
              <stat.icon className={`w-3.5 h-3.5 ${stat.alert ? 'text-amber-400' : 'text-slate-500'}`} />
            </div>
            <div>
              <p className="text-xl font-bold text-white leading-none mb-1">{stat.val}</p>
              <p className="text-[9px] uppercase font-bold tracking-wider text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#0A0B10]/80 rounded-xl border border-white/[0.04] overflow-hidden shadow-inner">
        <table className="w-full text-[12px] text-left">
          <thead className="bg-white/[0.02] text-slate-400 text-[10px] font-bold uppercase tracking-[0.1em] border-b border-white/[0.04]">
            <tr>
              <th className="px-4 py-3 font-semibold">Crew Member</th>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold">Block</th>
              <th className="px-4 py-3 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/[0.02]">
            {mockShifts.map((shift, i) => (
              <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                <td className="px-4 py-3 font-bold text-slate-200">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-white/[0.08] flex items-center justify-center text-[9px] text-slate-400">
                      {shift.name.charAt(0)}
                    </div>
                    {shift.name}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400 font-medium">{shift.role}</td>
                <td className="px-4 py-3 text-slate-400 tabular-nums font-medium">{shift.time}</td>
                <td className="px-4 py-3 text-right">
                  <Badge variant={shift.status === 'Confirmed' ? 'success' : 'default'} className="lowercase text-[9px] px-1.5 py-0 ml-auto">
                    {shift.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-1">
        <Button variant="ghost" className="text-slate-500 hover:text-white px-2">
          <MoreHorizontal className="w-5 h-5" />
        </Button>
        <div className="flex gap-2">
          <Button variant="default" className="text-xs px-4">Edit Layout</Button>
          <Button onClick={handlePublish} variant="primary" className="text-xs px-5 shadow-[0_4px_15px_rgba(99,102,241,0.4)]">Publish Schedule</Button>
        </div>
      </div>
    </Card>
  );
}
