import {
  Hero,
  SocialProof,
  About,
  Features,
  Products,
  MagicBento,
  Pricing,
  HowItWorks,
  Testimonials,
  FAQ,
  ValueProposition,
  Contact,
  CoreValues,
  AboutNew,
} from '../components/sections';
import { Navbar, Footer } from '../components/layout';

const Landing = () => (
  <div className="min-h-screen">
    <Navbar />
    <main className="overflow-x-hidden">
      <Products />
      <ValueProposition />
      <SocialProof />
      <About />
      <div className="hidden md:block">
        <AboutNew />
      </div>
      <CoreValues />
      <MagicBento />
      <Features />
      <HowItWorks />
      <Hero />
      <Pricing />
      <Testimonials />
      <Contact />
      <FAQ />
    </main>
    <Footer />
  </div>
);

export default Landing;
