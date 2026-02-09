import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const reasons = [
  {
    image: '/mortar.png',
    title: '100% Herbal Wellness',
    description: 'Pure, natural products designed to support your overall well-being.',
  },
  {
    image: '/reward.png',
    title: 'Rewarding Business Model',
    description: 'Affordable entry with transparent earnings through our matrix system.',
  },
  {
    image: '/grid.png',
    title: 'Transparent Matrix Plan',
    description: 'Clear 3×1 and 3×2 compensation structure you can trust.',
  },
  {
    image: '/training.png',
    title: 'Strong Training & Support',
    description: 'Comprehensive guidance to help you succeed at every step.',
  },
  {
    image: '/global-access.png',
    title: 'Global Opportunity',
    description: 'Join a worldwide community building generational wealth.',
  },
];

const ValueProposition = () => {
  const sectionRef = useRef(null);
  const leftColumnRef = useRef(null);
  const cardsGridRef = useRef(null);

  useGSAP(() => {
    // Left column animation
    const leftElements = leftColumnRef.current?.children;
    if (leftElements) {
      gsap.set(leftElements, { opacity: 0, y: 40 });
      
      gsap.to(leftElements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Cards grid animation with stagger
    const cards = cardsGridRef.current?.children;
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });
      
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsGridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Icon float animation for cards
      Array.from(cards).forEach((card) => {
        const iconWrapper = card.querySelector('.icon-wrapper');
        if (iconWrapper) {
          gsap.to(iconWrapper, {
            y: -5,
            duration: 2,
            ease: 'power1.inOut',
            yoyo: true,
            repeat: -1,
          });
        }
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 bg-linear-to-b from-white to-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Text & Image */}
          <div ref={leftColumnRef}>
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <Icon 
                icon="solar:star-shine-bold-duotone" 
                className="w-5 h-5 text-mlm-green-500" 
              />
              <span className="text-sm font-medium text-mlm-green-600">
                Why Choose Segulah Global
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Where nature-powered wellness meets{' '}
              <span className="text-mlm-green-500">opportunity</span>
            </h2>

            {/* Subheadline */}
            <p className="text-lg text-slate-500 mb-10 leading-relaxed max-w-lg">
              We offer premium herbal products designed to support overall well-being, with a rewarding business model designed for you.
            </p>

            {/* Hero Image */}
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden aspect-4/3 max-w-md shadow-xl">
              <img 
                src="/product5.png" 
                alt="Segulah Man-Up"
                className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
              />
            </div>
          </div>

          {/* Right Column - Cards Grid */}
          <div ref={cardsGridRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className={`group p-6 rounded-2xl transition-all duration-300 ${
                  index === reasons.length - 1
                    ? 'bg-mlm-green-500 text-white shadow-lg shadow-mlm-green-500/20'
                    : 'bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-mlm-green-200'
                }`}
              >
                {/* Icon */}
                <div className={`icon-wrapper w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${
                  index === reasons.length - 1
                    ? 'bg-white/20'
                    : 'bg-mlm-green-50 group-hover:bg-mlm-green-100'
                }`}>
                  <img
                    src={reason.image}
                    alt=""
                    className={`w-8 h-8 object-contain ${
                      index === reasons.length - 1 ? 'brightness-0 invert' : ''
                    }`}
                  />
                </div>

                {/* Title */}
                <h3 className={`font-semibold mb-2 ${
                  index === reasons.length - 1
                    ? 'text-white'
                    : 'text-slate-900'
                }`}>
                  {reason.title}
                </h3>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${
                  index === reasons.length - 1
                    ? 'text-white/80'
                    : 'text-slate-500'
                }`}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

