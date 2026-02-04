import { useState } from 'react';
import { Icon } from '@iconify/react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: 'What is Segulah Global?',
      answer: 'Segulah Global is a multi-level marketing platform that allows members to earn through direct referrals, community bonuses, product sales, matching bonuses, and leadership rewards. Our platform provides all the tools you need to build and manage your network marketing business.',
    },
    {
      question: 'How do I earn money with Segulah Global?',
      answer: 'You earn through multiple streams: Direct Referral Bonus when you invite someone, Community Bonus from your downline activities, Product Bonus from marketplace purchases, Matching Bonus from your team\'s earnings, and Leadership Bonus as you rank up. All earnings are tracked in real-time on your dashboard.',
    },
    {
      question: 'What are the three wallet types?',
      answer: 'Cash Wallet holds your withdrawable earnings that can be transferred to your bank. Voucher Wallet contains credits for purchasing products in the marketplace. Autoship Wallet is for subscription-based product credits. Each wallet serves a specific purpose in your business.',
    },
    {
      question: 'How do withdrawals work?',
      answer: 'You can request withdrawals from your Cash Wallet anytime. Withdrawals are processed within 24-48 hours to your registered bank account. Minimum withdrawal amount is ₦5,000 and there are no hidden fees. You can track all withdrawal requests and their status from your dashboard.',
    },
    {
      question: 'What membership packages are available?',
      answer: 'We offer five packages: Silver (₦75,000), Gold (₦150,000), Platinum (₦375,000), Ruby (₦750,000), and Diamond (₦1,500,000). Higher packages unlock better commission rates, more features, and access to exclusive bonuses. You can upgrade your package anytime.',
    },
    {
      question: 'How do I track my network and downline?',
      answer: 'Your dashboard provides a complete network overview with matrix/tree views to visualize your organization. You can see each member\'s performance, CPV (Cumulative Point Value), rank, and activity status. The referral tools make it easy to share your unique link and track signups.',
    },
    {
      question: 'Is my money and data secure?',
      answer: 'Absolutely. We use bank-level encryption for all transactions and personal data. Your account is protected with OTP verification and secure login. All financial transactions are logged and auditable. We never share your information with third parties.',
    },
    {
      question: 'Can I use the platform on mobile?',
      answer: 'Yes! Segulah Global is fully responsive and works seamlessly on smartphones, tablets, and desktops. You can manage your business, track earnings, and make withdrawals from anywhere, anytime.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:question-circle-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4 text-slate-900">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500">Everything you need to know about Segulah Global.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-xl transition-all ${
                activeIndex === index
                  ? 'p-6 shadow-lg bg-mlm-green-500 shadow-mlm-green-900/10'
                  : 'p-4 border bg-white border-slate-200 hover:border-mlm-green-200'
              }`}
            >
              <div
                className="flex justify-between items-center cursor-pointer gap-4"
                onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
              >
                <span className={`font-medium ${activeIndex === index ? 'text-white' : 'text-slate-900'}`}>
                  {faq.question}
                </span>
                <Icon
                  icon={activeIndex === index ? 'solar:minus-circle-bold' : 'solar:add-circle-bold'}
                  className={`shrink-0 ${activeIndex === index ? 'text-white' : 'text-slate-400'}`}
                  width="24"
                />
              </div>
              {activeIndex === index && (
                <p className="text-sm leading-relaxed text-mlm-green-100 mt-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
          <p className="text-slate-600 mb-4">Still have questions?</p>
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-mlm-green-500 hover:text-mlm-green-600">
            <Icon icon="solar:chat-round-dots-bold-duotone" width="20" />
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
