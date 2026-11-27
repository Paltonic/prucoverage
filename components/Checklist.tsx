'use client';
import { useState } from 'react';
import s from '../app/liko-beready/liko.module.css';

const ITEMS: readonly (readonly [string, string])[] = [
  ['Tahu tujuanmu', 'mau melindungi apa dan siapa'],
  ['Cek anggaran', 'iuran tidak mengganggu kebutuhan pokok dan dana darurat'],
  ['Pahami manfaat dan pengecualian', 'yang ditanggung dan yang tidak'],
  ['Tanya masa tunggu', 'periode awal saat perlindungan tertentu belum aktif'],
  ['Jujur mengisi data kesehatan', 'ini yang paling menentukan lancarnya klaim'],
  ['Cek perusahaan dan agen', 'terdaftar dan diawasi OJK, agen berlisensi'],
  ['Pahami cara klaim', 'dokumen apa saja dan ke mana mengajukannya'],
];

export default function Checklist() {
  const [on, setOn] = useState<Record<number, boolean>>({});
  const done = ITEMS.filter((_, i) => on[i]).length;
  const pct = Math.round((done / ITEMS.length) * 100);
  return (
    <div className={s.checkWrap}>
      <div className={s.checkIntro}>
        <div className={s.eyebrow}>Save dulu!</div>
        <h2 className={s.h2}>Checklist sebelum kamu beli asuransi</h2>
        <p className={s.muted}>Beli HP aja riset berhari-hari. Masa beli perlindungan bertahun-tahun cuma modal “kata teman”? Centang yang sudah kamu cek.</p>
        <div className={s.checkCount} aria-live="polite">{done}<span> / {ITEMS.length} sudah dicek</span></div>
        <div className={s.bar} role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
          <div className={s.barFill} style={{ width: `${pct}%` }} />
        </div>
      </div>
      <div className={s.checkList}>
        {ITEMS.map(([t, d], i) => (
          <button key={t} type="button" aria-pressed={!!on[i]} className={s.checkItem}
            onClick={() => setOn((prev) => ({ ...prev, [i]: !prev[i] }))}>
            <span className={`${s.box} ${on[i] ? s.boxOn : ''}`} aria-hidden="true">{on[i] ? '✓' : ''}</span>
            <span><b>{t}</b> · {d}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
