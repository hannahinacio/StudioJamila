import { studioJamilaHome } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
import Image from 'next/image';

const fingerFoodsMosaicPattern = [
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:col-span-2 xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
];

const sitdownMosaicPattern = [
  'xl:col-span-2 xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
];

const creativeMosaicPattern = [
  'xl:col-span-2 xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:col-span-2 xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
  'xl:row-span-2',
];
export default function HomePage() {
  return (
    <div className="-mt-20 md:-mt-24">
      {/* Finger foods */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg font-normal">{studioJamilaHome.fingerFoods.title}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[168px] xl:[grid-auto-flow:dense]">
            {studioJamilaHome.fingerFoods.images.map((img, idx) => (
              (() => {
                const focalClass = img.src.includes('IMG_9850.jpeg')
                  ? ' object-[50%_34%]'
                  : img.src.includes('IMG_2979.jpeg')
                    ? ' scale-[1.35] object-[50%_100%]'
                    : '';
                const tileClass = img.src.includes('IMG_6871.jpeg')
                  ? 'xl:row-span-2'
                  : fingerFoodsMosaicPattern[idx % fingerFoodsMosaicPattern.length];
                return (
              <figure
                key={`${img.src}-${idx}`}
                className={`group relative overflow-hidden aspect-[4/5] xl:aspect-auto ${tileClass}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className={`object-cover${focalClass}`}
                />
              </figure>
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
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[170px] xl:[grid-auto-flow:dense]">
            {studioJamilaHome.sitdownDinners.images.map((img, idx) => (
              <figure
                key={`${img.src}-${idx}`}
                className={`group relative overflow-hidden aspect-[4/5] xl:aspect-auto ${
                  sitdownMosaicPattern[idx % sitdownMosaicPattern.length]
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Set design & creative direction */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg font-normal">{studioJamilaHome.setDesign.title}</SectionTitle>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 xl:auto-rows-[168px] xl:[grid-auto-flow:dense]">
            {studioJamilaHome.setDesign.images.map((img, idx) => (
              <figure
                key={`${img.src}-${idx}`}
                className={`group relative overflow-hidden aspect-[4/5] xl:aspect-auto ${
                  creativeMosaicPattern[idx % creativeMosaicPattern.length]
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </PageContainer>
      </section>
    </div>
  );
}
