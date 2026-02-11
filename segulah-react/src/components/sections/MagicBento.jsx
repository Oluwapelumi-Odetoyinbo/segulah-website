import { useRef, useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards';

const MagicBento = () => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const rangeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const productRange = [
    { title: 'Herbal Supplements', icon: 'solar:pill-bold-duotone', image: '/product1.png', description: 'Potent natural extracts for daily vitality and health.' },
    { title: 'Herbal Teas', icon: 'solar:cup-hot-bold-duotone', image: '/product4.png', description: 'Soothing blends to detoxify and energize your body.' },
    { title: 'Natural Skincare', icon: 'solar:magic-stick-3-bold-duotone', image: '/product7.png', description: 'Radiant glow with organic, skin-loving ingredients.' },
    { title: 'Essential Oils', icon: 'solar:pipette-bold-duotone', image: '/product3.png', description: 'Pure aromatic essence for therapeutic wellness.' },
    { title: 'Detox & Cleansing', icon: 'solar:leaf-bold-duotone', image: '/product2.png', description: 'Gentle yet effective system for deep body cleansing.' },
    { title: 'Immune Support', icon: 'solar:shield-check-bold-duotone', image: '/product6.png', description: 'Fortify your defenses with nature’s best guardians.' },
    { title: 'Oral Care', icon: 'solar:health-bold-duotone', image: '/product5.png', description: 'Natural freshness and protection for a healthy smile.' },
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

    // Grid animation with staggered images
    const gridItems = gridRef.current?.children;
    if (gridItems) {
      gsap.set(gridItems, { opacity: 0, y: 50, scale: 0.95 });

      gsap.to(gridItems, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none',
        },
      });
    }

    // Product Range animation
    const rangeItems = rangeRef.current?.querySelectorAll('.range-item');
    if (rangeItems) {
      gsap.set(rangeItems, { opacity: 0, scale: 0.9, y: 20 });

      gsap.to(rangeItems, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: rangeRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0 scale-90'}`}
        >
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:bag-smile-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">OUR PRODUCTS</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Nature's finest wellness products
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover our range of herbal products crafted with organic ingredients for your health and prosperity.
          </p>
        </div>

        {/* Bento Grid - Exact Layout from Reference */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 md:gap-5 h-[500px] md:h-[600px]">

          {/* Left Tall Image - Spans 2 rows */}
          <div className="row-span-2 overflow-hidden rounded-2xl md:rounded-3xl group">
            <img
              src="/product1.png"
              alt="Segulah Herbal Tea"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
          <div className="row-span-2 overflow-hidden rounded-2xl md:rounded-3xl group">
            <img
              src="/product4.png"
              alt="Segulah Herbal Tea"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

        {/* Product Range Carousel */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Complete Product Range
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Scientifically formulated, naturally derived. Explore our diverse range of wellness solutions.
            </p>
          </div>

          <div className="relative w-screen left-1/2 -translate-x-1/2">
            <InfiniteMovingCards
              items={productRange.map(item => ({
                ...item,
                subtitle: "Premium Wellness",
                renderIcon: () => <Icon icon={item.icon} className="text-2xl text-mlm-green-400" />
              }))}
              direction="left"
              speed="slow"
            />
          </div>

          {/* <div className="flex justify-center mt-10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-mlm-green-500 text-white font-semibold rounded-full hover:bg-mlm-green-600 transition-colors group shadow-lg shadow-mlm-green-500/25"
            >
              Explore Full Catalog
              <Icon icon="solar:arrow-right-bold" className="transition-transform group-hover:translate-x-1" />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default MagicBento;

