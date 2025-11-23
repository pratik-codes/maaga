import React, { useEffect } from 'react';
import { Mail, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { COMPANY_INFO, CONTACT } from '../constants';

const ContactSection: React.FC = () => {
  useEffect(() => {
    // Load Tally embed script
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    script.onload = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://tally.so/widgets/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-20 md:py-32 bg-maaga-navy text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <RevealOnScroll>
                <span className="text-maaga-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 md:mb-6">{CONTACT.subtitle}</span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 md:mb-8 leading-tight">
                  {CONTACT.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 mb-12 md:mb-16 leading-relaxed font-light">
                  {CONTACT.description}
                </p>

                <div className="space-y-8 md:space-y-12 border-t border-white/10 pt-8 md:pt-12">
                  <div className="group">
                     <h4 className="font-serif text-xl md:text-2xl mb-2 flex items-center gap-3">
                        <Mail size={20} className="text-maaga-blue" /> Email
                     </h4>
                     <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-400 hover:text-white transition-colors text-base md:text-lg break-all">{COMPANY_INFO.email}</a>
                  </div>

                  <div className="group">
                     <h4 className="font-serif text-xl md:text-2xl mb-2 flex items-center gap-3">
                        <MapPin size={20} className="text-maaga-blue" /> Locations
                     </h4>
                     <p className="text-gray-400 text-base md:text-lg">{COMPANY_INFO.locations.join(' & ')}</p>
                  </div>
                </div>
            </RevealOnScroll>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <RevealOnScroll delay={200}>
                <div className="bg-white text-maaga-navy p-8 md:p-10 lg:p-16 shadow-2xl relative overflow-hidden">
                    <iframe 
                      data-tally-src="https://tally.so/embed/PddxLe?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                      loading="lazy" 
                      width="100%" 
                      height="476" 
                      frameBorder="0" 
                      marginHeight={0}
                      marginWidth={0}
                      title="Contact form"
                      style={{ border: 0 }}
                    />
                </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
