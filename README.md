# PruCoverage — Next.js

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

## Yang perlu diisi

- `lib/site.js`: nama agen LivProtektact, nomor lisensi AAJI kedua agen, nomor WhatsApp LivProtektact.
- Foto agen: ganti kotak "Foto agen" di `app/livprotektact/page.js` dan "Foto atau avatar Liko" di `app/liko-beready/page.js`.
- Teks bertanda `[SESUAIKAN]` / `[...]`: ganti dengan cerita asli.
- Logo LivProtektact di `public/` dipotong dari PDF guideline. Ganti dengan file master logo agar lebih tajam.

## Struktur

```
app/
  layout.js             font (next/font/google) + metadata
  globals.css
  page.js               PruCoverage
  page.module.css
  livprotektact/        page.js + liv.module.css
  liko-beready/         page.js + liko.module.css
components/
  Chooser.js            kuis hati/pikiran (client)
  Faq.js                FAQ buka-tutup (client)
  ConsultForm.js        formulir → membuka WhatsApp agen dengan pesan terisi (client)
  Checklist.js          checklist sebelum beli asuransi (client)
  LikoLogo.js           logo Liko (SVG)
lib/site.js             data kontak
public/                 logo
```

Formulir tidak menyimpan data di server; isinya disusun jadi pesan WhatsApp ke nomor agen.
