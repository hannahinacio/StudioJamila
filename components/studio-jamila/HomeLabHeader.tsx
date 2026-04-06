'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { studioJamilaNav } from '@/data/studioJamila';
import { useHomeLabScroll } from '@/components/studio-jamila/HomeLabScrollProvider';

export default function HomeLabHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { progress } = useHomeLabScroll();
  const navItems = useMemo(() => studioJamilaNav, []);

  const linkClass =
    'text-sm font-medium uppercase tracking-wide !text-[#6A0C16] transition-opacity duration-200 hover:opacity-80';

  const headerChromeOpacity = progress;
  const headerChromePointerEvents = progress > 0.01 ? 'auto' : 'none';

  return (
    <>
      <header id="home-lab-header" className="fixed left-0 right-0 top-0 z-50 bg-transparent">
        <div className="mx-auto w-full max-w-[1160px] px-4 sm:px-6">
          <div
            className="flex w-full items-center justify-between py-[18px]"
            style={{
              opacity: headerChromeOpacity,
              pointerEvents: headerChromePointerEvents,
              willChange: 'opacity',
            }}
          >
            <Link href="/" className={linkClass} aria-label="Main site home">
              home
            </Link>

            <div className="flex items-center">
              <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
                {navItems.map(item => (
                  <Link key={item.href} href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center p-0 lg:hidden"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
              >
                <span className="sr-only">Menu</span>
                <div className="w-5">
                  <div className="mb-[6px] h-[2px] bg-[#6A0C16]" />
                  <div className="mb-[6px] h-[2px] bg-[#6A0C16]" />
                  <div className="h-[2px] bg-[#6A0C16]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[60] bg-[#6A0C16] text-white backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mx-auto w-full max-w-[1160px] px-2 pt-8">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="flex h-10 w-10 items-center justify-center p-0"
                aria-label="Close menu"
              >
                <span aria-hidden="true" className="text-[26px] leading-none text-white">
                  ×
                </span>
              </button>
            </div>

            <div className="mt-14 space-y-10">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-[28px] font-medium uppercase tracking-[0.08em] text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
