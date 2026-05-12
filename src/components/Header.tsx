import Link from 'next/link'

export default function Header() {
  return (
    <header className="navbar">
      <div className="container">
        <h1 style={{ color: "white" }}>Portofolio</h1>

        <nav className="nav-list">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#tentang">About</a></li>
            <li><a href="#Skill">Experience</a></li>
            <li><a href="#Kontak">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}