import Image from 'next/image';
import { studioJamilaAbout } from '@/data/studioJamila';
import PageContainer from '@/components/studio-jamila/PageContainer';

const stripParens = (value: string) => value.replace(/[()]/g, '');

function splitTeamTitle(title: string): { left: string; right: string } {
  const words = title.trim().split(/\s+/).filter(Boolean);
  if (words.length < 2) return { left: title, right: '' };
  const right = words.pop() as string;
  return { left: words.join(' '), right };
}

export default function AboutPage() {
  const teamHeading = stripParens(studioJamilaAbout.team.title);
  const { left: teamLeft, right: teamRight } = splitTeamTitle(teamHeading);

  return (
    <div className="pb-4 md:pb-8">
      {/* Main story: ABOUT label + image left / text right (matches editorial mock) */}
      <section className="pb-10 pt-0 sm:pt-1 md:pb-16 md:pt-4">
        <PageContainer>
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:items-stretch md:gap-10 xl:gap-14">
            {/* Portrait — narrower when stacked; full 5-col width from md */}
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[min(100%,280px)] overflow-hidden bg-sjLine/15 sm:max-w-[320px] md:mx-0 md:max-w-none md:col-span-5 md:self-start">
              {studioJamilaAbout.portrait.src.endsWith('.svg') ? (
                <Image
                  src={studioJamilaAbout.portrait.src}
                  alt={studioJamilaAbout.portrait.alt}
                  width={1200}
                  height={900}
                  sizes="(max-width: 767px) 320px, 40vw"
                  className="h-full w-full object-cover"
                  priority
                  unoptimized
                />
              ) : (
                <Image
                  src={studioJamilaAbout.portrait.src}
                  alt={studioJamilaAbout.portrait.alt}
                  fill
                  sizes="(max-width: 767px) 320px, 40vw"
                  className="object-cover"
                  priority
                  unoptimized
                />
              )}
            </div>

            {/* ABOUT + flex spacer (md+) so sign-off aligns with image bottom */}
            <div className="flex min-h-0 flex-col md:col-span-7 md:h-full md:min-h-0">
              <p
                className="mb-8 text-sm font-medium uppercase tracking-[-0.02em] md:mb-0 md:shrink-0"
                style={{ color: '#6A0C16' }}
              >
                {stripParens(studioJamilaAbout.title)}
              </p>
              <div
                className="hidden min-h-0 md:block md:flex-1"
                aria-hidden
              />
              <div
                className="w-full min-w-0 space-y-4 text-[14px] font-normal leading-[1.45] tracking-[-0.02em] sm:text-[15px] md:text-[16px] md:leading-[1.5] md:shrink-0"
                style={{ color: '#6A0C16' }}
              >
                {studioJamilaAbout.biography.map((para, idx) => (
                  <p key={`${idx}-${para.slice(0, 24)}`}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </PageContainer>
      </section>

      {/* Meet the team — flanking on md+; small screens: title above image */}
      <section className="pt-5 pb-10 md:py-16">
        <PageContainer>
          <h2 className="sr-only">{teamHeading}</h2>
          <div className="flex flex-col items-center gap-3 md:flex-row md:items-center md:gap-6 lg:gap-10 xl:gap-14">
            <p
              className="order-1 text-center text-sm font-medium uppercase tracking-[-0.02em] whitespace-nowrap md:hidden"
              style={{ color: '#6A0C16' }}
              aria-hidden
            >
              {teamHeading}
            </p>

            <p
              className="order-2 hidden flex-1 text-right text-sm font-medium uppercase tracking-[-0.02em] md:order-1 md:block lg:text-base"
              style={{ color: '#6A0C16' }}
              aria-hidden
            >
              {teamLeft}
            </p>

            <div className="relative order-2 aspect-[3/4] w-full max-w-[min(100%,260px)] shrink-0 overflow-hidden sm:max-w-[300px] md:order-2 md:max-w-[min(32vw,360px)]">
              <Image
                src={studioJamilaAbout.team.image.src}
                alt={studioJamilaAbout.team.image.alt}
                fill
                sizes="(max-width: 767px) 300px, 32vw"
                className="object-cover"
                unoptimized
              />
            </div>

            <p
              className="order-3 hidden flex-1 text-left text-sm font-medium uppercase tracking-[-0.02em] md:block lg:text-base"
              style={{ color: '#6A0C16' }}
              aria-hidden
            >
              {teamRight}
            </p>
          </div>
        </PageContainer>
      </section>

      {/* Team bios — three columns, burgundy type (ref) */}
      <section className="-mt-[20px] bg-sjBg py-12 md:py-20">
        <PageContainer>
          <ul className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-8 lg:gap-12 xl:gap-16">
            {studioJamilaAbout.teamBios.map(bio => (
              <li key={bio.name} className="flex min-w-0 flex-col text-left">
                <h3
                  className="text-sm font-medium uppercase tracking-[-0.02em] md:text-base"
                  style={{ color: '#6A0C16' }}
                >
                  {stripParens(bio.name)}
                </h3>
                <p
                  className="mt-5 text-[14px] font-normal leading-[1.65] tracking-[-0.02em] md:mt-6 md:text-[15px] md:leading-[1.7]"
                  style={{ color: '#6A0C16' }}
                >
                  {bio.text}
                </p>
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      {/* Collaborators — full-width maroon band, white centered type (ref) */}
      <section
        className="w-full px-4 py-9 sm:px-6 sm:py-12 md:px-10 md:py-18"
        style={{ backgroundColor: '#700b10' }}
        aria-label="Collaborators"
      >
        <p className="mx-auto max-w-[76rem] text-center text-[15px] font-normal leading-[1.35] tracking-[-0.02em] text-white sm:text-[16px] sm:leading-[1.38] md:text-[17px] md:leading-[1.4]">
          {studioJamilaAbout.collaboratorsText}
        </p>
      </section>
    </div>
  );
}
