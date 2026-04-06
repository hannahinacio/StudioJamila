import Image from 'next/image';
import type { StudioJamilaImage } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';

/** /public/fingerfoods-homepage — five tiles for home-lab finger food row */
const FINGER_FOOD_IMAGES: StudioJamilaImage[] = [
  {
    src: '/fingerfoods-homepage/5872B871-17D1-4967-B595-9061AC53E86A.jpeg',
    alt: 'Finger food, editorial presentation',
  },
  { src: '/fingerfoods-homepage/IMG_3100.jpeg', alt: 'Finger food, editorial capture' },
  { src: '/fingerfoods-homepage/IMG_5986.jpeg', alt: 'Finger food, editorial capture' },
  { src: '/fingerfoods-homepage/IMG_6897.jpeg', alt: 'Finger food, editorial capture' },
  { src: '/fingerfoods-homepage/IMG_9850.jpeg', alt: 'Finger food, editorial capture' },
];

function objectPositionClass(src: string) {
  if (src.includes('IMG_9850.jpeg')) return ' object-[50%_34%]';
  return '';
}

export default function HomeLabFingerFoodSection() {
  return (
    <section className="bg-sjBg">
      <PageContainer className="pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-20">
        <h2 className="mb-4 text-left text-[12px] font-medium uppercase leading-none tracking-[-0.04em] text-sjAccent sm:mb-6 sm:text-[13px] md:mb-8 md:text-[15px]">
          Finger food
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2 md:grid-cols-5 md:gap-3">
          {FINGER_FOOD_IMAGES.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className={`relative aspect-[3/4] min-w-0 overflow-hidden ${idx === FINGER_FOOD_IMAGES.length - 1 ? 'hidden md:block' : ''}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 20vw"
                className={`scale-105 object-cover sm:scale-110 md:scale-[1.2]${objectPositionClass(img.src)}`}
              />
            </figure>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
