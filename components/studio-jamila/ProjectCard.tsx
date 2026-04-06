import Image from 'next/image';

export type ProjectCardData = {
  slug: string;
  title: string;
  image: { src: string; alt: string };
};

export default function ProjectCard({ project }: { project: ProjectCardData }) {
  const extraImageClass = project.image.src.includes('/byredo-image.jpeg')
    ? ' scale-[1.14]'
    : project.image.src.includes('/exercere-image.jpeg')
      ? ' scale-[2.2] object-[50%_92%]'
      : '';

  return (
    <article className="group w-full max-w-[240px] sm:max-w-[230px] md:max-w-[210px] lg:max-w-[180px] xl:max-w-[190px]">
      <div className="relative overflow-hidden">
        <div className="relative aspect-[4/5] w-full">
          {project.image.src.endsWith('.svg') ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={1200}
              height={900}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              unoptimized
              className={`h-full w-full object-cover${extraImageClass}`}
            />
          ) : (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className={`object-cover${extraImageClass}`}
              unoptimized
            />
          )}
        </div>
      </div>
      <h3 className="mt-4 max-w-full text-left text-sm font-medium uppercase leading-snug tracking-[-0.02em] text-[#6A0C16] md:text-base">
        {project.title}
      </h3>
    </article>
  );
}

