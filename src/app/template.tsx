"use client";

import { animationNavbar } from "@/utils/animationNavbar";
import { useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }){
    useEffect(() => {
        animationNavbar()
    }, [])

  return (
    <div>
      <div className="banner1 min-h-screen bg-slate-950 z-[1000] fixed top-0 left-0 w-1/4"></div>
      <div className="banner2 min-h-screen bg-slate-950 z-[1000] fixed top-0 left-1/4 w-1/4"></div>
      <div className="banner3 min-h-screen bg-slate-950 z-[1000] fixed top-0 left-2/4 w-1/4"></div>
      <div className="banner4 min-h-screen bg-slate-950 z-[1000] fixed top-0 w-1/4 left-3/4"></div>
      {children}
    </div>  
  );
};
