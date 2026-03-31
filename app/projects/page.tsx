import PageContainer from '@/components/studio-jamila/PageContainer';
import SectionTitle from '@/components/studio-jamila/SectionTitle';
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
          <SectionTitle className="text-left text-sjFg">(selected projects)</SectionTitle>
          <div className="mt-10">
            <ProjectGrid projects={projects} />
          </div>
        </PageContainer>
      </section>
    </div>
  );
}

