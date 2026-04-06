import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { generateStudioJamilaOrganizationSchema } from '@/lib/studioJamilaSchema';

const neueMontreal = localFont({
  src: [
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/neue-montreal/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
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
    <html lang="en" className={`${neueMontreal.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-sjBg">
        <div className="flex min-h-screen flex-col bg-sjBg">{children}</div>
      </body>
    </html>
  );
}
