import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';
import DashboardMockup from './DashboardMockup';
import travelAnimation from '../../assets/travel.json';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const Hero = () => {
  const words = ['earnings', 'network', 'income', 'freedom', 'future'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Refs for GSAP animations
  const heroRef = useRef(null);
  const pillRef = useRef(null);
  const headlineRef = useRef(null);
  const subheadlineRef = useRef(null);
  const ctaRef = useRef(null);
  const mockupRef = useRef(null);

  // GSAP animation on mount
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Set initial states
    gsap.set([pillRef.current, headlineRef.current, subheadlineRef.current], {
      opacity: 0,
      y: 40,
    });
    gsap.set(ctaRef.current, { opacity: 0, y: 30 });
    gsap.set(mockupRef.current, { opacity: 0, scale: 0.9, y: 30 });

    // Animate sequence
    tl.to(pillRef.current, { opacity: 1, y: 0, duration: 0.6 })
      .to(headlineRef.current, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')
      .to(subheadlineRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
      .to(ctaRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.5
      }, '-=0.3')
      .to(mockupRef.current, { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out' 
      }, '-=0.5');
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
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
    <section ref={heroRef} className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden min-h-screen flex items-center">
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
            <div ref={pillRef} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-8 bg-mlm-green-50 border-mlm-green-100 text-mlm-green-500">
              <Icon icon="solar:users-group-rounded-bold-duotone" />
              <span>Your MLM Business Hub</span>
            </div>

            {/* Headline */}
            <h1 ref={headlineRef} className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.1] text-slate-900">
              Build your network,<br />
              <span className="text-mlm-green-500">
                grow your {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p ref={subheadlineRef} className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed">
              Segulah Global is your all-in-one platform to manage your MLM business. Track earnings, grow your referral network, shop the marketplace, and withdraw your commissions — all in one place.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
              <a href="https://mlm-user-fe.onrender.com/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20 inline-flex items-center justify-center">
                Get Started Free
                <Icon icon="solar:arrow-right-linear" className="ml-2" />
              </a>
              <Link
                to="/product"
                className="px-8 py-4 rounded-full text-base font-semibold transition-all border border-slate-200 text-slate-700 hover:border-mlm-green-200 hover:text-mlm-green-600 bg-white inline-flex items-center justify-center"
              >
                Browse Products
                <Icon icon="solar:bag-3-outline" className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Right Side - Dashboard Mockup */}
          <div ref={mockupRef} className="relative lg:pl-8">
            <DashboardMockup />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

