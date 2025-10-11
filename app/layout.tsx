import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jhaser Meza | Full Stack Developer',
  description: 'Portafolio profesional de Jhaser Adner Meza Sihui - Ingeniero de Sistemas con más de 7 años de experiencia en desarrollo full stack',
  keywords: ['full stack developer', 'ingeniero de sistemas', '.NET', 'Angular', 'Node.js', 'React', 'AWS', 'Docker'],
  authors: [{ name: 'Jhaser Meza' }],
  openGraph: {
    title: 'Jhaser Meza | Full Stack Developer',
    description: 'Portafolio profesional de Jhaser Adner Meza Sihui',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth dark">
      <body className={inter.className}>
        <Script
          src="/suppress-devtools-error.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}