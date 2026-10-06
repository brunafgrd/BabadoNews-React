import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import Destaques from '../sections/Destaques'
import Categorias from '../sections/Categorias'
import Newsletter from '../sections/Newsletter'
import Contato from '../sections/Contato'
import Footer from '../components/Footer'

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Destaques />
        <Categorias />
        <Contato />
        <Newsletter />
      </main>

      <Footer />
    </>
  )
}

export default LandingPage