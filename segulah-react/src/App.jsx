import { Navbar, Footer } from './components/layout';
import {
  Hero,
  SocialProof,
  About,
  Features,
  Products,
  Pricing,
  HowItWorks,
  Testimonials,
  FAQ,
} from './components/sections';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <About />
        <Features />
        <Products />
        <Pricing />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
