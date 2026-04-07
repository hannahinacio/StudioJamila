'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { studioJamilaNav } from '@/data/studioJamila';
import Image from 'next/image';

/** Matches `HomeLabHeader` nav typography; use on pages that share the home look without the hero logo animation. */
const homeLabNavLinkClass =
  'text-sm font-medium uppercase tracking-wide !text-[#6A0C16] transition-opacity duration-200 hover:opacity-80';

type SiteHeaderProps = {
  /** When set, nav matches the home page header (uppercase links). Logo stays centered black — no scroll animation. */
  variant?: 'default' | 'homeLab';
};

export default function SiteHeader({ variant = 'default' }: SiteHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = useMemo(() => studioJamilaNav, []);
  const isHomeLab = variant === 'homeLab';

  const containerPx = isHomeLab ? 'px-4 sm:px-6' : 'px-4 lg:px-2';
  const homeLinkClass = isHomeLab
    ? homeLabNavLinkClass
    : 'text-sm font-normal lowercase transition-opacity duration-200 hover:opacity-80 -translate-y-[2px] lg:-translate-y-[2px] xl:-translate-x-[56px]';
  const navLinkClass = isHomeLab
    ? homeLabNavLinkClass
    : 'text-sm font-normal lowercase transition-opacity duration-200 hover:opacity-80';
  const navWrapClass = isHomeLab
    ? 'hidden items-center gap-8 lg:flex'
    : 'hidden items-center gap-8 lg:flex xl:translate-x-[56px]';
  const mobileNavLinkClass = isHomeLab
    ? 'block text-[28px] font-medium uppercase tracking-[0.08em] text-white'
    : 'block text-[28px] font-normal lowercase tracking-[0.06em] text-white';

  return (
    <>
      <header className="sticky top-0 z-50 bg-sjBg">
        <div className={`mx-auto w-full max-w-[1160px] ${containerPx}`}>
          <div className="relative flex items-center justify-between py-[18px]">
            <Link
              href="/"
              className={homeLinkClass}
              aria-label="Home"
              style={{ color: '#6A0C16' }}
            >
              home
            </Link>

            <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <Link
                href="/"
                className="inline-flex items-center justify-center"
                aria-label="Studio Jamila"
              >
                <Image
                  src="/studiojamilalogo-black.png"
                  alt="Studio Jamila"
                  width={905}
                  height={90}
                  className="h-auto w-[calc(min(72vw,477px)*0.46)]"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            <nav className={navWrapClass} aria-label="Primary navigation">
              {navItems.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
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
          className="fixed inset-0 z-[60] bg-[#6A0C16] backdrop-blur-[2px] text-white"
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
                  className={mobileNavLinkClass}
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

