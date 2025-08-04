"use client"

import { useAuth } from "@/context/auth-context";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// This is mock data. In a real application, you would fetch this from Firestore
// based on the logged-in user's ID.
const mockTickets = [
  { id: 'TKT-001', subject: 'Cannot login to my account', status: 'Open', lastUpdate: '2 hours ago' },
  { id: 'TKT-002', subject: 'Billing question', status: 'In Progress', lastUpdate: '1 day ago' },
  { id: 'TKT-003', subject: 'Feature request: Dark mode', status: 'Closed', lastUpdate: '3 days ago' },
  { id: 'TKT-004', subject: 'API integration help', status: 'Open', lastUpdate: '5 hours ago' },
];

export function DashboardClient() {
  const { user } = useAuth();

  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'destructive';
      case 'in progress':
        return 'secondary';
      case 'closed':
        return 'default';
      default:
        return 'outline';
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 md:px-6">
      <div className="space-y-4 mb-8">
        <h1 className="text-3xl font-bold font-headline">Client Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, {user?.displayName || user?.email}! Here's the current status of your support tickets.
        </p>
      </div>

      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Your Support Tickets</CardTitle>
          <CardDescription>A list of your recent support requests. This is sample data.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ticket ID</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Last Update</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockTickets.map((ticket) => (
                <TableRow key={ticket.id}>
                  <TableCell className="font-medium">{ticket.id}</TableCell>
                  <TableCell>{ticket.subject}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(ticket.status) as any} className="capitalize">{ticket.status}</Badge>
                  </TableCell>
                  <TableCell className="text-right">{ticket.lastUpdate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
