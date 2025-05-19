import { CheckCircle } from "lucide-react";
import { ReactNode } from "react";

interface FeatureItem {
  title: string;
  description?: string;
}

interface FeatureListProps {
  items: FeatureItem[];
  title?: string;
  subtitle?: ReactNode;
}

export default function FeatureList({ items, title, subtitle }: FeatureListProps) {
  return (
    <div className="space-y-4">
      {title && <h4 className="text-lg font-medium text-gray-900">{title}</h4>}
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div className="ml-3">
              <p className="text-gray-800 font-medium">{item.title}</p>
              {item.description && (
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}