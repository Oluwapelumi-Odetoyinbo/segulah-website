import { useState } from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Packages', href: '#pricing' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Success Stories', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Segulah Global" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-slate-500 font-medium">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition-colors hover:text-mlm-green-500">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-mlm-green-500">Sign in</button>
            <button className="px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg bg-mlm-green-500 text-white hover:bg-mlm-green-600 shadow-mlm-green-500/20">
              Get Started
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 text-slate-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Icon icon={mobileMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} width="24" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <div className="flex flex-col space-y-4 text-sm text-slate-500 font-medium">
              {navLinks.map((link) => (
                <a 
                  key={link.href} 
                  href={link.href} 
                  className="transition-colors hover:text-mlm-green-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-100">
                <button className="w-full px-4 py-2 rounded-full text-sm font-medium transition-all bg-mlm-green-500 text-white hover:bg-mlm-green-600">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
