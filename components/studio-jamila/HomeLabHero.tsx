'use client';

import Image from 'next/image';
import { useHomeLabScroll } from '@/components/studio-jamila/HomeLabScrollProvider';

const starterLeft =
  '/starterimages/nikkmartin_mya_clara_studio-jamila_acatelier_food-editorial_favourites_berlin_2025_berlin_0009-Bearbeitet_final-version_full-size.jpg';
const starterRight =
  '/starterimages/nikkmartin_studio-jamila_food-editorial_2025_berlin_6712-Bearbeitet_final-version_full-size.jpg';

const END_SCALE = 0.46;

const whiteLogo = {
  src: '/1x/StudioJamila-Logo-white.png' as const,
  width: 1664,
  height: 165,
};

export default function HomeLabHero() {
  const { progress: p, layout } = useHomeLabScroll();

  const startY = layout.vh / 2;
  const endY = layout.headerCenterY;
  const topPx = startY + (endY - startY) * p;
  const scale = 1 + (END_SCALE - 1) * p;

  return (
    <>
      <section className="relative min-h-[100svh] w-full" aria-label="Studio Jamila intro">
        <div className="grid h-[100svh] min-h-[100svh] w-full grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          <div className="relative min-h-0">
            <Image
              src={starterLeft}
              alt="Studio Jamila — editorial food still life"
              fill
              priority
              className="object-cover object-[50%_32%]"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
          <div className="relative min-h-0">
            <Image
              src={starterRight}
              alt="Studio Jamila — curated dish presentation"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 767px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <div
        className="pointer-events-none fixed left-1/2 z-[55]"
        style={{
          top: `${topPx}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          willChange: 'transform',
        }}
        aria-hidden
      >
        <Image
          src={whiteLogo.src}
          alt="Studio Jamila"
          width={whiteLogo.width}
          height={whiteLogo.height}
          priority
          className="h-auto max-w-[min(72vw,477px)] w-[477px] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
          sizes="(max-width: 768px) 72vw, 477px"
        />
      </div>
    </>
  );
}
