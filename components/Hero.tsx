import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Shield, FileCheck, ChevronDown } from 'lucide-react';
import { VALUE_ADDITIONS, HERO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 bg-maaga-navy text-white overflow-hidden">
      
      {/* Background: Consistent solid color */}
      <div className="absolute inset-0 bg-[#031933] pointer-events-none">
        {/* Very subtle line pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full flex-grow flex flex-col justify-center">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          {/* Left Column: Content */}
          <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-8 animate-fadeIn">
                  <span className="w-8 h-[1px] bg-maaga-blue"></span>
                  <span className="text-maaga-accent text-xs font-bold tracking-[0.2em] uppercase">{HERO.subtitle}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-white leading-[1.1] mb-8 tracking-tight animate-fadeIn" style={{animationDelay: '0.2s'}}>
                {HERO.title} <br/>
                <span className="italic text-maaga-accent">{HERO.titleAccent}</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-lg font-light leading-relaxed border-l border-maaga-blue/30 pl-6 animate-fadeIn" style={{animationDelay: '0.4s'}}>
                {HERO.description}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fadeIn" style={{animationDelay: '0.6s'}}>
                <a href="#contact" className="group px-8 py-4 bg-white text-maaga-navy font-medium text-sm uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center gap-3 shadow-lg hover:shadow-xl">
                  {HERO.ctaPrimary} 
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#services" className="px-8 py-4 border border-white/20 text-white font-medium text-sm uppercase tracking-wider hover:bg-white/5 transition-colors backdrop-blur-sm">
                  {HERO.ctaSecondary}
                </a>
              </div>
          </div>

          {/* Right Column: Abstract Visual - Financial Structure */}
          <div className="relative hidden md:flex h-full w-full items-center justify-center animate-fadeIn" style={{animationDelay: '0.8s', perspective: '1200px'}}>
              
              {/* Dynamic Background Shapes - Slower, heavier movement for authority */}
              <div className="absolute inset-0 overflow-visible pointer-events-none select-none">
                  {/* Large rotating/shifting geometric forms */}
                  <div className="absolute top-[5%] right-[10%] w-64 h-64 border border-white/5 rounded-sm animate-shift-slow opacity-20"></div>
                  <div className="absolute bottom-[15%] left-[15%] w-48 h-48 border border-white/5 rounded-sm animate-shift-slower opacity-20"></div>
                  
                  {/* Extended geometric layers for depth and precision */}
                  <div className="absolute top-[15%] left-[10%] w-[400px] h-[400px] border-l border-t border-white/5 rounded-tl-[40px] animate-shift-slower opacity-10"></div>
                  <div className="absolute bottom-[5%] right-[5%] w-[300px] h-[300px] border-r border-b border-white/5 rounded-br-[40px] animate-shift-slow opacity-10"></div>
                  
                  {/* Floating alignment crosshairs/markers */}
                  <div className="absolute top-[25%] right-[25%] w-6 h-6 border-t border-r border-maaga-accent/20 animate-float opacity-40"></div>
                  <div className="absolute bottom-[35%] left-[20%] w-6 h-6 border-b border-l border-maaga-accent/20 animate-float-delayed opacity-40"></div>

                  {/* Grid alignment lines - Precision lines */}
                  <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                  
                  {/* Subtle Pulse Lines */}
                  <div className="absolute top-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"></div>
                  <div className="absolute bottom-[30%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-30"></div>
              </div>

              {/* Gradient Glow - Subtle */}
              <div className="absolute w-[500px] h-[500px] bg-maaga-blue/10 rounded-full blur-[100px] animate-pulse-glow"></div>

              {/* 3D Document Stack Composition */}
              <div className="relative w-full max-w-md aspect-[3.5/5]">
                  
                  {/* Back Document - Shadow */}
                  <div className="absolute top-0 right-0 w-full h-full bg-[#021226] border border-white/5 rounded-sm transform rotate-6 translate-x-6 translate-y-4 opacity-60 shadow-2xl transition-transform duration-[10s] ease-in-out hover:translate-x-8"></div>
                  
                  {/* Middle Document - Layer */}
                  <div className="absolute top-0 right-0 w-full h-full bg-[#051C2C] border border-white/10 rounded-sm transform rotate-3 translate-x-3 translate-y-2 opacity-90 shadow-2xl transition-transform duration-[8s] ease-in-out hover:translate-x-5">
                  </div>

                  {/* Front Document - The "Executive Summary" */}
                  <div className="absolute top-0 mt-8 right-0 w-full h-full bg-white text-maaga-navy rounded-sm shadow-2xl overflow-hidden transform transition-transform hover:scale-[1.01] duration-700 flex flex-col">
                      
                      {/* Document Header */}
                      <div className="h-2 bg-maaga-blue w-full"></div>
                      <div className="p-8 h-full flex flex-col relative z-10 bg-gradient-to-b from-white to-gray-50">
                          
                          {/* Letterhead */}
                          <div className="flex justify-between items-start mb-10 border-b border-gray-100 pb-6">
                              <div>
                                  <div className="w-8 h-8 border-2 border-maaga-navy mb-2">
                                      <div className="w-full h-full bg-maaga-navy transform scale-50"></div>
                                  </div>
                                  <div className="w-24 h-1 bg-maaga-navy mb-1"></div>
                                  <div className="w-16 h-0.5 bg-gray-300"></div>
                              </div>
                              <div className="text-right">
                                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">CONFIDENTIAL</div>
                                  <div className="text-[10px] font-serif text-maaga-navy">REF: 2025-UKUS</div>
                              </div>
                          </div>
                          
                          <div className="space-y-6 flex-grow">
                              {/* Title Area */}
                              <div className="mb-8">
                                  <h3 className="font-serif text-2xl text-maaga-navy mb-2">Executive Summary</h3>
                                  <p className="text-xs text-gray-400 uppercase tracking-wider">Annual Fiscal Review & Strategy</p>
                              </div>

                              {/* Abstract Text Lines (Representation of Data) */}
                              <div className="space-y-4">
                                  {[1, 2, 3, 4].map((i) => (
                                      <div key={i} className="flex gap-4 items-center opacity-60">
                                          <div className="w-1 h-1 bg-maaga-blue rounded-full"></div>
                                          <div className="h-1.5 bg-gray-200 rounded w-full"></div>
                                          <div className="h-1.5 bg-gray-200 rounded w-1/3"></div>
                                      </div>
                                  ))}
                              </div>

                              {/* Financial Graph Representation (Minimalist) */}
                              <div className="mt-8 pt-8 border-t border-gray-100">
                                  <div className="flex items-end gap-2 h-16 opacity-80">
                                      <div className="w-1/6 h-[30%] bg-maaga-grey"></div>
                                      <div className="w-1/6 h-[45%] bg-maaga-grey"></div>
                                      <div className="w-1/6 h-[35%] bg-maaga-grey"></div>
                                      <div className="w-1/6 h-[60%] bg-maaga-blue/20"></div>
                                      <div className="w-1/6 h-[80%] bg-maaga-blue"></div>
                                  </div>
                              </div>
                          </div>

                          {/* Document Footer / Seal */}
                          <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                              <div>
                                  <div className="font-serif italic text-lg text-maaga-navy">Approved</div>
                                  <div className="text-[10px] text-gray-400 mt-1">Director Signature</div>
                              </div>
                              <div className="w-16 h-16 border-2 border-maaga-navy/10 rounded-full flex items-center justify-center opacity-50">
                                  <Shield size={24} className="text-maaga-navy" />
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Floating Element - Audit Badge */}
                  <div className="absolute -bottom-5 -left-5 bg-maaga-navy text-white p-4 rounded-sm shadow-2xl animate-float border border-white/10">
                      <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-white/10 rounded-sm">
                              <FileCheck size={18} />
                          </div>
                          <div>
                              <div className="text-[9px] font-bold uppercase tracking-wider text-maaga-accent">Status</div>
                              <div className="text-sm font-serif">Audit Ready</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        {/* Trust / Benefits Strip (Bottom of Hero) */}
        <div className=" border-white/10 pt-12 pb-8 animate-fadeIn" style={{animationDelay: '1s'}}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {VALUE_ADDITIONS.map((item, index) => {
                    const Icon = item.icon!;
                    return (
                        <div key={index} className="flex border border-white/10 items-start gap-4 group hover:bg-white/5 p-4 rounded-sm transition-colors -ml-4">
                            <div className="mt-1 text-maaga-accent p-2 bg-white/5 rounded-sm group-hover:bg-maaga-accent group-hover:text-maaga-navy transition-all duration-300">
                                <Icon size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-white text-lg mb-1">{item.title}</h4>
                                <p className="text-sm text-gray-400 font-light leading-relaxed group-hover:text-gray-300">{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        

      </div>
    </section>
  );
};

export default Hero;
