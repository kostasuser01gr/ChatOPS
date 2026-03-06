import { Home, Calendar, Truck, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MobileNav() {
  const items = [
    { icon: MessageSquare, label: 'Chat', active: true },
    { icon: Calendar, label: 'Schedule' },
    { icon: Truck, label: 'Fleet' },
    { icon: Home, label: 'Ops' },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-[#0D0E15]/80 backdrop-blur-3xl border-t border-white/[0.08] flex items-center justify-around px-6 z-50 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {items.map((item, i) => (
        <button key={i} className={cn(
          "flex flex-col items-center justify-center gap-1.5 transition-all active:scale-90",
          item.active ? 'text-indigo-400' : 'text-slate-500'
        )}>
          <div className={cn(
            "p-2 rounded-xl transition-all",
            item.active ? "bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.2)]" : ""
          )}>
            <item.icon className="w-5 h-5" />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-widest">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
