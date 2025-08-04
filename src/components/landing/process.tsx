import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Search, Users, Rocket, CheckCircle, BarChart2 } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-10 w-10" />,
    title: "1. Discovery",
    description: "We start by deeply understanding your business, customers, and support needs."
  },
  {
    icon: <Users className="h-10 w-10" />,
    title: "2. Onboarding",
    description: "We assemble and train a dedicated team perfectly matched to your brand's voice."
  },
  {
    icon: <Rocket className="h-10 w-10" />,
    title: "3. Training & Launch",
    description: "Your team undergoes rigorous product training before we go live."
  },
  {
    icon: <CheckCircle className="h-10 w-10" />,
    title: "4. Ongoing QA",
    description: "We continuously monitor performance to ensure the highest quality standards."
  },
  {
    icon: <BarChart2 className="h-10 w-10" />,
    title: "5. Reporting",
    description: "You receive transparent reports on key metrics and customer satisfaction."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Proven Process</h2>
          <p className="text-lg text-muted-foreground">
            A streamlined, transparent journey from initial contact to exceptional, ongoing support.
          </p>
        </div>
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-4 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block" aria-hidden="true"></div>
          <div className="grid gap-12 md:gap-0">
            {processSteps.map((step, index) => (
              <div key={step.title} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${index > 0 ? 'md:mt-12' : ''}`}>
                <div className="hidden md:block md:w-1/2"></div>
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
                  <div className="h-4 w-4 rounded-full bg-primary ring-8 ring-background"></div>
                </div>
                <div className="md:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm shadow-lg border-border/50 transition-all hover:shadow-primary/20 hover:border-primary/50">
                    <CardHeader className="flex flex-row items-center gap-4 p-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
