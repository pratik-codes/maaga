import React from 'react';
import { SERVICES, SERVICES_SECTION } from '../constants';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const ServicesSection: React.FC = () => {
  // Helper function to get specific styles based on the service index
  const getServiceStyles = (index: number) => {
    switch (index) {
      case 0: // Tax-Filing (UK & US) -> Red/Blue/White Theme
        return {
          // Distinct Red -> White -> Blue gradient for the top accent line
          accentGradient: 'bg-gradient-to-r from-[#B22234] via-[#FFFFFF] to-[#3C3B6E]', 
          iconBg: 'bg-[#3C3B6E]/5 text-[#3C3B6E]',
          hoverBorder: 'hover:border-[#3C3B6E]/20',
          // Subtle background wash mixing faint blue (top) and red (bottom) tints on hover
          hoverBg: 'group-hover:bg-gradient-to-b group-hover:from-[#3C3B6E]/5 group-hover:via-white group-hover:to-[#B22234]/5',
          titleColor: 'group-hover:text-[#3C3B6E]'
        };
      case 1: // Bookkeeping -> UK Flag tones (Deep Blue/Red)
        return {
          accentGradient: 'bg-gradient-to-r from-[#00247D] via-[#CF142B] to-[#00247D]', // Union Jack Blue & Red
          iconBg: 'bg-indigo-50 text-[#00247D]',
          hoverBorder: 'hover:border-indigo-200',
          hoverBg: 'group-hover:bg-gradient-to-b group-hover:from-indigo-50/30 group-hover:to-white',
          titleColor: 'group-hover:text-[#00247D]'
        };
      case 2: // Operational Management -> Vibrant "Nice Colour" (Teal/Emerald/Gold)
        return {
          accentGradient: 'bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600', // Vibrant Growth Colors
          iconBg: 'bg-emerald-50 text-teal-700',
          hoverBorder: 'hover:border-emerald-200',
          hoverBg: 'group-hover:bg-gradient-to-b group-hover:from-emerald-50/30 group-hover:to-white',
          titleColor: 'group-hover:text-teal-700'
        };
      default:
        return {
          accentGradient: 'bg-maaga-navy',
          iconBg: 'bg-maaga-grey text-maaga-navy',
          hoverBorder: 'hover:border-gray-200',
          hoverBg: 'bg-white',
          titleColor: 'group-hover:text-maaga-blue'
        };
    }
  };

  return (
    <section id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealOnScroll>
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <div className="max-w-2xl">
                    <span className="text-maaga-blue text-xs font-bold tracking-[0.2em] uppercase block mb-4">{SERVICES_SECTION.subtitle}</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-maaga-navy leading-tight">
                        {SERVICES_SECTION.title} <br/> <span className="italic text-gray-400">{SERVICES_SECTION.titleAccent}</span>
                    </h2>
                </div>
                <div className="mb-2">
                    <a href="#contact" className="text-maaga-navy hover:text-maaga-blue font-medium text-sm uppercase tracking-wider transition-colors border-b border-maaga-navy/20 hover:border-maaga-blue pb-1">
                        {SERVICES_SECTION.linkText}
                    </a>
                </div>
            </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const styles = getServiceStyles(index);
            
            return (
              <RevealOnScroll key={index} delay={index * 150} className="h-full">
                  <div 
                    className={`group p-8 lg:p-10 border border-gray-100 bg-white ${styles.hoverBorder} hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col overflow-hidden ${styles.hoverBg}`}
                  >
                    {/* Top Accent Line */}
                    <div className={`absolute top-0 left-0 w-full h-1.5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ${styles.accentGradient}`}></div>

                    <div className="mb-12 flex justify-between items-start">
                        <div className={`p-3 rounded-sm transition-colors duration-300 ${styles.iconBg} group-hover:bg-white group-hover:shadow-sm`}>
                            <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <span className="text-xs font-serif italic text-gray-400">0{index + 1}</span>
                    </div>

                    <h3 className={`text-2xl font-serif text-maaga-navy mb-4 transition-colors ${styles.titleColor}`}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-10 leading-relaxed text-sm flex-grow font-light">
                      {service.description}
                    </p>

                    <ul className="space-y-4 mb-12 border-t border-gray-50 pt-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-maaga-navy/80 group-hover:text-maaga-navy transition-colors">
                          <span className={`w-1.5 h-1.5 rounded-full mr-3 shrink-0 mt-1.5 ${index === 2 ? 'bg-teal-500' : 'bg-maaga-blue'}`}></span>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                        <a href="#contact" className={`inline-flex items-center text-xs font-bold uppercase tracking-widest text-maaga-navy transition-colors ${styles.titleColor}`}>
                            Start Here <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                  </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
