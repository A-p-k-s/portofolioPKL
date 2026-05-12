import Link from 'next/link'

export default function Message() {
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
              <li><Link href="/page/form">Form</Link></li>
              <li><a href="#">Message</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="contact-section" id="contact">
        <h2>Message</h2>

        <form action="" method="GET" className="contact-form">
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
            <label htmlFor="notlpn">Phone Number :</label>
            <input 
              type="tel" 
              id="notlpn" 
              name="notlpn" 
              required 
              placeholder="Masukkan nomor telepon Anda" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="Masukkan email Anda" 
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea 
              id="message" 
              name="message" 
              rows={5} 
              required 
              placeholder="Tuliskan pesan kalian"
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </section>
    </>
  )
}