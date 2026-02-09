import { useState } from 'react';
import { Navbar, Footer, LoadingScreen } from './components/layout';
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
} from './components/sections';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
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
        <Products />
        <Pricing />
        <Testimonials />
        <Contact />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
