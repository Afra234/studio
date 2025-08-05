
"use client";

import Header from '@/components/layout/header';
import Hero from '@/components/landing/hero';
import About from '@/components/landing/about';
import Services from '@/components/landing/services';
import Process from '@/components/landing/process';
import Testimonials from '@/components/landing/testimonials';
import Contact from '@/components/landing/contact';
import Footer from '@/components/layout/footer';

export default function Home() {

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="services"><Services /></div>
        <div id="process"><Process /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
