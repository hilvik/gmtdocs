import { Info, AlertTriangle, CheckCircle } from "lucide-react";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocNoteProps {
  children: ReactNode;
  type?: "info" | "warning" | "success";
  title?: string;
  className?: string;
}

export default function DocNote({ 
  children, 
  type = "info", 
  title,
  className 
}: DocNoteProps) {
  const icons = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    warning: <AlertTriangle className="h-5 w-5 text-amber-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />
  };

  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-800",
    warning: "bg-amber-50 border-amber-200 text-amber-800",
    success: "bg-green-50 border-green-200 text-green-800"
  };

  return (
    <div className={cn(
      "rounded-md border p-4",
      styles[type],
      className
    )}>
      <div className="flex">
        <div className="flex-shrink-0">
          {icons[type]}
        </div>
        <div className="ml-3">
          {title && (
            <h3 className="text-sm font-medium">{title}</h3>
          )}
          <div className={cn(
            "text-sm",
            title && "mt-2"
          )}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}