import Link from 'next/link';
import Image from 'next/image';
import s from './liv.module.css';
import Faq from '../../components/Faq';
import ConsultForm from '../../components/ConsultForm';
import { LIV, waLink } from '../../lib/site';

export const metadata = {
  title: 'LivProtektact — Pelengkap Hidupmu',
  description: 'Live consciously, protect wisely, and grow together. Buat kamu yang siap sadar & cari panduan tanpa paksaan. #SaatnyaSadar',
};

const SERIES = [
  ['#LivsReminder', 'Tiny wake up call'], ['#LivsTips', 'Tips aplikatif'],
  ['#LivsSpill', 'Honest talk dan info terbaru'], ['#LivServes', 'Pelayanan klaim'],
  ['#LearnWithLiv', 'Belajar bareng Liv'], ['#LivExposes', 'Bongkar mitos dan mindset yang salah'],
  ['#LivsStory', 'Cerita dan pengalaman'], ['#LivsReflect', 'Renungan dan pertanyaan reflektif'],
];

const FAQS = [
  ['Aku harus langsung beli kalau ngobrol?', 'Gak sama sekali. Ngobrol dulu aja. Kalau ternyata kamu belum butuh, Liv akan bilang jujur.'],
  ['Kenapa disebut pelengkap hidup?', 'Karena proteksi bukan pusat hidupmu. Ia kepingan yang membuat rencana hidupmu lebih utuh saat hal tak terduga datang.'],
  ['Bisa ngobrol online?', 'Bisa, lewat WhatsApp atau video call, di waktu yang nyaman buat kamu.'],
  ['Gimana kalau nanti perlu klaim?', 'Liv menemanimu menyiapkan dokumen sampai pengajuan, sesuai ketentuan polis.'],
];

export default function LivProtektact() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerIn}>
          <Link href="#top" aria-label="LivProtektact, ke atas">
            <Image src="/livprotektact-logo.png" alt="LivProtektact" width={185} height={44} style={{ height: 44, width: 'auto' }} priority />
          </Link>
          <nav className={s.nav} aria-label="Utama">
            <a href="#arti">Tentang Liv</a>
            <a href="#seri">Seri konten</a>
            <a href="#agen">Agenmu</a>
            <a href="#faq">FAQ</a>
            <Link href="/" className={s.back}>← PruCoverage</Link>
          </nav>
          <a href="#ngobrol" className={s.btnSm}>Ngobrol yuk</a>
        </div>
      </header>

      <main id="top">
        <section className={s.hero}>
          <div className={s.heroText}>
            <div className={s.pill}>Pelengkap Hidupmu</div>
            <h1 className={s.h1}>Hidup dengan sadar, melindungi dengan <span style={{ color: '#9877A7' }}>bijak.</span></h1>
            <p className={s.lead}>
              Halo, Livians. LivProtektact menemanimu memahami kesehatan, kebiasaan, dan pilihan sehari-hari, termasuk soal
              proteksi. Buat kamu yang siap sadar dan cari panduan <b>tanpa paksaan</b>.
            </p>
            <div className={s.row}>
              <a href="#ngobrol" className={s.btn}>Yuk, ngobrol dulu</a>
              <a href={LIV.instagram} className={s.btnGhost} target="_blank" rel="noopener noreferrer">Ikuti @livprotektact</a>
            </div>
            <div className={s.hashtag}>#SaatnyaSadar</div>
          </div>
          <div className={s.heroArt}>
            <svg viewBox="0 0 440 460" aria-hidden="true">
              <path d="M40 460V210a180 180 0 0 1 360 0v250z" fill="#EEE0F9" />
              <path d="M90 460V220a130 130 0 0 1 260 0v240" fill="none" stroke="#D8BFE3" strokeWidth="2" />
              <path d="M220 440c0-40-20-60-50-80M220 440c0-40 20-60 50-80M220 440v-60M200 400c-20-6-40 0-60 14M240 400c20-6 40 0 60 14" stroke="#CBAADA" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M340 120c-34-6-56 14-58 48 34 6 58-14 58-48z" fill="#BE95D1" />
              <path d="M80 150c26-2 44 14 44 40-26 2-44-14-44-40z" fill="#CBAADA" />
            </svg>
            <Image src="/livprotektact-symbol.png" alt="" width={351} height={468} className={s.heroSymbol} />
          </div>
        </section>

        <section id="arti" className={s.dark}>
          <div className={s.section}>
            <div className={s.center}>
              <div className={s.lavLabel}>Tagline kami</div>
              <h2 className={s.tagline}>Live consciously, protect wisely, and grow together.</h2>
            </div>
            <div className={s.grid3}>
              <div className={s.meaning}><h3>LIV</h3><div className={s.lavLabel}>Live consciously</div><p>Hidup dengan sadar: mengenali tubuh, perasaan, dan kebiasaan sendiri.</p></div>
              <div className={s.meaning}><h3 style={{ fontStyle: 'italic', color: '#BE95D1' }}>PROTEK</h3><div className={s.lavLabel}>Protect wisely</div><p>Melindungi diri dengan bijak, berdasarkan informasi yang benar, bukan rasa takut.</p></div>
              <div className={s.meaning}><h3>TACT</h3><div className={s.lavLabel}>Grow together</div><p>Tumbuh bersama Livians, pelan-pelan dan tanpa paksaan.</p></div>
            </div>
          </div>
        </section>

        <section className={s.split}>
          <div className={s.splitText}>
            <h2 className={s.h2}>Proteksi itu kepingan, bukan segalanya.</h2>
            <p style={{ maxWidth: '30em' }}>
              Hidup tetap berjalan dengan atau tanpa proteksi. Tapi dengan kepingan ini, hidup jadi <b>lebih utuh</b>.
              Seperti akar, perlindungan sering tak terlihat, padahal justru itu yang menjaga kehidupan tetap bertahan.
            </p>
          </div>
          <div className={s.triad}>
            <div style={{ background: '#fff', color: '#5F6275' }}><b style={{ color: '#2A2D5A' }}>Lindungi</b>Bersiap sebelum risiko datang.</div>
            <div style={{ background: '#EEE0F9', color: '#4C3C54' }}><b style={{ color: '#2A2D5A' }}>Lengkapi</b>Kepingan yang melengkapi hidup.</div>
            <div style={{ background: '#2A2D5A', color: '#D4D5DE' }}><b style={{ color: '#fff' }}>Tumbuhkan</b>Lebih sehat, lebih sadar, tiap hari.</div>
          </div>
        </section>

        <section id="seri" className={s.white}>
          <div className={s.section}>
            <h2 className={s.h2}>Yang bisa kamu temukan bareng Liv</h2>
            <p style={{ color: '#5F6275', marginTop: 10 }}>Setiap seri punya tagarnya sendiri, biar gampang kamu cari lagi.</p>
            <div className={s.seriesGrid}>
              {SERIES.map(([tag, d]) => <div key={tag} className={s.series}><b>{tag}</b>{d}</div>)}
            </div>
          </div>
        </section>

        <section id="agen" className={s.agent}>
          <div className={s.photo}>Foto agen LivProtektact<br />(ganti dengan foto)</div>
          <div className={s.agentText}>
            <div style={{ color: '#72597D', fontWeight: 600 }}>Kenalan dengan agenmu</div>
            <h2 className={s.h2}>{LIV.agentName}</h2>
            <div style={{ fontWeight: 600 }}>Agen asuransi berlisensi · {LIV.license}</div>
            <p style={{ maxWidth: '34em' }}>[Cerita singkat kenapa kamu peduli soal proteksi. Mulai dari pengalaman sehari-hari, ditulis hangat dan jujur.]</p>
            <div className={s.promise}><span className={s.tick} aria-hidden="true">✓</span>Mengajak, bukan memaksa. Keputusan tetap di tanganmu.</div>
            <div className={s.promise}><span className={s.tick} aria-hidden="true">✓</span>Jujur soal manfaat dan batasan, tanpa janji berlebihan.</div>
            <div className={s.promise}><span className={s.tick} aria-hidden="true">✓</span>Menemani sampai klaim, bukan cuma sampai polis terbit.</div>
          </div>
        </section>

        <section id="faq" className={s.mist}>
          <div className={s.narrow}>
            <h2 className={s.h2}>Pertanyaan dari Livians</h2>
            <Faq items={FAQS} s={s} />
          </div>
        </section>

        <section id="ngobrol" className={s.contact}>
          <div className={s.contactText}>
            <h2 className={s.h2}>Yuk, cerita dulu. Gak harus langsung beli.</h2>
            <p>Ceritakan apa yang sedang kamu pikirkan soal dirimu dan keluargamu. Pesanmu akan terbuka di WhatsApp Liv, siap dikirim.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, fontWeight: 500 }}>
              {LIV.whatsapp ? <a href={waLink(LIV.whatsapp)} target="_blank" rel="noopener noreferrer">WhatsApp Liv</a> : <div>WhatsApp: [NOMOR WHATSAPP]</div>}
              <a href={LIV.instagram} target="_blank" rel="noopener noreferrer">Instagram: @livprotektact</a>
            </div>
          </div>
          <ConsultForm
            s={s}
            whatsapp={LIV.whatsapp}
            brand="Liv"
            selectLabel="Yang ingin aku jaga"
            options={['Diriku sendiri', 'Pasangan dan anak', 'Orang tua', 'Belum tahu, mau cerita dulu']}
            labels={{ name: 'Nama panggilan', story: 'Ceritakan sedikit (opsional)', submit: 'Kirim ceritaku' }}
          />
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.footerIn}>
          <div className={s.footerTop}>
            <div className={s.wordmark}>LIV <span style={{ color: '#BE95D1', fontStyle: 'italic' }}>PROTEK</span> TACT</div>
            <div className={s.hashtag} style={{ color: '#BE95D1', fontSize: 20 }}>#SaatnyaSadar</div>
          </div>
          <p className={s.small}>
            Akun pribadi agen, bukan akun resmi perusahaan. Bagian dari kolaborasi <Link href="/">PruCoverage</Link>. Manfaat dan
            ketentuan produk mengikuti polis yang diterbitkan perusahaan asuransi.
          </p>
        </div>
      </footer>
    </div>
  );
}
