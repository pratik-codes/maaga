import React from 'react';
import { RevealOnScroll } from './RevealOnScroll';
import { TEAM_MEMBERS, ABOUT_SECTION, TEAM_SECTION } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-maaga-navy text-white relative overflow-hidden">
      {/* Decorative architectural line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-20 md:mb-32">
            
            {/* Content Side */}
            <div className="order-2 lg:order-1">
                <RevealOnScroll>
                    <span className="text-maaga-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 md:mb-6">{ABOUT_SECTION.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 md:mb-10 leading-tight">
                        {ABOUT_SECTION.title}
                    </h2>
                    <div className="space-y-6 md:space-y-8 text-gray-300 text-base md:text-lg font-light leading-relaxed border-l border-maaga-blue/30 pl-6 md:pl-8">
                        {ABOUT_SECTION.paragraphs.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </RevealOnScroll>
            </div>

            {/* Image / Graphic Side */}
            <div className="order-1 lg:order-2 relative">
                <RevealOnScroll delay={300}>
                    <div className="relative aspect-[3/4] md:aspect-square max-w-md mx-auto bg-[#051C2C]">
                        <img 
                            src={ABOUT_SECTION.image}
                            alt={ABOUT_SECTION.imageAlt}
                            className="w-full h-full object-cover opacity-60 grayscale mix-blend-luminosity"
                        />
                        <div className="absolute inset-0 border border-white/10 m-4"></div>
                        <div className="absolute bottom-8 left-8 right-8 bg-white text-maaga-navy p-6 shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                             <p className="font-serif italic text-lg">"{ABOUT_SECTION.quote}"</p>
                        </div>
                    </div>
                </RevealOnScroll>
            </div>

        </div>

        {/* Our Team Section */}
        <div className="pt-16 md:pt-20">
            <RevealOnScroll>
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-maaga-accent text-xs font-bold tracking-[0.2em] uppercase block mb-4 md:mb-6">{TEAM_SECTION.subtitle}</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-4 md:mb-6 leading-tight">{TEAM_SECTION.title}</h2>
                    <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto font-light px-4">
                        {TEAM_SECTION.description}
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                {TEAM_MEMBERS.map((member, index) => (
                    <RevealOnScroll key={member.name} delay={index * 100}>
                        <div className="group bg-white/5 hover:bg-white/10 transition-all duration-500 backdrop-blur-sm border border-white/10 hover:border-white/20 overflow-hidden">
                            {/* Member Image */}
                            <div className="aspect-[3/4] overflow-hidden relative">
                                <img 
                                    src={member.image} 
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-maaga-navy via-maaga-navy/20 to-transparent opacity-60"></div>
                            </div>
                            
                            {/* Member Info */}
                            <div className="p-6 md:p-8">
                                <h3 className="text-xl md:text-2xl font-serif font-bold mb-2">{member.name}</h3>
                                <p className="text-maaga-accent text-xs md:text-sm font-bold uppercase tracking-wider mb-3 md:mb-4">{member.role}</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-3 md:mb-4 font-light">{member.bio}</p>
                                <div className="pt-3 md:pt-4 border-t border-white/10">
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        <span className="text-maaga-blue font-bold">Qualifications:</span> {member.qualifications}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
