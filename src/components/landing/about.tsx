import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BarChart, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

const values = [
  { icon: <BarChart className="h-8 w-8 text-primary" />, title: 'Reliability', description: 'Consistent, high-quality support you can count on, day in and day out.' },
  { icon: <HeartHandshake className="h-8 w-8 text-primary" />, title: 'Empathy', description: 'We treat your customers like our own, with genuine care and understanding.' },
  { icon: <Users className="h-8 w-8 text-primary" />, title: 'Scalability', description: 'Our solutions grow with you, seamlessly adapting to your changing needs.' },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">
              Your Partner in Customer Excellence
            </h2>
            <p className="text-muted-foreground text-lg">
              OutsourceFlow was founded on a simple principle: every company, regardless of size, deserves world-class customer support. We're a team of passionate support professionals dedicated to becoming a seamless extension of your brand, handling your customer interactions with expertise and care so you can focus on what you do best—building your business.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image src="https://placehold.co/400x400.png" alt="Team photo 1" width={400} height={400} className="rounded-lg shadow-lg aspect-square object-cover" data-ai-hint="team business" />
            <Image src="https://placehold.co/400x400.png" alt="Team photo 2" width={400} height={400} className="rounded-lg shadow-lg aspect-square object-cover mt-8" data-ai-hint="office work" />
            <Image src="https://placehold.co/400x400.png" alt="Team photo 3" width={400} height={400} className="rounded-lg shadow-lg aspect-square object-cover" data-ai-hint="people meeting" />
            <Image src="https://placehold.co/400x400.png" alt="Team photo 4" width={400} height={400} className="rounded-lg shadow-lg aspect-square object-cover mt-8" data-ai-hint="collaboration discussion" />
          </div>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title} className="text-center bg-card/50 backdrop-blur-sm transition-all shadow-lg border-border/50">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {value.icon}
                </div>
                <CardTitle className="mt-4">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
