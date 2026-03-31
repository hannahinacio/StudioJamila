import Image from 'next/image';

export type StudioJamilaImage = {
  src: string;
  alt: string;
};

type Aspect = '4/5' | '1/1' | '16/9' | '3/4';

const aspectToClass: Record<Aspect, string> = {
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '16/9': 'aspect-[16/9]',
  '3/4': 'aspect-[3/4]',
};

export default function ImageGrid({
  images,
  variant = 'home',
  aspect = '4/5',
  gapClassName = 'gap-5',
}: {
  images: StudioJamilaImage[];
  variant?: 'home' | 'two' | 'three' | 'four' | 'five';
  aspect?: Aspect;
  gapClassName?: string;
}) {
  const gridClassName =
    variant === 'home'
      ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
      : variant === 'five'
        ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-5'
      : variant === 'four'
        ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-4'
        : variant === 'three'
          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
          : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className={`grid ${gridClassName} ${gapClassName}`}>
      {images.map((img, idx) => (
        <figure key={`${img.src}-${idx}`} className="group relative overflow-hidden">
          <div className={`relative ${aspectToClass[aspect]} w-full`}>
            {/** Slightly tighter crop only for the first finger-foods image */}
            {(() => {
              const isFingerFoodsFirst = img.src.includes('/finger-foods/fingerfoods-1.jpeg');
              const isFingerFoodsThird = img.src.includes('/finger-foods/fingerfoods-3.jpeg');
              const isFingerFoodsFourth = img.src.includes('/finger-foods/fingerfoods-4.jpeg');
              const extraImageClass = isFingerFoodsFirst
                ? ' scale-[1.42] object-[68%_22%]'
                : isFingerFoodsThird
                  ? ' scale-[1.22] object-center'
                  : isFingerFoodsFourth
                    ? ' scale-[1.2] object-center'
                  : '';
              return img.src.endsWith('.svg') ? (
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  unoptimized
                  className={`h-full w-full object-cover${extraImageClass}`}
                />
              ) : (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`object-cover${extraImageClass}`}
                />
              );
            })()}
          </div>
        </figure>
      ))}
    </div>
  );
}

