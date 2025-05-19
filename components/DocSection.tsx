import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocSectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DocSection({ id, title, children, className }: DocSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 border-b border-gray-200 scroll-mt-16",
        className
      )}
    >
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent inline-block">
        {title}
      </h2>
      <div className="space-y-6">
        {children}
      </div>
    </section>
  );
}