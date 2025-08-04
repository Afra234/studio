"use client";

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { AuthForm } from '@/components/auth/auth-form';
import Link from 'next/link';
import { Logo } from '@/components/shared/logo';

export default function LoginPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-background">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
                <Logo />
                <h1 className="text-2xl font-bold">SupportFlow</h1>
            </Link>
          <h2 className="text-xl font-bold tracking-tight">Client Portal Login</h2>
          <p className="text-muted-foreground">
            Access your dashboard to view support status.
          </p>
        </div>
        <AuthForm />
        <p className="text-center text-sm text-muted-foreground">
            <Link href="/" className="underline hover:text-primary transition-colors">
                &larr; Back to homepage
            </Link>
        </p>
      </div>
    </div>
  );
}
