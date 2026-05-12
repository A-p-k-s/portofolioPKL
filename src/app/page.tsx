import Header from '@/components/Header'
import Welcome from '@/components/Welcome'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Header />
      <Welcome />
      <About />
      <Experience />
      <Contact />
    </main>
  )
}