import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      description: 'Premium quality product designed to enhance your lifestyle and boost your earnings potential.',
      features: ['High Quality', 'Fast Delivery', 'Member Discount'],
      price: '₦15,000',
      image: '/product-1.svg',
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Essential wellness product trusted by thousands of members across Nigeria.',
      features: ['Natural Ingredients', 'Lab Tested', 'Autoship Available'],
      price: '₦25,000',
      image: '/product-2.svg',
    },
    {
      id: 3,
      name: 'Product C',
      description: 'Our flagship product with proven results and excellent commission structure.',
      features: ['Best Seller', 'High Commission', '30-Day Guarantee'],
      price: '₦35,000',
      image: '/product-3.svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const carouselRef = useRef(null);

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

    // Carousel animation
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { opacity: 0, y: 40 });

      gsap.to(carouselRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, products.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section ref={sectionRef} id="products" className="py-24 bg-slate-50">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          {/* Company Name - Primary Focus */}
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
              <span className="text-mlm-green-500">SEGULAH GLOBAL</span>
              <span className="block text-slate-900 text-2xl md:text-4xl lg:text-5xl mt-2">
                Premium Solutions Ltd
              </span>
            </h1>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[2px] bg-linear-to-r from-transparent to-mlm-green-500/40" />
            <div className="w-3 h-3 rounded-full bg-mlm-green-500/60" />
            <div className="w-16 h-[2px] bg-linear-to-l from-transparent to-mlm-green-500/40" />
          </div>

          {/* Value Proposition - What You Do */}
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800 leading-relaxed">
              Where nature-powered wellness meets
              <span className="text-mlm-green-600"> life-changing opportunity.</span>
            </p>
          </div>

          {/* Optional: Trust Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mlm-green-500" />
              <span>100% Natural Products</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mlm-green-500" />
              <span>Proven Business Model</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-mlm-green-500" />
              <span>Growing Community</span>
            </div>
          </div>
        </div>
      </div>
      {/* Full Width Carousel */}
      <div
        ref={carouselRef}
        className="relative w-screen left-1/2 -translate-x-1/2 h-[300px] sm:h-[400px] md:h-[600px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {/* Optional: Add a subtle overlay to ensure text readability if needed later, 
                  or just for aesthetic consistency */}
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={goToPrevious}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center text-slate-700 hover:text-mlm-green-500 hover:bg-white transition-all z-10"
          aria-label="Previous product"
        >
          <Icon icon="solar:arrow-left-linear" width="20" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg border border-white/20 flex items-center justify-center text-slate-700 hover:text-mlm-green-500 hover:bg-white transition-all z-10"
          aria-label="Next product"
        >
          <Icon icon="solar:arrow-right-linear" width="20" />
        </button> */}
      </div>

      {/* Dot Indicators & Progress */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                ? 'bg-mlm-green-500 w-8'
                : 'bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        <div className="max-w-md mx-auto mt-4">
          <div className="h-1 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-mlm-green-500 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / products.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
