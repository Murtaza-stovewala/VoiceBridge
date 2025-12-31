import { ArrowRight, Cpu, ListChecks, Mic, Smile } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  {
    icon: <Mic className="h-12 w-12 text-primary" />,
    title: "1. Speak or Type",
    description: "Tell us about the problem you're facing with a government scheme, in your own words."
  },
  {
    icon: <Cpu className="h-12 w-12 text-primary" />,
    title: "2. AI Identifies the Blocker",
    description: "Our smart assistant listens and analyzes your situation to find the exact reason you're stuck."
  },
  {
    icon: <ListChecks className="h-12 w-12 text-primary" />,
    title: "3. Get Simple Guidance",
    description: "We provide a clear, step-by-step guide on what documents you need or what actions to take."
  },
  {
    icon: <Smile className="h-12 w-12 text-primary" />,
    title: "4. Retry with Confidence",
    description: "Armed with clear information, you can confidently take the next step to access your scheme."
  }
];

export default function HowWeHelpPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">How VoiceBridge Helps You</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          We've made it simple to understand why you're blocked and what to do next. Here’s our 4-step process.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <Card className="w-full h-full bg-secondary/30 border-0 shadow-none">
              <CardHeader className="p-8">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                  {step.icon}
                </div>
                <CardTitle className="text-xl font-headline">{step.title}</CardTitle>
                <CardDescription className="mt-2 text-base text-muted-foreground">{step.description}</CardDescription>
              </CardHeader>
            </Card>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground">Ready to get un-stuck?</p>
        <Button asChild size="lg" className="mt-4 bg-accent text-accent-foreground hover:bg-accent/90">
          <Link href="/talk">
            Talk to our Assistant
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
