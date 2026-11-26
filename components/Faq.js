'use client';
import { useState } from 'react';

// s = CSS module object from the page: faqItem, faqBtn, faqSign, faqAnswer
export default function Faq({ items, s }) {
  const [open, setOpen] = useState(0);
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
