import { useRef } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const CoreValues = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const coreValues = [
    {
      title: 'Integrity',
      description: "We do what we say we're going to do, when we say we're going to do it.",
      color: 'bg-amber-700',
      textColor: 'text-amber-700',
      icon: 'solar:shield-check-bold-duotone',
    },
    {
      title: 'Teamwork',
      description: 'We work together to bring about a brighter future for all.',
      color: 'bg-orange-400',
      textColor: 'text-orange-400',
      icon: 'solar:users-group-rounded-bold-duotone',
    },
    {
      title: 'Trust',
      description: 'We believe in cultivating strong relationships.',
      color: 'bg-rose-300',
      textColor: 'text-rose-300',
      icon: 'solar:like-bold-duotone',
    },
    {
      title: 'Innovation',
      description: 'We believe in thinking outside of the box.',
      color: 'bg-teal-700',
      textColor: 'text-teal-700',
      icon: 'solar:lightbulb-bolt-bold-duotone',
    },
    {
      title: 'Community',
      description: 'We believe in giving back to our community with our profits.',
      color: 'bg-teal-600',
      textColor: 'text-teal-600',
      icon: 'solar:heart-bold-duotone',
    },
    {
      title: 'Quality',
      description: 'Our standards are high and we never compromise on quality.',
      color: 'bg-slate-600',
      textColor: 'text-slate-600',
      icon: 'solar:star-bold-duotone',
    },
  ];

  // GSAP animations
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

    // Cards animation
    const cards = cardsRef.current?.children;
    if (cards) {
      gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });
      
      gsap.to(cards, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="core-values"
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:heart-bold-duotone" className="w-5 h-5" />
            <span className="text-sm uppercase tracking-wider">What We Stand For</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            The principles that guide everything we do at Segulah Global.
          </p>
        </div>

        {/* Core Values Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {coreValues.map((value) => (
            <div
              key={value.title}
              className="relative p-8 rounded-3xl bg-slate-50 border border-slate-100"
            >
              {/* Color Accent Bar */}
              <div className={`absolute top-0 left-8 right-8 h-1 rounded-b-full ${value.color}`}></div>
              
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6">
                <Icon icon={value.icon} className={`text-3xl ${value.textColor}`} />
              </div>

              {/* Title */}
              <h3 className={`text-xl font-bold mb-3 ${value.textColor}`}>
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-slate-500 leading-relaxed">
                {value.description}
              </p>

              {/* Decorative Corner */}
              <div className={`absolute bottom-4 right-4 w-8 h-8 rounded-full ${value.color} opacity-5`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
