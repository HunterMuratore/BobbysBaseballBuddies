import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Programs from './components/Programs'
import Story from './components/Story'
import Gallery from './components/Gallery'
import Events from './components/Events'
import Donate from './components/Donate'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import EmailSignup from './components/EmailSignup'

export default function App() {
  return (
    <main className="font-sans bg-cream text-navy">
      <Navbar />
      <Hero />
      <Mission />
      <Programs />
      <Story />
      <Gallery />
      <Events />
      <Donate />
      <ContactForm />
      <EmailSignup />
      <Footer />
    </main>
  )
}