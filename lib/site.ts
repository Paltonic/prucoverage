// Ubah data kontak di satu tempat ini.
export const LIV = {
  agentName: 'Felicia Livana',
  license: '[NO. LISENSI AAJI]',
  whatsapp: '6287744943832',
  whatsappLabel: '0877-4494-3832',
  instagram: 'https://instagram.com/livprotektact',
} as const;

export const LIKO = {
  agentName: 'Frederick Liko',
  license: '[NO. LISENSI AAJI]',
  whatsapp: '62895611179149',
  whatsappLabel: '0895-6111-79149',
  instagram: 'https://instagram.com/liko.beready',
} as const;

export function waLink(number: string, text = ''): string {
  if (!number) return '#ngobrol';
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

export type Styles = Readonly<Record<string, string>>;
