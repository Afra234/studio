
"use client";

import { useEffect, useRef } from 'react';
import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import Process from '@/components/landing/process';
import Testimonials from '@/components/landing/testimonials';
import Contact from '@/components/landing/contact';
import Footer from '@/components/layout/footer';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

export default function Home() {
  const sections = ['hero', 'about', 'services', 'process', 'testimonials', 'contact'];
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const entries = useIntersectionObserver(sectionRefs.current, { threshold: 0.1 });

  useEffect(() => {
    sectionRefs.current = sections.map(id => document.getElementById(id));
  }, []);

  useEffect(() => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, [entries]);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div id="hero" className="animated-section is-visible"><Hero /></div>
        <div id="about" className="animated-section"><About /></div>
        <div id="services" className="animated-section"><Services /></div>
        <div id="process" className="animated-section"><Process /></div>
        <div id="testimonials" className="animated-section"><Testimonials /></div>
        <div id="contact" className="animated-section"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
