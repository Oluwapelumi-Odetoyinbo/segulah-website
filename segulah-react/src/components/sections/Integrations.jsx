import { useState, useEffect, useRef, useCallback } from 'react';
import { Icon } from '@iconify/react';
import gsap from 'gsap';

const EarningGateways = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);
  const slideRefs = useRef([]);

  // 17 Earning Gateways
  const earningGateways = [
    {
      id: 1,
      title: "Daily Proceeds Allocation (DPA)",
      description: "Earn from Member's Daily Proceeds Allocation Rewards",
      image: "/asset-allocation.png"
    },
    {
      id: 2,
      title: "Community DPA Rewards",
      description: "Community's Daily Proceeds Allocation Rewards",
     image: "/resource-allocation.png"
    },
    {
      id: 3,
      title: "Direct Referral Bonuses",
      description: "Earn bonuses for every direct referral you bring in",
      image:"/bonus.png"
    },
    {
      id: 4,
      title: "Community Referral Bonuses",
      description: "Bonus rewards from your community referral network",
      image:"/loyalty.png"
    },
    {
      id: 5,
      title: "Personal Product Purchase",
      description: "Earn bonuses on your personal product purchases",
      icon: "noto:shopping-bags"
    },
    {
      id: 6,
      title: "Direct Referral Purchases",
      description: "Bonuses from direct referral product purchases",
      icon: "noto:shopping-cart"
    },
    {
      id: 7,
      title: "Community Product Purchases",
      description: "Earn from your community's product purchases",
      icon: "noto:convenience-store"
    },
    {
      id: 8,
      title: "Repeat Purchase Bonuses",
      description: "Rewards for repeat product purchases",
      icon: "noto:counterclockwise-arrows-button"
    },
    {
      id: 9,
      title: "Matching Bonuses",
      description: "Match earnings from your downline's success",
      icon: "noto:gem-stone"
    },
    {
      id: 10,
      title: "Ranking Bonuses",
      description: "Special bonuses as you climb the ranks",
      image:"/ranking.png"
    },
    {
      id: 11,
      title: "CPV Cash Bonuses",
      description: "Cumulative Point Value cash rewards",
     image:"/dollar.png"
    },
    {
      id: 12,
      title: "CPV Milestone Incentives",
      description: "Unlock incentives at CPV milestones",
      image:"/bonus (1).png"
    },
    {
      id: 13,
      title: "Leadership/Team Bonus",
      description: "Leadership and team building rewards",
      image:"/inclusion.png"
    },
    {
      id: 14,
      title: "Merchant Personal Purchase",
      description: "Merchant personal product purchase bonus",
      icon: "noto:department-store"
    },
    {
      id: 15,
      title: "Merchant Direct Referral",
      description: "Merchant direct referral product purchase bonus",
      image:"/refer.png"
    },
    {
      id: 16,
      title: "Merchant Community Purchase",
      description: "Merchant community product purchase bonuses",
      icon: "noto:cityscape"
    },
    {
      id: 17,
      title: "Merchant Delivery Bonus",
      description: "Earn from merchant product deliveries",
      icon: "noto:package"
    }
  ];

  // 6 cards per slide (3 columns x 2 rows)
  const cardsPerSlide = 6;
  const totalSlides = Math.ceil(earningGateways.length / cardsPerSlide);

  // Get cards for current slide
  const getCurrentSlideCards = useCallback((slideIndex) => {
    const startIndex = slideIndex * cardsPerSlide;
    return earningGateways.slice(startIndex, startIndex + cardsPerSlide);
  }, []);

  // Shuffle animation function
  const animateShuffleTransition = useCallback((fromIndex, toIndex) => {
    if (isAnimating || fromIndex === toIndex) return;
    setIsAnimating(true);

    const fromSlide = slideRefs.current[fromIndex];
    const toSlide = slideRefs.current[toIndex];

    if (!fromSlide || !toSlide) {
      setIsAnimating(false);
      setCurrentSlide(toIndex);
      return;
    }

    // Make incoming slide visible and position it below
    gsap.set(toSlide, {
      opacity: 1,
      visibility: 'visible',
      y: '100%',
      scale: 0.92,
      zIndex: 10,
    });

    // Ensure current slide is on top initially
    gsap.set(fromSlide, {
      zIndex: 5,
    });

    // Create the shuffle animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        // Clean up and set final state
        gsap.set(fromSlide, {
          opacity: 0,
          visibility: 'hidden',
          clearProps: 'y,scale,zIndex'
        });
        gsap.set(toSlide, {
          clearProps: 'y,scale,zIndex',
          opacity: 1,
          visibility: 'visible'
        });
        setCurrentSlide(toIndex);
        setIsAnimating(false);
      }
    });

    // Incoming slide shuffles up from bottom
    tl.to(toSlide, {
      y: '0%',
      scale: 1,
      duration: 0.9,
      ease: 'power2.out',
    }, 0);

    // Current slide moves up slightly and fades as new card overlaps
    tl.to(fromSlide, {
      y: '-15%',
      scale: 0.95,
      opacity: 0.4,
      duration: 0.7,
      ease: 'power2.inOut',
    }, 0.1);

  }, [isAnimating]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Initialize slides - hide all except current
  useEffect(() => {
    slideRefs.current.forEach((slide, index) => {
      if (slide) {
        if (index === currentSlide) {
          gsap.set(slide, { opacity: 1, visibility: 'visible', y: '0%', scale: 1 });
        } else {
          gsap.set(slide, { opacity: 0, visibility: 'hidden' });
        }
      }
    });
  }, []);

  // Auto-slide with shuffle animation
  useEffect(() => {
    if (!isVisible || isPaused || isAnimating) return;

    const interval = setInterval(() => {
      const nextIndex = (currentSlide + 1) % totalSlides;
      animateShuffleTransition(currentSlide, nextIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, isPaused, isAnimating, currentSlide, totalSlides, animateShuffleTransition]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    animateShuffleTransition(currentSlide, index);
  };

  const nextSlide = () => {
    if (isAnimating) return;
    const nextIndex = (currentSlide + 1) % totalSlides;
    animateShuffleTransition(currentSlide, nextIndex);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    animateShuffleTransition(currentSlide, prevIndex);
  };

  return (
    <section 
      ref={sectionRef} 
      id="earning-gateways" 
      className="py-24 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:dollar-minimalistic-bold-duotone" className="text-lg" />
            <span className="text-sm uppercase tracking-wider">17 Earning Gateways</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Multiple Ways to <span className="text-mlm-green-500">Earn</span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Discover the comprehensive earning system designed to maximize your income potential.
          </p>
        </div>

        {/* Slider Container */}
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-14 z-30 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-mlm-green-500 hover:text-white transition-colors disabled:opacity-50"
            aria-label="Previous slide"
          >
            <Icon icon="solar:arrow-left-linear" className="text-lg" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-14 z-30 w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-mlm-green-500 hover:text-white transition-colors disabled:opacity-50"
            aria-label="Next slide"
          >
            <Icon icon="solar:arrow-right-linear" className="text-lg" />
          </button>

          {/* Slides Container - stacked positioning for shuffle effect */}
          <div className="relative overflow-hidden">
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div 
                key={slideIndex}
                ref={(el) => slideRefs.current[slideIndex] = el}
                className="w-full"
                style={{
                  position: slideIndex === 0 ? 'relative' : 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                {/* 3 columns x 2 rows grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getCurrentSlideCards(slideIndex).map((gateway) => (
                    <div
                      key={gateway.id}
                      className="bg-slate-50 rounded-2xl p-8 hover:bg-slate-100 transition-colors"
                    >
                      {/* Icon or Image */}
                      <div className="mb-4">
                        {gateway.image ? (
                          <img src={gateway.image} alt={gateway.title} className="w-10 h-10 object-contain" />
                        ) : (
                          <Icon icon={gateway.icon} className="text-4xl" />
                        )}
                      </div>

                      {/* Title */}
                      <h3 className="text-slate-900 font-semibold text-lg mb-2">
                        {gateway.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {gateway.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index 
                    ? 'w-6 h-2 bg-mlm-green-500' 
                    : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                } disabled:opacity-50`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="https://mlm-user-fe.onrender.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold bg-mlm-green-500 text-white hover:bg-mlm-green-600 transition-colors"
          >
            Start Earning Today
            <Icon icon="solar:arrow-right-linear" className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EarningGateways;
