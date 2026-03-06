'use client';
import Sidebar from '@/components/layout/Sidebar';
import TopBar from '@/components/layout/TopBar';
import RightSidebar from '@/components/layout/RightSidebar';
import MobileNav from '@/components/layout/MobileNav';
import ChatArea from '@/components/chat/ChatArea';
import { motion } from 'framer-motion';

export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-[#030306] relative overflow-hidden text-slate-300">
      
      {/* High-Fidelity Ambient Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/5 blur-[120px] rounded-full mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-purple-600/5 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-500/5 blur-[100px] rounded-full mix-blend-screen" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <Sidebar />
      
      <main className="flex-1 flex flex-col min-w-0 z-10 relative bg-white/[0.01]">
        <TopBar />
        <div className="flex-1 flex overflow-hidden">
          <ChatArea />
          <RightSidebar />
        </div>
      </main>

      <MobileNav />

      {/* Cinematic Frame Overlay */}
      <div className="absolute inset-0 pointer-events-none border-[12px] border-black z-50 rounded-[40px] opacity-100 hidden xl:block mix-blend-multiply" />
      <div className="absolute inset-0 pointer-events-none border border-white/[0.03] z-50 rounded-[32px] hidden xl:block" />
      
    </div>
  );
}
