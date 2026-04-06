import type { ReactNode } from 'react';

export default function SplitSection({
  left,
  right,
  className = '',
}: {
  left: ReactNode;
  right: ReactNode;
  className?: string;
}) {
  return (
    <div className={`grid items-stretch gap-10 lg:grid-cols-2 lg:gap-12 ${className}`}>
      <div className="min-h-0">{left}</div>
      <div className="min-h-0">{right}</div>
    </div>
  );
}

