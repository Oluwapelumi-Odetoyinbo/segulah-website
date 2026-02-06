import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for zoom-in animation
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
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'animate-zoom-in' : 'opacity-0 scale-90'}`}>
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
        <div className="relative">
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
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-colors z-10"
            aria-label="Previous product"
          >
            <Icon icon="solar:arrow-left-linear" width="24" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:text-mlm-green-500 hover:border-mlm-green-200 transition-colors z-10"
            aria-label="Next product"
          >
            <Icon icon="solar:arrow-right-linear" width="24" />
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
