import { Icon } from '@iconify/react';
import CardSwap, { Card } from '../ui/CardSwap';

const About = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text Side - Left */}
        <div>
          <div className="inline-flex items-center gap-2 font-semibold mb-4 text-mlm-green-500">
            <Icon icon="solar:shield-star-bold-duotone" />
            <span className="text-sm uppercase tracking-wider">Why Segulah Global</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-slate-900">
            Your complete MLM<br />business toolkit.
          </h2>
          <p className="text-lg text-slate-500 mb-8 leading-relaxed">
            Segulah Global gives you everything you need to build and manage a successful network marketing business. From tracking your earnings to growing your team, we've got you covered.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              'Real-time dashboard with earnings & network overview',
              'Three wallet system: Cash, Voucher & Autoship credits',
              'Built-in marketplace to shop with your earnings',
              'Transparent commission structure & bonus tracking',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <Icon icon="solar:check-circle-bold" width="20" height="20" className="mt-1 text-mlm-green-500" />
                <span className="text-slate-600">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#" className="inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all text-mlm-green-500">
            Learn more about our platform
            <Icon icon="solar:arrow-right-linear" />
          </a>
        </div>

        {/* CardSwap Side - Right - Intentionally cropped at edge */}
        <div className="relative h-125 -mr-4 sm:-mr-6 lg:-mr-8 xl:-mr-32">
          <CardSwap
            width={580}
            height={440}
            cardDistance={55}
            verticalDistance={65}
            delay={5000}
            pauseOnHover={true}
            skewAmount={5}
            easing="elastic"
          >
            {/* Dashboard UI */}
            <Card className="shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dokbfxcxv/image/upload/v1770206017/Screenshot_4-2-2026_125114_localhost_sftacj.jpg" 
                alt="Segulah Dashboard"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
              />
            </Card>

            {/* Wallet / Financial UI */}
            <Card className="shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dokbfxcxv/image/upload/v1770206017/Screenshot_4-2-2026_125031_localhost_k7ixto.jpg" 
                alt="Segulah Wallet System"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
              />
            </Card>

            {/* Network / Analytics UI */}
            <Card className="shadow-2xl">
              <img 
                src="https://res.cloudinary.com/dokbfxcxv/image/upload/v1770126599/Screenshot_3-2-2026_14388_localhost_eahxpy.jpg" 
                alt="Segulah Network Analytics"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top left' }}
              />
            </Card>
          </CardSwap>
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;
