import { Icon } from '@iconify/react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Adaeze Okwu',
      role: 'Platinum Member',
      location: 'Lagos, Nigeria',
      image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'Segulah Global has completely changed my financial situation. Within 6 months, I built a network of over 200 members and now earn consistent passive income every month.',
      highlight: 'over 200 members',
      earnings: '₦850,000/month',
    },
    {
      name: 'Emmanuel Taiwo',
      role: 'Diamond Member',
      location: 'Abuja, Nigeria',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The dashboard makes it so easy to track my team performance and earnings. I can see exactly where my commissions come from and plan my growth strategy.',
      highlight: 'track my team performance',
      earnings: '₦2.1M/month',
    },
    {
      name: 'Blessing Nnamdi',
      role: 'Ruby Member',
      location: 'Port Harcourt, Nigeria',
      image: 'https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'I started as a Silver member and upgraded to Ruby within 3 months. The support from my upline and the clear commission structure made all the difference.',
      highlight: 'upgraded to Ruby within 3 months',
      earnings: '₦450,000/month',
    },
    {
      name: 'Ibrahim Sule',
      role: 'Gold Member',
      location: 'Kano, Nigeria',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The weekly bonuses have been a game changer for my family. I hit my first milestone in just 5 weeks and reinvested to grow faster.',
      highlight: 'hit my first milestone in just 5 weeks',
      earnings: '₦320,000/month',
    },
    {
      name: 'Chiamaka Uche',
      role: 'Emerald Member',
      location: 'Enugu, Nigeria',
      image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'I love how transparent the commissions are. I can see every payout breakdown and the support team is always available.',
      highlight: 'see every payout breakdown',
      earnings: '₦1.3M/month',
    },
    {
      name: 'Tolu Adebayo',
      role: 'Silver Member',
      location: 'Ibadan, Nigeria',
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      quote: 'The marketplace discounts are real value. I use my wallet to buy essentials and still earn from my network.',
      highlight: 'use my wallet to buy essentials',
      earnings: '₦210,000/month',
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:chat-square-like-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Success Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Real members, real results
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Join thousands of Nigerians who are building wealth through Segulah Global.
          </p>
        </div>
      </div>

      {/* Testimonials Marquee (full width) */}
      <div className="relative overflow-hidden w-screen left-1/2 right-1/2 -mx-[50vw]">
        <div className="flex gap-8 animate-testimonials-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.name}-${index}`}
              className="min-w-75 sm:min-w-90 lg:min-w-95 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Quote Icon */}
              <Icon icon="solar:quote-up-bold-duotone" width="40" className="mb-6 text-mlm-green-200" />
              
              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-6">
                "{testimonial.quote.split(testimonial.highlight)[0]}
                <span className="font-semibold text-mlm-green-500">{testimonial.highlight}</span>
                {testimonial.quote.split(testimonial.highlight)[1]}"
              </p>
              
              {/* Earnings Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mlm-green-50 text-mlm-green-600 text-sm font-semibold mb-6">
                <Icon icon="solar:wallet-money-bold" width="16" />
                {testimonial.earnings}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @keyframes testimonials-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-testimonials-marquee {
            animation: testimonials-marquee 40s linear infinite;
          }
        `}</style>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 bg-mlm-green-500 rounded-2xl text-white">
          {[
            { value: '10,000+', label: 'Active Members' },
            { value: '₦50M+', label: 'Paid Out Monthly' },
            { value: '36', label: 'States Covered' },
            { value: '4.9/5', label: 'Member Rating' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
              <p className="text-mlm-green-100 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
