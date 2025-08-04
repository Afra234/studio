import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MessageSquare, Settings, Check } from 'lucide-react';
import Image from "next/image";

const services = [
  {
    id: "email-chat",
    title: "Email & Chat Support",
    icon: <Mail className="h-6 w-6" />,
    description: "Provide fast, friendly, and efficient responses to your customer inquiries through email and live chat. We ensure every interaction is a positive one.",
    details: ["24/7 or Business Hours Coverage", "Multi-language Support", "Ticketing System Integration", "Personalized Customer Responses"],
    image: "https://placehold.co/600x400.png",
    imageHint: "customer support chat"
  },
  {
    id: "voice-phone",
    title: "Voice & Phone Support",
    icon: <Phone className="h-6 w-6" />,
    description: "A human voice can make all the difference. Our professional agents offer inbound and outbound call support to resolve issues and build customer rapport.",
    details: ["Inbound & Outbound Calls", "IVR & Call Routing Setup", "Voicemail Management", "Quality Assurance & Call Recording"],
    image: "https://placehold.co/600x400.png",
    imageHint: "call center"
  },
  {
    id: "social-media",
    title: "Social Media Moderation",
    icon: <MessageSquare className="h-6 w-6" />,
    description: "Protect your brand's reputation and engage with your community across all social platforms. We handle comments, messages, and reviews with care.",
    details: ["Community Management", "Content Moderation", "Brand Reputation Monitoring", "Direct Message Handling"],
    image: "https://placehold.co/600x400.png",
    imageHint: "social media"
  },
  {
    id: "helpdesk",
    title: "Helpdesk Setup & Management",
    icon: <Settings className="h-6 w-6" />,
    description: "We don't just use helpdesks, we build them. Let us set up, optimize, and manage your support software (like Zendesk, Intercom, or Freshdesk).",
    details: ["Platform Selection & Setup", "Workflow Automation", "Knowledge Base Creation", "Performance Reporting & Analytics"],
    image: "https://placehold.co/600x400.png",
    imageHint: "analytics dashboard"
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Our Suite of Support Solutions</h2>
          <p className="text-lg text-muted-foreground">
            Tailored services designed to meet your unique customer support needs, at any scale.
          </p>
        </div>

        <Tabs defaultValue="email-chat" className="mt-12 w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-auto bg-transparent p-0">
            {services.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className="data-[state=active]:bg-primary/90 data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg h-24 flex-col gap-2 p-4 text-center border border-border/50 hover:bg-primary/10 transition-colors rounded-md">
                {service.icon}
                <span className="font-semibold">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-6">
              <Card className="border-0 bg-transparent shadow-none">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="relative aspect-video">
                        <Image src={service.image} alt={service.title} fill className="rounded-lg object-cover shadow-lg" data-ai-hint={service.imageHint} />
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                        <ul className="space-y-3 pt-2">
                            {service.details.map((detail, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <Check className="h-5 w-5 text-primary shrink-0" />
                                    <span>{detail}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
