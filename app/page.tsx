import { studioJamilaHome } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
import FadeInOnScroll from '@/components/studio-jamila/FadeInOnScroll';
import Image from 'next/image';
export default function HomePage() {
  return (
    <div className="-mt-20 md:-mt-24">
      {/* Finger foods */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg font-normal">{studioJamilaHome.fingerFoods.title}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {studioJamilaHome.fingerFoods.images.slice(0, 18).map((img, idx) => (
              (() => {
                const focalClass = img.src.includes('IMG_9850.jpeg')
                  ? ' object-[50%_34%]'
                  : img.src.includes('IMG_2979.jpeg')
                    ? ' scale-[1.35] object-[50%_100%]'
                    : '';
                return (
              <FadeInOnScroll key={`${img.src}-${idx}`} delayMs={(idx % 6) * 40}>
                <figure className="group relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className={`object-cover${focalClass}`}
                  />
                </figure>
              </FadeInOnScroll>
                );
              })()
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Sitdown dinners */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg font-normal">{studioJamilaHome.sitdownDinners.title}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {studioJamilaHome.sitdownDinners.images.slice(0, 18).map((img, idx) => (
              <FadeInOnScroll key={`${img.src}-${idx}`} delayMs={(idx % 6) * 40}>
                <figure className="group relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </figure>
              </FadeInOnScroll>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Set design & creative direction */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg font-normal">{studioJamilaHome.setDesign.title}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {studioJamilaHome.setDesign.images.slice(0, 18).map((img, idx) => (
              <FadeInOnScroll key={`${img.src}-${idx}`} delayMs={(idx % 6) * 40}>
                <figure className="group relative overflow-hidden aspect-[3/4]">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    className="object-cover"
                  />
                </figure>
              </FadeInOnScroll>
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
