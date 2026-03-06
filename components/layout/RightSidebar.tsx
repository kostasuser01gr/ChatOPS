import { WashTaskWidget, TurnaroundWidget, ShiftSchedulerWidget, RequestsWidget } from '@/components/widgets/RightSidebarWidgets';

export default function RightSidebar() {
  return (
    <aside className="w-[340px] h-full hidden lg:flex flex-col border-l border-white/[0.04] bg-[#0A0B10]/60 backdrop-blur-3xl overflow-y-auto hide-scrollbar z-10 flex-shrink-0 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.02] to-transparent pointer-events-none" />
      
      <div className="p-5 space-y-5 relative z-10">
        
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400">Quick Tools</h2>
        </div>

        <WashTaskWidget />
        <TurnaroundWidget />
        <ShiftSchedulerWidget />
        <RequestsWidget />
        
      </div>
    </aside>
  );
}
