import { CheckCircle2, LifeBuoy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const privacyStatements = [
  "We do not store your sensitive documents.",
  "We do not sell or share your personal data with anyone.",
  "We do not approve or reject government schemes.",
  "We do not impersonate any government service or official.",
  "All conversations are private and are not saved without your consent.",
  "Our goal is only to guide you, not to make decisions for you."
];

export default function PrivacyAndSupportPage() {
  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">
            Your Trust Is Our Priority
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are committed to handling your information ethically and providing responsible assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <CheckCircle2 className="h-8 w-8 text-green-500" />
              <CardTitle className="text-2xl font-headline">Our Privacy & Ethics Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                We built VoiceBridge to be a safe and trustworthy space. Here are our non-negotiable principles:
              </p>
              <ul className="space-y-4">
                {privacyStatements.map((statement, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-foreground">{statement}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
              <LifeBuoy className="h-8 w-8 text-blue-500" />
              <CardTitle className="text-2xl font-headline">Help & Community Support</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg text-foreground">The Limits of AI Assistance</h3>
                  <p className="text-muted-foreground mt-2">
                    Our AI assistant is a powerful guide, but it is not a human and it is not a government official. It can help identify common problems, but it cannot solve complex personal issues or make official decisions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground">When to Seek Human Help</h3>
                  <p className="text-muted-foreground mt-2">
                    If you have followed the steps and are still stuck, or if your situation is very unusual, it is always best to seek help from a person.
                  </p>
                </div>
                 <div>
                  <h3 className="font-semibold text-lg text-foreground">Community Help Desks (Coming Soon)</h3>
                  <p className="text-muted-foreground mt-2">
                    We are working to partner with trusted NGOs and community help desks. Soon, if our assistant can't solve your problem, we will be able to guide you to a real person nearby who can help you in person.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
