import { useState, useEffect, useRef } from 'react';
import { useGSAP, gsap } from '../../hooks/useGSAP';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Segulah Global - Fertility Solutions',
      image: '/Fertility Solutions (3).svg',
    },
    {
      id: 2,
      name: 'Product B',
      image: '/Fertility Solutions (1).svg',
    },
    {
      id: 3,
      name: 'Product C',
      image: '/Fertility Solutions (2).svg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useGSAP(() => {
    if (carouselRef.current) {
      gsap.set(carouselRef.current, { opacity: 0, y: 20 });
      gsap.to(carouselRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: carouselRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <section ref={sectionRef} id="products" className="overflow-hidden">
      <div
        ref={carouselRef}
        className="relative w-screen left-1/2 -translate-x-1/2 aspect-1920/700 min-h-[180px] sm:min-h-[220px]"
      >
        <div className="absolute inset-0 overflow-hidden">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Products;
