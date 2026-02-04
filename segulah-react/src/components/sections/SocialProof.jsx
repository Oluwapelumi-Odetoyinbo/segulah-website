import { useState, useEffect, useRef } from 'react';

const SocialProof = () => {
  const stats = [
    { value: 10000, label: 'Active Members', prefix: '', suffix: '+' },
    { value: 50, label: 'Paid Out Monthly', prefix: '₦', suffix: 'M+' },
    { value: 36, label: 'States Covered', prefix: '', suffix: '' },
    { value: 99.9, label: 'Platform Uptime', prefix: '', suffix: '%' },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounts();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounts = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(stats.map((stat) => stat.value * easeOut));

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts(stats.map((stat) => stat.value));
      }
    }, stepDuration);
  };

  const formatNumber = (num, index) => {
    const stat = stats[index];
    const displayNum = stat.value >= 1000 
      ? Math.round(num).toLocaleString() 
      : stat.value % 1 !== 0 
        ? num.toFixed(1) 
        : Math.round(num);
    return `${stat.prefix}${displayNum}${stat.suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-16 border-y border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <p className="text-3xl md:text-4xl font-bold text-mlm-green-500 mb-1">
                {formatNumber(counts[index], index)}
              </p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
