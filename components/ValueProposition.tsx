import React from 'react';
import { CLIENT_SEGMENTS, VALUE_PROPOSITION } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

const ValueProposition: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Client Segmentation - Editorial Layout */}
        <div className="bg-maaga-grey py-24 px-6 lg:px-12 mt-32">
             <div className="grid lg:grid-cols-3 gap-16 items-start">
                 <div className="lg:col-span-1">
                     <RevealOnScroll>
                         <span className="text-maaga-blue text-xs font-bold tracking-[0.2em] uppercase block mb-4">{VALUE_PROPOSITION.subtitle}</span>
                         <h3 className="text-3xl md:text-4xl font-serif text-maaga-navy mb-6 leading-tight">{VALUE_PROPOSITION.title} <br/>{VALUE_PROPOSITION.titleAccent}</h3>
                         <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
                            {VALUE_PROPOSITION.description}
                         </p>
                         <div className="w-12 h-[2px] bg-maaga-navy"></div>
                     </RevealOnScroll>
                 </div>

                 <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-12">
                   {CLIENT_SEGMENTS.map((segment, index) => {
                     const Icon = segment.icon;
                     return (
                       <RevealOnScroll key={index} delay={index * 100}>
                           <div className="flex gap-5 group">
                             <div className="mt-1 h-fit text-maaga-blue shrink-0 p-3 bg-white rounded shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:bg-maaga-navy group-hover:text-white">
                               <Icon size={24} strokeWidth={1.5} />
                             </div>
                             <div>
                               <h4 className="font-bold font-serif text-xl text-maaga-navy mb-2 group-hover:text-maaga-blue transition-colors">{segment.title}</h4>
                               <p className="text-gray-600 leading-relaxed font-light">{segment.description}</p>
                             </div>
                           </div>
                       </RevealOnScroll>
                     )
                   })}
                 </div>
             </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
