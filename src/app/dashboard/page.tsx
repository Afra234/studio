import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { DashboardClient } from '@/components/dashboard/dashboard-client';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <DashboardClient />
      </main>
      <Footer />
    </div>
  );
}
