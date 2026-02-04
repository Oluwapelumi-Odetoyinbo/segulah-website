import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import DashboardMockup from './DashboardMockup';
import travelAnimation from '../../assets/travel.json';

const Hero = () => {
  const words = ['earnings', 'network', 'income', 'freedom', 'future'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 rounded-[100%] blur-3xl -z-10 pointer-events-none bg-mlm-green-100/40"></div>

      {/* Animated Lottie Background - Top Right */}
      <div className="absolute top-16 right-4 md:right-16 lg:right-24 w-32 md:w-48 lg:w-56 opacity-60 pointer-events-none">
        <Lottie 
          animationData={travelAnimation} 
          loop={true}
          autoplay={true}
        />
      </div>

      {/* Animated Lottie Background - Bottom Left */}
      <div className="absolute bottom-24 left-4 md:left-16 lg:left-24 w-28 md:w-40 lg:w-48 opacity-50 pointer-events-none">
        <Lottie 
          animationData={travelAnimation} 
          loop={true}
          autoplay={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="text-left">
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-mlm-green-50 border-mlm-green-100 text-mlm-green-500">
              <Icon icon="solar:users-group-rounded-bold-duotone" />
              <span>Your MLM Business Hub</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
              Build your network,<br />
              <span className="text-mlm-green-500">
                grow your {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
              Segulah Global is your all-in-one platform to manage your MLM business. Track earnings, grow your referral network, shop the marketplace, and withdraw your commissions — all in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20">
                Get Started Free
                <Icon icon="solar:arrow-right-linear" className="inline ml-2" />
              </button>
              <button className="px-8 py-4 rounded-full text-base font-semibold transition-all border-2 border-slate-200 text-slate-700 hover:border-mlm-green-500 hover:text-mlm-green-500">
                <Icon icon="solar:play-circle-bold" className="inline mr-2" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div className="relative lg:pl-8">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );

  /* ============================================
   * ORIGINAL CENTERED LAYOUT - COMMENTED OUT
   * ============================================
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 rounded-[100%] blur-3xl -z-10 pointer-events-none bg-mlm-green-100/40"></div>

      <div className="absolute top-16 right-4 md:right-16 lg:right-24 w-32 md:w-48 lg:w-56 opacity-60 pointer-events-none">
        <Lottie 
          animationData={travelAnimation} 
          loop={true}
          autoplay={true}
        />
      </div>

      <div className="absolute bottom-24 left-4 md:left-16 lg:left-24 w-28 md:w-40 lg:w-48 opacity-50 pointer-events-none">
        <Lottie 
          animationData={travelAnimation} 
          loop={true}
          autoplay={true}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-mlm-green-50 border-mlm-green-100 text-mlm-green-500">
          <Icon icon="solar:users-group-rounded-bold-duotone" />
          <span>Your MLM Business Hub</span>
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
          Build your network,<br />
          <span className="text-mlm-green-500">
            grow your {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          Segulah Global is your all-in-one platform to manage your MLM business. Track earnings, grow your referral network, shop the marketplace, and withdraw your commissions — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20">
            Get Started Free
            <Icon icon="solar:arrow-right-linear" className="inline ml-2" />
          </button>
          <button className="px-8 py-4 rounded-full text-base font-semibold transition-all border-2 border-slate-200 text-slate-700 hover:border-mlm-green-500 hover:text-mlm-green-500">
            <Icon icon="solar:play-circle-bold" className="inline mr-2" />
            Watch Demo
          </button>
        </div>

        <DashboardMockup />
      </div>
    </section>
  );
  * ============================================ */
};

export default Hero;
