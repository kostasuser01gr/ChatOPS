import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const Card = ({ className, children, hoverable = false }: { className?: string, children: React.ReactNode, hoverable?: boolean }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className={cn(
      "glass-panel rounded-2xl p-5", 
      hoverable && "hover:bg-white/[0.04] cursor-pointer transition-colors",
      className
    )}
  >
    {children}
  </motion.div>
);

export const Button = ({ className, variant = 'default', children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'default'|'primary'|'ghost'|'neon' }) => {
  const variants = {
    default: "bg-white/[0.03] hover:bg-white/[0.08] text-slate-200 border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
    primary: "bg-gradient-to-b from-indigo-500 to-indigo-600 hover:from-indigo-400 hover:to-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] border border-indigo-400/50",
    ghost: "hover:bg-white/[0.05] text-slate-400 hover:text-slate-100 border border-transparent",
    neon: "bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 neon-glow-indigo shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
  };
  return (
    <button className={cn("px-4 py-2.5 rounded-xl text-[12px] font-semibold tracking-wide transition-all active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2", variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export const Badge = ({ children, className, variant = 'default' }: { children: React.ReactNode, className?: string, variant?: 'default'|'success'|'warning'|'error'|'neon' }) => {
  const variants = {
    default: "bg-white/[0.05] text-slate-300 border-white/[0.05]",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    error: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    neon: "bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-[0_0_10px_rgba(99,102,241,0.2)]"
  };
  return (
    <span className={cn("px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-[0.1em] border flex items-center gap-1 w-fit", variants[variant], className)}>
      {children}
    </span>
  );
};

export const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    className={cn("bg-black/40 border border-white/[0.06] rounded-xl px-4 py-2.5 text-[13px] text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 focus:bg-black/60 transition-all shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)]", className)}
    {...props}
  />
);

export const Avatar = ({ src, fallback, className }: { src?: string, fallback: string, className?: string }) => (
  <div className={cn("h-9 w-9 rounded-full bg-slate-800 border border-white/[0.08] flex items-center justify-center text-[10px] font-bold text-slate-300 overflow-hidden shadow-inner", className)}>
    {src ? <img src={src} alt="Avatar" className="h-full w-full object-cover" /> : fallback}
  </div>
);
