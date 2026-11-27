'use client';
import { useState } from 'react';
import type { Styles } from '../lib/site';

export type FaqItem = readonly [question: string, answer: string];

export default function Faq({ items, s }: { items: readonly FaqItem[]; s: Styles }) {
  const [open, setOpen] = useState<number>(0);
  return (
    <div className={s.faqList}>
      {items.map(([q, a], i) => {
        const isOpen = open === i;
        return (
          <div key={q} className={s.faqItem}>
            <button
              type="button"
              className={s.faqBtn}
              aria-expanded={isOpen}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {q}
              <span className={s.faqSign} aria-hidden="true">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <p id={`faq-${i}`} className={s.faqAnswer}>{a}</p>}
          </div>
        );
      })}
    </div>
  );
}
