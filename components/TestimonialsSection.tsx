import React from 'react';
import { Quote } from 'lucide-react';
import { useData } from '../context/DataContext';
import { RevealOnScroll } from './RevealOnScroll';

const TestimonialsSection: React.FC = () => {
  const { data } = useData();
  const TESTIMONIALS = data?.testimonials || [];
  const TESTIMONIALS_SECTION = data?.testimonialsSection || { subtitle: '', title: '' };

  return (
    <section id="testimonials" className="py-32 bg-maaga-grey border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <RevealOnScroll>
            <div className="mb-20 text-center">
                <span className="text-maaga-blue text-xs font-bold tracking-[0.2em] uppercase block mb-4">{TESTIMONIALS_SECTION.subtitle}</span>
                <h2 className="text-4xl font-serif text-maaga-navy">{TESTIMONIALS_SECTION.title}</h2>
            </div>
        </RevealOnScroll>

        <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((item, index) => (
                <RevealOnScroll key={index} delay={index * 200}>
                    <div className="bg-white p-10 shadow-sm hover:shadow-xl transition-shadow duration-500 h-full flex flex-col relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-maaga-navy transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        <div className="text-maaga-blue mb-6 opacity-50">
                            <Quote size={40} />
                        </div>
                        <p className="text-lg text-gray-600 font-light italic leading-relaxed mb-8 flex-grow">
                            "{item.quote}"
                        </p>
                        <div className="border-t border-gray-100 pt-6">
                            <h4 className="font-serif font-bold text-maaga-navy text-lg">{item.author}</h4>
                            <p className="text-xs uppercase tracking-wider text-gray-400 mt-1">{item.role}</p>
                        </div>
                    </div>
                </RevealOnScroll>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
