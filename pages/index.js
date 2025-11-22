import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import SkillsModern from '../components/SkillsModern'
import Projects from '../components/Projects'
import Pricing from '../components/Pricing'
import TestimonialsNox from '../components/TestimonialsNox'
import Contact from '../components/Contact'
import FooterModern from '../components/FooterModern'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rivus Innovatio — Desarrollo de Aplicaciones Móviles</title>
        <meta name="description" content="Rivus Innovatio - Desarrollo de aplicaciones modernas y escalables con diseño y tecnología de punta. Transformamos tus ideas en soluciones digitales exitosas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/logo/imagen_ventana.png" />
        <link rel="shortcut icon" type="image/png" href="/images/logo/imagen_ventana.png" />
      </Head>
      <div className="page-root">
        <Navbar />
        <main>
          <Hero />
          <About />
          <SkillsModern />
          <Projects />
          <Pricing />
          <TestimonialsNox />
          <Contact />
        </main>
        <FooterModern />
      </div>
    </>
  )
}
