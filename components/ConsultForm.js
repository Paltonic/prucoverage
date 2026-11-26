'use client';
import { useState } from 'react';
import { waLink } from '../lib/site';

/*
  Formulir konsultasi: menyusun pesan lalu membuka WhatsApp agen.
  Tidak ada data yang disimpan di server.
  Props: s (CSS module), whatsapp (nomor tanpa +), brand, selectLabel, options, labels
*/
export default function ConsultForm({ s, whatsapp, brand, selectLabel, options, labels }) {
  const [opened, setOpened] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const text =
      `Halo ${brand}, aku ${f.get('nama')}.\n` +
      `${selectLabel}: ${f.get('pilihan')}\n` +
      (f.get('pesan') ? `Cerita singkat: ${f.get('pesan')}\n` : '') +
      `Nomor WA-ku: ${f.get('wa')}`;
    if (!whatsapp) {
      setOpened('missing');
      return;
    }
    window.open(waLink(whatsapp, text), '_blank', 'noopener');
    setOpened(true);
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {opened === true && (
        <div role="status" className={s.formNote}>WhatsApp sudah dibuka. Tinggal tekan kirim di sana, ya.</div>
      )}
      {opened === 'missing' && (
        <div role="status" className={s.formNote}>Nomor WhatsApp agen belum diisi di <code>lib/site.js</code>.</div>
      )}
      <label className={s.label}>{labels.name}<input className={s.input} name="nama" required autoComplete="name" /></label>
      <label className={s.label}>Nomor WhatsApp<input className={s.input} name="wa" type="tel" required autoComplete="tel" /></label>
      <label className={s.label}>{selectLabel}
        <select className={s.input} name="pilihan">{options.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label className={s.label}>{labels.story}<textarea className={s.input} name="pesan" rows={4} /></label>
      <button type="submit" className={s.submit}>{labels.submit}</button>
      <p className={s.formSmall}>Dengan mengirim, kamu setuju dihubungi melalui WhatsApp.</p>
    </form>
  );
}
