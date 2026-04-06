import Image from 'next/image';
import PageContainer from '@/components/studio-jamila/PageContainer';

/** Below lg: same inset + stacked rhythm as Mugler. lg+: framed left + full-bleed right. */
export default function HomeLabSplitFeatureSection() {
  return (
    <section className="bg-sjBg" aria-label="Samsung project highlight">
      <div className="lg:hidden">
        <PageContainer className="py-6 sm:py-8 md:py-10">
          <div className="grid min-w-0 grid-cols-1 gap-3">
            <div className="relative aspect-[3/4] w-full max-h-[min(70svh,560px)] min-h-0 min-w-0 overflow-hidden">
              <Image
                src="/samsung-image.jpeg"
                alt="Samsung — editorial table and bites"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] w-full max-h-[min(58svh,480px)] min-h-0 min-w-0 overflow-hidden">
              <Image
                src="/samsung-image2.jpeg"
                alt="Samsung — launch reception"
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-[50%_48%]"
                priority={false}
              />
            </div>
            <div className="flex justify-between pt-0 text-[11px] font-medium uppercase tracking-[-0.02em] text-sjAccent md:text-xs sm:pt-0.5">
              <span>Samsung</span>
              <span>2025</span>
            </div>
          </div>
        </PageContainer>
      </div>

      <div className="hidden min-h-0 lg:grid lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-sjBg px-6 py-12 sm:px-10 lg:min-h-[min(88svh,920px)] lg:px-12 lg:py-16">
          <div className="mx-auto flex w-full max-w-[min(320px,100%)] flex-col">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/samsung-image.jpeg"
                alt="Samsung — editorial table and bites"
                fill
                sizes="(max-width: 1280px) 80vw, 320px"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex justify-between text-[11px] font-medium uppercase tracking-[-0.02em] text-sjAccent md:text-xs">
              <span>Samsung</span>
              <span>2025</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[50svh] w-full lg:min-h-[min(88svh,920px)]">
          <Image
            src="/samsung-image2.jpeg"
            alt="Samsung — launch reception"
            fill
            sizes="50vw"
            className="object-cover object-[50%_48%]"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
}
