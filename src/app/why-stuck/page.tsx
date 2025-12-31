import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileWarning, Landmark, UserX, Workflow } from "lucide-react";

const blockers = [
  {
    icon: <FileWarning className="h-10 w-10 text-destructive" />,
    title: "Missing or Expired Documents",
    description: "Sometimes an essential document like an Aadhaar card, ration card, or proof of birth is missing, has expired, or the details are out of date."
  },
  {
    icon: <UserX className="h-10 w-10 text-amber-600" />,
    title: "Name and Address Mismatches",
    description: "A tiny difference in how your name is spelled across different documents (e.g., 'Ram Kumar' vs 'Ram K.') can lead to an automatic rejection."
  },
  {
    icon: <Landmark className="h-10 w-10 text-blue-600" />,
    title: "Bank Account Linkage Issues",
    description: "For many schemes, your bank account must be linked with your Aadhaar (NPCI mapping). If it's not, or if the account is dormant, payments can fail."
  },
  {
    icon: <Workflow className="h-10 w-10 text-indigo-600" />,
    title: "Process and Portal Confusion",
    description: "Government processes can be complex. It's easy to miss a step, upload the wrong file, or not know what to do after you've submitted your application."
  }
];

export default function WhyStuckPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-24 lg:py-32">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold font-headline text-foreground">Why People Get Stuck</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            It's usually not your fault. Government systems are complex, and small issues can cause big delays. Here are the most common blockers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blockers.map((blocker, index) => (
            <Card key={index} className="border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex-col items-center p-8 text-center md:flex-row md:text-left md:items-start md:gap-6">
                <div className="flex-shrink-0 mb-4 md:mb-0">
                  {blocker.icon}
                </div>
                <div>
                  <CardTitle className="text-2xl font-headline">{blocker.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {blocker.description}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
