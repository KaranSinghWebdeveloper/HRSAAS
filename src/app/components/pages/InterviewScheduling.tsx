import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Textarea } from '../ui/textarea';
import { Calendar as CalendarIcon, Clock, Users, Video, Mail, Plus, Filter, Search } from 'lucide-react';
import { Calendar } from '../ui/calendar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

export default function InterviewScheduling() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isScheduleDialogOpen, setIsScheduleDialogOpen] = useState(false);

  const upcomingInterviews = [
    {
      id: 1,
      candidate: 'Sarah Johnson',
      position: 'Senior Frontend Developer',
      round: 'Technical Round 2',
      date: '2024-05-24',
      time: '11:00 AM',
      duration: '90 mins',
      interviewer: 'Mike Johnson',
      meetingLink: 'https://zoom.us/j/123456789',
      status: 'Scheduled',
    },
    {
      id: 2,
      candidate: 'Alex Turner',
      position: 'DevOps Engineer',
      round: 'HR Screening',
      date: '2024-05-24',
      time: '2:00 PM',
      duration: '30 mins',
      interviewer: 'Emma Davis',
      meetingLink: 'https://zoom.us/j/987654321',
      status: 'Scheduled',
    },
    {
      id: 3,
      candidate: 'Maria Garcia',
      position: 'Product Designer',
      round: 'Final Round',
      date: '2024-05-25',
      time: '10:00 AM',
      duration: '60 mins',
      interviewer: 'John Smith',
      meetingLink: 'https://zoom.us/j/456789123',
      status: 'Scheduled',
    },
    {
      id: 4,
      candidate: 'James Anderson',
      position: 'Full Stack Developer',
      round: 'Technical Round 1',
      date: '2024-05-25',
      time: '3:00 PM',
      duration: '60 mins',
      interviewer: 'Sarah Lee',
      meetingLink: 'https://zoom.us/j/321654987',
      status: 'Scheduled',
    },
    {
      id: 5,
      candidate: 'Emily Davis',
      position: 'UX Designer',
      round: 'Portfolio Review',
      date: '2024-05-23',
      time: '4:00 PM',
      duration: '45 mins',
      interviewer: 'Mike Johnson',
      meetingLink: 'https://zoom.us/j/147258369',
      status: 'Completed',
    },
  ];

  const interviewers = [
    'Emma Davis - HR Manager',
    'John Smith - Tech Lead',
    'Mike Johnson - Senior Engineer',
    'Sarah Lee - Product Manager',
    'David Wilson - Engineering Manager',
  ];

  const candidates = [
    'Sarah Johnson - Senior Frontend Developer',
    'Alex Turner - DevOps Engineer',
    'Maria Garcia - Product Designer',
    'James Anderson - Full Stack Developer',
    'Emily Davis - UX Designer',
  ];

  const getStatusColor = (status: string) => {
    return status === 'Scheduled'
      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400'
      : 'bg-green-500/10 text-green-700 dark:text-green-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interview Scheduling</h1>
          <p className="text-muted-foreground mt-1">Manage and schedule candidate interviews</p>
        </div>
        <Dialog open={isScheduleDialogOpen} onOpenChange={setIsScheduleDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Schedule Interview
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Schedule New Interview</DialogTitle>
              <DialogDescription>
                Set up an interview with a candidate
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="candidate">Select Candidate</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose candidate" />
                    </SelectTrigger>
                    <SelectContent>
                      {candidates.map((candidate, index) => (
                        <SelectItem key={index} value={candidate}>
                          {candidate}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="round">Interview Round</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select round" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="screening">HR Screening</SelectItem>
                      <SelectItem value="technical1">Technical Round 1</SelectItem>
                      <SelectItem value="technical2">Technical Round 2</SelectItem>
                      <SelectItem value="assignment">Assignment Review</SelectItem>
                      <SelectItem value="final">Final Round</SelectItem>
                      <SelectItem value="manager">Manager Round</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="interviewer">Interviewer</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select interviewer" />
                    </SelectTrigger>
                    <SelectContent>
                      {interviewers.map((interviewer, index) => (
                        <SelectItem key={index} value={interviewer}>
                          {interviewer}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="date">Interview Date</Label>
                  <Input id="date" type="date" />
                </div>

                <div>
                  <Label htmlFor="time">Interview Time</Label>
                  <Input id="time" type="time" />
                </div>

                <div>
                  <Label htmlFor="duration">Duration</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="45">45 minutes</SelectItem>
                      <SelectItem value="60">60 minutes</SelectItem>
                      <SelectItem value="90">90 minutes</SelectItem>
                      <SelectItem value="120">120 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="est">EST (Eastern)</SelectItem>
                      <SelectItem value="cst">CST (Central)</SelectItem>
                      <SelectItem value="mst">MST (Mountain)</SelectItem>
                      <SelectItem value="pst">PST (Pacific)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="col-span-2">
                  <Label htmlFor="meetingLink">Meeting Link</Label>
                  <Input
                    id="meetingLink"
                    type="url"
                    placeholder="https://zoom.us/j/123456789"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Zoom, Google Meet, or Microsoft Teams link
                  </p>
                </div>

                <div className="col-span-2">
                  <Label htmlFor="notes">Interview Notes (Optional)</Label>
                  <Textarea
                    id="notes"
                    rows={3}
                    placeholder="Add any special instructions or notes..."
                  />
                </div>

                <div className="col-span-2">
                  <div className="p-4 rounded-lg bg-muted">
                    <h4 className="font-medium mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Notification Preview
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      An automated email invitation will be sent to both the candidate and interviewer
                      with the meeting details and calendar invite.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Schedule Interview
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsScheduleDialogOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Today's Interviews</p>
                <p className="text-2xl font-bold mt-1">3</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-blue-500 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">This Week</p>
                <p className="text-2xl font-bold mt-1">12</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-500 flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold mt-1">156</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Upcoming</p>
                <p className="text-2xl font-bold mt-1">34</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-amber-500 flex items-center justify-center">
                <CalendarIcon className="w-6 h-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <Card>
          <CardHeader>
            <CardTitle>Calendar</CardTitle>
            <CardDescription>Select a date to view interviews</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border"
            />
            <div className="mt-4 p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-2">Selected Date:</p>
              <p className="text-sm text-muted-foreground">
                {date?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-sm text-primary mt-1 font-medium">3 interviews scheduled</p>
            </div>
          </CardContent>
        </Card>

        {/* Interview List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>All Interviews</CardTitle>
                <CardDescription>Scheduled and completed interviews</CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead>Round</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Interviewer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {upcomingInterviews.map((interview) => (
                  <TableRow key={interview.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{interview.candidate}</p>
                        <p className="text-sm text-muted-foreground">{interview.position}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{interview.round}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <p className="text-sm">{interview.date}</p>
                        <p className="text-xs text-muted-foreground">
                          {interview.time} ({interview.duration})
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>{interview.interviewer}</TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(interview.status)}>
                        {interview.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      {interview.status === 'Scheduled' ? (
                        <Button size="sm" variant="outline">
                          <Video className="w-3 h-3 mr-2" />
                          Join
                        </Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          View Feedback
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
