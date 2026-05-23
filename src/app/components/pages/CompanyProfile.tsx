import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Switch } from '../ui/switch';
import { Separator } from '../ui/separator';
import { Building2, Upload, Mail, Globe, MapPin, Phone } from 'lucide-react';

export default function CompanyProfile() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Company Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your company information and branding</p>
        </div>
        <Button>Save Changes</Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Company Logo */}
        <Card>
          <CardHeader>
            <CardTitle>Company Logo</CardTitle>
            <CardDescription>Upload your company logo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="w-full aspect-square bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Building2 className="w-24 h-24 text-white" />
            </div>
            <Button variant="outline" className="w-full">
              <Upload className="w-4 h-4 mr-2" />
              Upload Logo
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Recommended: 500x500px, PNG or JPG
            </p>
          </CardContent>
        </Card>

        {/* Company Details */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Company Information</CardTitle>
            <CardDescription>Basic details about your company</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="companyName">Company Name</Label>
                  <Input id="companyName" defaultValue="Tech Innovators Inc." />
                </div>
                <div>
                  <Label htmlFor="industry">Industry</Label>
                  <Input id="industry" defaultValue="Technology" />
                </div>
                <div>
                  <Label htmlFor="companySize">Company Size</Label>
                  <Input id="companySize" defaultValue="201-500 employees" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="website">
                    <Globe className="w-4 h-4 inline mr-1" />
                    Website
                  </Label>
                  <Input id="website" defaultValue="https://techinnovators.com" />
                </div>
                <div>
                  <Label htmlFor="email">
                    <Mail className="w-4 h-4 inline mr-1" />
                    Contact Email
                  </Label>
                  <Input id="email" type="email" defaultValue="hr@techinnovators.com" />
                </div>
                <div>
                  <Label htmlFor="phone">
                    <Phone className="w-4 h-4 inline mr-1" />
                    Phone Number
                  </Label>
                  <Input id="phone" defaultValue="+1 (555) 987-6543" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    Address
                  </Label>
                  <Input id="address" defaultValue="123 Tech Street, San Francisco, CA 94105" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="description">Company Description</Label>
                  <Textarea
                    id="description"
                    rows={4}
                    defaultValue="We are a leading technology company focused on innovation and excellence..."
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Hiring Settings */}
      <Card>
        <CardHeader>
          <CardTitle>Hiring Settings</CardTitle>
          <CardDescription>Configure your recruitment preferences</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Auto-acknowledge Applications</Label>
                <p className="text-sm text-muted-foreground">
                  Automatically send acknowledgment emails to candidates
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Email Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Receive email alerts for new applications
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Interview Reminders</Label>
                <p className="text-sm text-muted-foreground">
                  Send automated interview reminder emails
                </p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Public Job Board</Label>
                <p className="text-sm text-muted-foreground">
                  Display jobs on public career page
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Email Notification Settings</CardTitle>
          <CardDescription>Customize automated email templates</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div>
              <Label htmlFor="ackTemplate">Application Acknowledgment Template</Label>
              <Textarea
                id="ackTemplate"
                rows={4}
                defaultValue="Dear {candidate_name}, Thank you for applying to {job_title} at {company_name}..."
              />
            </div>
            <div>
              <Label htmlFor="interviewTemplate">Interview Invitation Template</Label>
              <Textarea
                id="interviewTemplate"
                rows={4}
                defaultValue="Dear {candidate_name}, We are pleased to invite you for an interview..."
              />
            </div>
            <div>
              <Label htmlFor="rejectionTemplate">Rejection Email Template</Label>
              <Textarea
                id="rejectionTemplate"
                rows={4}
                defaultValue="Dear {candidate_name}, Thank you for your interest in {job_title}..."
              />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
