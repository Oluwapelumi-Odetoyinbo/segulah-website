import { Icon } from '@iconify/react';
import Lottie from 'lottie-react';

// Import Lottie animations
import loginSignupAnimation from '../../assets/Login and Sign up.json';
import inviteFriendsAnimation from '../../assets/Invite Friends or Share with Friends.json';
import shareAnimation from '../../assets/Share.json';
import moneyStackAnimation from '../../assets/Money Stack.json';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      lottieData: loginSignupAnimation,
      title: 'Sign Up & Choose Package',
      description: 'Create your account, complete verification, and select a membership package that fits your goals.',
    },
    {
      number: '02',
      lottieData: shareAnimation,
      title: 'Build Your Network',
      description: 'Share your referral link, invite people to join, and watch your downline grow in real-time.',
    },
    {
      number: '03',
      lottieData: inviteFriendsAnimation,
      title: 'Earn Commissions',
      description: 'Earn from direct referrals, community bonuses, matching bonuses, and leadership rewards.',
    },
    {
      number: '04',
      lottieData: moneyStackAnimation,
      title: 'Withdraw & Shop',
      description: 'Transfer earnings to your bank or use your wallet balance to shop in the marketplace.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-white">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-125 h-125 bg-linear-to-bl to-transparent rounded-bl-full pointer-events-none from-mlm-green-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:routing-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Start earning in 4 simple steps
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Getting started with Segulah Global is easy. Follow these steps to begin your journey to financial freedom.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-linear-to-r from-mlm-green-200 to-transparent"></div>
              )}
              
              <div className="relative z-10 text-center">
                {/* Step Number */}
                <div className="text-6xl font-bold text-mlm-green-100 mb-4 font-display">
                  {step.number}
                </div>
                
                {/* Lottie Animation */}
                <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Lottie 
                    animationData={step.lottieData} 
                    loop={true}
                    autoplay={true}
                    className="w-full h-full"
                  />
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 rounded-full text-base font-semibold transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20">
            Get Started Now
            <Icon icon="solar:arrow-right-linear" className="inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
