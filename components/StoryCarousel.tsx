import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useData } from '../context/DataContext';

const StoryCarousel: React.FC = () => {
  const { data } = useData();
  const STORY_SLIDES = data?.storySlides || [];
  const STORY_SECTION = data?.storySection || { subtitle: '', title: '' };

  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrent((prev) => (prev === STORY_SLIDES.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? STORY_SLIDES.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (STORY_SLIDES.length === 0) return;
    
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, STORY_SLIDES.length]);

  if (STORY_SLIDES.length === 0) return null;

  return (
    <section id="story" className="bg-white py-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
                <span className="text-maaga-blue text-xs font-bold tracking-[0.2em] uppercase block mb-4">{STORY_SECTION.subtitle}</span>
                <h2 className="text-4xl md:text-5xl font-serif text-maaga-navy">{STORY_SECTION.title}</h2>
            </div>
            <div className="flex gap-0 mt-8 md:mt-0 border border-gray-200">
                <button 
                    onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
                    className="p-5 hover:bg-maaga-navy hover:text-white transition-all border-r border-gray-200"
                >
                    <ChevronLeft size={18} strokeWidth={1} />
                </button>
                <button 
                    onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
                    className="p-5 hover:bg-maaga-navy hover:text-white transition-all"
                >
                    <ChevronRight size={18} strokeWidth={1} />
                </button>
            </div>
        </div>

        <div className="bg-maaga-grey p-0 grid lg:grid-cols-2 min-h-[550px] shadow-sm">
            
            {/* Image Side */}
            <div className="relative h-72 lg:h-full overflow-hidden group">
                <img 
                    src={STORY_SLIDES[current].image} 
                    alt={STORY_SLIDES[current].title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105 grayscale"
                />
                <div className="absolute inset-0 bg-maaga-navy/30 mix-blend-multiply"></div>
            </div>

            {/* Content Side */}
            <div className="p-12 lg:p-24 flex flex-col justify-center relative bg-maaga-grey">
                <div className="animate-fadeIn" key={current}>
                    <div className="flex items-center gap-4 mb-8">
                        <span className="text-maaga-blue font-bold text-xs tracking-[0.2em] uppercase">
                            Chapter 0{current + 1}
                        </span>
                        <div className="h-[1px] w-12 bg-gray-300"></div>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-serif text-maaga-navy mb-8 leading-snug">
                        {STORY_SLIDES[current].title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed font-light mb-10">
                        {STORY_SLIDES[current].content}
                    </p>

                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-maaga-navy">
                        Read More <ArrowRight size={14} />
                    </div>
                </div>

                {/* Minimalist Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
                    <div 
                        className="h-full bg-maaga-navy transition-all duration-500 ease-out"
                        style={{ width: `${((current + 1) / STORY_SLIDES.length) * 100}%` }}
                    ></div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default StoryCarousel;
