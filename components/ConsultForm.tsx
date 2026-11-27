'use client';
import { useState, type FormEvent } from 'react';
import { waLink, type Styles } from '../lib/site';

type Props = {
  s: Styles;
  whatsapp: string;
  brand: string;
  selectLabel: string;
  options: readonly string[];
  labels: { name: string; story: string; submit: string };
};

/** Menyusun pesan lalu membuka WhatsApp agen. Tidak ada data yang disimpan di server. */
export default function ConsultForm({ s, whatsapp, brand, selectLabel, options, labels }: Props) {
  const [state, setState] = useState<'idle' | 'opened' | 'missing'>('idle');

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? '').trim();
    const text =
      `Halo ${brand}, aku ${get('nama')}.\n` +
      `${selectLabel}: ${get('pilihan')}\n` +
      (get('pesan') ? `Cerita singkat: ${get('pesan')}\n` : '') +
      `Nomor WA-ku: ${get('wa')}`;
    if (!whatsapp) {
      setState('missing');
      return;
    }
    window.open(waLink(whatsapp, text), '_blank', 'noopener');
    setState('opened');
  }

  return (
    <form className={s.form} onSubmit={onSubmit}>
      {state === 'opened' && <div role="status" className={s.formNote}>WhatsApp sudah dibuka. Tinggal tekan kirim di sana, ya.</div>}
      {state === 'missing' && <div role="status" className={s.formNote}>Nomor WhatsApp agen belum diisi di lib/site.ts.</div>}
      <label className={s.label}>{labels.name}
        <input className={s.input} name="nama" required autoComplete="name" />
      </label>
      <label className={s.label}>Nomor WhatsApp
        <input className={s.input} name="wa" type="tel" inputMode="tel" required autoComplete="tel" />
      </label>
      <label className={s.label}>{selectLabel}
        <select className={s.input} name="pilihan">{options.map((o) => <option key={o}>{o}</option>)}</select>
      </label>
      <label className={s.label}>{labels.story}
        <textarea className={s.input} name="pesan" rows={4} />
      </label>
      <button type="submit" className={s.submit}>{labels.submit}</button>
      <p className={s.formSmall}>Dengan mengirim, kamu setuju dihubungi melalui WhatsApp.</p>
    </form>
  );
}
