"use client";

import { useAuth } from '@/context/auth-context';
import { useRouter } from 'next/navigation';
import { useEffect, type ReactNode } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center p-4 gap-4 bg-background">
        <Skeleton className="h-8 w-48 bg-muted/50" />
        <Skeleton className="h-4 w-64 bg-muted/50" />
        <div className="w-full max-w-4xl mt-8 space-y-4">
          <Skeleton className="h-12 w-full bg-muted/50" />
          <Skeleton className="h-24 w-full bg-muted/50" />
          <Skeleton className="h-24 w-full bg-muted/50" />
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
