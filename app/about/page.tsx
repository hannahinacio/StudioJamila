import Image from 'next/image';
import { studioJamilaAbout } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
import EditorialTextBlock from '@/components/studio-jamila/EditorialTextBlock';
export default function AboutPage() {
  return (
    <div className="-mt-20 md:-mt-24">
      {/* Section 1: About intro */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-left text-sjFg">{studioJamilaAbout.title}</SectionTitle>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6 xl:grid-cols-[1.2fr_0.9fr] xl:gap-8">
            <EditorialTextBlock className="font-normal text-[11px] leading-[1.08] tracking-[-0.02em] !text-black">
              {studioJamilaAbout.biography.map((para, idx) => (
                <p
                  key={`${idx}-${para}`}
                  className={`${idx === studioJamilaAbout.biography.length - 1 ? 'mt-6 !text-black' : 'mb-4 !text-black'}`}
                >
                  {para}
                </p>
              ))}
            </EditorialTextBlock>

            <div className="relative mx-auto w-full max-w-[560px] overflow-hidden aspect-[4/5] lg:ml-auto lg:mr-0 lg:max-w-[500px] xl:max-w-[680px]">
              {studioJamilaAbout.portrait.src.endsWith('.svg') ? (
                <Image
                  src={studioJamilaAbout.portrait.src}
                  alt={studioJamilaAbout.portrait.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 34vw, 33vw"
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <Image
                  src={studioJamilaAbout.portrait.src}
                  alt={studioJamilaAbout.portrait.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 34vw, 33vw"
                  className="object-cover"
                  priority
                />
              )}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Section 2: Meet the team */}
      <section className="py-20 -mt-20 md:-mt-24">
        <PageContainer>
          <SectionTitle className="text-sjFg">{studioJamilaAbout.team.title}</SectionTitle>
          <div className="mt-10 mx-auto max-w-[280px] md:max-w-[340px]">
            <div className="relative overflow-hidden">
              {studioJamilaAbout.team.image.src.endsWith('.svg') ? (
                <Image
                  src={studioJamilaAbout.team.image.src}
                  alt={studioJamilaAbout.team.image.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 92vw"
                  className="h-auto w-full object-contain"
                  unoptimized
                />
              ) : (
                <Image
                  src={studioJamilaAbout.team.image.src}
                  alt={studioJamilaAbout.team.image.alt}
                  width={2758}
                  height={4160}
                  sizes="(max-width: 768px) 100vw, 92vw"
                  className="h-auto w-full object-contain"
                />
              )}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Section 3: Team bios */}
      <section className="py-20 -mt-20 md:-mt-24">
        <PageContainer>
          <div className="grid gap-14 xl:grid-cols-3">
            {studioJamilaAbout.teamBios.map(bio => (
              <div key={bio.name} className="text-center">
                <h3 className="text-sjFg text-[20px] font-normal tracking-wide">{bio.name}</h3>
                <p className="mt-6 mx-auto max-w-[44ch] text-[18px] font-normal leading-[1.7] text-sjFg">
                  {bio.text}
                </p>
              </div>
            ))}
          </div>
        </PageContainer>
      </section>

      {/* Section 4: Supporting collaborators */}
      <section className="py-20 -mt-8 md:-mt-10">
        <PageContainer>
          <p className="mx-auto text-center max-w-[78ch] text-[18px] font-normal leading-[1.7] text-sjFg">
            {studioJamilaAbout.collaboratorsText}
          </p>
        </PageContainer>
      </section>
    </div>
  );
}

