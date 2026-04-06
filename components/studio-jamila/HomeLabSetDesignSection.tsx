import Image from 'next/image';
import type { StudioJamilaImage } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';

/** /public/creative-homepage — five tiles for home-lab set design row */
const SET_DESIGN_IMAGES: StudioJamilaImage[] = [
  { src: '/creative-homepage/IMG_9760.jpeg', alt: 'Set design, editorial capture' },
  {
    src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_6117-Bearbeitet_final-version_full-size.jpg',
    alt: 'Set design, editorial capture',
  },
  { src: '/creative-homepage/IMG_4196.jpeg', alt: 'Set design, editorial capture' },
  {
    src: '/creative/nikkmartin_studio-jamila_food-editorial_2025_berlin_5765-Bearbeitet_final-version_full-size.jpg',
    alt: 'Set design, editorial capture',
  },
  { src: '/creative-homepage/IMG_2349.jpeg', alt: 'Set design, editorial capture' },
];

export default function HomeLabSetDesignSection() {
  return (
    <section className="bg-sjBg">
      <PageContainer className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-20">
        <h2 className="mb-4 text-left text-[12px] font-medium uppercase leading-none tracking-[-0.04em] text-sjAccent sm:mb-6 sm:text-[13px] md:mb-8 md:text-[15px]">
          Set design & creative direction
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-5 md:gap-3">
          {SET_DESIGN_IMAGES.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className={`relative aspect-[3/4] min-w-0 overflow-hidden ${idx === SET_DESIGN_IMAGES.length - 1 ? 'hidden md:block' : ''}`}
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
