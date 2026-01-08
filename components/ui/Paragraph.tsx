import { manrope } from "@/lib/fonts";
import clsx from "clsx";

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function Paragraph({ children, className = "" }: ParagraphProps) {
  return (
    <p className={clsx("text-base text-gray-700", manrope.variable, className)}>
      {children}
    </p>
  );
}
