import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Briefcase, MapPin, DollarSign, Clock, Building2, Upload, CheckCircle2, Linkedin, Globe } from 'lucide-react';
import { toast } from 'sonner';

export default function ApplicationForm() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobDetails = {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovators Inc.',
    location: 'New York, NY / Remote',
    type: 'Full-time',
    salary: '$120,000 - $160,000',
    department: 'Engineering',
    description: 'We are looking for an experienced Frontend Developer to join our growing team...',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Application submitted successfully!');
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900 flex items-center justify-center p-4">
        <Card className="max-w-2xl w-full shadow-xl">
          <CardContent className="p-12 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
            <p className="text-muted-foreground mb-8">
              Thank you for applying to <strong>{jobDetails.title}</strong> at {jobDetails.company}.
              Our team will review your application and get back to you within 3-5 business days.
            </p>
            <div className="p-6 bg-muted rounded-lg mb-8">
              <h3 className="font-semibold mb-2">What happens next?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>Our HR team will review your application</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>You'll receive an email confirmation shortly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                  <span>If shortlisted, we'll contact you to schedule an interview</span>
                </li>
              </ul>
            </div>
            <Button onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Company Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">{jobDetails.company}</h1>
              <p className="text-sm text-muted-foreground">Join Our Team</p>
            </div>
          </div>
        </div>

        {/* Job Details Card */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="border-b border-border">
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-2xl">{jobDetails.title}</CardTitle>
                <CardDescription className="flex items-center gap-2 mt-2">
                  <Building2 className="w-4 h-4" />
                  {jobDetails.company}
                </CardDescription>
              </div>
              <Badge className="bg-green-500">{jobDetails.type}</Badge>
            </div>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{jobDetails.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{jobDetails.salary}</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{jobDetails.department}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">{jobDetails.type}</span>
              </div>
            </div>
            <p className="text-muted-foreground">{jobDetails.description}</p>
          </CardContent>
        </Card>

        {/* Application Form */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Apply for this Position</CardTitle>
            <CardDescription>
              Fill in your details below. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Personal Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input id="fullName" placeholder="John Doe" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="city">City *</Label>
                    <Input id="city" placeholder="New York" required />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Professional Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="experience">Total Experience *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-1">0-1 years</SelectItem>
                        <SelectItem value="1-3">1-3 years</SelectItem>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8+">8+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="currentCompany">Current Company *</Label>
                    <Input id="currentCompany" placeholder="ABC Tech Corp" required />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="currentSalary">Current Salary (Annual) *</Label>
                    <Input
                      id="currentSalary"
                      type="number"
                      placeholder="120000"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="expectedSalary">Expected Salary (Annual) *</Label>
                    <Input
                      id="expectedSalary"
                      type="number"
                      placeholder="150000"
                      required
                    />
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <Label htmlFor="noticePeriod">Notice Period *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select notice period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="15days">15 days</SelectItem>
                        <SelectItem value="30days">30 days</SelectItem>
                        <SelectItem value="60days">60 days</SelectItem>
                        <SelectItem value="90days">90 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Skills & Additional Information */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Skills & Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="skills">Skills *</Label>
                    <Input
                      id="skills"
                      placeholder="React, TypeScript, Node.js, etc."
                      required
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Separate skills with commas
                    </p>
                  </div>
                  <div>
                    <Label htmlFor="resume">Resume/CV *</Label>
                    <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium">Click to upload or drag and drop</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                      <Input id="resume" type="file" className="hidden" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="linkedin">
                        <Linkedin className="w-4 h-4 inline mr-1" />
                        LinkedIn Profile
                      </Label>
                      <Input
                        id="linkedin"
                        placeholder="linkedin.com/in/johndoe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="portfolio">
                        <Globe className="w-4 h-4 inline mr-1" />
                        Portfolio/Website
                      </Label>
                      <Input
                        id="portfolio"
                        placeholder="johndoe.dev"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                    <Textarea
                      id="coverLetter"
                      rows={5}
                      placeholder="Tell us why you're interested in this role..."
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button type="submit" className="w-full" size="lg">
                  Submit Application
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this application, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
