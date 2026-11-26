// Ubah data kontak di satu tempat ini.
export const LIV = {
  agentName: '[NAMA AGEN LIVPROTEKTACT]',
  license: '[NO. LISENSI AAJI]',
  whatsapp: '', // contoh: '6281234567890' (tanpa + dan spasi)
  instagram: 'https://instagram.com/livprotektact',
};

export const LIKO = {
  license: '[NO. LISENSI AAJI]',
  whatsapp: '62895611179149',
  whatsappLabel: '0895-6111-79149',
  instagram: 'https://instagram.com/liko.beready',
};

export const waLink = (number, text = '') =>
  number ? `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ''}` : '#';
