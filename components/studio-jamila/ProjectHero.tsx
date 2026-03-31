import Image from 'next/image';

export default function ProjectHero({
  title,
  label,
  heroImage,
}: {
  title: string;
  label?: string;
  heroImage: { src: string; alt: string };
}) {
  return (
    <section className="pt-20 pb-14">
      <div className="mx-auto w-full max-w-[1160px] px-6">
        <div className="mb-10">
          {label ? <p className="mb-3 text-sm tracking-[0.12em] text-sjAccent lowercase">{label}</p> : null}
          <h1 className="text-[clamp(34px,5.4vw,64px)] font-light leading-[1.02] tracking-[-0.02em] text-sjFg">
            {title}
          </h1>
        </div>

        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/9] w-full">
            {heroImage.src.endsWith('.svg') ? (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                width={1200}
                height={900}
                priority
                unoptimized
                sizes="(max-width: 768px) 100vw, 1160px"
                className="h-full w-full object-cover"
              />
            ) : (
              <Image
                src={heroImage.src}
                alt={heroImage.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1160px"
                className="object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

