import Image from 'next/image';

export type StudioJamilaImage = {
  src: string;
  alt: string;
};

type Aspect = '4/5' | '1/1' | '16/9' | '3/4';

const aspectToMinWidth: Record<Aspect, string> = {
  '4/5': 'w-[300px] sm:w-[360px]',
  '1/1': 'w-[260px] sm:w-[320px]',
  '16/9': 'w-[340px] sm:w-[420px]',
  '3/4': 'w-[300px] sm:w-[360px]',
};

const aspectToClass: Record<Aspect, string> = {
  '4/5': 'aspect-[4/5]',
  '1/1': 'aspect-square',
  '16/9': 'aspect-[16/9]',
  '3/4': 'aspect-[3/4]',
};

export default function ImageRow({
  images,
  aspect = '4/5',
}: {
  images: StudioJamilaImage[];
  aspect?: Aspect;
}) {
  return (
    <div className="-mx-6 overflow-x-auto pb-2">
      <div className="flex gap-5 px-6">
        {images.map((img, idx) => (
          <figure key={`${img.src}-${idx}`} className="group relative overflow-hidden">
            <div className={`${aspectToMinWidth[aspect]} ${aspectToClass[aspect]} relative`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 70vw, 320px"
                unoptimized={img.src.endsWith('.svg')}
                className="object-cover"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}

