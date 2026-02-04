import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';

// Import Lottie animations
import loginSignupAnimation from '../../assets/Login and Sign up.json';
import inviteFriendsAnimation from '../../assets/Invite Friends or Share with Friends.json';
import shareAnimation from '../../assets/Share.json';
import moneyStackAnimation from '../../assets/Money Stack.json';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const lottieRefs = useRef([]);

  const steps = [
    {
      number: '01',
      lottieData: loginSignupAnimation,
      title: 'Sign Up & Choose Package',
      description: 'Create your account, complete verification, and select a membership package that fits your goals.',
    },
    {
      number: '02',
      lottieData: shareAnimation,
      title: 'Build Your Network',
      description: 'Share your referral link, invite people to join, and watch your downline grow in real-time.',
    },
    {
      number: '03',
      lottieData: inviteFriendsAnimation,
      title: 'Earn Commissions',
      description: 'Earn from direct referrals, community bonuses, matching bonuses, and leadership rewards.',
    },
    {
      number: '04',
      lottieData: moneyStackAnimation,
      title: 'Withdraw & Shop',
      description: 'Transfer earnings to your bank or use your wallet balance to shop in the marketplace.',
    },
  ];

  // Intersection Observer to detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Sequential step activation with 2s delay
  useEffect(() => {
    if (!isVisible) return;

    // Start with step 0 after a small initial delay
    const initialTimeout = setTimeout(() => {
      setActiveStep(0);
    }, 500);

    return () => clearTimeout(initialTimeout);
  }, [isVisible]);

  // Progress to next step with 2s delay
  useEffect(() => {
    if (activeStep < 0 || activeStep >= steps.length - 1) return;

    const timeout = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [activeStep, steps.length]);

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 relative overflow-hidden bg-white">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl to-transparent rounded-bl-full pointer-events-none from-mlm-green-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:routing-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Start earning in 4 simple steps
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Getting started with Segulah Global is easy. Follow these steps to begin your journey to financial freedom.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isActive = index <= activeStep;
            const isCurrentStep = index === activeStep;
            
            return (
              <div key={index} className="relative group">
                {/* Connector Line Background */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-[60%] w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                    {/* Animated fill */}
                    <div 
                      className="h-full bg-mlm-green-500 transition-all duration-1000 ease-out rounded-full"
                      style={{ 
                        width: index < activeStep ? '100%' : '0%',
                      }}
                    ></div>
                  </div>
                )}
                
                <div className={`relative z-10 text-center transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`}>
                  {/* Step Number */}
                  <div className={`text-6xl font-bold mb-4 font-display transition-colors duration-500 ${isActive ? 'text-mlm-green-200' : 'text-slate-200'}`}>
                    {step.number}
                  </div>
                  
                  {/* Lottie Animation */}
                  <div className={`w-32 h-32 mx-auto mb-6 flex items-center justify-center transition-all duration-500 ${isCurrentStep ? 'scale-110' : 'scale-100'}`}>
                    <Lottie 
                      lottieRef={(ref) => lottieRefs.current[index] = ref}
                      animationData={step.lottieData} 
                      loop={isActive}
                      autoplay={isActive}
                      className={`w-full h-full transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-40 grayscale'}`}
                    />
                  </div>
                  
                  {/* Content with swipe animation */}
                  <div className="overflow-hidden">
                    <h3 
                      className={`text-lg font-semibold mb-3 transition-all duration-700 ${isActive ? 'text-slate-900 translate-x-0 opacity-100' : 'text-slate-400 -translate-x-4 opacity-50'}`}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className={`text-sm leading-relaxed transition-all duration-700 delay-100 ${isActive ? 'text-slate-500 translate-x-0 opacity-100' : 'text-slate-300 -translate-x-4 opacity-50'}`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Active indicator dot */}
                  <div className={`mt-6 mx-auto w-3 h-3 rounded-full transition-all duration-500 ${isCurrentStep ? 'bg-mlm-green-500 scale-100' : isActive ? 'bg-mlm-green-300 scale-75' : 'bg-slate-200 scale-50'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
        <div className="mt-12 max-w-md mx-auto">
          <div className="flex justify-between text-xs text-slate-400 mb-2">
            <span>Progress</span>
            <span>{Math.max(activeStep + 1, 0)} of {steps.length}</span>
          </div>
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-mlm-green-500 transition-all duration-700 ease-out rounded-full"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 ${activeStep >= steps.length - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a 
            href="https://mlm-user-fe.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20"
          >
            Get Started Now
            <Icon icon="solar:arrow-right-linear" className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
