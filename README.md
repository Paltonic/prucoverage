# PruCoverage — Next.js (TypeScript)

Kolaborasi dua situs agen: **LivProtektact** (perasa, pelengkap hidup) dan **Liko.beready** (pemikir, pengalih risiko).

| Rute | Halaman | Brand |
|---|---|---|
| `/` | PruCoverage: pintu masuk + kuis "hati atau pikiran?" | Netral (Fraunces + Manrope) |
| `/livprotektact` | Situs agen LivProtektact | Brand Guideline LivProtektact 2026 (Fredoka + Poppins, Indigo/Lavender/Blush) |
| `/liko-beready` | Situs agen Liko.beready | Brand Guideline @liko.beready (DM Serif Display + Plus Jakarta Sans + Caveat, Navy/Toska/Gold) |

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

Deploy ke Netlify atau Vercel langsung dari repo (Netlify otomatis memakai plugin Next.js).

**Saat mengganti isi repo lama:** hapus dulu semua file lama (terutama `*.js`, `jsconfig.json`, `next.config.mjs`, `package-lock.json`) lalu upload isi zip ini.

## Tampilan HP (Android)

- Header menempel di atas dengan menu hamburger (`components/MobileMenu.tsx`).
- Tombol tetap di bawah layar untuk WhatsApp/aksi utama, aman untuk area gesture (safe-area).
- Ukuran huruf, jarak, dan tombol (min. 44–54 px) menyesuaikan layar kecil; tombol hero jadi lebar penuh.
- Warna address bar Chrome mengikuti brand tiap halaman (`viewport.themeColor`).
- Bisa "Tambahkan ke layar utama" seperti aplikasi (`app/manifest.ts` + ikon).
- Input 16 px supaya Android/iOS tidak zoom otomatis saat mengetik.

## Yang perlu diisi

- `lib/site.ts`: nama agen LivProtektact, nomor lisensi AAJI kedua agen, nomor WhatsApp LivProtektact.
- Foto agen: ganti kotak "Foto agen" di `app/livprotektact/page.tsx` dan "Foto atau avatar Liko" di `app/liko-beready/page.tsx`.
- Teks bertanda `[SESUAIKAN]` / `[...]`: ganti dengan cerita asli.
- Logo LivProtektact di `public/` dipotong dari PDF guideline. Ganti dengan file master logo agar lebih tajam.

## Struktur

```
app/
  layout.tsx            font (next/font/google), metadata, viewport
  manifest.ts           PWA manifest
  icon.png, apple-icon.png
  globals.css           menu HP + tombol bawah (dipakai semua halaman)
  page.tsx              PruCoverage
  livprotektact/        page.tsx + liv.module.css
  liko-beready/         page.tsx + liko.module.css
components/             MobileMenu, Chooser, Faq, ConsultForm, Checklist, LikoLogo (.tsx)
lib/site.ts             data kontak
public/                 logo & ikon
```

Formulir tidak menyimpan data di server; isinya disusun jadi pesan WhatsApp ke nomor agen.
