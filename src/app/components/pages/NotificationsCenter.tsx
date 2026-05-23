import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Mail, Calendar, User, Briefcase, CheckCircle2, Bell, Filter, Search } from 'lucide-react';
import { Input } from '../ui/input';

export default function NotificationsCenter() {
  const notifications = [
    {
      id: 1,
      type: 'application',
      title: 'New Application Received',
      message: 'Sarah Johnson applied for Senior Frontend Developer',
      timestamp: '5 minutes ago',
      read: false,
      icon: User,
      color: 'bg-blue-500',
    },
    {
      id: 2,
      type: 'interview',
      title: 'Interview Reminder',
      message: 'Interview with Alex Turner starts in 30 minutes',
      timestamp: '15 minutes ago',
      read: false,
      icon: Calendar,
      color: 'bg-purple-500',
    },
    {
      id: 3,
      type: 'feedback',
      title: 'Feedback Submitted',
      message: 'John Smith submitted feedback for Emily Davis',
      timestamp: '1 hour ago',
      read: false,
      icon: CheckCircle2,
      color: 'bg-green-500',
    },
    {
      id: 4,
      type: 'job',
      title: 'Job Posted Successfully',
      message: 'Backend Engineer position is now live',
      timestamp: '2 hours ago',
      read: true,
      icon: Briefcase,
      color: 'bg-amber-500',
    },
    {
      id: 5,
      type: 'application',
      title: 'Application Status Updated',
      message: 'Maria Garcia moved to Final Round',
      timestamp: '3 hours ago',
      read: true,
      icon: User,
      color: 'bg-blue-500',
    },
    {
      id: 6,
      type: 'interview',
      title: 'Interview Completed',
      message: 'Technical Round 1 completed for James Anderson',
      timestamp: '5 hours ago',
      read: true,
      icon: CheckCircle2,
      color: 'bg-green-500',
    },
  ];

  const emailLogs = [
    {
      id: 1,
      to: 'sarah.j@email.com',
      subject: 'Application Received - Senior Frontend Developer',
      status: 'Delivered',
      timestamp: '2024-05-23 10:30 AM',
    },
    {
      id: 2,
      to: 'alex.t@email.com',
      subject: 'Interview Invitation - DevOps Engineer',
      status: 'Delivered',
      timestamp: '2024-05-23 09:15 AM',
    },
    {
      id: 3,
      to: 'maria.g@email.com',
      subject: 'Interview Reminder - Product Designer',
      status: 'Opened',
      timestamp: '2024-05-22 4:00 PM',
    },
    {
      id: 4,
      to: 'james.a@email.com',
      subject: 'Application Status Update',
      status: 'Delivered',
      timestamp: '2024-05-22 2:30 PM',
    },
    {
      id: 5,
      to: 'emily.d@email.com',
      subject: 'Final Round Interview Scheduled',
      status: 'Opened',
      timestamp: '2024-05-22 11:00 AM',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'Opened':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      case 'Failed':
        return 'bg-red-500/10 text-red-700 dark:text-red-400';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Notifications Center</h1>
          <p className="text-muted-foreground mt-1">Stay updated with all recruitment activities</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
          <Button variant="outline">Mark All Read</Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Unread</p>
                <p className="text-2xl font-bold mt-1">3</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-red-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold mt-1">45</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Emails Sent</p>
                <p className="text-2xl font-bold mt-1">234</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="notifications" className="space-y-6">
        <TabsList>
          <TabsTrigger value="notifications">
            <Bell className="w-4 h-4 mr-2" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="emails">
            <Mail className="w-4 h-4 mr-2" />
            Email Logs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>All Notifications</CardTitle>
                  <CardDescription>System updates and activity alerts</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search notifications..." className="pl-10" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {notifications.map((notification) => {
                  const Icon = notification.icon;
                  return (
                    <div
                      key={notification.id}
                      className={`p-4 rounded-lg border transition-colors ${
                        notification.read
                          ? 'border-border bg-background'
                          : 'border-primary/30 bg-primary/5'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg ${notification.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h3 className="font-semibold">{notification.title}</h3>
                            {!notification.read && (
                              <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            {notification.message}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              {notification.timestamp}
                            </span>
                            {!notification.read && (
                              <Button variant="ghost" size="sm">
                                Mark as Read
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="emails">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Email Logs</CardTitle>
                  <CardDescription>Track all automated emails sent to candidates</CardDescription>
                </div>
                <div className="relative w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search emails..." className="pl-10" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {emailLogs.map((log) => (
                  <Card key={log.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-blue-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <p className="font-medium mb-1">{log.subject}</p>
                              <p className="text-sm text-muted-foreground">To: {log.to}</p>
                            </div>
                            <Badge className={getStatusColor(log.status)}>
                              {log.status}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs text-muted-foreground">{log.timestamp}</span>
                            <Button variant="ghost" size="sm">View Details</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
