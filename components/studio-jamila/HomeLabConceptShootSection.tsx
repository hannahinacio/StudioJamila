import Image from 'next/image';
import PageContainer from '@/components/studio-jamila/PageContainer';

/**
 * Two images + caption under left column at sm+; stacked on the smallest screens.
 * Caption typography matches Samsung split.
 */
export default function HomeLabConceptShootSection() {
  return (
    <section className="bg-sjBg" aria-label="Studio Jamila concept shoot highlight">
      <PageContainer className="pb-12 pt-2 sm:pb-14 md:pb-20 md:pt-3">
        <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-[auto_auto] sm:gap-x-2 sm:gap-y-2 md:gap-x-3 md:gap-y-3">
          <div className="relative aspect-[3/4] w-full min-h-0 min-w-0 overflow-hidden sm:col-start-1 sm:row-start-1 sm:aspect-auto sm:h-[min(48svh,480px)] md:h-[min(56svh,560px)]">
            <Image
              src="/creative-homepage/nikkmartin_studio-jamila_food-editorial_2025_berlin_6255-Bearbeitet_final-version_full-size.jpg"
              alt="Studio Jamila concept shoot left frame"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="relative aspect-[3/4] w-full min-h-0 min-w-0 overflow-hidden sm:col-start-2 sm:row-start-1 sm:aspect-auto sm:h-[min(48svh,480px)] md:h-[min(56svh,560px)]">
            <Image
              src="/creative-homepage/nikkmartin_studio-jamila_food-editorial_2025_berlin_6448-Bearbeitet_final-version_full-size.jpg"
              alt="Studio Jamila concept shoot right frame"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex justify-between gap-3 pt-0 text-[11px] font-medium uppercase tracking-[-0.02em] text-[#6A0C16] sm:col-start-1 sm:row-start-2 sm:pt-1 md:pt-2 md:text-xs">
            <span className="min-w-0 leading-snug">Studio Jamila concept shoot</span>
            <span className="shrink-0">2025</span>
          </div>

          <div className="hidden sm:col-start-2 sm:row-start-2 sm:block" aria-hidden />
        </div>
      </PageContainer>
    </section>
  );
}
