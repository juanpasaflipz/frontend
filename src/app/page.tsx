import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  BarChart3,
  ArrowRight,
  Menu,
  Bot,
  Sparkles,
  Globe,
  TrendingUp,
  Brain,
  Layers,
} from "lucide-react"
import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

const FEATURES = [
  {
    icon: Bot,
    title: "AI-Powered Prompts",
    description: "Access thousands of professionally crafted prompts optimized for ChatGPT, Claude, and other AI models.",
    color: "blue"
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a thriving community of prompt engineers sharing their best work and learning together.",
    color: "green"
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Track your prompt performance with detailed analytics and insights to improve results.",
    color: "purple"
  },
  {
    icon: Shield,
    title: "Secure Transactions",
    description: "Enterprise-grade security ensures your purchases and intellectual property are always protected.",
    color: "orange"
  },
  {
    icon: Globe,
    title: "Global Marketplace",
    description: "Buy and sell prompts globally with support for multiple languages and currencies.",
    color: "pink"
  },
  {
    icon: Sparkles,
    title: "Quality Verified",
    description: "Every prompt is tested and verified by our AI experts to ensure maximum effectiveness.",
    color: "indigo"
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
    period: "per month",
    description: "Perfect for individuals exploring AI prompts",
    features: [
      "Up to 50 prompt purchases",
      "Basic search and filters",
      "Community support",
      "Download history",
      "Email notifications"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "Best for professionals and small teams",
    features: [
      "Unlimited prompt purchases",
      "Advanced search and AI recommendations",
      "Priority support",
      "API access",
      "Team collaboration (up to 5 users)",
      "Analytics dashboard",
      "Early access to new prompts"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For organizations with advanced needs",
    features: [
      "Everything in Professional",
      "Unlimited team members",
      "Custom prompt development",
      "Dedicated account manager",
      "SSO integration",
      "Advanced security features",
      "SLA guarantee"
    ],
    popular: false
  }
]

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="py-40 md:py-56 lg:py-72 bg-gradient-blue-indigo">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-8">
                <Badge variant="secondary" className="w-fit">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Marketplace for AI Excellence
                </Badge>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Buy & Sell
                  <span className="text-primary"> AI Prompts</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-[600px]">
                  Discover thousands of high-quality prompts or monetize your prompt engineering skills. 
                  The premier marketplace for ChatGPT, Claude, and Midjourney prompts.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 mt-4">
                <Button size="lg" className="text-lg px-8">
                  Browse Prompts
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Start Selling
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-muted-foreground mt-8">
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>10,000+ Prompts</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Verified Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>Instant Download</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-12">
              <div className="grid grid-cols-2 gap-8 lg:gap-10 items-start">
                <div className="space-y-8">
                  <Card className="shadow-large hover:shadow-xl transition-shadow h-full flex flex-col">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Marketing</Badge>
                      <CardTitle className="text-lg">Social Media Strategy</CardTitle>
                      <CardDescription>Generate engaging content calendars</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$19</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm">4.9</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-large hover:shadow-xl transition-shadow h-full flex flex-col">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Development</Badge>
                      <CardTitle className="text-lg">Code Review Assistant</CardTitle>
                      <CardDescription>Automated code analysis prompts</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$29</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm">5.0</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-8 mt-12 lg:mt-16">
                  <Card className="shadow-large hover:shadow-xl transition-shadow h-full flex flex-col">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Writing</Badge>
                      <CardTitle className="text-lg">Blog Post Generator</CardTitle>
                      <CardDescription>SEO-optimized content creation</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$15</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm">4.8</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="shadow-large hover:shadow-xl transition-shadow h-full flex flex-col">
                    <CardHeader>
                      <Badge className="w-fit mb-2">Business</Badge>
                      <CardTitle className="text-lg">Sales Email Templates</CardTitle>
                      <CardDescription>Convert leads with AI precision</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold">$24</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="ml-1 text-sm">4.7</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-40 md:py-56 lg:py-72">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-10 mb-32">
            <Badge variant="outline" className="w-fit mx-auto">
              Features
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Why choose our marketplace?
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Everything you need to discover, purchase, and sell high-quality AI prompts in one platform.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              const colorClasses = {
                blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
                green: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400",
                purple: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
                orange: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
                pink: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
                indigo: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
              }
              return (
                <Card key={feature.title} className="border-0 shadow-soft hover:shadow-large transition-shadow">
                  <CardHeader>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${colorClasses[feature.color as keyof typeof colorClasses]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-40 md:py-56 lg:py-72 bg-muted/30">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-10 mb-32">
            <Badge variant="outline" className="w-fit mx-auto">
              Testimonials
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Trusted by prompt engineers worldwide
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              See what our community has to say about their experience with our marketplace.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="border-0 shadow-soft">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground mb-4">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center space-x-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-40 md:py-56 lg:py-72">
        <div className="container px-6 md:px-8 lg:px-12">
          <div className="text-center space-y-10 mb-32">
            <Badge variant="outline" className="w-fit mx-auto">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid gap-12 lg:gap-16 lg:grid-cols-3">
            {PRICING_PLANS.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative border-2 ${plan.popular ? 'border-primary shadow-large scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="text-4xl font-bold">
                    {plan.price}
                    <span className="text-lg font-normal text-muted-foreground">/{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                    Start Free Trial
                  </Button>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
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
      <section className="py-40 md:py-56 lg:py-72 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to unlock the power of AI?
            </h2>
            <p className="text-xl opacity-90">
              Join thousands of creators and businesses who are already using our marketplace to 
              supercharge their AI workflows. Start exploring today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
              >
                Become a Seller
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>10,000+ Prompts</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4" />
                <span>Money-back Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}