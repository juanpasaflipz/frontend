import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Zap,
  Shield,
  ArrowRight,
  Sparkles,
  Rocket,
  Lock,
  HeartHandshake,
  Gauge,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

const FEATURES = [
  {
    icon: Rocket,
    title: "Lightning Fast",
    description: "Deploy prompts instantly with our optimized infrastructure. Get results in milliseconds, not minutes.",
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    icon: Lock,
    title: "Secure by Default",
    description: "Enterprise-grade security with end-to-end encryption, SOC2 compliance, and granular permissions.",
    gradient: "from-cyan-600 to-blue-600"
  },
  {
    icon: HeartHandshake,
    title: "Community Driven",
    description: "Join thousands of creators sharing knowledge, best practices, and innovative prompt engineering techniques.",
    gradient: "from-pink-600 to-rose-600"
  },
  {
    icon: Gauge,
    title: "Performance Analytics",
    description: "Track usage, measure effectiveness, and optimize your prompts with detailed analytics and insights.",
    gradient: "from-amber-600 to-orange-600"
  },
  {
    icon: Zap,
    title: "API Integration",
    description: "Seamlessly integrate with your existing tools through our powerful REST and GraphQL APIs.",
    gradient: "from-emerald-600 to-teal-600"
  },
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Every prompt is reviewed and tested by our AI experts to ensure consistent, reliable results.",
    gradient: "from-purple-600 to-pink-600"
  }
]

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Marketing Director at TechCorp",
    avatar: "SC",
    content: "The AI prompts I've purchased have completely transformed our content strategy. We've increased our output by 300% while maintaining quality.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Freelance Developer",
    avatar: "MR",
    content: "As a prompt seller, I've been able to monetize my expertise in AI. The platform makes it incredibly easy to reach customers worldwide.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Content Creator",
    avatar: "EJ",
    content: "The quality of prompts available is outstanding. I've saved countless hours by using pre-optimized prompts for my projects.",
    rating: 5
  }
]

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$9",
    period: "user/month",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 10 team members",
      "Basic prompt management",
      "5GB storage",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$19",
    period: "user/month",
    description: "Best for growing teams and businesses",
    features: [
      "Up to 50 team members",
      "Advanced prompt management",
      "AI automation features",
      "100GB storage",
      "Priority support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$39",
    period: "user/month",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited team members",
      "Enterprise-grade security",
      "Advanced analytics",
      "Unlimited storage",
      "24/7 dedicated support"
    ],
    popular: false
  }
]

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-gray-100/[0.02]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-32 left-20 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-medium transition-colors bg-gradient-to-r from-indigo-50 to-purple-50 border-indigo-200 dark:from-gray-800 dark:to-gray-700 dark:border-gray-600">
                <Sparkles className="mr-2 h-3.5 w-3.5 text-indigo-600 dark:text-indigo-400" />
                <span className="text-gray-900 dark:text-gray-100">Introducing PromptMarket 2.0</span>
                <ChevronRight className="ml-1 h-3.5 w-3.5 text-gray-500" />
              </div>
              
              <div className="space-y-4">
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
                  The AI Prompt
                  <span className="block">Marketplace</span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-light">
                  Buy and sell premium AI prompts. Accelerate your workflow with 
                  battle-tested templates for ChatGPT, Claude, and Midjourney.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-lg shadow-indigo-500/25" 
                  asChild
                >
                  <Link href="/marketplace">
                    Explore Marketplace
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Start Selling Today
                </Button>
              </div>

              <div className="flex flex-wrap gap-8 justify-center text-sm text-gray-600 dark:text-gray-400 pt-8">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 border-2 border-white dark:border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-2 border-white dark:border-gray-900" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-rose-600 border-2 border-white dark:border-gray-900" />
                  </div>
                  <span className="font-medium">50k+ Active Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="font-medium">4.9/5 Average Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Secure Transactions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Showcase cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
            <Card className="group relative overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <Badge className="w-fit mb-2 bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">Popular</Badge>
                <CardTitle className="text-lg">GPT-4 Code Review</CardTitle>
                <CardDescription>Professional code analysis and optimization suggestions</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$29</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.9</span>
                    <span className="text-sm text-gray-500">(1.2k)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 md:-mt-4">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <Badge className="w-fit mb-2 bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300">New</Badge>
                <CardTitle className="text-lg">Marketing Copy Pro</CardTitle>
                <CardDescription>High-converting sales copy and email templates</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$19</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">5.0</span>
                    <span className="text-sm text-gray-500">(847)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="group relative overflow-hidden border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <Badge className="w-fit mb-2 bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">Trending</Badge>
                <CardTitle className="text-lg">Midjourney Master</CardTitle>
                <CardDescription>Create stunning AI art with optimized prompts</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$24</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">4.8</span>
                    <span className="text-sm text-gray-500">(2.3k)</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 sm:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Built for modern creators
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Everything you need to create, share, and monetize AI prompts in one powerful platform.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-200" />
                  <Card className="relative h-full border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
                    <CardHeader>
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg mb-4`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-900/50">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by 50,000+ creators
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Join the community of creators who are transforming their work with AI prompts.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex mb-4 space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                        {testimonial.avatar}
                      </div>
                      <div className="absolute -bottom-1 -right-1 h-3.5 w-3.5 bg-green-400 rounded-full border-2 border-white dark:border-gray-800" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 sm:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-2 border-indigo-500 shadow-xl scale-105' : 'border-gray-200 dark:border-gray-700'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-1.5">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4 pt-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-gray-600 dark:text-gray-400">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700' : ''}`} 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                  >
                    Get Started
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 bg-grid-white/[0.05]" />
        
        <div className="relative py-24 sm:py-32">
          <div className="container px-4 md:px-6 text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                Ready to accelerate with AI?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of creators and businesses using PromptMarket to 10x their productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-6 text-base shadow-xl"
                  asChild
                >
                  <Link href="/marketplace">
                    Get Started Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-8 py-6 text-base bg-transparent"
                >
                  Book a Demo
                </Button>
              </div>
              <div className="flex flex-wrap gap-6 justify-center text-sm text-white/80 pt-8">
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Free to start</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-5 w-5" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}