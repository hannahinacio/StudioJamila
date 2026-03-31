import type { ReactNode } from 'react';

export default function PageContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto w-full max-w-[1160px] px-6 ${className}`}>{children}</div>;
}

