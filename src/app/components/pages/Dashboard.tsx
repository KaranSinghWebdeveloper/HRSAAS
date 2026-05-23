import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Users, Calendar, CheckCircle2, XCircle, Briefcase, TrendingUp, Clock, UserPlus, ArrowRight } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

export default function Dashboard() {
  const stats = [
    { title: 'Total Candidates', value: '1,248', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Interviews Scheduled', value: '34', change: '+8%', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Selected Candidates', value: '156', change: '+24%', icon: CheckCircle2, color: 'bg-green-500' },
    { title: 'Rejected Candidates', value: '423', change: '-5%', icon: XCircle, color: 'bg-red-500' },
    { title: 'Open Jobs', value: '28', change: '+3', icon: Briefcase, color: 'bg-amber-500' },
    { title: 'Avg. Time to Hire', value: '18 days', change: '-2 days', icon: Clock, color: 'bg-indigo-500' },
  ];

  const hiringPipelineData = [
    { stage: 'Applied', count: 245 },
    { stage: 'Screening', count: 128 },
    { stage: 'Interview', count: 67 },
    { stage: 'Final', count: 34 },
    { stage: 'Offer', count: 18 },
    { stage: 'Hired', count: 12 },
  ];

  const monthlyTrendData = [
    { month: 'Jan', applications: 180, hired: 12 },
    { month: 'Feb', applications: 220, hired: 15 },
    { month: 'Mar', applications: 280, hired: 18 },
    { month: 'Apr', applications: 310, hired: 22 },
    { month: 'May', applications: 340, hired: 28 },
  ];

  const statusDistribution = [
    { name: 'In Progress', value: 435, color: '#6D28D9' },
    { name: 'Selected', value: 156, color: '#10b981' },
    { name: 'Rejected', value: 423, color: '#ef4444' },
    { name: 'On Hold', value: 234, color: '#f59e0b' },
  ];

  const recentCandidates = [
    { name: 'Sarah Johnson', position: 'Senior Frontend Developer', status: 'Interview Scheduled', time: '2 hours ago', avatar: 'SJ' },
    { name: 'Michael Chen', position: 'Product Manager', status: 'Screening', time: '4 hours ago', avatar: 'MC' },
    { name: 'Emily Davis', position: 'UX Designer', status: 'Final Round', time: '1 day ago', avatar: 'ED' },
    { name: 'David Wilson', position: 'Backend Engineer', status: 'Selected', time: '1 day ago', avatar: 'DW' },
    { name: 'Jessica Brown', position: 'Data Analyst', status: 'Applied', time: '2 days ago', avatar: 'JB' },
  ];

  const upcomingInterviews = [
    { candidate: 'Sarah Johnson', position: 'Senior Frontend Developer', time: 'Today, 2:00 PM', interviewer: 'John Smith', round: 'Technical Round' },
    { candidate: 'Alex Turner', position: 'DevOps Engineer', time: 'Today, 4:30 PM', interviewer: 'Emma Davis', round: 'HR Round' },
    { candidate: 'Maria Garcia', position: 'Product Designer', time: 'Tomorrow, 10:00 AM', interviewer: 'Mike Johnson', round: 'Final Round' },
    { candidate: 'James Anderson', position: 'Full Stack Developer', time: 'Tomorrow, 3:00 PM', interviewer: 'Sarah Lee', round: 'Technical Round' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selected': return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'Interview Scheduled': return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      case 'Final Round': return 'bg-purple-500/10 text-purple-700 dark:text-purple-400';
      case 'Screening': return 'bg-amber-500/10 text-amber-700 dark:text-amber-400';
      default: return 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground mt-1">Welcome back! Here's what's happening with your hiring.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Calendar className="w-4 h-4 mr-2" />
            This Month
          </Button>
          <Button>
            <UserPlus className="w-4 h-4 mr-2" />
            Add Candidate
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-green-600 dark:text-green-400">{stat.change}</span>
                      <span className="text-muted-foreground">vs last month</span>
                    </div>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Hiring Pipeline */}
        <Card>
          <CardHeader>
            <CardTitle>Hiring Pipeline</CardTitle>
            <CardDescription>Current candidates by stage</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={hiringPipelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="stage" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="count" fill="#6D28D9" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
            <CardDescription>Applications vs Hires</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="applications" stroke="#2563EB" strokeWidth={2} />
                <Line type="monotone" dataKey="hired" stroke="#10b981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Status Distribution</CardTitle>
            <CardDescription>Candidate status breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={statusDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {statusDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {statusDistribution.map((item, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-muted-foreground">{item.name}</span>
                  </div>
                  <span className="font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Candidates */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Recent Candidates</CardTitle>
                <CardDescription>Latest candidate applications</CardDescription>
              </div>
              <Button variant="ghost" size="sm">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCandidates.map((candidate, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent transition-colors">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {candidate.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{candidate.name}</p>
                      <p className="text-sm text-muted-foreground">{candidate.position}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className={getStatusColor(candidate.status)}>
                      {candidate.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{candidate.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Upcoming Interviews */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Upcoming Interviews</CardTitle>
              <CardDescription>Scheduled interviews for this week</CardDescription>
            </div>
            <Button variant="ghost" size="sm">
              View Calendar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {upcomingInterviews.map((interview, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{interview.candidate}</p>
                    <p className="text-sm text-muted-foreground">{interview.position}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm font-medium">{interview.time}</p>
                    <p className="text-xs text-muted-foreground">{interview.interviewer}</p>
                  </div>
                  <Badge variant="outline">{interview.round}</Badge>
                  <Button size="sm">Join</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
