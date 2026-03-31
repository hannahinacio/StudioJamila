'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { studioJamilaNav } from '@/data/studioJamila';
import Image from 'next/image';

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(() => studioJamilaNav, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white">
        <div className="mx-auto w-full max-w-[1160px] px-4 lg:px-2">
          <div className="relative flex items-center justify-between py-[18px]">
            <Link
              href="/"
              className="text-sm font-normal lowercase transition-opacity duration-200 hover:opacity-80 -translate-y-[2px] lg:-translate-y-[2px] xl:-translate-x-[56px]"
              aria-label="Home"
              style={{ color: '#6A0C16' }}
            >
              home
            </Link>

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <Link
                href="/"
                className="inline-flex items-center justify-center"
                aria-label="Studio Jamila"
              >
                <Image
                  src="/studiojamilalogo-black.png"
                  alt="Studio Jamila"
                  width={540}
                  height={120}
                  className="h-[22px] w-auto md:h-[26px]"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            <nav
              className="hidden items-center gap-8 lg:flex xl:translate-x-[56px]"
              aria-label="Primary navigation"
            >
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-normal lowercase transition-opacity duration-200 hover:opacity-80"
                  style={{ color: '#6A0C16' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <button
              type="button"
              className="justify-self-end lg:hidden h-10 w-10 flex items-center justify-center p-0"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <span className="sr-only">Menu</span>
              <div className="flex items-center justify-center">
                <div className="w-5">
                  <div className="h-[2px] bg-[#6A0C16] mb-[6px]" />
                  <div className="h-[2px] bg-[#6A0C16] mb-[6px]" />
                  <div className="h-[2px] bg-[#6A0C16]" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 bg-[#6A0C16] backdrop-blur-[2px] text-white"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="mx-auto w-full max-w-[1160px] px-2 pt-8">
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="h-10 w-10 flex items-center justify-center p-0"
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
                  className="block text-[28px] font-normal lowercase tracking-[0.06em] text-white"
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

