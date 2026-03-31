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
    <div className={`grid gap-14 xl:grid-cols-2 ${className}`}>
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}

