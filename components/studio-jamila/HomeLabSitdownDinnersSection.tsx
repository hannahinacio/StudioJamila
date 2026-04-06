import Image from 'next/image';
import type { StudioJamilaImage } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';

/** /public/sitdowndinners-homepage — five tiles for home-lab sitdown row */
const SITDOWN_IMAGES: StudioJamilaImage[] = [
  { src: '/sitdowndinners-homepage/IMG_5004.jpeg', alt: 'Sitdown dinner, editorial capture' },
  { src: '/sitdowndinners-homepage/IMG_5282.jpeg', alt: 'Sitdown dinner, editorial capture' },
  { src: '/sitdowndinners-homepage/IMG_7553.jpeg', alt: 'Sitdown dinner, editorial capture' },
  { src: '/sitdowndinners-homepage/IMG_8248.jpeg', alt: 'Sitdown dinner, editorial capture' },
  { src: '/sitdowndinners-homepage/IMG_8319.jpeg', alt: 'Sitdown dinner, editorial capture' },
];

export default function HomeLabSitdownDinnersSection() {
  return (
    <section className="bg-sjBg">
      <PageContainer className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-20">
        <h2 className="mb-4 text-left text-[12px] font-medium uppercase leading-none tracking-[-0.04em] text-[#6A0C16] sm:mb-6 sm:text-[13px] md:mb-8 md:text-[15px]">
          Sitdown dinners
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-5 md:gap-3">
          {SITDOWN_IMAGES.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className={`relative aspect-[3/4] min-w-0 overflow-hidden ${idx === SITDOWN_IMAGES.length - 1 ? 'hidden md:block' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 20vw"
                className="scale-105 object-cover sm:scale-110 md:scale-[1.2]"
              />
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
