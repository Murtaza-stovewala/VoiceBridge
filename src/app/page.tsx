import Link from 'next/link';
import Image from 'next/image';
import { Lightbulb, ListChecks, Mic, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

const uspCards = [
  {
    icon: <Mic className="h-10 w-10 text-accent" />,
    title: 'Speak Your Problem',
    description: "No need to type long forms. Just tell us what's wrong in your own voice and language.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-accent" />,
    title: 'Get Clear Answers',
    description: "Our smart assistant listens and finds the exact reason you're stuck, explained in simple terms.",
  },
  {
    icon: <ListChecks className="h-10 w-10 text-accent" />,
    title: 'Know Your Next Step',
    description: 'Receive a simple, step-by-step to-do list to help you fix the issue and move forward.',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-foreground">
                    Stuck with a government scheme?
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    You're eligible, but something is blocking you. Let's figure it out together, using your voice.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href="/talk">
                      <Mic className="mr-2 h-5 w-5" />
                      Start Talking
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/talk">
                      Type Instead
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </div>
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={600}
                  height={400}
                  data-ai-hint={heroImage.imageHint}
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                />
              )}
            </div>
          </div>
        </section>

        {/* Problem Explanation Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Why Is It So Confusing?</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Applying for government help can feel like a maze. Many people get stuck even when they've done everything right. We built VoiceBridge to help you find the way out.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* USP Cards Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-3 lg:gap-12">
              {uspCards.map((card, index) => (
                <Card key={index} className="h-full border-2 border-accent/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-center text-center p-8">
                    {card.icon}
                    <CardTitle className="mt-4 text-2xl font-headline">{card.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline">
                Ready to find your next step?
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Let our assistant guide you. It's simple, free, and private.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Button asChild size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/talk">
                  <Mic className="mr-2 h-5 w-5" />
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
