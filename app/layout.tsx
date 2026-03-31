import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import SiteHeader from '@/components/studio-jamila/SiteHeader';
import SiteFooter from '@/components/studio-jamila/SiteFooter';
import { generateStudioJamilaOrganizationSchema } from '@/lib/studioJamilaSchema';

const mierBBlack = localFont({
  src: '../public/fonts/MierB-Black.ttf',
  weight: '900',
  variable: '--font-mier-b-black',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Studio Jamila',
    template: '%s | Studio Jamila',
  },
  description: 'Catering and event experiences for fashion brands and private celebrations.',
  keywords: ['catering', 'events', 'fashion brands', 'Berlin', 'creative direction'],
  authors: [{ name: 'Studio Jamila' }],
  metadataBase: new URL('https://studiojamila.com'),
  icons: {
    icon: '/vhaifavi.png',
    shortcut: '/vhaifavi.png',
    apple: '/vhaifavi.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studiojamila.com',
    siteName: 'Studio Jamila',
    title: 'Studio Jamila',
    description: 'Catering and event experiences for fashion brands and private celebrations.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Studio Jamila',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Jamila',
    description: 'Catering and event experiences for fashion brands and private celebrations.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const organizationSchema = generateStudioJamilaOrganizationSchema();

  return (
    <html lang="en" className={`${mierBBlack.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <div className="min-h-screen flex flex-col bg-white">
          <SiteHeader />
          <main className="flex-1 pt-[74px]">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
