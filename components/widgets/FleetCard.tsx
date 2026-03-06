import { Card, Button, Badge } from '@/components/ui/primitives';
import { Truck, Timer, Sparkles, MapPin, ChevronRight } from 'lucide-react';

export default function FleetCard() {
  return (
    <Card className="max-w-[400px] w-full flex flex-col gap-5 border-white/[0.06] shadow-[0_16px_40px_-10px_rgba(0,0,0,0.5)] p-6 bg-[#10121A]/90">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <h3 className="text-xl font-bold text-white tracking-wide leading-none">KNA-5321</h3>
            <Badge variant="warning" className="flex items-center gap-1 normal-case tracking-normal">
              <Sparkles className="w-3 h-3" /> Cleaning
            </Badge>
          </div>
          <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Class A Transport Unit</p>
        </div>
        <div className="h-12 w-12 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/[0.08] shadow-inner">
          <Truck className="w-6 h-6 text-indigo-400" />
        </div>
      </div>

      <div className="bg-black/30 rounded-xl p-3 border border-white/[0.04] shadow-inner space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[11px] font-medium text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-indigo-400" />
            Hub Bay 4
          </div>
          <span className="text-[11px] font-bold text-slate-300">ID: #882-X</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-bold">
            <span className="text-slate-500 uppercase tracking-widest text-[9px]">Turnaround Progress</span>
            <span className="text-indigo-400">65%</span>
          </div>
          <div className="h-1.5 w-full bg-black/60 rounded-full overflow-hidden border border-white/[0.05]">
            <div className="h-full bg-gradient-to-r from-indigo-600 to-purple-500 w-[65%] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)] relative">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.4),transparent)] -translate-x-full animate-[shimmer_2s_infinite]" />
            </div>
          </div>
          <p className="text-[10px] text-slate-400 flex items-center gap-1.5 font-medium pt-1">
            <Timer className="w-3.5 h-3.5 text-slate-500" /> Estimated completion in <span className="text-slate-200 font-bold">20 mins</span>
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <Button variant="default" className="flex-1 bg-white/[0.02]">Audit Notes</Button>
        <Button variant="primary" className="flex-1 group">
          Mark Ready <ChevronRight className="w-4 h-4 ml-1 opacity-60 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </Card>
  );
}
