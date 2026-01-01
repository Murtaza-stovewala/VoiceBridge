import Link from 'next/link';
import Image from 'next/image';
import {
  Mic,
  ArrowRight,
  Lightbulb,
  FileCheck,
  Languages,
  BadgeCheck,
  FileText,
  ShieldCheck,
  Star,
  MessageCircle,
  StepForward,
  ScanSearch,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-citizen');
const docReviewImage = PlaceHolderImages.find(img => img.id === 'doc-review');
const formGuidanceImage = PlaceHolderImages.find(img => img.id === 'form-guidance');
const privacyImage = PlaceHolderImages.find(img => img.id === 'privacy-visual');


const statCards = [
  {
    icon: <FileCheck className="h-8 w-8 text-primary" />,
    value: "10+",
    label: "Schemes Supported",
  },
  {
    icon: <BadgeCheck className="h-8 w-8 text-primary" />,
    value: "50+",
    label: "Common Blockers Identified",
  },
  {
    icon: <Languages className="h-8 w-8 text-primary" />,
    value: "5+",
    label: "Languages Supported",
  },
  {
    icon: <StepForward className="h-8 w-8 text-primary" />,
    value: "1000s",
    label: "Guided Resolution Steps",
  },
]

const featureCards = [
  {
    icon: <Mic className="h-10 w-10 text-primary" />,
    title: 'Voice-First Interaction',
    description: "Citizens explain their issue by speaking in their preferred language.",
  },
  {
    icon: <ScanSearch className="h-10 w-10 text-primary" />,
    title: 'Blocker Identification',
    description: "The system detects missing documents, process errors, or eligibility confusion.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: 'Clear Next Steps',
    description: 'Simple, step-by-step guidance on what to do next.',
  },
];

const processSteps = [
    { icon: <Mic />, label: "Speak Your Issue" },
    { icon: <FileText />, label: "System Understands the Blocker" },
    { icon: <MessageCircle />, label: "Guidance Is Generated" },
    { icon: <ArrowRight />, label: "User Takes Action" },
];

const testimonials = [
  {
    name: "R. Kumar",
    quote: "I was so confused about the 'data mismatch' error. VoiceBridge explained it simply and told me exactly which document to fix. Very helpful."
  },
  {
    name: "A. Patel",
    quote: "The voice system is very easy. I did not have to type anything. I just spoke my problem and got the steps. It saved me a lot of time."
  },
  {
    name: "S. Devi",
    quote: "For months, my pension was stuck. The assistant identified the expired life certificate problem in minutes. I am grateful for this service."
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none font-headline text-foreground">
                    Welcome to the VoiceBridge Assistance Platform
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A voice-based support system designed to help eligible citizens understand application issues, missing documents, and next steps for government schemes.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Button asChild size="lg">
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
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
                    {statCards.map((stat) => (
                        <div key={stat.label} className="flex items-center gap-3">
                            {stat.icon}
                            <div className='flex flex-col'>
                                <p className="text-xl font-bold">{stat.value}</p>
                                <p className="text-sm text-muted-foreground">{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                 {heroImage && (
                    <div className="relative w-full max-w-md mx-auto">
                        <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                        <div
                            className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
                        <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        width={500}
                        height={600}
                        data-ai-hint={heroImage.imageHint}
                        className="mx-auto rounded-t-full object-cover object-top"
                        />
                    </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Key Capabilities Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Key Capabilities</h2>
            </div>
            <div className="grid items-start gap-8 lg:grid-cols-3">
              {featureCards.map((card, index) => (
                <Card key={index} className="h-full hover:shadow-md transition-shadow duration-300">
                  <CardHeader className="flex flex-col items-start p-6">
                    <div className="p-3 bg-primary/10 rounded-lg mb-4">
                        {card.icon}
                    </div>
                    <CardTitle className="mb-2 text-xl font-headline">{card.title}</CardTitle>
                    <CardDescription className="text-base text-left">{card.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Support Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="p-8">
                        <h3 className="text-2xl font-bold mb-2">Application Process Assistance</h3>
                        <p className="text-muted-foreground mb-4">Explains how VoiceBridge helps users understand where they got stuck.</p>
                        <Link href="#" className="font-semibold text-primary hover:underline">Learn More &rarr;</Link>
                    </Card>
                     <Card className="p-8">
                        <h3 className="text-2xl font-bold mb-2">Improving Success Outcomes</h3>
                        <p className="text-muted-foreground mb-4">Explains how guided clarity increases successful benefit access.</p>
                        <Link href="#" className="font-semibold text-primary hover:underline">Learn More &rarr;</Link>
                    </Card>
                </div>
            </div>
        </section>

        {/* How the Assistance Works Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
                 <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">How the Assistance Works</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {processSteps.map((step, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-3">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                                {step.icon}
                            </div>
                            <p className="font-medium">{step.label}</p>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {docReviewImage && <Image src={docReviewImage.imageUrl} alt={docReviewImage.description} width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint={docReviewImage.imageHint} />}
                    {formGuidanceImage && <Image src={formGuidanceImage.imageUrl} alt={formGuidanceImage.description} width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint={formGuidanceImage.imageHint} />}
                    {privacyImage && <Image src={privacyImage.imageUrl} alt={privacyImage.description} width={400} height={300} className="rounded-lg object-cover w-full aspect-[4/3]" data-ai-hint={privacyImage.imageHint} />}
                </div>
            </div>
        </section>

        {/* User Feedback & Trust Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Citizen Feedback & Experiences</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {testimonials.map((t, i) => (
                <Card key={i}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <p className="text-muted-foreground mb-4">&quot;{t.quote}&quot;</p>
                    <p className="font-semibold">{t.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline">View All Feedback</Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="rounded-lg bg-gradient-to-r from-green-600 to-teal-600 p-8 md:p-12 text-primary-foreground">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter">Need Help Understanding Your Scheme Status?</h2>
                        <p className="mt-2 opacity-90">VoiceBridge helps you understand what’s blocking your application and what to do next — safely and privately.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-self-end">
                        <Button asChild size="lg" variant="secondary" className="bg-white/90 text-primary hover:bg-white">
                            <Link href="/talk">Start Assistance</Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                            <Link href="/talk">
                                <Mic className="mr-2 h-5 w-5" />
                                Talk to Assistant
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
