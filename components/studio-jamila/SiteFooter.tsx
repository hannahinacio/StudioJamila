import Link from 'next/link';
import Image from 'next/image';
import { studioJamilaFooter } from '@/data/studioJamila';
import CTAButton from '@/components/studio-jamila/CTAButton';

export default function SiteFooter() {
  const currentYear = 2026;

  return (
    <footer className="relative bg-sjBg pt-10 md:pt-14 pb-0">
      <div className="relative z-10 w-full max-w-none px-[15px]">
        <div className="flex justify-center pb-8 md:pb-12">
          <CTAButton href="mailto:hi@studiojamila.com" text="let’s work together!" />
        </div>

      <div className="flex flex-col items-center gap-6 pb-8 text-center md:flex-row md:items-end md:justify-between md:gap-10 md:pb-10 md:text-left">
          <div className="space-y-1 text-sm font-normal lowercase leading-[1.15] text-sjFg">
            <p>
              <a
                href={`mailto:${studioJamilaFooter.email}`}
                className="transition-opacity duration-200 hover:opacity-80"
              >
                {studioJamilaFooter.email}
              </a>
            </p>
            {studioJamilaFooter.socials.map(social => (
              <p key={social.label}>
                <Link
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 hover:opacity-80"
                >
                  {social.label}
                </Link>
              </p>
            ))}
          </div>

          <div className="space-y-1 text-sm font-normal leading-[1.15] text-sjFg md:text-right">
            <p>
              {studioJamilaFooter.siteBy}{' '}
              <a
                href={studioJamilaFooter.siteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold transition-opacity duration-200 hover:opacity-80"
              >
                {studioJamilaFooter.siteName}
              </a>
            </p>
            <p>©studiojamila{currentYear}</p>
          </div>
        </div>
      </div>

      {/* Keep layout fixed; only make the PNG itself slightly smaller */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-0 mt-2 -translate-y-[38px] -mb-[38px] leading-none sm:-translate-y-[48px] sm:-mb-[48px] md:mt-4 md:-translate-y-[70px] md:-mb-[70px]"
      >
        <div className="relative left-1/2 w-[100vw] max-w-[100vw] -translate-x-1/2">
          <div className="relative w-full overflow-hidden aspect-[100/18] sm:aspect-[100/16] md:aspect-[100/13]">
            <div className="absolute inset-y-0 left-1/2 w-[calc(100%-22px)] sm:w-[calc(100%-28px)] md:w-[calc(100%-35px)] -translate-x-1/2">
              <Image
                src="/StudioJamila-Logo-Red.png"
                alt=""
                fill
                sizes="(max-width: 640px) calc(100vw - 22px), (max-width: 768px) calc(100vw - 28px), calc(100vw - 35px)"
                className="object-contain object-center"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
