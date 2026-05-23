import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Briefcase, Users, Building2, CheckCircle2 } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-purple-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          {/* Left Side - Hero Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">HR Interview Pro</h1>
                <p className="text-sm text-muted-foreground">Streamline Your Hiring Process</p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground leading-tight">
                Modern Recruitment
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Made Simple
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-md">
                Manage candidates, schedule interviews, and collaborate with your team—all in one powerful platform.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Users, text: 'Track candidates through every stage' },
                { icon: Building2, text: 'Collaborate with your hiring team' },
                { icon: CheckCircle2, text: 'Make data-driven hiring decisions' },
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success">
                <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span className="text-sm font-medium">1,000+ Companies Trust Us</span>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex items-center justify-center">
            <Card className="w-full max-w-md shadow-xl">
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Welcome back</CardTitle>
                <CardDescription>
                  Sign in to your account to continue
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="hr" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="hr">HR Login</TabsTrigger>
                    <TabsTrigger value="company">Company Login</TabsTrigger>
                  </TabsList>

                  <TabsContent value="hr">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="hr-email">Email</Label>
                        <Input
                          id="hr-email"
                          type="email"
                          placeholder="hr@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="hr-password">Password</Label>
                        <Input
                          id="hr-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded border-border" />
                          Remember me
                        </label>
                        <Button variant="link" className="px-0 text-sm">
                          Forgot password?
                        </Button>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>

                  <TabsContent value="company">
                    <form onSubmit={handleLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-email">Company Email</Label>
                        <Input
                          id="company-email"
                          type="email"
                          placeholder="admin@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company-password">Password</Label>
                        <Input
                          id="company-password"
                          type="password"
                          placeholder="••••••••"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 text-sm">
                          <input type="checkbox" className="rounded border-border" />
                          Remember me
                        </label>
                        <Button variant="link" className="px-0 text-sm">
                          Forgot password?
                        </Button>
                      </div>
                      <Button type="submit" className="w-full">
                        Sign In
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  Don't have an account?{' '}
                  <Button variant="link" className="px-1">
                    Sign up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
