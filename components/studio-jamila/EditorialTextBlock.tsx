import type { ReactNode } from 'react';

export default function EditorialTextBlock({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`max-w-[72ch] text-[18px] leading-[1.7] text-sjMuted ${className}`}>{children}</div>;
}

