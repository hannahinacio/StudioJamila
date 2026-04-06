'use client';

import { usePathname } from 'next/navigation';
import HomeLabHeader from '@/components/studio-jamila/HomeLabHeader';
import HomeLabScrollProvider from '@/components/studio-jamila/HomeLabScrollProvider';
import SiteFooter from '@/components/studio-jamila/SiteFooter';
import SiteHeader from '@/components/studio-jamila/SiteHeader';

export default function SiteRouteLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === '/';
  /** Same header treatment as About: homeLab variant + tighter main offset */
  const aboutHeaderLikeHome =
    pathname === '/about' ||
    pathname === '/projects' ||
    pathname === '/services' ||
    pathname === '/contact';

  if (isHome) {
    return (
      <HomeLabScrollProvider>
        <HomeLabHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </HomeLabScrollProvider>
    );
  }

  return (
    <>
      <SiteHeader variant={aboutHeaderLikeHome ? 'homeLab' : 'default'} />
      <main
        className={
          aboutHeaderLikeHome ? 'flex-1 pt-[58px] md:pt-[62px]' : 'flex-1 pt-[68px]'
        }
      >
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
