"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/auth-context';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';
import { useScrollSpy } from '@/lib/hooks/use-scroll-spy';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, LogOut, LayoutDashboard } from 'lucide-react';
import { Logo } from '@/components/shared/logo';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { id: 'about', label: 'About Us' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Header() {
  const { user } = useAuth();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  const activeId = useScrollSpy(isHomePage ? navItems.map(item => `#${item.id}`) : [], { rootMargin: '0% 0% -80% 0%' });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  const navLinks = (
    <>
      {navItems.map((item) => (
        <a
          key={item.id}
          href={`/#${item.id}`}
          className={cn(
            'transition-colors hover:text-primary',
            activeId === item.id ? 'text-primary' : 'text-foreground'
          )}
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className={cn(
      'sticky top-0 z-50 transition-all duration-300',
      isScrolled || !isHomePage ? 'bg-background/80 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold">SupportFlow</span>
        </Link>
        
        {isHomePage && (
          <nav className="hidden items-center gap-6 md:flex">
            {navLinks}
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-4">
          {user ? (
            <>
              {pathname !== '/dashboard' && (
                <Button asChild variant="ghost" className='hidden sm:inline-flex'>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
              )}
              <Button variant="outline" size="icon" onClick={handleSignOut} aria-label="Sign out">
                <LogOut className="h-4 w-4" />
              </Button>
            </>
          ) : (
            <>
             {pathname !== '/login' && (
                <Button asChild>
                  <Link href="/login">Client Login</Link>
                </Button>
              )}
            </>
          )}

          {isHomePage && (
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col gap-6 p-6">
                    <Link href="/" className="flex items-center gap-2">
                      <Logo />
                      <span className="text-xl font-bold">SupportFlow</span>
                    </Link>
                    <nav className="flex flex-col gap-4">
                      {navLinks}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
