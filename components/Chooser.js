'use client';
import { useState } from 'react';
import Link from 'next/link';
import s from '../app/page.module.css';

export default function Chooser() {
  const [pick, setPick] = useState('');
  return (
    <>
      <div className={s.chooseGrid}>
        <button type="button" aria-pressed={pick === 'hati'} onClick={() => setPick('hati')}
          className={`${s.choice} ${pick === 'hati' ? s.choiceHati : ''}`}>
          “Orang-orang yang aku sayangi.”
        </button>
        <button type="button" aria-pressed={pick === 'pikir'} onClick={() => setPick('pikir')}
          className={`${s.choice} ${pick === 'pikir' ? s.choicePikir : ''}`}>
          “Risikonya apa, dan biayanya berapa?”
        </button>
      </div>
      <div aria-live="polite">
        {pick === 'hati' && (
          <div className={s.result}>
            <p>Kamu memilih dengan hati. <b>LivProtektact</b> akan terasa paling dekat.</p>
            <Link href="/livprotektact" className={s.btnLiv}>Masuk ke LivProtektact →</Link>
          </div>
        )}
        {pick === 'pikir' && (
          <div className={s.result}>
            <p>Kamu memilih dengan pikiran. <b>Liko.beready</b> akan terasa paling pas.</p>
            <Link href="/liko-beready" className={s.btnLiko}>Masuk ke Liko.beready →</Link>
          </div>
        )}
      </div>
    </>
  );
}
