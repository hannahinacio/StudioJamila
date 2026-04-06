/**
 * Full-width intro strip on home: maroon bg, cream text (same as page sjBg).
 */
const INTRO_BG = '#700b10';

const copy =
  'Studio Jamila is a Berlin-based catering and set design studio creating immersive, sensory-driven experiences. Blending food with thoughtful styling and visual storytelling, each project is shaped with a refined, editorial eye where every detail contributes to a cohesive and memorable atmosphere.';

export default function HomeLabIntroBand() {
  return (
    <section
      className="w-full px-4 py-12 sm:px-6 sm:py-16 md:px-10 md:py-24"
      style={{ backgroundColor: INTRO_BG }}
      aria-label="About Studio Jamila"
    >
      <p className="mx-auto max-w-[76rem] text-center text-[15px] font-normal leading-[1.22] tracking-[-0.025em] text-sjBg sm:text-[17px] sm:leading-[1.2] md:text-[22px] md:leading-[1.22] md:tracking-[-0.03em]">
        {copy}
      </p>
    </section>
  );
}
