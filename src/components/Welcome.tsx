export default function Welcome() {
  return (
    <section className="welcome-section" id="welcome">
      <div className="welcome-text">
        <h1 style={{ paddingBottom: '40px' }}>Portofolio</h1>
        <p style={{ paddingBottom: '40px' }}>
          Selamat datang di portofolio saya.
          <br />
          Website ini dibuat sebagai media untuk memperkenalkan profil, keterampilan, serta kesiapan saya dalam mengikuti kegiatan Praktik Kerja Lapangan (PKL).
        </p>
        <a href="#tentang" className="btn-primary">
          Lihat Profil
        </a>
      </div>
    </section>
  )
}