import type { StudioJamilaProject } from '@/data/studioJamila';

export function generateStudioJamilaOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Studio Jamila',
    url: 'https://studiojamila.com',
    email: 'hi@studiojamila.com',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hi@studiojamila.com',
      contactType: 'customer service',
    },
    sameAs: ['https://instagram.com/studiojamila', 'https://tiktok.com/@studiojamila'],
  };
}

export function generateStudioJamilaProjectSchema(project: StudioJamilaProject) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.coverImage.src,
    url: `https://studiojamila.com/projects/${project.slug}`,
    dateCreated: `${project.year}-01-01`,
    keywords: project.services.join(', '),
    creator: {
      '@type': 'Organization',
      name: 'Studio Jamila',
    },
    about: {
      '@type': 'Thing',
      name: project.client,
    },
  };
}

