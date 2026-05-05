import PageLoader from './components/PageLoader'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SectionDivider from './components/SectionDivider'
import About from './components/About'
import Products from './components/Products'
import Services from './components/Services'
import Factory from './components/Factory'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <PageLoader />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider from="#ffffff" to="#ffffff" variant="wave" />
      <About />
      <SectionDivider from="#ffffff" to="#0B2354" variant="curve" />
      <Products />
      <SectionDivider from="#ffffff" to="#071640" variant="wave" flip />
      <Services />
      <SectionDivider from="#ffffff" to="#F0F7FF" variant="curve" />
      <Factory />
      <SectionDivider from="#F0F7FF" to="#ffffff" variant="wave" />
      <Certifications />
      <SectionDivider from="#ffffff" to="#0D3B8E" variant="angle" />
      <Contact />
      <Footer />
    </>
  )
}
