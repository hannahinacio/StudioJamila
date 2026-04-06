import Image from 'next/image';
import { studioJamilaContact } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SplitSection from '@/components/studio-jamila/SplitSection';
import ContactInfoBlock from '@/components/studio-jamila/ContactInfoBlock';

export default function ContactPage() {
  const title = studioJamilaContact.title.replace(/[()]/g, '');

  return (
    <div>
      <section className="pb-12 pt-0 sm:pt-1 md:pb-16 md:pt-4">
        <PageContainer>
          <SplitSection
            left={
              <div className="flex min-h-0 flex-col gap-6 lg:h-full lg:justify-between lg:gap-0">
                <div className="shrink-0 space-y-4 pt-0 text-center md:space-y-5 md:pt-0 md:text-left">
                  <h2 className="text-sm font-medium uppercase tracking-[-0.02em] text-[#6A0C16] md:text-base">
                    {title}
                  </h2>
                  <p className="max-w-[60ch] mx-auto text-sm font-normal leading-[1.5] tracking-[-0.02em] text-[#6A0C16] md:mx-0 md:text-base">
                    {studioJamilaContact.intro}
                  </p>
                </div>

                <div className="shrink-0 space-y-8 md:space-y-10 lg:pt-0">
                  <ContactInfoBlock
                    label={studioJamilaContact.emailLabel}
                    value={
                      <a
                        className="underline decoration-[#6A0C16]/30 underline-offset-2 transition-opacity duration-200 hover:opacity-80"
                        href={`mailto:${studioJamilaContact.email}`}
                      >
                        {studioJamilaContact.email}
                      </a>
                    }
                  />

                  <ContactInfoBlock
                    label={studioJamilaContact.updatesLabel}
                    value={
                      <span>
                        {studioJamilaContact.updatesText}{' '}
                        <a
                          href="https://www.instagram.com/studiojamila/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline decoration-[#6A0C16]/30 underline-offset-2 transition-opacity duration-200 hover:opacity-80"
                        >
                          {studioJamilaContact.handle}
                        </a>
                      </span>
                    }
                  />
                </div>
              </div>
            }
            right={
              <div className="flex w-full flex-col items-center justify-start lg:h-full lg:items-center lg:justify-end">
                <div className="relative aspect-[3/4] w-full max-w-[min(100%,280px)] overflow-hidden sm:max-w-[320px] lg:max-w-[380px] xl:max-w-[420px]">
                  <Image
                    src={studioJamilaContact.image.src}
                    alt={studioJamilaContact.image.alt}
                    fill
                    sizes="(max-width: 767px) 320px, (max-width: 1279px) 380px, 420px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            }
          />
        </PageContainer>
      </section>
    </div>
  );
}

