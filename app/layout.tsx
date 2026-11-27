import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import {
  Fraunces, Manrope, Fredoka, Poppins, DM_Serif_Display, Plus_Jakarta_Sans, Caveat,
} from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--f-fraunces' });
const manrope = Manrope({ subsets: ['latin'], variable: '--f-manrope' });
const fredoka = Fredoka({ subsets: ['latin'], weight: ['500', '600', '700'], variable: '--f-fredoka' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-poppins' });
const dmSerif = DM_Serif_Display({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--f-dmserif' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--f-jakarta' });
const caveat = Caveat({ subsets: ['latin'], weight: '600', variable: '--f-caveat' });

export const metadata: Metadata = {
  title: 'PruCoverage — Kolaborasi LivProtektact × Liko.beready',
  description: 'Pilih pendamping proteksimu: LivProtektact untuk yang perasa, Liko.beready untuk yang pemikir.',
  applicationName: 'PruCoverage',
  appleWebApp: { capable: true, title: 'PruCoverage', statusBarStyle: 'default' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#f7f6f2',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const fonts = [fraunces, manrope, fredoka, poppins, dmSerif, jakarta, caveat].map((f) => f.variable).join(' ');
  return (
    <html lang="id" className={fonts}>
      <body>{children}</body>
    </html>
  );
}
