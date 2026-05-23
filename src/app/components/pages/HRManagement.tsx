import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { UserPlus, Mail, Shield, Edit2, Trash2 } from 'lucide-react';

export default function HRManagement() {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const hrTeam = [
    {
      id: 1,
      name: 'Emma Davis',
      email: 'emma.d@company.com',
      role: 'HR Manager',
      permissions: ['Full Access'],
      status: 'Active',
      joinedDate: '2023-01-15',
    },
    {
      id: 2,
      name: 'John Smith',
      email: 'john.s@company.com',
      role: 'Tech Lead',
      permissions: ['Interview', 'Feedback'],
      status: 'Active',
      joinedDate: '2023-03-20',
    },
    {
      id: 3,
      name: 'Sarah Lee',
      email: 'sarah.l@company.com',
      role: 'HR Recruiter',
      permissions: ['View', 'Schedule'],
      status: 'Active',
      joinedDate: '2023-06-10',
    },
    {
      id: 4,
      name: 'Mike Johnson',
      email: 'mike.j@company.com',
      role: 'Senior Engineer',
      permissions: ['Interview', 'Feedback'],
      status: 'Active',
      joinedDate: '2023-02-28',
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case 'HR Manager':
        return 'bg-purple-500/10 text-purple-700 dark:text-purple-400';
      case 'Tech Lead':
        return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      case 'HR Recruiter':
        return 'bg-green-500/10 text-green-700 dark:text-green-400';
      default:
        return 'bg-gray-500/10 text-gray-700 dark:text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">HR Team Management</h1>
          <p className="text-muted-foreground mt-1">Manage your HR team members and their permissions</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="w-4 h-4 mr-2" />
              Add HR User
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New HR Team Member</DialogTitle>
              <DialogDescription>
                Add a new team member to your HR department
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="manager">HR Manager</SelectItem>
                    <SelectItem value="recruiter">HR Recruiter</SelectItem>
                    <SelectItem value="interviewer">Interviewer</SelectItem>
                    <SelectItem value="coordinator">HR Coordinator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="permissions">Permissions</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select permissions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Access</SelectItem>
                    <SelectItem value="interview">Interview & Feedback</SelectItem>
                    <SelectItem value="view">View Only</SelectItem>
                    <SelectItem value="schedule">View & Schedule</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-3 pt-4">
                <Button type="submit" className="flex-1">
                  Add Team Member
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

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Team Members</p>
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
                <p className="text-sm text-muted-foreground">Active Users</p>
                <p className="text-2xl font-bold mt-1">11</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-green-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Interviewers</p>
                <p className="text-2xl font-bold mt-1">8</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-purple-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Recruiters</p>
                <p className="text-2xl font-bold mt-1">4</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-amber-500 opacity-10" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {hrTeam.map((member) => (
          <Card key={member.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{member.name}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Mail className="w-3 h-3 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{member.email}</span>
                    </div>
                  </div>
                </div>
                <Badge className={getRoleBadgeColor(member.role)}>
                  {member.role}
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge className="bg-green-500/10 text-green-700 dark:text-green-400">
                    {member.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Joined</span>
                  <span className="font-medium">{member.joinedDate}</span>
                </div>
                <div className="flex items-start justify-between text-sm">
                  <span className="text-muted-foreground">Permissions</span>
                  <div className="flex flex-wrap gap-1 justify-end">
                    {member.permissions.map((perm, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        <Shield className="w-3 h-3 mr-1" />
                        {perm}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit2 className="w-3 h-3 mr-2" />
                  Edit
                </Button>
                <Button variant="outline" size="sm" className="text-destructive">
                  <Trash2 className="w-3 h-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Permission Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Permission Management</CardTitle>
          <CardDescription>Configure role-based access control</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left p-3 font-medium">Permission</th>
                  <th className="text-center p-3 font-medium">HR Manager</th>
                  <th className="text-center p-3 font-medium">Recruiter</th>
                  <th className="text-center p-3 font-medium">Interviewer</th>
                  <th className="text-center p-3 font-medium">Coordinator</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'View Candidates',
                  'Add Candidates',
                  'Schedule Interviews',
                  'Conduct Interviews',
                  'Provide Feedback',
                  'Manage Jobs',
                  'View Analytics',
                  'Manage Team',
                ].map((permission, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="p-3">{permission}</td>
                    <td className="text-center p-3">
                      <input type="checkbox" defaultChecked className="rounded" />
                    </td>
                    <td className="text-center p-3">
                      <input type="checkbox" defaultChecked={idx < 6} className="rounded" />
                    </td>
                    <td className="text-center p-3">
                      <input type="checkbox" defaultChecked={idx >= 2 && idx <= 4} className="rounded" />
                    </td>
                    <td className="text-center p-3">
                      <input type="checkbox" defaultChecked={idx < 3} className="rounded" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
