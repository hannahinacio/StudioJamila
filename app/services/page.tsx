import ImageGrid from '@/components/studio-jamila/ImageGrid';
import EditorialTextBlock from '@/components/studio-jamila/EditorialTextBlock';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
import { studioJamilaServices } from '@/data/studioJamila';

export default function ServicesPage() {
  return (
    <div className="-mt-20 md:-mt-24">
      {/* Top intro */}
      <section className="py-20">
        <PageContainer>
          <SectionTitle className="text-left text-sjFg">{studioJamilaServices.title}</SectionTitle>

          <div className="mt-10 text-left">
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
          <SectionTitle className="text-sjFg">{studioJamilaServices.seatedDinner.title}</SectionTitle>

          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.seatedDinner.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-12 text-center">
            <EditorialTextBlock className="mx-auto !text-black font-normal leading-[1.7]">
              <p className="whitespace-pre-line">{studioJamilaServices.seatedDinner.paragraph}</p>
            </EditorialTextBlock>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8">
            {studioJamilaServices.seatedDinner.offerings.map(offering => (
              <p key={offering} className="text-sjAccent text-[18px] font-normal tracking-wide">
                {offering}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <p className="mx-auto max-w-[78ch] text-center text-[18px] font-normal leading-[1.7] !text-black">
              {studioJamilaServices.seatedDinner.tail}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Finger food & flying bites */}
      <section className="py-12">
        <PageContainer>
          <SectionTitle className="text-sjFg">{studioJamilaServices.fingerFood.title}</SectionTitle>

          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.fingerFood.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-12 text-center">
            <EditorialTextBlock className="mx-auto !text-black font-normal leading-[1.7]">
              <p>{studioJamilaServices.fingerFood.paragraph}</p>
            </EditorialTextBlock>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8">
            {studioJamilaServices.fingerFood.offerings.map(offering => (
              <p key={offering} className="text-sjAccent text-[18px] font-normal tracking-wide">
                {offering}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <p className="mx-auto max-w-[78ch] text-center text-[18px] font-normal leading-[1.7] !text-black">
              {studioJamilaServices.fingerFood.tail}
            </p>
            <p className="mx-auto max-w-[78ch] text-center text-[18px] font-normal leading-[1.7] !text-black">
              {studioJamilaServices.fingerFood.tailSecondary}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Food installations */}
      <section className="py-12">
        <PageContainer>
          <SectionTitle className="text-sjFg">{studioJamilaServices.installations.title}</SectionTitle>

          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.installations.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-12 text-center">
            <EditorialTextBlock className="mx-auto !text-black font-normal leading-[1.7]">
              <p>{studioJamilaServices.installations.paragraph}</p>
            </EditorialTextBlock>
          </div>
        </PageContainer>
      </section>

      {/* Drinks & service */}
      <section className="py-12">
        <PageContainer>
          <SectionTitle className="text-sjFg">{studioJamilaServices.drinksService.title}</SectionTitle>

          <div className="mt-10">
            <ImageGrid images={studioJamilaServices.drinksService.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-12 text-center">
            <p className="text-[18px] font-normal leading-[1.7] !text-black">{studioJamilaServices.drinksService.introLine}</p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-8">
            {studioJamilaServices.drinksService.offerings.map(offering => (
              <p key={offering} className="text-sjAccent text-[18px] font-normal tracking-wide">
                {offering}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <EditorialTextBlock className="mx-auto text-center !text-black font-normal leading-[1.7]">
              {studioJamilaServices.drinksService.paragraphs.map((p, idx) => (
                <p key={idx} className={idx === studioJamilaServices.drinksService.paragraphs.length - 1 ? 'mt-6' : 'mb-6'}>
                  {p}
                </p>
              ))}
            </EditorialTextBlock>
          </div>
        </PageContainer>
      </section>

      {/* Catering formats */}
      <section className="py-12">
        <PageContainer>
          <SectionTitle className="text-sjFg">{studioJamilaServices.formats.title}</SectionTitle>

          <div className="mt-10 text-center">
            <p className="text-[18px] font-normal leading-[1.7] !text-black">{studioJamilaServices.formats.intro}</p>
          </div>

          <div className="mt-14 flex flex-col items-center gap-7">
            {studioJamilaServices.formats.items.map(item => (
              <p key={item} className="text-sjAccent text-[18px] font-normal tracking-wide">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <p className="mx-auto max-w-[78ch] whitespace-pre-line text-center text-[18px] font-normal leading-[1.7] !text-black">
              {studioJamilaServices.formats.closing}
            </p>
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

