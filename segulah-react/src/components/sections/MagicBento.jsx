import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const MagicBento = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0 scale-90'}`}>
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:bag-smile-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Premium Products</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Nature's finest wellness products
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover our range of herbal products crafted with organic ingredients for your health and prosperity.
          </p>
        </div>

        {/* Bento Grid - Exact Layout from Reference */}
        <div className={`grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-5 h-[500px] md:h-[600px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Left Tall Image - Spans 2 rows */}
          <div className="row-span-2">
            <img 
              src="/product1.png" 
              alt="Segulah Herbal Tea"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Top Middle Left */}
          <div>
            <img 
              src="/product2.png" 
              alt="Segulah Man-Up"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Top Middle Right */}
          <div>
            <img 
              src="/product7.png" 
              alt="Segulah Sexy Baby"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Right Tall Image - Spans 2 rows */}
          <div className="row-span-2">
            <img 
              src="/product4.png" 
              alt="Segulah Herbal Tea"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Bottom Middle Left */}
          <div>
            <img 
              src="/product6.png" 
              alt="Segulah Man-Up"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

          {/* Bottom Middle Right */}
          <div>
            <img 
              src="/product5.png" 
              alt="Segulah Sexy Baby"
              className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
            />
          </div>

        </div>

        {/* View All Products CTA */}
        {/* <div className={`text-center mt-12 transition-all duration-700 delay-500
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://mlm-user-fe.onrender.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-mlm-green-600 font-semibold hover:text-mlm-green-700 transition-colors"
          >
            View all products in marketplace
            <Icon icon="solar:arrow-right-linear" />
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default MagicBento;
