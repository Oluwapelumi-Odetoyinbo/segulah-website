import { useState } from 'react';
import { Navbar, Footer, LoadingScreen } from './components/layout';
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
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />;
  }

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
