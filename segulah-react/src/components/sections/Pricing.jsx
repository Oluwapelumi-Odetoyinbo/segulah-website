import { useState, useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const Pricing = () => {
  const [currency, setCurrency] = useState('NGN'); // NGN or USD
  const [activeIndex, setActiveIndex] = useState(2); // Start with Platinum (middle)
  const headerRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const exchangeRate = 1500; // NGN per USD

  const packages = [
    {
      name: 'Silver',
      description: 'Perfect for getting started with Segulah Global.',
      priceUSD: 50,
      color: 'from-slate-400 to-slate-500',
      badgeColor: 'bg-slate-100 text-slate-700',
      featured: false,
      buttonText: 'Get Started',
      buttonStyle: 'bg-slate-900 text-white hover:bg-slate-800',
      features: [
        'Access to member dashboard',
        'Basic referral tools',
        'Cash wallet access',
        'Community support',
        'Up to 3 direct referrals tracked',
      ],
    },
    {
      name: 'Gold',
      description: 'Unlock more earning potential.',
      priceUSD: 100,
      color: 'from-amber-400 to-amber-500',
      badgeColor: 'bg-amber-100 text-amber-700',
      featured: false,
      buttonText: 'Get Started',
      buttonStyle: 'bg-slate-900 text-white hover:bg-slate-800',
      features: [
        'Everything in Silver',
        'Advanced network tree view',
        'Voucher wallet access',
        'Priority email support',
        'Up to 10 direct referrals tracked',
      ],
    },
    {
      name: 'Platinum',
      description: 'Most popular choice for serious earners.',
      priceUSD: 250,
      color: 'from-slate-300 to-slate-400',
      badgeColor: 'bg-slate-200 text-slate-800',
      featured: true,
      buttonText: 'Get Started',
      buttonStyle: 'bg-white text-mlm-green-600 hover:bg-mlm-green-50',
      features: [
        'Everything in Gold',
        'All three wallets unlocked',
        'Matching bonus eligible',
        'Leadership bonus access',
        'Unlimited direct referrals',
      ],
    },
    {
      name: 'Ruby',
      description: 'For ambitious network builders.',
      priceUSD: 500,
      color: 'from-red-400 to-red-500',
      badgeColor: 'bg-red-100 text-red-700',
      featured: false,
      buttonText: 'Get Started',
      buttonStyle: 'bg-slate-900 text-white hover:bg-slate-800',
      features: [
        'Everything in Platinum',
        'Higher commission rates',
        'Exclusive product discounts',
        'Dedicated account manager',
        'Early access to new features',
      ],
    },
    {
      name: 'Diamond',
      description: 'Ultimate package for top performers.',
      priceUSD: 1000,
      color: 'from-cyan-400 to-blue-500',
      badgeColor: 'bg-cyan-100 text-cyan-700',
      featured: false,
      buttonText: 'Contact Sales',
      buttonStyle: 'bg-white border-slate-200 text-slate-900 hover:bg-slate-50 border',
      features: [
        'Everything in Ruby',
        'Maximum commission tiers',
        'VIP support channel',
        'Exclusive leadership events',
        'Custom business tools',
      ],
    },
  ];

  useGSAP(() => {
    // Header animation
    const headerElements = headerRef.current?.children;
    if (headerElements) {
      gsap.set(headerElements, { opacity: 0, y: 30 });
      
      gsap.to(headerElements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Cards container reveal
    if (cardsContainerRef.current) {
      gsap.set(cardsContainerRef.current, { opacity: 0, y: 40 });
      
      gsap.to(cardsContainerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  const formatPrice = (priceUSD) => {
    if (currency === 'USD') {
      return `$${priceUSD.toLocaleString()}`;
    }
    return `₦${(priceUSD * exchangeRate).toLocaleString()}`;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? packages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === packages.length - 1 ? 0 : prev + 1));
  };

  const getCardStyle = (index) => {
    const diff = index - activeIndex;
    const absDiff = Math.abs(diff);
    
    let translateY = diff * 15;
    let translateX = diff * 20;
    let rotateZ = diff * -5;
    let scale = 1 - absDiff * 0.06;
    let zIndex = packages.length - absDiff;
    let opacity = 1 - absDiff * 0.15;

    if (absDiff > 2) {
      opacity = 0;
      scale = 0.8;
    }

    return {
      transform: `translateY(${translateY}px) translateX(${translateX}px) rotateZ(${rotateZ}deg) scale(${scale})`,
      zIndex,
      opacity,
    };
  };

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:tag-price-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Membership Packages</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Choose your package
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-8">
            Select the membership tier that matches your goals. Upgrade anytime as your business grows.
          </p>
          
          {/* Currency Toggle */}
          <div className="inline-flex items-center gap-1 p-1 rounded-full bg-slate-100">
            <button
              onClick={() => setCurrency('NGN')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currency === 'NGN' 
                  ? 'bg-mlm-green-500 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇳🇬 NGN
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                currency === 'USD' 
                  ? 'bg-mlm-green-500 text-white shadow-sm' 
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🇺🇸 USD
            </button>
          </div>
        </div>

        {/* Stacked Cards Container */}
        <div ref={cardsContainerRef} className="relative flex items-center justify-center px-4 md:px-0">
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            className="absolute -left-2 md:left-8 lg:left-16 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-all hover:scale-110"
            aria-label="Previous package"
          >
            <Icon icon="solar:arrow-left-linear" width="20" className="md:w-6" />
          </button>

          {/* Cards Stack */}
          <div className="relative w-full max-w-sm md:max-w-md h-[460px] md:h-130 mx-10 md:mx-24">
            {packages.map((pkg, index) => {
              const isActive = index === activeIndex;
              const style = getCardStyle(index);
              
              return (
                <div
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`absolute inset-0 rounded-2xl p-5 md:p-8 cursor-pointer transition-all duration-500 ease-out ${
                    pkg.featured
                      ? 'shadow-2xl bg-mlm-green-500 text-white shadow-mlm-green-500/30'
                      : 'border shadow-lg bg-white border-slate-200'
                  }`}
                  style={style}
                >
                  {pkg.featured && (
                    <div className="absolute top-0 right-0 text-xs font-semibold px-3 py-1 rounded-bl-lg rounded-tr-2xl backdrop-blur-sm bg-white/20">
                      POPULAR
                    </div>
                  )}
                  
                  {/* Package Badge */}
                  <div className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-semibold mb-4 ${pkg.featured ? 'bg-white/20 text-white' : pkg.badgeColor}`}>
                    <div className={`w-2 h-2 rounded-full bg-linear-to-r ${pkg.color}`}></div>
                    {pkg.name}
                  </div>
                  
                  <p className={`text-sm mb-4 ${pkg.featured ? 'text-mlm-green-100' : 'text-slate-500'}`}>{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-1 mb-4 md:mb-6">
                    <span className={`text-3xl md:text-4xl font-bold tracking-tight ${pkg.featured ? '' : 'text-slate-900'}`}>
                      {formatPrice(pkg.priceUSD)}
                    </span>
                    <span className={`text-xs md:text-sm ${pkg.featured ? 'text-mlm-green-200' : 'text-slate-400'}`}>one-time</span>
                  </div>
                  
                  <a 
                    href="https://mlm-user-fe.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-2.5 md:py-3 rounded-lg font-semibold transition-colors mb-4 md:mb-6 text-sm text-center ${pkg.buttonStyle}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {pkg.buttonText}
                  </a>
                  
                  <div className="space-y-2 md:space-y-3">
                    {pkg.features.map((feature, fIndex) => (
                      <div key={fIndex} className={`flex items-start gap-2 text-xs md:text-sm ${pkg.featured ? '' : 'text-slate-600'}`}>
                        <Icon
                          icon="solar:check-circle-bold"
                          className={`mt-0.5 shrink-0 ${pkg.featured ? 'text-mlm-green-200' : 'text-mlm-green-500'}`}
                          width="16"
                        />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            className="absolute -right-2 md:right-8 lg:right-16 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-all hover:scale-110"
            aria-label="Next package"
          >
            <Icon icon="solar:arrow-right-linear" width="20" className="md:w-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {packages.map((pkg, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeIndex 
                  ? 'w-8 bg-mlm-green-500' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to ${pkg.name} package`}
            />
          ))}
        </div>
        
       
      </div>
    </section>
  );
};

export default Pricing;
