import PageContainer from '@/components/studio-jamila/PageContainer';
import ProjectGrid from '@/components/studio-jamila/ProjectGrid';
import type { ProjectCardData } from '@/components/studio-jamila/ProjectCard';
import { studioJamilaProjects } from '@/data/studioJamila';

export default function ProjectsPage() {
  const projects: ProjectCardData[] = studioJamilaProjects.map(p => ({
    slug: p.slug,
    title: p.title,
    image: p.coverImage,
  }));

  return (
    <div className="-mt-20 md:-mt-24">
      <section className="py-20">
        <PageContainer>
          <h2 className="text-center text-sm font-medium uppercase tracking-[-0.02em] text-[#6A0C16] md:text-base">
            selected projects
          </h2>
          <div className="mt-8 md:mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

