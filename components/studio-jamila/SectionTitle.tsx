import type { ReactNode } from 'react';

export default function SectionTitle({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2 className={`text-center lowercase text-sjAccent text-[22px] font-normal tracking-wide ${className}`}>
      {children}
    </h2>
  );
}

