import type { MetadataRoute } from 'next';

// Membuat situs bisa "Tambahkan ke layar utama" di Android dan tampil seperti aplikasi.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PruCoverage — LivProtektact × Liko.beready',
    short_name: 'PruCoverage',
    description: 'Pilih pendamping proteksimu: hati atau pikiran.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f7f6f2',
    theme_color: '#14282b',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/icon-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
