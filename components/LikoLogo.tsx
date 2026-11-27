// Logo "Lengkung Lindung" Liko (versi dark). Latar dibuat sedikit lebih terang (#1C2840)
// sesuai guideline saat logo diletakkan di atas latar navy.
export default function LikoLogo({ size = 44, label = 'Logo Liko' }: { size?: number; label?: string }) {
  const a11y = label ? { role: 'img' as const, 'aria-label': label } : { 'aria-hidden': true as const };
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" {...a11y}>
      <circle cx="256" cy="256" r="256" fill="#1C2840" />
      <path d="M136 268 A120 120 0 0 1 376 268" fill="none" stroke="#3CC4B2" strokeWidth="36" strokeLinecap="round" />
      <path d="M220 214 V362 H330" fill="none" stroke="#F4EFE6" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="294" cy="306" r="24" fill="#F2C14E" />
    </svg>
  );
}
