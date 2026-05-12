import Link from 'next/link'

export default function Form() {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <img src="/kiw.png" height="70" alt="Logo" />
          <nav className="nav-list">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><a href="/#tentang">About</a></li>
              <li><a href="/#Skill">Experience</a></li>
              <li><a href="/#Kontak">Contact</a></li>
              <li><a href="#">Form</a></li>
              <li><Link href="/page/message">Message</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="form-section" id="form">
        <h2>Form</h2>

        <form action="" method="GET" className="form-form">
          <div className="form-group">
            <label htmlFor="name">Name :</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="Masukkan nama Anda" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="tgl">Date of Birth :</label>
            <input 
              type="date" 
              id="tgl" 
              name="tgl"
            />
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Address :</label>
            <input 
              type="text" 
              id="alamat" 
              name="alamat" 
              required 
              placeholder="Masukkan alamat Anda" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="notlpn">Phone Number :</label>
            <input 
              type="tel" 
              id="notlpn" 
              name="notlpn" 
              required 
              placeholder="Masukkan nomor telepon Anda" 
            />
          </div>
        
          <button type="submit" className="btn-primary">Konfirmasi</button>
        </form>
      </section>
    </>
  )
}