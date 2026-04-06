import ImageGrid from '@/components/studio-jamila/ImageGrid';
import EditorialTextBlock from '@/components/studio-jamila/EditorialTextBlock';
import PageContainer from '@/components/studio-jamila/PageContainer';
import { studioJamilaServices } from '@/data/studioJamila';

const stripParens = (value: string) => value.replace(/[()]/g, '');

/** Body / intro: same scale as page title (text-sm md:text-base), maroon */
const bodyClass =
  'space-y-5 text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[#6A0C16] md:text-base';
/** `!` sizes beat EditorialTextBlock’s default `text-[18px]` on small screens */
const introTextClass =
  'w-full max-w-none text-center !text-sm font-normal !leading-[1.5] tracking-[-0.02em] !text-[#6A0C16] md:!text-base';
const sectionHeadingClass =
  'text-sm font-medium uppercase tracking-[-0.02em] text-[#6A0C16] md:text-base leading-snug';

export default function ServicesPage() {
  return (
    <div className="-mt-24 md:-mt-28">
      {/* Top intro */}
      <section className="py-12 md:py-16">
        <PageContainer>
          <h2 className="text-center text-sm font-medium uppercase tracking-[-0.02em] text-[#6A0C16] md:text-base">
            services
          </h2>

          <div className="mt-6 text-center md:mt-8">
            <EditorialTextBlock className={introTextClass}>
              {studioJamilaServices.intro.map((p, idx) => (
                <p key={idx} className={idx === studioJamilaServices.intro.length - 1 ? 'mt-6' : 'mb-4'}>
                  {p}
                </p>
              ))}
            </EditorialTextBlock>
          </div>
        </PageContainer>
      </section>

      {/* Seated dinner experiences */}
      <section className="py-8 md:py-10">
        <PageContainer>
          <div className="-mt-2">
            <ImageGrid images={studioJamilaServices.seatedDinner.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-10">
            <h3 className={sectionHeadingClass}>seated dinner experiences</h3>

            <div className={bodyClass}>
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
      <section className="py-8 md:py-10">
        <PageContainer>
          <div className="mt-6 md:mt-8">
            <ImageGrid images={studioJamilaServices.fingerFood.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-10">
            <h3 className={sectionHeadingClass}>{stripParens(studioJamilaServices.fingerFood.title)}</h3>

            <div className={bodyClass}>
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
      <section className="py-8 md:py-10">
        <PageContainer>
          <div className="mt-6 md:mt-8">
            <ImageGrid images={studioJamilaServices.installations.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-10">
            <h3 className={sectionHeadingClass}>{stripParens(studioJamilaServices.installations.title)}</h3>

            <div className={bodyClass}>
              <p>{studioJamilaServices.installations.paragraph}</p>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Drinks & service */}
      <section className="py-8 md:py-10">
        <PageContainer>
          <div className="mt-6 md:mt-8">
            <ImageGrid images={studioJamilaServices.drinksService.images} variant="five" aspect="4/5" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 md:mt-8 lg:grid-cols-[1.15fr_1.35fr] lg:gap-10">
            <h3 className={sectionHeadingClass}>{stripParens(studioJamilaServices.drinksService.title)}</h3>

            <div className={bodyClass}>
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
      <section className="py-8 md:py-10">
        <PageContainer>
          <div className="mt-0 grid grid-cols-1 gap-6 lg:grid-cols-[1.15fr_1.35fr] lg:gap-10">
            <h3 className={sectionHeadingClass}>{stripParens(studioJamilaServices.formats.title)}</h3>

            <div className={bodyClass}>
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

