import type { Metadata } from "next";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <div className="">{children}</div>
  
  );
}


export const metadata: Metadata = {
  title: "M-Inam About🚀",
  description: "Explore the journey of a passionate full-stack developer. Learn about my skills in Next.js, React, and Node.js, my educational background, and my commitment to creating innovative web solutions. Discover how I blend technical expertise with creative problem-solving to deliver high-quality, user-centric web applications.",
}