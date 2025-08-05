
"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {

  return (
    <section id="hero-container" className="relative h-[calc(100vh-5rem)] min-h-[600px] w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: "url('https://placehold.co/1920x1080.png')",
        }}
        data-ai-hint="abstract technology"
      >
        <div className="absolute inset-0 bg-background/60" />
      </div>
      <div className="container mx-auto flex h-full items-center justify-center text-center relative z-20 px-4 md:px-6">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl font-headline font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Scale Your Support. Delight Your Customers.
          </h1>
          <p className="text-lg text-gray-300 md:text-xl max-w-2xl mx-auto">
            24/7 expert outsourcing so you can focus on growth.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link href="#contact">Get a Free Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
