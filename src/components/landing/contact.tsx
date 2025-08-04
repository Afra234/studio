"use client";

import { useActionState, useFormStatus } from "react";
import { submitContactForm, ContactFormState } from "@/app/actions/contact";
import { useEffect, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import Image from "next/image";
import { Terminal } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message & Get Audit"}
    </Button>
  );
}

const initialState: ContactFormState = {
  message: "",
  success: false,
};

export default function Contact() {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        formRef.current?.reset();
      } else if (state.issues || state.message) {
        // Error message is handled via the Alert component below
      }
    }
  }, [state, toast]);

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-headline font-bold tracking-tight sm:text-4xl">Ready to Scale?</h2>
            <p className="text-lg text-muted-foreground">
              Let's talk about how we can elevate your customer support. Fill out the form to get a free, no-obligation audit of your current setup.
            </p>
            <div className="relative aspect-video w-full mt-8 rounded-lg overflow-hidden shadow-lg border border-border/50">
                <Image src="https://placehold.co/600x400.png" alt="Customer support center map" layout="fill" objectFit="cover" data-ai-hint="map illustration" />
            </div>
          </div>

          <form ref={formRef} action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="John Doe" required defaultValue={state.fields?.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" placeholder="Acme Inc." required defaultValue={state.fields?.company} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="john@acme.com" required defaultValue={state.fields?.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your support challenges..." required rows={5} defaultValue={state.fields?.message} />
            </div>
            {!state.success && state.message && (
              <Alert variant="destructive">
                <Terminal className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  {state.message}
                  {state.issues && (
                    <ul className="list-disc pl-5 mt-2">
                      {state.issues.map((issue, index) => <li key={index}>{issue}</li>)}
                    </ul>
                  )}
                </AlertDescription>
              </Alert>
            )}
            <SubmitButton />
          </form>
        </div>
      </div>
    </section>
  );
}
