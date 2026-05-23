import { useState } from 'react';
import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Search, Filter, Download, Mail, Phone, MapPin, FileText, ExternalLink, Star } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function CandidateManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'cards'>('cards');

  const candidates = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '+1 (555) 123-4567',
      position: 'Senior Frontend Developer',
      experience: '6 years',
      currentCompany: 'Tech Corp',
      location: 'New York, NY',
      skills: ['React', 'TypeScript', 'Node.js', 'GraphQL'],
      status: 'Interview Scheduled',
      appliedDate: '2024-05-20',
      rating: 4.5,
      resumeUrl: '#',
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael.c@email.com',
      phone: '+1 (555) 234-5678',
      position: 'Product Manager',
      experience: '8 years',
      currentCompany: 'Innovation Inc',
      location: 'San Francisco, CA',
      skills: ['Product Strategy', 'Agile', 'Data Analysis', 'User Research'],
      status: 'Screening',
      appliedDate: '2024-05-21',
      rating: 4.8,
      resumeUrl: '#',
    },
    {
      id: 3,
      name: 'Emily Davis',
      email: 'emily.d@email.com',
      phone: '+1 (555) 345-6789',
      position: 'UX Designer',
      experience: '4 years',
      currentCompany: 'Design Studio',
      location: 'Remote',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      status: 'Final Round',
      appliedDate: '2024-05-18',
      rating: 4.2,
      resumeUrl: '#',
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.w@email.com',
      phone: '+1 (555) 456-7890',
      position: 'Backend Engineer',
      experience: '5 years',
      currentCompany: 'Cloud Systems',
      location: 'Austin, TX',
      skills: ['Python', 'Django', 'PostgreSQL', 'AWS'],
      status: 'Selected',
      appliedDate: '2024-05-15',
      rating: 4.7,
      resumeUrl: '#',
    },
    {
      id: 5,
      name: 'Jessica Brown',
      email: 'jessica.b@email.com',
      phone: '+1 (555) 567-8901',
      position: 'Data Analyst',
      experience: '3 years',
      currentCompany: 'Analytics Co',
      location: 'Boston, MA',
      skills: ['SQL', 'Python', 'Tableau', 'Statistics'],
      status: 'Applied',
      appliedDate: '2024-05-22',
      rating: 4.0,
      resumeUrl: '#',
    },
    {
      id: 6,
      name: 'James Anderson',
      email: 'james.a@email.com',
      phone: '+1 (555) 678-9012',
      position: 'DevOps Engineer',
      experience: '7 years',
      currentCompany: 'Infrastructure Ltd',
      location: 'Seattle, WA',
      skills: ['Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
      status: 'Round 1 Cleared',
      appliedDate: '2024-05-19',
      rating: 4.6,
      resumeUrl: '#',
    },
    {
      id: 7,
      name: 'Maria Garcia',
      email: 'maria.g@email.com',
      phone: '+1 (555) 789-0123',
      position: 'Marketing Manager',
      experience: '5 years',
      currentCompany: 'Brand Agency',
      location: 'Los Angeles, CA',
      skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Analytics'],
      status: 'Rejected',
      appliedDate: '2024-05-10',
      rating: 3.5,
      resumeUrl: '#',
    },
    {
      id: 8,
      name: 'Alex Turner',
      email: 'alex.t@email.com',
      phone: '+1 (555) 890-1234',
      position: 'Full Stack Developer',
      experience: '4 years',
      currentCompany: 'StartupXYZ',
      location: 'Remote',
      skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
      status: 'Round 2 Cleared',
      appliedDate: '2024-05-17',
      rating: 4.4,
      resumeUrl: '#',
    },
  ];

  const getStatusColor = (status: string) => {
    const colors: Record<string, string> = {
      'Applied': 'bg-gray-500/10 text-gray-700 dark:text-gray-400',
      'Screening': 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
      'Interview Scheduled': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
      'Round 1 Cleared': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
      'Round 2 Cleared': 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
      'Final Round': 'bg-indigo-500/10 text-indigo-700 dark:text-indigo-400',
      'Selected': 'bg-green-500/10 text-green-700 dark:text-green-400',
      'Hired': 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400',
      'Rejected': 'bg-red-500/10 text-red-700 dark:text-red-400',
    };
    return colors[status] || 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
  };

  const stats = [
    { label: 'Total Candidates', value: '1,248', color: 'bg-blue-500' },
    { label: 'In Review', value: '245', color: 'bg-amber-500' },
    { label: 'Interviewing', value: '67', color: 'bg-purple-500' },
    { label: 'Selected', value: '156', color: 'bg-green-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Candidate Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage all candidate applications</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 rounded-lg ${stat.color} opacity-10`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Candidates</CardTitle>
              <CardDescription>View and manage candidate applications</CardDescription>
            </div>
          </div>
          <div className="flex gap-4 mt-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search candidates by name, email, or skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="backend">Backend Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="selected">Selected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          {/* Cards View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {candidates.map((candidate) => (
              <Card key={candidate.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {candidate.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold">{candidate.name}</h3>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                            <span className="text-sm text-muted-foreground">{candidate.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{candidate.position}</p>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {candidate.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="w-3 h-3" />
                            {candidate.experience}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge className={getStatusColor(candidate.status)}>
                      {candidate.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{candidate.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{candidate.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{candidate.currentCompany}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground mb-2">Skills</p>
                    <div className="flex flex-wrap gap-2">
                      {candidate.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/candidates/${candidate.id}`} className="flex-1">
                      <Button variant="outline" className="w-full" size="sm">
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm">
                      <FileText className="w-3 h-3" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Mail className="w-3 h-3" />
                    </Button>
                  </div>

                  <div className="mt-3 pt-3 border-t border-border text-xs text-muted-foreground">
                    Applied: {new Date(candidate.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
