import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import Link from 'next/link';
import s from './liko.module.css';
import LikoLogo from '../../components/LikoLogo';
import Checklist from '../../components/Checklist';
import MobileMenu from '../../components/MobileMenu';
import { LIKO, waLink } from '../../lib/site';

export const metadata: Metadata = {
  title: 'Liko.beready — Asuransi tanpa ribet untuk anak muda Medan',
  description: 'Edukasi proteksi simpel dan jujur untuk usia 25–35. Konsultasi gratis, tanpa kewajiban beli.',
};

export const viewport: Viewport = { themeColor: '#0F1827' };

const PAINS: readonly (readonly [string, string])[] = [
  ['Aku masih muda dan sehat, belum butuh.', 'Justru saat muda dan sehat, pengajuan biasanya lebih mudah. Risiko sakit dan kecelakaan nggak nunggu kita siap.'],
  ['Takut salah pilih, takut klaimnya dipersulit.', 'Klaim berjalan sesuai isi polis. Kuncinya paham ketentuannya dan jujur saat pengajuan. Itu yang aku bantu.'],
  ['Gaji pas-pasan, bingung mulai dari mana.', 'Urutannya penting: BPJS aktif, dana darurat, lalu proteksi yang iurannya sesuai kemampuan.'],
];

const STEPS: readonly (readonly [string, ReactNode])[] = [
  ['Kamu bayar iuran rutin', <>Namanya <b>premi</b>, alias iuran rutinnya.</>],
  ['Dana dikelola perusahaan', 'Perusahaan asuransi yang terdaftar dan diawasi OJK.'],
  ['Risiko terjadi, biaya dibantu', <>Sesuai isi perjanjian, alias <b>polis</b>.</>],
];

const DICT: readonly (readonly [string, string])[] = [
  ['Premi', 'iuran rutin'], ['Polis', 'surat perjanjian'], ['Klaim', 'pengajuan bantuan biaya'], ['Tertanggung', 'orang yang dilindungi'],
];

const PROMISES: readonly (readonly [string, string])[] = [
  ['Tanpa istilah ribet', 'Setiap istilah langsung aku jelaskan pakai bahasa sehari-hari.'],
  ['Tanpa paksaan', 'Kamu yang memutuskan, kapan pun kamu siap.'],
  ['Jujur kalau belum butuh', 'Kalau yang kamu perlukan sekarang dana darurat dulu, aku akan bilang begitu.'],
];

const ext = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function LikoBeready() {
  const wa = waLink(LIKO.whatsapp, 'Halo Liko, aku mau konsultasi soal proteksi.');
  return (
    <div className={`${s.page} has-mbar`}>
      <header className={s.header}>
        <div className={s.headerIn}>
          <Link href="#top" className={s.brand}><LikoLogo size={40} label="" />liko.beready</Link>
          <nav className={`${s.nav} dnav`} aria-label="Utama">
            <a href="#belajar">Asuransi 101</a>
            <a href="#checklist">Checklist</a>
            <a href="#janji">Janji Liko</a>
            <Link href="/" className={s.back}>← PruCoverage</Link>
          </nav>
          <a href={wa} className={`${s.goldSm} dcta`} {...ext}>Chat aku</a>
          <MobileMenu
            links={[
              { href: '#belajar', label: 'Asuransi 101' },
              { href: '#checklist', label: 'Checklist' },
              { href: '#janji', label: 'Janji Liko' },
              { href: '/', label: '← Kembali ke PruCoverage' },
              { href: wa, label: 'Chat aku di WhatsApp', cta: true, external: true },
            ]}
          />
        </div>
      </header>

      <div className={s.top} id="top">
        <svg className={s.arc} viewBox="0 0 520 520" aria-hidden="true">
          <path d="M60 300a200 200 0 0 1 400 0" fill="none" stroke="#3CC4B2" strokeWidth="40" strokeLinecap="round" strokeOpacity=".9" />
        </svg>
        <section className={s.hero}>
          <div className={s.heroText}>
            <div className={s.tealLabel}>Edukasi proteksi untuk anak muda Medan</div>
            <h1 className={s.h1}>Asuransi itu kayak <span className={s.underline}>payung.</span></h1>
            <p className={s.lead}>
              Nggak dipakai tiap hari. Tapi pas hujan deras, kamu bakal bersyukur udah bawa. Aku Liko, dan di sini aku bantu
              kamu paham proteksi dengan simpel, jujur, dan tanpa dipaksa.
            </p>
            <div className={s.row}>
              <a href={wa} className={s.gold} {...ext}>Konsultasi gratis via WhatsApp</a>
              <a href="#belajar" className={s.outline}>Belajar dulu</a>
            </div>
            <div className={s.note}>psst... ngobrol dulu aja, gratis kok</div>
          </div>
          <div className={s.heroArt}>
            <svg viewBox="0 0 420 420" role="img" aria-label="Payung yang menaungi tiga sosok sederhana di tengah hujan">
              <g stroke="#3a4a63" strokeWidth="3" strokeLinecap="round"><path d="M60 40l-12 30M120 20l-12 30M300 30l-12 30M360 60l-12 30M40 140l-12 30M380 150l-12 30" /></g>
              <circle cx="210" cy="220" r="170" fill="#1C2840" />
              <path d="M70 210a140 140 0 0 1 280 0z" fill="#1B6863" />
              <path d="M70 210a140 140 0 0 1 280 0" fill="none" stroke="#3CC4B2" strokeWidth="14" strokeLinecap="round" />
              <path d="M210 70v-14" stroke="#F3EEE6" strokeWidth="8" strokeLinecap="round" />
              <path d="M210 210v100a20 20 0 0 1-40 0" fill="none" stroke="#F3EEE6" strokeWidth="8" strokeLinecap="round" />
              <g fill="#F3EEE6"><circle cx="150" cy="262" r="14" /><rect x="134" y="282" width="32" height="56" rx="14" /><circle cx="268" cy="262" r="14" /><rect x="252" y="282" width="32" height="56" rx="14" /></g>
              <circle cx="230" cy="300" r="11" fill="#F2C14E" /><rect x="218" y="316" width="24" height="34" rx="11" fill="#F2C14E" />
            </svg>
          </div>
        </section>
      </div>

      <main>
        <section className={s.section}>
          <div className={s.eyebrow}>Kamu nggak sendirian</div>
          <h2 className={s.h2}>Tiga kalimat yang paling sering aku dengar</h2>
          <div className={s.cards}>
            {PAINS.map(([q, a]) => (
              <div key={q} className={s.pain}>
                <div className={s.quote}>“{q}”</div>
                <div className={s.rule} />
                <p className={s.muted}><b className={s.likoSays}>Kata Liko:</b> {a}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="belajar" className={s.white}>
          <div className={s.section}>
            <div className={s.eyebrow}>Asuransi 101</div>
            <h2 className={s.h2}>Cara kerjanya, versi simpel</h2>
            <div className={s.cards}>
              {STEPS.map(([t, d], i) => (
                <div key={t} className={s.step}><div className={s.num}>{i + 1}</div><h3>{t}</h3><p className={s.muted}>{d}</p></div>
              ))}
            </div>
            <div className={s.dict}>
              <div className={s.dictHead}><h3>Kamus mini</h3><p>Simpan biar nggak lupa.</p></div>
              <div className={s.dictGrid}>
                {DICT.map(([k, v]) => <div key={k}><b>{k}</b> = {v}</div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="checklist"><Checklist /></section>

        <section id="janji" className={s.dark}>
          <div className={s.section}>
            <div className={s.intro}>
              <div className={s.avatar}>Foto atau<br />avatar Liko</div>
              <div className={s.introText}>
                <div className={s.tealKicker}>Kenalan dulu</div>
                <h2 className={s.h2}>Aku Liko, agen asuransi dari Medan.</h2>
                <p>
                  Aku pernah di digital marketing dan jadi pengajar, jadi aku terbiasa bikin hal ribet jadi simpel.
                  [SESUAIKAN: alasan aslimu jadi agen] · Lisensi: {LIKO.license}
                </p>
              </div>
            </div>
            <div className={s.cards}>
              {PROMISES.map(([t, d]) => (
                <div key={t} className={s.promise}><div className={s.check} aria-hidden="true">✓</div><h3>{t}</h3><p>{d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className={s.cta}>
          <h2 className={s.ctaTitle}>Bingung mulai dari mana? <span className={s.ctaAccent}>Ngobrol dulu aja.</span></h2>
          <div className={s.flow}>
            <span>Chat aku</span><i aria-hidden="true">→</i>
            <span>Ceritakan kondisimu</span><i aria-hidden="true">→</i>
            <span>Kita petakan kebutuhanmu</span>
          </div>
          <div className={s.badge}>Gratis · Tanpa kewajiban beli</div>
          <a href={wa} className={s.navyBtn} {...ext}>WhatsApp: {LIKO.whatsappLabel}</a>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.footerIn}>
          <div className={s.footerTop}>
            <div className={s.footerBrand}><LikoLogo size={36} label="" />@liko.beready</div>
            <a href={LIKO.instagram} {...ext}>Instagram</a>
          </div>
          <p className={s.small}>
            Akun pribadi agen, bukan akun resmi perusahaan. Bagian dari kolaborasi <Link href="/">PruCoverage</Link>. Setiap
            perlindungan punya ketentuan yang mengikuti polis yang diterbitkan perusahaan asuransi.
          </p>
        </div>
      </footer>

      <div className="mbar">
        <a href="#checklist" className={s.barAlt}>Checklist</a>
        <a href={wa} className={s.barMain} {...ext}>Chat aku</a>
      </div>
    </div>
  );
}
