import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Image from "next/image"

const testimonials = [
  {
    logo: "https://placehold.co/150x50.png",
    quote: "OutsourceFlow transformed our customer support. Our satisfaction scores have never been higher, and our team can finally focus on product development.",
    author: "Jane Doe, CEO of InnovateCo",
    hint: "logo tech"
  },
  {
    logo: "https://placehold.co/150x50.png",
    quote: "The onboarding was seamless, and their team felt like an extension of our own from day one. Truly a game-changer for our operations.",
    author: "John Smith, COO of MarketLeap",
    hint: "logo ecommerce"
  },
  {
    logo: "https://placehold.co/150x50.png",
    quote: "Their 24/7 availability is critical for our global user base. We've seen a dramatic decrease in response times and an increase in positive reviews.",
    author: "Emily White, Head of Customer Experience at HealthWell",
    hint: "logo health"
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Trusted by Growing Companies</h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto mt-16"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-transparent border-0 shadow-none">
                    <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-6">
                      <div className="relative h-12 w-40 opacity-70">
                         <Image src={`${testimonial.logo}?text=${testimonial.author.split(', ')[1]}`} alt={testimonial.author.split(', ')[1]} layout="fill" objectFit="contain" data-ai-hint={testimonial.hint} />
                      </div>
                      <blockquote className="text-xl italic text-foreground/90 max-w-2xl">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="font-semibold text-primary">{testimonial.author}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  )
}
