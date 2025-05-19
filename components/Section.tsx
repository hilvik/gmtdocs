import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">{title}</h2>
      <div className="prose max-w-none text-gray-600">
        {children}
      </div>
    </section>
  );
}