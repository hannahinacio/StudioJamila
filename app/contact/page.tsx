import Image from 'next/image';
import { studioJamilaContact } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';
import SJSectionTitle from '@/components/studio-jamila/SectionTitle';
import SplitSection from '@/components/studio-jamila/SplitSection';
import ContactInfoBlock from '@/components/studio-jamila/ContactInfoBlock';
export default function ContactPage() {
  return (
    <div className="-mt-20 md:-mt-24">
      <section className="py-20">
        <PageContainer>
          <SplitSection
            left={
              <div className="flex flex-col gap-10">
                <SJSectionTitle className="text-left text-sjFg">{studioJamilaContact.title}</SJSectionTitle>
                <p className="max-w-[60ch] text-[18px] font-normal leading-[1.7] !text-black">{studioJamilaContact.intro}</p>

                <div className="mt-2 space-y-10">
                  <ContactInfoBlock
                    label={studioJamilaContact.emailLabel}
                    value={
                      <a className="!text-sjAccent transition-opacity duration-200 hover:opacity-80" href={`mailto:${studioJamilaContact.email}`}>
                        {studioJamilaContact.email}
                      </a>
                    }
                  />

                  <ContactInfoBlock
                    label={studioJamilaContact.updatesLabel}
                    value={
                      <span className="!text-black">
                        {studioJamilaContact.updatesText}{' '}
                        <a
                          href="https://www.instagram.com/studiojamila/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="!text-sjAccent transition-opacity duration-200 hover:opacity-80"
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
              <div className="relative mx-auto w-full max-w-[380px] overflow-hidden">
                {studioJamilaContact.image.src.endsWith('.svg') ? (
                  <Image
                    src={studioJamilaContact.image.src}
                    alt={studioJamilaContact.image.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="h-auto w-full object-contain"
                    priority
                    unoptimized
                  />
                ) : (
                  <Image
                    src={studioJamilaContact.image.src}
                    alt={studioJamilaContact.image.alt}
                    width={1200}
                    height={1600}
                    sizes="(max-width: 768px) 100vw, 520px"
                    className="h-auto w-full object-contain"
                    priority
                  />
                )}
              </div>
            }
          />
        </PageContainer>
      </section>
    </div>
  );
}

