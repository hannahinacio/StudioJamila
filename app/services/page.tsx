import ImageGrid from '@/components/studio-jamila/ImageGrid';
import EditorialTextBlock from '@/components/studio-jamila/EditorialTextBlock';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
import { studioJamilaServices } from '@/data/studioJamila';

const stripParens = (value: string) => value.replace(/[()]/g, '');

export default function ServicesPage() {
  return (
    <div className="-mt-20 md:-mt-24">
      {/* Top intro */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-sjFg">services</SectionTitle>

          <div className="mt-10 text-center">
            <EditorialTextBlock className="w-full max-w-none !text-black font-normal leading-[1.7]">
              {studioJamilaServices.intro.map((p, idx) => (
                <p key={idx} className={idx === studioJamilaServices.intro.length - 1 ? 'mt-8' : 'mb-6'}>
                  {p}
                </p>
              ))}
            </EditorialTextBlock>
          </div>
        </PageContainer>
      </section>

      {/* Seated dinner experiences */}
      <section className="py-12">
        <PageContainer>
          <div className="-mt-4">
            <ImageGrid images={studioJamilaServices.seatedDinner.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-14">
            <h3 className="text-[22px] font-normal leading-[1.08] tracking-[-0.01em] !text-black">
              seated dinner experiences
            </h3>

            <div className="space-y-6 text-[18px] font-normal leading-[1.22] !text-black">
              <p>{studioJamilaServices.seatedDinner.paragraph.split('\n\n')[0]}</p>
              <p>{studioJamilaServices.seatedDinner.paragraph.split('\n\n')[1]}</p>

              <div className="space-y-0">
                {studioJamilaServices.seatedDinner.offerings.map(offering => (
                  <p key={offering}>{offering.replace(/[()]/g, '')}</p>
                ))}
              </div>

              <p>{studioJamilaServices.seatedDinner.tail}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Finger food & flying bites */}
      <section className="py-12">
        <PageContainer>
          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.fingerFood.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-14">
            <h3 className="text-[22px] font-normal leading-[1.08] tracking-[-0.01em] !text-black">
              {stripParens(studioJamilaServices.fingerFood.title)}
            </h3>

            <div className="space-y-6 text-[18px] font-normal leading-[1.22] !text-black">
              <p>{studioJamilaServices.fingerFood.paragraph}</p>

              <div className="space-y-0">
                {studioJamilaServices.fingerFood.offerings.map(offering => (
                  <p key={offering}>{stripParens(offering)}</p>
                ))}
              </div>

              <p>{studioJamilaServices.fingerFood.tail}</p>
              <p>{studioJamilaServices.fingerFood.tailSecondary}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Food installations */}
      <section className="py-12">
        <PageContainer>
          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.installations.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-14">
            <h3 className="text-[22px] font-normal leading-[1.08] tracking-[-0.01em] !text-black">
              {stripParens(studioJamilaServices.installations.title)}
            </h3>

            <div className="space-y-6 text-[18px] font-normal leading-[1.22] !text-black">
              <p>{studioJamilaServices.installations.paragraph}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Drinks & service */}
      <section className="py-12">
        <PageContainer>
          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.drinksService.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-14">
            <h3 className="text-[22px] font-normal leading-[1.08] tracking-[-0.01em] !text-black">
              {stripParens(studioJamilaServices.drinksService.title)}
            </h3>

            <div className="space-y-6 text-[18px] font-normal leading-[1.22] !text-black">
              <p>{studioJamilaServices.drinksService.introLine}</p>

              <div className="space-y-0">
                {studioJamilaServices.drinksService.offerings.map(offering => (
                  <p key={offering}>{stripParens(offering)}</p>
                ))}
              </div>

              {studioJamilaServices.drinksService.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Catering formats */}
      <section className="py-12">
        <PageContainer>
          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-14">
            <h3 className="text-[22px] font-normal leading-[1.08] tracking-[-0.01em] !text-black">
              {stripParens(studioJamilaServices.formats.title)}
            </h3>

            <div className="space-y-6 text-[18px] font-normal leading-[1.22] !text-black">
              <p>{studioJamilaServices.formats.intro}</p>

              <div className="space-y-0">
                {studioJamilaServices.formats.items.map(item => (
                  <p key={item}>{stripParens(item)}</p>
                ))}
              </div>

              <p>{studioJamilaServices.formats.closing}</p>
            </div>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

