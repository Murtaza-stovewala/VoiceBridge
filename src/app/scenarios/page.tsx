import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, FileWarning, ShieldCheck } from "lucide-react";

const scenarios = [
  {
    user: "An Elderly Pensioner",
    problem: "Their monthly pension suddenly stopped, and the bank couldn't give a clear reason.",
    blocker: "The AI identified that their annual 'Life Certificate' (Jeevan Pramaan) had expired and wasn't submitted.",
    outcome: "VoiceBridge provided simple steps: 'Visit your nearest bank branch with your Aadhaar card and ask to submit your Life Certificate.' The pension resumed the next month."
  },
  {
    user: "A Migrant Construction Worker",
    problem: "He was trying to apply for a state health scheme but his online application was failing.",
    blocker: "The assistant found a mismatch. His Aadhaar card had his village address, but he was applying from the city where he worked.",
    outcome: "The platform guided him on how to update his current address on the Aadhaar portal, unblocking his health scheme application."
  },
  {
    user: "A Single Mother",
    problem: "Her application for a child support scheme was rejected with a 'data mismatch' error.",
    blocker: "By asking a few questions, the AI discovered her name was spelled 'Sunita Devi' on her Aadhaar but 'Sunita' on her bank account.",
    outcome: "We explained that the names must match exactly and gave her the steps to get her name corrected at her bank branch."
  }
];

export default function RealLifeScenariosPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Real-Life Scenarios</h1>
        <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          These aren't real people, but their stories are based on the common problems we help solve every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {scenarios.map((scenario, index) => (
          <Card key={index} className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-headline">{scenario.user}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FileWarning className="h-5 w-5 text-destructive" />
                    <h3 className="font-semibold text-lg">The Problem</h3>
                  </div>
                  <p className="text-muted-foreground">{scenario.problem}</p>
                </div>
                <div className="border-t my-4"></div>
                <div>
                   <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <h3 className="font-semibold text-lg">How We Helped</h3>
                  </div>
                  <p className="text-muted-foreground"><span className="font-semibold text-foreground">Identified Blocker:</span> {scenario.blocker}</p>
                  <p className="text-muted-foreground mt-2"><span className="font-semibold text-foreground">Actionable Guidance:</span> {scenario.outcome}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
