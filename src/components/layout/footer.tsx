import Link from 'next/link';
import { Logo } from '@/components/shared/logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold">SupportFlow</span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} SupportFlow. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Client Login
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </Link>
        </nav>
      </div>
    </footer>
  );
}
