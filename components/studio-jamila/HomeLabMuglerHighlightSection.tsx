import Image from 'next/image';
import PageContainer from '@/components/studio-jamila/PageContainer';

/**
 * Mugler: 1/3 + 2/3 on md+; stacked portrait → hero → caption on small screens.
 * Caption typography matches Samsung split.
 */
export default function HomeLabMuglerHighlightSection() {
  return (
    <section className="bg-sjBg" aria-label="Mugler project highlight">
      <PageContainer className="py-6 sm:py-8 md:py-10">
        <div className="grid min-w-0 grid-cols-1 gap-3 grid-rows-none md:grid-cols-3 md:grid-rows-[auto_auto] md:gap-x-3 md:gap-y-3">
          <div className="relative row-start-1 aspect-[3/4] w-full max-md:max-h-[min(70svh,560px)] min-h-0 min-w-0 overflow-hidden md:col-start-1 md:aspect-auto md:h-[min(58svh,700px)]">
            <Image
              src="/Mugler-Image.jpg"
              alt="Mugler — editorial portrait"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover object-[50%_58%]"
            />
          </div>

          <div className="relative row-start-2 aspect-[4/3] w-full max-md:max-h-[min(58svh,480px)] min-h-0 min-w-0 overflow-hidden md:col-span-2 md:col-start-2 md:row-start-1 md:aspect-auto md:h-[min(58svh,700px)]">
            <Image
              src="/mugler-new.jpeg"
              alt="Mugler — set and styling"
              fill
              sizes="(max-width: 768px) 100vw, 67vw"
              className="object-cover object-[50%_65%]"
            />
          </div>

          <div className="hidden md:col-start-1 md:row-start-2 md:block" aria-hidden />

          <div className="row-start-3 flex justify-between pt-0 text-[11px] font-medium uppercase tracking-[-0.02em] text-sjAccent md:col-span-2 md:col-start-2 md:row-start-2 md:pt-1 md:text-xs sm:pt-0.5">
            <span>Mugler</span>
            <span>2026</span>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
