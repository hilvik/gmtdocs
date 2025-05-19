import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function DocCard({ title, children, className }: DocCardProps) {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden",
      className
    )}>
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}