import { useRef, useState } from 'react';
import { Icon } from '@iconify/react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xykdzpnk"); // Note: You need to replace "xpwwpryl" with your actual Formspree ID

  if (state.succeeded) {
    return (
      <section id="contact" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl shadow-slate-200/50 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-mlm-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon icon="solar:check-circle-bold-duotone" className="w-12 h-12 text-mlm-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h2>
            <p className="text-slate-500 text-lg mb-8">
              Thank you for reaching out. We've received your information and will get back to you shortly.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-mlm-green-500 text-white font-semibold hover:bg-mlm-green-600 transition-colors"
            >
              Send another message
            </button>
          </div>
        </div>
      </section>
    );
  }

  const contactInfo = [
    {
      icon: 'solar:letter-bold-duotone',
      label: 'E-mail',
      value: 'support@segulahglobal.com',
      href: 'mailto:support@segulahglobal.com',
    },
    {
      icon: 'solar:phone-bold-duotone',
      label: 'Phone number',
      value: '+234 800 123 4567',
      href: 'tel:+2348001234567',
    },
    {
      icon: 'solar:map-point-bold-duotone',
      label: 'Office address',
      value: '123 Business Avenue, Lagos, Nigeria',
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Content */}
          <div className="lg:pr-8">
            {/* Eyebrow */}
            <p className="text-slate-400 text-sm font-medium tracking-widest uppercase mb-4">
              We're here to help you
            </p>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              <span className="font-bold">Get in </span>
              <span className="text-mlm-green-500">Touch</span>
            </h2>

            {/* Description */}
            <p className="text-slate-500 text-lg mb-10 max-w-md leading-relaxed">
              Have questions about our products or business opportunity? We'd love to hear from you. Reach out to us.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-mlm-green-50 flex items-center justify-center shrink-0">
                    <Icon icon={item.icon} className="w-6 h-6 text-mlm-green-500" />
                  </div>
                  
                  {/* Text */}
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{item.label}</p>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-slate-900 font-medium text-lg hover:text-mlm-green-500 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-medium text-lg">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Phone Number Field */}
              <div>
                <label htmlFor="phone" className="block text-slate-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+234 800 123 4567"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mlm-green-500/20 focus:border-mlm-green-500 transition-all"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email Address Field */}
              <div>
                <label htmlFor="email" className="block text-slate-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mlm-green-500/20 focus:border-mlm-green-500 transition-all"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Office Address Field */}
              <div>
                <label htmlFor="address" className="block text-slate-700 font-medium mb-2">
                  Office Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Enter your office address..."
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-mlm-green-500/20 focus:border-mlm-green-500 transition-all resize-none"
                />
                <ValidationError 
                  prefix="Address" 
                  field="address"
                  errors={state.errors}
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-mlm-green-500 text-white font-semibold hover:bg-mlm-green-600 transition-colors shadow-lg shadow-mlm-green-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon icon={state.submitting ? "line-md:loading-twotone-loop" : "solar:arrow-right-linear"} className="w-5 h-5" />
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
