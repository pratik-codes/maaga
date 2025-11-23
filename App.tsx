import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import StoryCarousel from './components/StoryCarousel';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-maaga-navy">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <ServicesSection />
        <AboutSection />
        <StoryCarousel />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
