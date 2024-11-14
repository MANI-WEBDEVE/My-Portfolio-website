import clsx from "clsx";
import Link from "next/link";

type ButtonProps = {
  linkFiled: string;
  children: React.ReactNode;
  lable?: string;
  className?: string;
};

export default function ({
  linkFiled,
  children,
  lable,
  className,
}: ButtonProps) {
  return (
    <Link
      href={linkFiled}
      aria-label={lable}
      className={clsx(
        "group relative flex items-center justify-center overflow-hidden rounded-md w-fit border-2 border-slate-900 bg-slate-100 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className
      )}
    >
      {children}
      <span className="absolute inset-0 z-0 h-full bg-yellow-400 duration-300 ease-in-out transition-transform group-hover:translate-y-h-full "></span>
    </Link>
  );
}
