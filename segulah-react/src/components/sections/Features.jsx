import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: 'solar:chart-square-bold-duotone',
      title: 'Dashboard & Analytics',
      description: 'Get a complete overview of your earnings, network size, rank progress, and recent activity at a glance.',
      mockup: 'dashboard',
    },
    {
      icon: 'solar:users-group-rounded-bold-duotone',
      title: 'Referral Network',
      description: 'View your downline in matrix/tree format, track team performance, and monitor CPV milestones.',
      mockup: 'network',
    },
    {
      icon: 'solar:wallet-money-bold-duotone',
      title: 'Earnings & Commissions',
      description: 'Track all commission types: direct referral, community bonus, product bonus, matching, and leadership rewards.',
      mockup: 'earnings',
    },
    {
      icon: 'solar:card-bold-duotone',
      title: 'Multi-Wallet System',
      description: 'Manage three wallets: Cash (withdrawable), Voucher (product purchases), and Autoship (subscription credits).',
      mockup: 'wallets',
    },
    {
      icon: 'solar:bag-smile-bold-duotone',
      title: 'Product Marketplace',
      description: 'Browse and purchase products directly using your wallet balance. Filter by category and track orders.',
      mockup: 'marketplace',
    },
    {
      icon: 'solar:shield-check-bold-duotone',
      title: 'Secure Withdrawals',
      description: 'Request withdrawals from your cash wallet with transparent rules, limits, and real-time status tracking.',
      mockup: 'withdraw',
    },
  ];

  return (
    <section id="features" className="py-24 border-t bg-white border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500 ${isVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
            <Icon icon="solar:widget-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Features</span>
          </div>
          <h2 className={`font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ${isVisible ? 'animate-zoom-in-delay-1' : 'opacity-0'}`}>
            Everything you need to succeed
          </h2>
          <p className={`text-lg text-slate-500 max-w-2xl mx-auto ${isVisible ? 'animate-zoom-in-delay-2' : 'opacity-0'}`}>
            Powerful tools designed specifically for MLM affiliates to track, grow, and manage their business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-1 rounded-2xl bg-linear-to-b border transition-colors from-slate-100 to-white border-slate-200 hover:border-mlm-green-200"
            >
              <div className="rounded-xl p-6 h-full flex flex-col bg-white">
                <div className="h-40 rounded-lg border mb-6 overflow-hidden relative bg-slate-50 border-slate-100">
                  <FeatureMockup type={feature.mockup} />
                </div>
                <div className="flex items-center gap-2 mb-3 font-semibold text-slate-900">
                  <Icon icon={feature.icon} width="24" height="24" className="text-mlm-green-500" />
                  <h3>{feature.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureMockup = ({ type }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const mockupRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (mockupRef.current) {
      observer.observe(mockupRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Loop animation for dashboard, network, earnings, and wallets
  useEffect(() => {
    if ((type === 'dashboard' || type === 'network' || type === 'earnings' || type === 'wallets') && isVisible) {
      const interval = setInterval(() => {
        setIsVisible(false); // Reset visibility to retrigger animation
        setTimeout(() => {
          setIsVisible(true);
          setAnimationKey((prev) => prev + 1);
        }, 50);
      }, 3000); // Restart animation every 3 seconds

      return () => clearInterval(interval);
    }
  }, [type, isVisible]);

  if (type === 'dashboard') {
    const bars = [40, 70, 50, 90, 60, 80];
    return (
      <div ref={mockupRef} className="p-3 space-y-2">
        <div className="flex gap-2">
          <div 
            key={`card1-${animationKey}`}
            className={`flex-1 p-2 rounded bg-mlm-green-100 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <div className="w-8 h-2 mx-auto rounded bg-mlm-green-300 mb-1"></div>
            <div className="w-12 h-3 mx-auto rounded bg-mlm-green-500"></div>
          </div>
          <div 
            key={`card2-${animationKey}`}
            className={`flex-1 p-2 rounded bg-slate-100 text-center transition-all duration-500 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
          >
            <div className="w-8 h-2 mx-auto rounded bg-slate-300 mb-1"></div>
            <div className="w-12 h-3 mx-auto rounded bg-slate-400"></div>
          </div>
        </div>
        <div className="h-16 rounded bg-white shadow-sm p-2">
          <div className="flex items-end justify-between gap-1 h-full">
            {bars.map((h, i) => (
              <div 
                key={`bar-${i}-${animationKey}`}
                className="w-full bg-mlm-green-400 rounded-t animate-bar-grow"
                style={{ 
                  '--bar-height': `${h}%`,
                  animationDelay: `${i * 100 + 200}ms`,
                  animationPlayState: isVisible ? 'running' : 'paused'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (type === 'network') {
    return (
      <div ref={mockupRef} className="flex items-center justify-center h-full p-4">
        <div className="relative">
          {/* Main user node */}
          <div 
            key={`main-${animationKey}`}
            className={`w-10 h-10 rounded-full bg-mlm-green-500 flex items-center justify-center mx-auto transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          >
            <Icon icon="solar:user-bold" className="text-white" width="20" />
          </div>
          
          {/* Connection lines */}
          <div className="flex justify-center gap-8 -mt-1">
            {[0, 1, 2].map((i) => (
              <div 
                key={`line-${i}-${animationKey}`}
                className={`w-0.5 h-5 bg-mlm-green-300 transition-all duration-300 origin-top ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                style={{ transitionDelay: `${300 + i * 150}ms` }}
              ></div>
            ))}
          </div>
          
          {/* Child nodes - first level */}
          <div className="flex gap-8 -mt-1">
            {[0, 1, 2].map((i) => (
              <div key={`child1-${i}-${animationKey}`} className="text-center">
                <div 
                  className={`w-8 h-8 rounded-full bg-mlm-green-300 flex items-center justify-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                  style={{ transitionDelay: `${500 + i * 150}ms` }}
                >
                  <Icon icon="solar:user-bold" className="text-mlm-green-700" width="14" />
                </div>
              </div>
            ))}
          </div>

          {/* Second level connections & nodes */}
          <div className="flex justify-between px-1 mt-1">
            {[0, 1].map((i) => (
              <div key={`level2-${i}-${animationKey}`} className="flex gap-2">
                {[0, 1].map((j) => (
                  <div key={`sub-${i}-${j}`} className="flex flex-col items-center">
                    <div 
                      className={`w-0.5 h-3 bg-mlm-green-200 transition-all duration-300 origin-top ${isVisible ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
                      style={{ transitionDelay: `${800 + (i * 2 + j) * 100}ms` }}
                    ></div>
                    <div 
                      className={`w-5 h-5 rounded-full bg-mlm-green-100 flex items-center justify-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                      style={{ transitionDelay: `${900 + (i * 2 + j) * 100}ms` }}
                    >
                      <Icon icon="solar:user-bold" className="text-mlm-green-500" width="10" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Pulsing effect on main node */}
          <div 
            className={`absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-mlm-green-500/30 ${isVisible ? 'animate-ping' : ''}`}
            style={{ animationDuration: '2s' }}
          ></div>
        </div>
      </div>
    );
  }

  if (type === 'earnings') {
    const earnings = [
      { label: 'Direct Referral', amount: '₦25,000', color: 'bg-mlm-green-500', width: '75%' },
      { label: 'Community Bonus', amount: '₦12,500', color: 'bg-amber-500', width: '50%' },
      { label: 'Leadership', amount: '₦8,000', color: 'bg-blue-500', width: '35%' },
    ];
    return (
      <div ref={mockupRef} className="p-3 space-y-2">
        {earnings.map((item, i) => (
          <div 
            key={`earning-${i}-${animationKey}`}
            className={`flex items-center justify-between p-2 rounded shadow-sm bg-white transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            <div className="flex items-center gap-2 flex-1">
              <div className={`w-2 h-2 rounded-full ${item.color}`}></div>
              <div className="w-16 h-2 rounded bg-slate-200"></div>
            </div>
            <div className="flex items-center gap-2">
              {/* Progress bar */}
              <div className="w-16 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${item.color} transition-all duration-700`}
                  style={{ 
                    width: isVisible ? item.width : '0%',
                    transitionDelay: `${300 + i * 150}ms`
                  }}
                ></div>
              </div>
              <div 
                className={`text-xs font-semibold text-mlm-green-500 transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: `${500 + i * 150}ms` }}
              >
                {item.amount}
              </div>
            </div>
          </div>
        ))}
        {/* Total earnings bar */}
        <div 
          key={`total-${animationKey}`}
          className={`mt-2 p-2 rounded bg-mlm-green-50 border border-mlm-green-100 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-mlm-green-600 font-medium">Total</span>
            <span 
              className={`text-sm font-bold text-mlm-green-600 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              ₦45,500
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'wallets') {
    const wallets = [
      { name: 'Cash', color: 'bg-mlm-green-500', bgColor: 'bg-mlm-green-50', amount: '₦125,000', fill: '85%' },
      { name: 'Voucher', color: 'bg-amber-500', bgColor: 'bg-amber-50', amount: '₦45,000', fill: '60%' },
      { name: 'Autoship', color: 'bg-blue-500', bgColor: 'bg-blue-50', amount: '₦18,500', fill: '35%' },
    ];
    return (
      <div ref={mockupRef} className="p-3 space-y-2">
        {wallets.map((wallet, i) => (
          <div 
            key={`wallet-${i}-${animationKey}`}
            className={`flex items-center gap-2 p-2 rounded shadow-sm bg-white transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Wallet icon with pulse */}
            <div className="relative">
              <div className={`w-8 h-8 rounded-lg ${wallet.bgColor} flex items-center justify-center`}>
                <div className={`w-3 h-3 rounded-full ${wallet.color}`}></div>
              </div>
              <div 
                className={`absolute inset-0 rounded-lg ${wallet.color} transition-all duration-700 ${isVisible ? 'opacity-0 scale-150' : 'opacity-30 scale-100'}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              ></div>
            </div>
            
            {/* Wallet balance bar */}
            <div className="flex-1">
              <div className="w-12 h-1.5 rounded bg-slate-200 mb-1"></div>
              <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                <div 
                  className={`h-full rounded-full ${wallet.color} transition-all duration-700`}
                  style={{ 
                    width: isVisible ? wallet.fill : '0%',
                    transitionDelay: `${300 + i * 150}ms`
                  }}
                ></div>
              </div>
            </div>
            
            {/* Amount */}
            <div 
              className={`text-xs font-bold transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transitionDelay: `${500 + i * 150}ms`,
                color: wallet.color === 'bg-mlm-green-500' ? '#49A321' : wallet.color === 'bg-amber-500' ? '#f59e0b' : '#3b82f6'
              }}
            >
              {wallet.amount}
            </div>
          </div>
        ))}
        
        {/* Total balance footer */}
        <div 
          key={`total-wallet-${animationKey}`}
          className={`mt-1 p-2 rounded-lg bg-linear-to-r from-mlm-green-500 to-mlm-green-600 transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ transitionDelay: '650ms' }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/80">Total Balance</span>
            <span 
              className={`text-sm font-bold text-white transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '800ms' }}
            >
              ₦188,500
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'marketplace') {
    return (
      <div className="grid grid-cols-2 gap-2 p-3">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-2 rounded border bg-white border-slate-100">
            <div className="w-full h-8 rounded bg-slate-100 mb-1"></div>
            <div className="w-3/4 h-2 rounded bg-slate-200"></div>
          </div>
        ))}
      </div>
    );
  }

  if (type === 'withdraw') {
    return (
      <div className="p-3 space-y-2">
        <div className="p-2 rounded bg-mlm-green-50 border border-mlm-green-100">
          <div className="flex items-center gap-2 mb-2">
            <Icon icon="solar:check-circle-bold" className="text-mlm-green-500" width="16" />
            <div className="w-16 h-2 rounded bg-mlm-green-200"></div>
          </div>
          <div className="w-24 h-3 rounded bg-mlm-green-300"></div>
        </div>
        <div className="p-2 rounded bg-slate-50 border border-slate-100">
          <div className="flex items-center gap-2">
            <Icon icon="solar:clock-circle-bold" className="text-amber-500" width="16" />
            <div className="w-20 h-2 rounded bg-slate-200"></div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default Features;
