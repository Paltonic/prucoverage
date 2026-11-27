import LikoLogo from './LikoLogo';

/**
 * Logo Liko.beready: simbol "Lengkung Lindung" + tulisan "LIKO.BEREADY" sebagai teks asli.
 * Gaya mengikuti logo LivProtektact (tebal, aksen miring), warna dari brand guideline Liko.
 * variant "dark" = di atas latar navy (default), "light" = di atas latar terang.
 */
export default function LikoWordmark({ height = 44, variant = 'dark' }: { height?: number; variant?: 'dark' | 'light' }) {
  const ink = variant === 'dark' ? '#F3EEE6' : '#0F1827';
  const accent = variant === 'dark' ? '#3CC4B2' : '#1B6863';
  return (
    <span
      role="img"
      aria-label="Liko.beready"
      style={{ display: 'inline-flex', alignItems: 'center', gap: height * 0.26, lineHeight: 1 }}
    >
      <LikoLogo size={height} label="" />
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'var(--f-jakarta), system-ui, sans-serif',
          fontWeight: 800,
          fontSize: height * 0.5,
          letterSpacing: '0.02em',
          whiteSpace: 'nowrap',
          color: ink,
        }}
      >
        LIKO<span style={{ color: '#F2C14E' }}>.</span>
        <em style={{ color: accent, fontStyle: 'italic' }}>BEREADY</em>
      </span>
    </span>
  );
}
