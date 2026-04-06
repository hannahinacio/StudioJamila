import type { ProjectCardData } from './ProjectCard';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ projects }: { projects: ProjectCardData[] }) {
  return (
    <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-5 lg:gap-4 xl:gap-5">
      {projects.map(project => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}

