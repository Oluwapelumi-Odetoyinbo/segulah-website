import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap, ScrollTrigger } from '../../hooks/useGSAP';

const aboutItems = [
  {
    number: '01',
    icon: 'solar:users-group-rounded-bold',
    iconBg: 'bg-rose-500',
    title: 'Who We Are',
    description: 'A herbal wellness and wealth-creation company combining traditional knowledge with modern product development.',
  },
  {
    number: '02',
    icon: 'solar:target-bold',
    iconBg: 'bg-indigo-600',
    title: 'Our Mission',
    description: 'To promote natural wellness while empowering people to build sustainable income through ethical network marketing.',
  },
  {
    number: '03',
    icon: 'solar:eye-bold',
    iconBg: 'bg-mlm-green-500',
    title: 'Our Vision',
    description: 'To become a world leader in herbal products and people-centered wealth creation.',
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    // Header animation
    const headerElements = headerRef.current?.children;
    if (headerElements) {
      gsap.set(headerElements, { opacity: 0, y: 30 });
      
      gsap.to(headerElements, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Cards animation with stagger
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 60 });
      
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });

      // Icon pop-in effect for each card
      Array.from(cards).forEach((card, index) => {
        const iconBox = card.querySelector('.icon-box');
        if (iconBox) {
          gsap.set(iconBox, { scale: 0, rotation: -15 });
          
          gsap.to(iconBox, {
            scale: 1,
            rotation: 0,
            duration: 0.5,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none none',
            },
            delay: 0.3 + index * 0.1,
          });
        }
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-32 bg-slate-50 relative overflow-hidden"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-20">
          {/* Headline */}
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900"
          >
            About Us
          </h2>
        </div>

        {/* Cards - Staggered Layout */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-[1fr_1.3fr_1fr] gap-6 md:gap-8 items-start">
          {aboutItems.map((item, index) => {
            const isMiddle = index === 1;
            return (
              <div
                key={item.number}
                className="relative"
                style={{
                  marginTop: isMiddle ? '5rem' : '2rem',
                }}
              >
                {/* Card */}
                <div className={`${isMiddle ? 'p-8 md:p-10 min-w-[280px]' : 'p-6 md:p-8 min-w-[240px]'}`}>
                  {/* Top Row - Icon & Number */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon Box */}
                    <div className={`icon-box ${isMiddle ? 'w-16 h-16 md:w-20 md:h-20' : 'w-14 h-14'} rounded-xl ${item.iconBg} flex items-center justify-center shadow-lg`}>
                      <Icon
                        icon={item.icon}
                        className={`${isMiddle ? 'w-8 h-8 md:w-10 md:h-10' : 'w-7 h-7'} text-white`}
                      />
                    </div>
                    
                    {/* Number */}
                    <span className={`text-slate-300 font-semibold ${isMiddle ? 'text-xl md:text-2xl' : 'text-lg'}`}>
                      {item.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`font-bold text-slate-900 mb-3 ${isMiddle ? 'text-2xl md:text-3xl' : 'text-xl'}`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-slate-500 leading-relaxed ${isMiddle ? 'text-base md:text-lg' : 'text-sm md:text-base'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;

