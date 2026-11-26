import Link from 'next/link';
import Image from 'next/image';
import s from './page.module.css';
import Chooser from '@/components/Chooser';
import LikoLogo from '@/components/LikoLogo';

export default function Home() {
  return (
    <div className={s.page}>
      <header className={s.header}>
        <div className={s.headerIn}>
          <Link href="/" className={s.brand}>
            <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M16 2.5 5 7v8.2c0 7 4.7 12.6 11 14.3 6.3-1.7 11-7.3 11-14.3V7z" fill="none" stroke="#14282b" strokeWidth="1.6" />
              <path d="M16 7v18c-4.2-1.4-7-5.3-7-9.8V10z" fill="#BE95D1" />
              <path d="M16 7v18c4.2-1.4 7-5.3 7-9.8V10z" fill="#3CC4B2" />
            </svg>
            PruCoverage
          </Link>
          <nav className={s.nav} aria-label="Utama">
            <Link href="/livprotektact">LivProtektact</Link>
            <Link href="/liko-beready">Liko.beready</Link>
            <a href="#pilih">Bantu aku memilih</a>
          </nav>
        </div>
      </header>

      <main>
        <section className={s.hero}>
          <div className={s.eyebrow}><span />Kolaborasi LivProtektact × Liko.beready<span /></div>
          <h1 className={s.h1}>Kamu memilih dengan <em>hati</em>, atau dengan <em>pikiran?</em></h1>
          <p className={s.lead}>
            Dua agen, dua cara bercerita, satu tujuan: kamu dan keluargamu terlindungi. Pilih pendamping yang paling
            terasa cocok, lalu masuk ke ruangnya.
          </p>
        </section>

        <section className={s.doors} aria-label="Pilih pendamping">
          <Link href="/livprotektact" className={`${s.door} ${s.doorLiv}`}>
            <svg className={s.deco} style={{ right: -40, bottom: -40 }} width="260" height="260" viewBox="0 0 260 260" aria-hidden="true">
              <path d="M30 260V130a100 100 0 0 1 200 0v130z" fill="#EEE0F9" />
              <path d="M130 200c-30-10-46-40-40-80 34 6 52 34 40 80zM130 200c30-10 46-40 40-80-34 6-52 34-40 80z" fill="#BE95D1" />
            </svg>
            <Image src="/livprotektact-logo.png" alt="LivProtektact" width={219} height={52} style={{ height: 52, width: 'auto' }} priority />
            <div>
              <div className={s.doorKicker}>Untukmu yang perasa</div>
              <h2 className={s.doorTitleLiv}>Pelengkap hidupmu, <span style={{ color: '#9877A7' }}>tanpa paksaan.</span></h2>
              <p className={s.doorText}>
                Mulai dari perasaanmu: siapa yang ingin kamu jaga, mimpi apa yang ingin tetap tumbuh. Pelan-pelan, bareng
                Livians lainnya.
              </p>
            </div>
            <div className={s.tags}><span>Hangat</span><span>Reflektif</span><span>#SaatnyaSadar</span></div>
            <span className={s.doorCta}>Masuk ke LivProtektact →</span>
          </Link>

          <Link href="/liko-beready" className={`${s.door} ${s.doorLiko}`}>
            <svg className={s.deco} style={{ right: -90, top: -90 }} width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
              <circle cx="150" cy="150" r="120" fill="none" stroke="#3CC4B2" strokeWidth="22" strokeOpacity=".35" />
            </svg>
            <div className={s.likoBrand}><LikoLogo size={52} />liko.beready</div>
            <div>
              <div className={s.doorKicker}>Untukmu yang pemikir</div>
              <h2 className={s.doorTitleLiko}>
                Pengalih risiko, dijelaskan <span style={{ borderBottom: '3px solid #F2C14E' }}>tanpa ribet.</span>
              </h2>
              <p className={s.doorText}>
                Mulai dari logika: risikonya apa, biayanya berapa, urutannya bagaimana. Dijelaskan seperti teman sebaya,
                pakai analogi sehari-hari.
              </p>
            </div>
            <div className={s.tags}><span>Logis</span><span>Edukatif</span><span>Medan</span></div>
            <span className={s.doorCta}>Masuk ke Liko.beready →</span>
          </Link>
        </section>

        <section id="pilih" className={s.choose}>
          <div className={s.chooseIn}>
            <h2 className={s.h2}>Masih ragu? Jawab satu pertanyaan ini.</h2>
            <p style={{ color: '#4b5d60', fontSize: 17 }}>Saat mendengar kata “asuransi”, apa yang pertama kali terlintas di kepalamu?</p>
            <Chooser />
          </div>
        </section>

        <section className={s.equation} aria-label="Hati ditambah pikiran sama dengan tenang">
          <div className={s.eqItem}><div className={s.eqWord} style={{ color: '#72597D' }}>Hati</div><div className={s.eqSmall}>LivProtektact · untuk siapa kita melindungi</div></div>
          <div className={s.eqOp} aria-hidden="true">+</div>
          <div className={s.eqItem}><div className={s.eqWord} style={{ color: '#1B6863' }}>Pikiran</div><div className={s.eqSmall}>Liko.beready · bagaimana risikonya dihitung</div></div>
          <div className={s.eqOp} aria-hidden="true">=</div>
          <div className={s.eqItem}><div className={s.eqWord}>Tenang</div><div className={s.eqSmall}>PruCoverage · satu rencana yang utuh</div></div>
        </section>
      </main>

      <footer className={s.footer}>
        <div className={s.footerIn}>
          <div className={s.footerTop}>
            <div className={s.serif} style={{ fontSize: 24, color: '#f7f6f2' }}>PruCoverage</div>
            <nav className={s.nav} aria-label="Footer"><Link href="/livprotektact" style={{ color: '#bccbc8' }}>LivProtektact</Link><Link href="/liko-beready" style={{ color: '#bccbc8' }}>Liko.beready</Link></nav>
          </div>
          <p className={s.small}>
            PruCoverage adalah kolaborasi dua akun pribadi agen berlisensi, bukan situs resmi perusahaan asuransi. Manfaat,
            syarat, dan ketentuan setiap produk mengikuti polis yang diterbitkan perusahaan asuransi.
          </p>
          <div className={s.small}>© {new Date().getFullYear()} PruCoverage</div>
        </div>
      </footer>
    </div>
  );
}
