import Header from '../components/landing/Header.jsx'
import Hero from '../components/landing/Hero.jsx'
import Services from '../components/landing/Services.jsx'
import HowItWorks from '../components/landing/HowItWorks.jsx'
import Destinations from '../components/landing/Destinations.jsx'
import Testimonials from '../components/landing/Testimonials.jsx'
import GoogleReviews from '../components/landing/GoogleReviews.jsx'
import ContactForm from '../components/landing/ContactForm.jsx'
import Footer from '../components/landing/Footer.jsx'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Destinations />
        <Testimonials />
        <GoogleReviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
