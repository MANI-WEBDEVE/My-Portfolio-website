import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-slate-900 text-slate-100 overflow-x-hidden" lang="en">
      <body
      className="min-h-screen relative"
      >
        <Header/>
        {children}
        <Footer/>
        <div className=" absolute inset-0 -z-50 max-h-screen bg-[radial-gradient(circle_at_top_center,hsla(222,80%,60%,0.655)_0%,hsla(222,0%,0%,0)_50%,hsla(222,0%,0%,0)_100%)]"></div>
        <div className="absolute inset-0 opacity-20 mix-blend-soft-light w-full h-full -z-[5] bg-[url('/image/noise.jpg')]">
        
        </div> 
      </body>
    </html>
  );
}
