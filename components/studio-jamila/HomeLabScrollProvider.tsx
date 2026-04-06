'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';

/** Pixels of scroll for progress 0 → 1 (matches logo morph) */
export const HOME_LAB_SCROLL_RANGE = 420;

type Layout = { vh: number; headerCenterY: number };

export type HomeLabScrollContextValue = {
  progress: number;
  layout: Layout;
};

const HomeLabScrollContext = createContext<HomeLabScrollContextValue | null>(null);

export function useHomeLabScroll() {
  const ctx = useContext(HomeLabScrollContext);
  if (!ctx) {
    throw new Error('useHomeLabScroll must be used within HomeLabScrollProvider');
  }
  return ctx;
}

export default function HomeLabScrollProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState(0);
  const [layout, setLayout] = useState<Layout>({ vh: 800, headerCenterY: 29 });
  const frame = useRef<number | null>(null);

  const measure = useCallback(() => {
    const header = document.getElementById('home-lab-header');
    const h = header?.getBoundingClientRect().height ?? 58;
    setLayout({ vh: window.innerHeight, headerCenterY: h / 2 });
  }, []);

  const tick = useCallback(() => {
    const y = window.scrollY || 0;
    setProgress(Math.min(1, Math.max(0, y / HOME_LAB_SCROLL_RANGE)));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure, { passive: true });

    const run = () => {
      tick();
      frame.current = null;
    };

    const onScroll = () => {
      if (frame.current == null) frame.current = requestAnimationFrame(run);
    };

    run();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('scroll', onScroll);
      if (frame.current != null) cancelAnimationFrame(frame.current);
    };
  }, [measure, tick]);

  const value = useMemo(() => ({ progress, layout }), [progress, layout]);

  return (
    <HomeLabScrollContext.Provider value={value}>{children}</HomeLabScrollContext.Provider>
  );
}
