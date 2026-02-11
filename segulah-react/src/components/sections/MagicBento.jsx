import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';
import { InfiniteMovingCards } from '../ui/InfiniteMovingCards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/Carousel';

const MagicBento = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const rangeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play: loop slowly to next slide every 4 seconds
  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [api]);

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
    { id: 'cat1', title: 'Herbal Supplements', category: 'Wellness', price: 15000, rating: 4.9, image: '/product1.png' },
    { id: 'cat2', title: 'Herbal Teas', category: 'Wellness', price: 12000, rating: 4.8, image: '/product4.png' },
    { id: 'cat3', title: 'Natural Skincare', category: 'Skin Care', price: 25000, rating: 5.0, image: '/product7.png' },
    { id: 'cat4', title: 'Essential Oils', category: 'Wellness', price: 18000, rating: 4.7, image: '/product3.png' },
    { id: 'cat5', title: 'Detox & Cleansing Blends', category: 'Wellness', price: 22000, rating: 4.9, image: '/product2.png' },
    { id: 'cat6', title: 'Immune Support Formulas', category: 'Wellness', price: 30000, rating: 5.0, image: '/product6.png' },
    { id: 'cat7', title: 'Mouthwash and Toothpaste', category: 'Oral Care', price: 8000, rating: 4.8, image: '/product5.png' },
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
      className="py-24 bg-linear-to-b from-slate-50 via-white to-slate-50 overflow-x-hidden"
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

        {/* Product Range Carousel header */}
        <div className="mt-20 pt-16 border-t border-slate-100" ref={rangeRef}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Our Complete Product Range
            </h3>
            <p className="text-slate-500 leading-relaxed max-w-2xl mx-auto">
              Scientifically formulated, naturally derived. Explore our diverse range of wellness solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Full-width carousel - outside max-w container */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pl-4 sm:pl-6 md:pl-8 pr-4 sm:pr-6 md:pr-8 -mt-4">
        <Carousel setApi={setApi} opts={{ align: 'start', loop: true, duration: 35 }}>
              <CarouselContent className="-ml-4">
                {productRange.map((p) => (
                  <CarouselItem key={p.id} className="pl-4 basis-[85%] sm:basis-[45%] md:basis-[35%] lg:basis-[28%]">
                      <div
                        className="flex flex-col bg-slate-50 border border-slate-200 rounded-xl overflow-hidden group cursor-pointer h-[340px]"
                        onClick={() => navigate('/product', { state: { category: p.title } })}
                      >
                        <div className="flex-1 min-h-0 relative w-full overflow-hidden">
                          <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                        </div>
                        <div className="p-5 flex-shrink-0">
                          <div className="mb-1 font-black text-lg text-slate-900">{p.title}</div>
                          <p className="text-sm text-slate-600">{p.category}</p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate('/product', { state: { category: p.title } });
                            }}
                            className="mt-4 px-4 py-2 bg-mlm-green-500 hover:bg-mlm-green-600 text-white text-sm font-bold rounded-full transition-colors"
                          >
                            View Products
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        <div className="text-slate-500 py-2 text-center text-sm mt-4">
          Slide {current} of {count}
        </div>
      </div>
    </section>
  );
};

export default MagicBento;

