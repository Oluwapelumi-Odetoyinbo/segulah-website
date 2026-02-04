import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Product A',
      description: 'Premium quality product designed to enhance your lifestyle and boost your earnings potential.',
      features: ['High Quality', 'Fast Delivery', 'Member Discount'],
      price: '₦15,000',
      image: null, // Placeholder
    },
    {
      id: 2,
      name: 'Product B',
      description: 'Essential wellness product trusted by thousands of members across Nigeria.',
      features: ['Natural Ingredients', 'Lab Tested', 'Autoship Available'],
      price: '₦25,000',
      image: null,
    },
    {
      id: 3,
      name: 'Product C',
      description: 'Our flagship product with proven results and excellent commission structure.',
      features: ['Best Seller', 'High Commission', '30-Day Guarantee'],
      price: '₦35,000',
      image: null,
    },
    {
      id: 4,
      name: 'Product D',
      description: 'Starter pack perfect for new members looking to begin their journey.',
      features: ['Starter Kit', 'Training Included', 'Bonus Points'],
      price: '₦50,000',
      image: null,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
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
          <div className="overflow-hidden rounded-3xl bg-white shadow-xl border border-slate-200">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product, index) => (
                <div 
                  key={product.id}
                  className="w-full shrink-0"
                >
                  {/* Full Image Placeholder */}
                  <div className="relative bg-linear-to-br from-mlm-green-100 via-mlm-green-50 to-slate-100 flex items-center justify-center min-h-100 md:min-h-125">
                    {/* Decorative circles */}
                    <div className="absolute top-12 left-12 w-40 h-40 rounded-full bg-mlm-green-200/40 blur-3xl"></div>
                    <div className="absolute bottom-12 right-12 w-56 h-56 rounded-full bg-mlm-green-300/30 blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-white/50 blur-3xl"></div>
                    
                    {/* Placeholder content */}
                    <div className="relative flex flex-col items-center justify-center text-center p-8">
                      <div className="w-24 h-24 rounded-2xl bg-white shadow-lg border border-slate-100 flex items-center justify-center mb-6">
                        <Icon 
                          icon="solar:gallery-bold-duotone" 
                          width="48" 
                          height="48" 
                          className="text-mlm-green-400"
                        />
                      </div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-700 mb-2">
                        {product.name}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Product Banner Image Placeholder
                      </p>
                    </div>
                  </div>
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
