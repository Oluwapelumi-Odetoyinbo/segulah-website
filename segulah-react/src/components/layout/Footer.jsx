import { useState } from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <footer className="pt-24 pb-12 relative overflow-hidden bg-slate-950 text-white">
      {/* Background Grid/Glow */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] opacity-20"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-75 rounded-[100%] blur-[100px] pointer-events-none bg-mlm-green-900/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* CTA Content */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium mb-6 bg-mlm-green-900/30 border-mlm-green-800 text-mlm-green-400">
            <Icon icon="solar:rocket-bold-duotone" />
            <span>Start Your Journey</span>
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-6 text-transparent bg-clip-text bg-linear-to-b from-white to-slate-400">
            Ready to build your<br />financial freedom?
          </h2>
          <p className="text-slate-400 mb-8">
            Join thousands of Nigerians earning with Segulah Global. Sign up today and start building your network.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 bg-mlm-green-500 text-white hover:bg-mlm-green-600">
              Create Free Account
              <Icon icon="solar:arrow-right-linear" />
            </button>
            <button className="px-8 py-4 font-semibold rounded-full transition-colors flex items-center justify-center gap-2 bg-slate-800 text-white hover:bg-slate-700 border border-slate-700">
              <Icon icon="solar:phone-calling-bold-duotone" />
              Contact Sales
            </button>
          </div>
        </div>

        <div className="border-t pt-12 grid md:grid-cols-4 gap-8 text-sm border-slate-800">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="Segulah Global" className="h-8 w-auto" />
            </div>
            <p className="text-slate-400 mb-4">Your trusted MLM platform for building wealth through network marketing.</p>
            <div className="space-y-2">
              <p className="text-slate-400 flex items-center gap-2">
                <Icon icon="solar:letter-bold" width="16" />
                support@segulahglobal.com
              </p>
              <p className="text-slate-400 flex items-center gap-2">
                <Icon icon="solar:phone-bold" width="16" />
                +234 800 123 4567
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Platform</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#features" className="transition-colors hover:text-white">Features</a></li>
              <li><a href="#pricing" className="transition-colors hover:text-white">Packages</a></li>
              <li><a href="#how-it-works" className="transition-colors hover:text-white">How It Works</a></li>
              <li><a href="#testimonials" className="transition-colors hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Support</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#faq" className="transition-colors hover:text-white">FAQ</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Help Center</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact Us</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Legal</h4>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Refund Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Compensation Plan</a></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-800">
          <p className="text-xs text-slate-500">
            © 2026 Segulah Global Premium Solutions Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon icon="mdi:facebook" width="20" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon icon="mdi:instagram" width="20" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon icon="mdi:twitter" width="20" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon icon="mdi:whatsapp" width="20" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <Icon icon="mdi:youtube" width="20" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
