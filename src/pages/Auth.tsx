import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Mail, Phone, Lock, User, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'traveler' | 'partner'>('traveler');
  const [passwordStrength, setPasswordStrength] = useState(0);

  const checkPasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    setPasswordStrength(strength);
  };

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500'];

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Decorative */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-primary overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center px-16 text-primary-foreground">
          <Link to="/" className="flex items-center gap-2 mb-12 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to home</span>
          </Link>

          <div className="flex items-center gap-3 mb-8">
            <span className="text-4xl">🌿</span>
            <span className="font-display text-3xl font-bold">Vanya Stays</span>
          </div>

          <h1 className="font-display text-4xl font-bold mb-6">
            Your Next Adventure
            <span className="block mt-2 bg-gradient-to-r from-gold to-saffron bg-clip-text text-transparent">
              Starts Here
            </span>
          </h1>

          <p className="text-primary-foreground/80 text-lg mb-10 max-w-md">
            Join thousands of travelers discovering India's most beautiful resorts and creating unforgettable memories.
          </p>

          {/* Features */}
          <div className="space-y-4">
            {[
              'Access exclusive member deals',
              'Save your favorite properties',
              'Quick & secure bookings',
              'Earn rewards on every stay',
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold text-sm">✓</span>
                </div>
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>

          {/* Map Illustration */}
          <div className="absolute bottom-0 right-0 opacity-20">
            <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
              <path
                d="M200 50C280 50 350 120 350 200C350 280 280 350 200 350C120 350 50 280 50 200C50 120 120 50 200 50Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="10 10"
              />
              <circle cx="150" cy="120" r="8" fill="currentColor" />
              <circle cx="250" cy="150" r="8" fill="currentColor" />
              <circle cx="180" cy="220" r="8" fill="currentColor" />
              <circle cx="280" cy="260" r="8" fill="currentColor" />
              <circle cx="120" cy="280" r="8" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>

      {/* Right Panel - Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center gap-2 mb-8">
            <span className="text-3xl">🌿</span>
            <span className="font-display text-2xl font-bold text-primary">Vanya Stays</span>
          </div>

          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 rounded-full p-1 bg-secondary">
              <TabsTrigger value="login" className="rounded-full">Sign In</TabsTrigger>
              <TabsTrigger value="signup" className="rounded-full">Sign Up</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="font-display text-2xl font-bold text-center mb-2">Welcome Back</h2>
                <p className="text-muted-foreground text-center mb-8">Sign in to continue your journey</p>

                <form className="space-y-5">
                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email or Mobile</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="login-email"
                        placeholder="you@example.com"
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="login-password">Password</Label>
                      <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                        Forgot password?
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="pl-12 pr-12 h-12 rounded-xl"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="remember" className="rounded" />
                    <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                  </div>

                  <Button className="w-full h-12 rounded-xl btn-gradient text-base">
                    Sign In
                  </Button>
                </form>
              </div>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <div className="glass-card rounded-3xl p-8">
                <h2 className="font-display text-2xl font-bold text-center mb-2">Create Account</h2>
                <p className="text-muted-foreground text-center mb-8">Join the Vanya Stays community</p>

                {/* Role Selection */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {(['traveler', 'partner'] as const).map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={cn(
                        'p-4 rounded-xl border-2 transition-all text-center',
                        selectedRole === role
                          ? 'border-primary bg-primary/5'
                          : 'border-border hover:border-primary/50'
                      )}
                    >
                      <span className="text-2xl mb-2 block">{role === 'traveler' ? '🧳' : '🏨'}</span>
                      <span className="font-medium capitalize">{role}</span>
                    </button>
                  ))}
                </div>

                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="name"
                        placeholder="John Doe"
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        className="pl-12 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <div className="absolute left-12 top-1/2 -translate-y-1/2 text-muted-foreground border-r pr-2">
                        +91
                      </div>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="98765 43210"
                        className="pl-24 h-12 rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="pl-12 pr-12 h-12 rounded-xl"
                        onChange={(e) => checkPasswordStrength(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                    {/* Password Strength */}
                    <div className="flex gap-1 mt-2">
                      {[0, 1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={cn(
                            'h-1 flex-1 rounded-full transition-colors',
                            i < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-border'
                          )}
                        />
                      ))}
                    </div>
                    {passwordStrength > 0 && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Password strength: {strengthLabels[passwordStrength - 1]}
                      </p>
                    )}
                  </div>

                  <Button className="w-full h-12 rounded-xl btn-gradient text-base mt-6">
                    Create Account
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground text-center mt-6">
                  By signing up, you agree to our{' '}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>
                  {' '}and{' '}
                  <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>
                </p>
              </div>
            </TabsContent>
          </Tabs>

          {/* Mobile Back Link */}
          <Link
            to="/"
            className="lg:hidden flex items-center justify-center gap-2 mt-8 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
