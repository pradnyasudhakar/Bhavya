import { newsReader } from "@/lib/fonts";
import clsx from "clsx";

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2;
}

export default function Heading({ children, level = 1 }: HeadingProps) {
  const Tag = level === 1 ? "h1" : "h2";

  return (
    <Tag
      className={clsx(
        newsReader.className,
        level === 1
          ? "text-[70px] font-medium leading-[100%] tracking-[0%] text-center"
          : "text-[24px] font-medium leading-[100%] tracking-[0%] "
      )}
    >
      {children}
    </Tag>
  );
}
