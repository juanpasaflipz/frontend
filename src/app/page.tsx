import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { 
  ArrowRight, 
  Check, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  Globe,
  Sparkles,
  Play,
  ChevronRight
} from "lucide-react"
import Link from "next/link"

const FEATURES = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Deploy your applications in seconds, not minutes. Our optimized infrastructure ensures maximum performance."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work seamlessly with your team using real-time collaboration tools and shared workspaces."
  },
  {
    icon: TrendingUp,
    title: "Advanced Analytics",
    description: "Get deep insights into your application performance with comprehensive analytics and monitoring."
  },
  {
    icon: Globe,
    title: "Global CDN",
    description: "Deliver content at lightning speed with our global content delivery network spanning 200+ locations."
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leverage artificial intelligence to optimize your workflows and automate repetitive tasks."
  }
]

const PRICING_PLANS = [
  {
    name: "Starter",
    price: "$9",
    period: "per month",
    description: "Perfect for individuals and small projects",
    features: [
      "Up to 3 projects",
      "5GB storage",
      "Basic support",
      "SSL certificates",
      "99.9% uptime SLA"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$29",
    period: "per month",
    description: "Ideal for growing teams and businesses",
    features: [
      "Unlimited projects",
      "100GB storage",
      "Priority support",
      "Advanced analytics",
      "Team collaboration",
      "Custom domains",
      "99.99% uptime SLA"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large organizations with advanced needs",
    features: [
      "Everything in Professional",
      "1TB storage",
      "24/7 dedicated support",
      "Advanced security",
      "SSO integration",
      "Custom integrations",
      "99.999% uptime SLA"
    ],
    popular: false
  }
]

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "CTO at TechCorp",
    avatar: "SC",
    content: "This platform has revolutionized how we deploy and manage our applications. The speed and reliability are unmatched.",
    rating: 5
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Developer at StartupXYZ",
    avatar: "MR",
    content: "The developer experience is incredible. We've reduced our deployment time by 80% and our team productivity has skyrocketed.",
    rating: 5
  },
  {
    name: "Emily Johnson",
    role: "Product Manager at InnovateCo",
    avatar: "EJ",
    content: "The analytics and monitoring tools have given us insights we never had before. It's been a game-changer for our product development.",
    rating: 5
  }
]

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950/20 dark:via-background dark:to-purple-950/20" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-600/20 blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-6 px-4 py-2">
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Now with AI-powered deployment
            </Badge>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Build and Deploy{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Faster Than Ever
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl max-w-3xl mx-auto">
              The modern development platform that helps teams ship better software faster. 
              Deploy instantly, scale automatically, and monitor everything.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center mb-12">
              <Button size="lg" className="group">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Free 14-day trial • No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to help you build, deploy, and scale your applications with confidence.
            </p>
          </div>
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              return (
                <Card key={feature.title} className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Choose the perfect plan for your needs. Upgrade or downgrade at any time.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
            {PRICING_PLANS.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative p-8 ${plan.popular ? 'border-blue-500 shadow-lg scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  Get Started
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Loved by developers worldwide
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say about their experience with our platform.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <Card key={testimonial.name} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-center text-white md:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative max-w-3xl mx-auto">
              <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                Ready to transform your development workflow?
              </h2>
              <p className="mb-8 text-lg opacity-90">
                Join thousands of developers who have already made the switch to faster, more reliable deployments.
              </p>
              
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}