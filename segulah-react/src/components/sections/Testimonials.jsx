import { useRef, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const Testimonials = () => {
  const headerRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeAnimationRef = useRef(null);

  const testimonials = [
    {
      name: 'Adaeze Okwu',
      role: 'Platinum Member',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Segulah Global has completely changed my financial situation. Within 6 months, I built a network of over 200 members and now earn consistent passive income every month.',
      highlight: 'over 200 members',
      earnings: '₦850,000/month',
    },
    {
      name: 'Emmanuel Taiwo',
      role: 'Diamond Member',
      location: 'Abuja, Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The dashboard makes it so easy to track my team performance and earnings. I can see exactly where my commissions come from and plan my growth strategy.',
      highlight: 'track my team performance',
      earnings: '₦2.1M/month',
    },
    {
      name: 'Blessing Nnamdi',
      role: 'Ruby Member',
      location: 'Port Harcourt, Nigeria',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'I started as a Silver member and upgraded to Ruby within 3 months. The support from my upline and the clear commission structure made all the difference.',
      highlight: 'upgraded to Ruby within 3 months',
      earnings: '₦450,000/month',
    },
    {
      name: 'Ibrahim Sule',
      role: 'Gold Member',
      location: 'Kano, Nigeria',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The weekly bonuses have been a game changer for my family. I hit my first milestone in just 5 weeks and reinvested to grow faster.',
      highlight: 'hit my first milestone in just 5 weeks',
      earnings: '₦320,000/month',
    },
    {
      name: 'Chiamaka Uche',
      role: 'Emerald Member',
      location: 'Enugu, Nigeria',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'I love how transparent the commissions are. I can see every payout breakdown and the support team is always available.',
      highlight: 'see every payout breakdown',
      earnings: '₦1.3M/month',
    },
    {
      name: 'Tolu Adebayo',
      role: 'Silver Member',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The marketplace discounts are real value. I use my wallet to buy essentials and still earn from my network.',
      highlight: 'use my wallet to buy essentials',
      earnings: '₦210,000/month',
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
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }

    // GSAP marquee animation
    const marqueeInner = marqueeRef.current;
    if (marqueeInner) {
      const totalWidth = marqueeInner.scrollWidth / 2;
      
      marqueeAnimationRef.current = gsap.to(marqueeInner, {
        x: -totalWidth,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % totalWidth)
        }
      });
    }
  }, []);

  // Pause/resume on hover
  const handleMouseEnter = () => {
    if (marqueeAnimationRef.current) {
      gsap.to(marqueeAnimationRef.current, { timeScale: 0, duration: 0.3 });
    }
  };

  const handleMouseLeave = () => {
    if (marqueeAnimationRef.current) {
      gsap.to(marqueeAnimationRef.current, { timeScale: 1, duration: 0.3 });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:chat-square-like-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Real members, real results
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands who are building wealth through Segulah Global.
          </p>
        </div>
      </div>

      {/* Testimonials Marquee (full width) */}
      <div 
        className="relative overflow-hidden w-screen left-1/2 right-1/2 -mx-[50vw]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div ref={marqueeRef} className="flex gap-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="min-w-75 sm:min-w-90 lg:min-w-95 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Icon icon="solar:quote-up-bold-duotone" width="40" className="mb-6 text-mlm-green-200" />
              
              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.quote.split(testimonial.highlight)[0]}
                <span className="font-semibold text-mlm-green-500">{testimonial.highlight}</span>
                {testimonial.quote.split(testimonial.highlight)[1]}"
              </p>
              
              {/* Earnings Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mlm-green-50 text-mlm-green-600 text-sm font-semibold mb-6">
                <Icon icon="solar:wallet-money-bold" width="16" />
                {testimonial.earnings}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

