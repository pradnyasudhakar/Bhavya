import { newsReader } from "@/lib/fonts";
import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
}

export function H1({ children }: HeadingProps) {
  return (
    <h1
      className={clsx(
        newsReader.className,
        "text-[70px] font-medium leading-[100%] tracking-[0%] text-center"
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children }: HeadingProps) {
  return (
    <h2
      className={clsx(
        newsReader.className,
        "text-[24px] font-medium leading-[100%] tracking-[0%]"
      )}
    >
      {children}
    </h2>
  );
}
