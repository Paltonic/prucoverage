'use client';
import { useRef } from 'react';
import Link from 'next/link';

export type MenuLink = { href: string; label: string; cta?: boolean; external?: boolean };

/** Menu hamburger untuk layar HP. Tersembunyi di desktop (lihat .mmenu di globals.css). */
export default function MobileMenu({ links, label = 'Menu' }: { links: MenuLink[]; label?: string }) {
  const ref = useRef<HTMLDetailsElement>(null);
  const close = () => {
    if (ref.current) ref.current.open = false;
  };

  return (
    <details className="mmenu" ref={ref}>
      <summary aria-label={label}>
        <svg className="ic-open" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
        <svg className="ic-close" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </summary>
      <nav className="mmenu-panel" aria-label={label}>
        {links.map((l) => {
          const cls = l.cta ? 'mmenu-cta' : undefined;
          if (l.external) {
            return (
              <a key={l.href + l.label} href={l.href} className={cls} target="_blank" rel="noopener noreferrer" onClick={close}>
                {l.label}
              </a>
            );
          }
          if (l.href.startsWith('#')) {
            return (
              <a key={l.href + l.label} href={l.href} className={cls} onClick={close}>
                {l.label}
              </a>
            );
          }
          return (
            <Link key={l.href + l.label} href={l.href} className={cls} onClick={close}>
              {l.label}
            </Link>
          );
        })}
      </nav>
    </details>
  );
}
