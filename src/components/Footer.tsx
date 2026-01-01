import Link from 'next/link';
import { MessageSquareHeart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4 md:col-span-2">
             <Link href="/" className="flex items-center space-x-2">
                <MessageSquareHeart className="h-8 w-8 text-primary" />
                <span className="font-bold text-xl">VoiceBridge</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              A civic assistance platform designed to guide citizens, not replace government systems.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-muted-foreground hover:text-foreground">Home</Link></li>
              <li><Link href="/how-it-works" className="text-muted-foreground hover:text-foreground">How We Help</Link></li>
              <li><Link href="/privacy-and-support" className="text-muted-foreground hover:text-foreground">Privacy & Ethics</Link></li>
              <li><Link href="/privacy-and-support" className="text-muted-foreground hover:text-foreground">Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contact Information</h4>
            <ul className="space-y-2 text-sm">
                <li><p className="text-muted-foreground">Support Email:</p><p>support@voicebridge.example</p></li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} VoiceBridge. Built to assist. Not affiliated with any government authority.</p>
        </div>
      </div>
    </footer>
  );
}
