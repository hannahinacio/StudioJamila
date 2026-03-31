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
    <article className="group">
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
            />
          )}
        </div>
      </div>
      <h3 className="mt-6 text-[18px] font-normal leading-[1.7] !text-black">
        {project.title}
      </h3>
    </article>
  );
}

