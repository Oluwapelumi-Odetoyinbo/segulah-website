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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:bag-smile-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Our Products</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Quality products you can trust
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Explore our range of premium products available exclusively to Segulah Global members.
          </p>
        </div>

        {/* Carousel Container */}
        <div ref={carouselRef} className="relative">
          {/* Main Banner */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="w-full shrink-0"
                >
                  {/* Product Image */}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full rounded-4xl h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-colors z-10"
            aria-label="Previous product"
          >
            <Icon icon="solar:arrow-left-linear" width="18" className="md:w-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-12 md:h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-colors z-10"
            aria-label="Next product"
          >
            <Icon icon="solar:arrow-right-linear" width="18" className="md:w-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-mlm-green-500 w-8' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
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
