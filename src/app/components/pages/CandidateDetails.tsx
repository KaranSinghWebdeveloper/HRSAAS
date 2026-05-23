import { useState } from 'react';
import { useParams, Link } from 'react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import {
  ArrowLeft, Mail, Phone, MapPin, Briefcase, DollarSign, Calendar,
  FileText, Linkedin, Globe, Download, MessageSquare, Star, CheckCircle2,
  XCircle, Clock, User
} from 'lucide-react';
import { Separator } from '../ui/separator';

export default function CandidateDetails() {
  const { id } = useParams();
  const [note, setNote] = useState('');

  const candidate = {
    id: 1,
    name: 'Sarah Johnson',
    email: 'sarah.j@email.com',
    phone: '+1 (555) 123-4567',
    position: 'Senior Frontend Developer',
    experience: '6 years',
    currentCompany: 'Tech Corp',
    currentSalary: '$120,000',
    expectedSalary: '$160,000',
    noticePeriod: '30 days',
    location: 'New York, NY',
    linkedin: 'linkedin.com/in/sarahjohnson',
    portfolio: 'sarahjohnson.dev',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Next.js', 'TailwindCSS', 'PostgreSQL'],
    status: 'Interview Scheduled',
    appliedDate: '2024-05-20',
    rating: 4.5,
    resumeUrl: '#',
  };

  const timeline = [
    {
      type: 'applied',
      title: 'Application Submitted',
      description: 'Candidate applied for Senior Frontend Developer position',
      timestamp: '2024-05-20 10:30 AM',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      type: 'reviewed',
      title: 'Application Reviewed',
      description: 'Resume reviewed by HR Team',
      timestamp: '2024-05-20 2:15 PM',
      icon: CheckCircle2,
      color: 'bg-green-500',
    },
    {
      type: 'screening',
      title: 'Screening Call Scheduled',
      description: 'HR screening call scheduled with Emma Davis',
      timestamp: '2024-05-21 9:00 AM',
      icon: Calendar,
      color: 'bg-purple-500',
    },
    {
      type: 'round1',
      title: 'Technical Round 1 - Passed',
      description: 'Technical interview with John Smith. Score: 4.5/5',
      timestamp: '2024-05-22 3:00 PM',
      icon: CheckCircle2,
      color: 'bg-green-500',
    },
    {
      type: 'round2',
      title: 'Technical Round 2 Scheduled',
      description: 'System design interview scheduled with Mike Johnson',
      timestamp: '2024-05-24 11:00 AM',
      icon: Clock,
      color: 'bg-amber-500',
    },
  ];

  const interviews = [
    {
      round: 'HR Screening',
      interviewer: 'Emma Davis',
      date: '2024-05-21',
      time: '9:00 AM',
      duration: '30 mins',
      status: 'Completed',
      result: 'Pass',
      rating: 4.0,
      feedback: 'Great communication skills, clear about expectations and career goals.',
    },
    {
      round: 'Technical Round 1',
      interviewer: 'John Smith',
      date: '2024-05-22',
      time: '3:00 PM',
      duration: '60 mins',
      status: 'Completed',
      result: 'Pass',
      rating: 4.5,
      feedback: 'Strong technical knowledge in React and TypeScript. Solved coding challenges efficiently.',
    },
    {
      round: 'Technical Round 2',
      interviewer: 'Mike Johnson',
      date: '2024-05-24',
      time: '11:00 AM',
      duration: '90 mins',
      status: 'Scheduled',
      result: 'Pending',
      rating: 0,
      feedback: '',
    },
  ];

  const notes = [
    {
      author: 'Emma Davis',
      role: 'HR Manager',
      date: '2024-05-21',
      content: 'Excellent candidate with strong background. Very enthusiastic about the role and company mission.',
    },
    {
      author: 'John Smith',
      role: 'Tech Lead',
      date: '2024-05-22',
      content: 'Impressed by the candidate\'s problem-solving approach and code quality. Would be a great addition to the team.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/candidates">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Candidate Profile</h1>
            <p className="text-muted-foreground mt-1">Detailed candidate information and interview history</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
          <Link to="/interviews">
            <Button>
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Column - Candidate Info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">{candidate.name}</h2>
                <p className="text-muted-foreground">{candidate.position}</p>
                <div className="flex items-center gap-1 mt-2">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{candidate.rating}</span>
                  <span className="text-sm text-muted-foreground">/5.0</span>
                </div>
                <Badge className="mt-3 bg-blue-500/10 text-blue-700 dark:text-blue-400">
                  {candidate.status}
                </Badge>
              </div>

              <Separator className="my-6" />

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{candidate.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{candidate.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{candidate.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Briefcase className="w-4 h-4 text-muted-foreground" />
                  <span className="text-foreground">{candidate.experience} experience</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Linkedin className="w-4 h-4 text-muted-foreground" />
                  <a href={`https://${candidate.linkedin}`} className="text-primary hover:underline">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <a href={`https://${candidate.portfolio}`} className="text-primary hover:underline">
                    Portfolio
                  </a>
                </div>
              </div>

              <Separator className="my-6" />

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Company</span>
                  <span className="font-medium">{candidate.currentCompany}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Current Salary</span>
                  <span className="font-medium">{candidate.currentSalary}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Expected Salary</span>
                  <span className="font-medium">{candidate.expectedSalary}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Notice Period</span>
                  <span className="font-medium">{candidate.noticePeriod}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Update Status</CardTitle>
            </CardHeader>
            <CardContent>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder={candidate.status} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="screening">Screening</SelectItem>
                  <SelectItem value="interview">Interview Scheduled</SelectItem>
                  <SelectItem value="round1">Round 1 Cleared</SelectItem>
                  <SelectItem value="round2">Round 2 Cleared</SelectItem>
                  <SelectItem value="final">Final Round</SelectItem>
                  <SelectItem value="selected">Selected</SelectItem>
                  <SelectItem value="hired">Hired</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
              <Button className="w-full mt-3">Update Status</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {candidate.skills.map((skill, index) => (
                  <Badge key={index} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Details */}
        <div className="lg:col-span-2 space-y-6">
          <Tabs defaultValue="timeline" className="space-y-6">
            <TabsList>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="interviews">Interview History</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
              <TabsTrigger value="resume">Resume</TabsTrigger>
            </TabsList>

            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                  <CardDescription>Complete history of candidate interactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {timeline.map((event, index) => {
                      const Icon = event.icon;
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full ${event.color} flex items-center justify-center`}>
                              <Icon className="w-5 h-5 text-white" />
                            </div>
                            {index < timeline.length - 1 && (
                              <div className="w-px h-full bg-border mt-2" />
                            )}
                          </div>
                          <div className="flex-1 pb-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <p className="font-medium">{event.title}</p>
                                <p className="text-sm text-muted-foreground">{event.description}</p>
                              </div>
                              <span className="text-xs text-muted-foreground whitespace-nowrap">
                                {event.timestamp}
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="interviews">
              <Card>
                <CardHeader>
                  <CardTitle>Interview History</CardTitle>
                  <CardDescription>All interview rounds and feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {interviews.map((interview, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-semibold">{interview.round}</h3>
                              <p className="text-sm text-muted-foreground">
                                Interviewer: {interview.interviewer}
                              </p>
                            </div>
                            <Badge className={
                              interview.result === 'Pass' ? 'bg-green-500/10 text-green-700 dark:text-green-400' :
                              interview.result === 'Pending' ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400' :
                              'bg-red-500/10 text-red-700 dark:text-red-400'
                            }>
                              {interview.result}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 mb-3 text-sm">
                            <div>
                              <p className="text-muted-foreground">Date</p>
                              <p className="font-medium">{interview.date}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Time</p>
                              <p className="font-medium">{interview.time}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Duration</p>
                              <p className="font-medium">{interview.duration}</p>
                            </div>
                          </div>
                          {interview.rating > 0 && (
                            <div className="mb-3">
                              <div className="flex items-center gap-2">
                                <span className="text-sm text-muted-foreground">Rating:</span>
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                                  <span className="font-medium">{interview.rating}/5</span>
                                </div>
                              </div>
                            </div>
                          )}
                          {interview.feedback && (
                            <div className="p-3 bg-muted rounded-lg">
                              <p className="text-sm">{interview.feedback}</p>
                            </div>
                          )}
                          {interview.status === 'Scheduled' && (
                            <div className="mt-3 flex gap-2">
                              <Button size="sm" variant="outline" className="flex-1">
                                Join Interview
                              </Button>
                              <Link to={`/interviews/${index}/feedback`} className="flex-1">
                                <Button size="sm" variant="outline" className="w-full">
                                  Add Feedback
                                </Button>
                              </Link>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <Card>
                <CardHeader>
                  <CardTitle>Notes & Comments</CardTitle>
                  <CardDescription>Internal notes about the candidate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Textarea
                      placeholder="Add a note about this candidate..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      rows={4}
                    />
                    <Button className="mt-3">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Add Note
                    </Button>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    {notes.map((note, index) => (
                      <div key={index} className="p-4 rounded-lg border border-border">
                        <div className="flex items-start gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
                              {note.author.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div>
                                <p className="font-medium text-sm">{note.author}</p>
                                <p className="text-xs text-muted-foreground">{note.role}</p>
                              </div>
                              <span className="text-xs text-muted-foreground">{note.date}</span>
                            </div>
                            <p className="text-sm mt-2">{note.content}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resume">
              <Card>
                <CardHeader>
                  <CardTitle>Resume Preview</CardTitle>
                  <CardDescription>Uploaded resume document</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                    <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-lg font-medium mb-2">Resume Document</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      sarah_johnson_resume.pdf (245 KB)
                    </p>
                    <Button>
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
