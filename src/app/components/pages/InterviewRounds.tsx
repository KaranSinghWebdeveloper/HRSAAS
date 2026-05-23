import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Plus, GripVertical, Edit2, Trash2, Users } from 'lucide-react';

export default function InterviewRounds() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const jobRounds = [
    {
      jobTitle: 'Senior Frontend Developer',
      rounds: [
        { id: 1, name: 'HR Screening', type: 'HR Round', duration: '30 mins', interviewer: 'Emma Davis', order: 1 },
        { id: 2, name: 'Technical Round 1', type: 'Technical Round', duration: '60 mins', interviewer: 'John Smith', order: 2 },
        { id: 3, name: 'System Design', type: 'Technical Round', duration: '90 mins', interviewer: 'Mike Johnson', order: 3 },
        { id: 4, name: 'Final Round', type: 'Final Round', duration: '45 mins', interviewer: 'Sarah Lee', order: 4 },
      ],
    },
    {
      jobTitle: 'Product Manager',
      rounds: [
        { id: 5, name: 'HR Screening', type: 'HR Round', duration: '30 mins', interviewer: 'Emma Davis', order: 1 },
        { id: 6, name: 'Product Case Study', type: 'Assignment', duration: '90 mins', interviewer: 'Sarah Lee', order: 2 },
        { id: 7, name: 'Stakeholder Interview', type: 'Manager Round', duration: '60 mins', interviewer: 'David Wilson', order: 3 },
        { id: 8, name: 'Final Round', type: 'Final Round', duration: '45 mins', interviewer: 'John Smith', order: 4 },
      ],
    },
  ];

  const roundTypes = [
    'HR Round',
    'Technical Round',
    'Assignment',
    'Manager Round',
    'Final Round',
    'Cultural Fit',
  ];

  const getRoundTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      'HR Round': 'bg-blue-500/10 text-blue-700 dark:text-blue-400',
      'Technical Round': 'bg-purple-500/10 text-purple-700 dark:text-purple-400',
      'Assignment': 'bg-amber-500/10 text-amber-700 dark:text-amber-400',
      'Manager Round': 'bg-green-500/10 text-green-700 dark:text-green-400',
      'Final Round': 'bg-red-500/10 text-red-700 dark:text-red-400',
      'Cultural Fit': 'bg-cyan-500/10 text-cyan-700 dark:text-cyan-400',
    };
    return colors[type] || 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interview Rounds</h1>
          <p className="text-muted-foreground mt-1">Configure interview rounds for each job position</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Round
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Interview Round</DialogTitle>
              <DialogDescription>
                Create a new interview round for a job position
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div>
                <Label htmlFor="job">Select Job</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose job position" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Senior Frontend Developer</SelectItem>
                    <SelectItem value="pm">Product Manager</SelectItem>
                    <SelectItem value="designer">UX Designer</SelectItem>
                    <SelectItem value="backend">Backend Engineer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="roundName">Round Name</Label>
                <Input id="roundName" placeholder="e.g. Technical Assessment" />
              </div>
              <div>
                <Label htmlFor="roundType">Round Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {roundTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                <Label htmlFor="interviewer">Default Interviewer</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select interviewer" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emma">Emma Davis - HR Manager</SelectItem>
                    <SelectItem value="john">John Smith - Tech Lead</SelectItem>
                    <SelectItem value="mike">Mike Johnson - Senior Engineer</SelectItem>
                    <SelectItem value="sarah">Sarah Lee - Product Manager</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Add Round
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsAddDialogOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Round Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Round Templates</CardTitle>
          <CardDescription>Pre-configured interview round templates</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: '3-Round Process', rounds: 'HR → Technical → Final', jobs: 12 },
              { name: '4-Round Process', rounds: 'HR → Tech 1 → Tech 2 → Final', jobs: 8 },
              { name: 'Product Role', rounds: 'HR → Case Study → Manager → Final', jobs: 5 },
            ].map((template, idx) => (
              <Card key={idx} className="hover:border-primary transition-colors cursor-pointer">
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{template.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{template.rounds}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{template.jobs} jobs</span>
                    <Button size="sm" variant="outline">Use Template</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Interview Rounds by Job */}
      {jobRounds.map((job, jobIdx) => (
        <Card key={jobIdx}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>{job.jobTitle}</CardTitle>
                <CardDescription>{job.rounds.length} interview rounds configured</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                Edit Process
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {job.rounds.map((round, idx) => (
                <Card key={round.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="cursor-move">
                        <GripVertical className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                        {round.order}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{round.name}</h3>
                          <Badge className={getRoundTypeColor(round.type)}>
                            {round.type}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span>Duration: {round.duration}</span>
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {round.interviewer}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                      </div>
                    </div>

                    {idx < job.rounds.length - 1 && (
                      <div className="flex items-center gap-2 mt-3 ml-16 text-xs text-muted-foreground">
                        <div className="h-px flex-1 bg-border" />
                        <span>Pass/Fail Decision Point</span>
                        <div className="h-px flex-1 bg-border" />
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-4 p-4 rounded-lg bg-muted">
              <h4 className="font-medium mb-2">Round Flow Logic</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Candidates must pass each round to proceed to the next</li>
                <li>• Interviewers can mark rounds as Pass, Fail, or Hold</li>
                <li>• Failed candidates are automatically moved to "Rejected" status</li>
                <li>• Automated emails are sent after each round completion</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
