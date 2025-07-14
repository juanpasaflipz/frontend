import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Globe,
  Code,
  Users,
  TrendingUp,
  CheckCircle,
  Star,
  ChevronRight,
  Play,
  GitBranch,
  Layers,
  Rocket,
  BarChart3,
} from "lucide-react"
import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"

const TRUSTED_COMPANIES = [
  { name: "OpenAI", logo: "🤖" },
  { name: "Anthropic", logo: "🧠" },
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Meta", logo: "📘" },
  { name: "Amazon", logo: "📦" },
]

const FEATURES = [
  {
    icon: Zap,
    title: "Deploy in seconds",
    description: "Push to deploy. Your AI prompts go live instantly with zero configuration.",
  },
  {
    icon: Globe,
    title: "Global edge network",
    description: "Deliver prompts from the edge, closest to your users worldwide.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description: "SOC 2 compliant with end-to-end encryption and audit logs.",
  },
  {
    icon: Code,
    title: "Developer experience",
    description: "Built for developers with APIs, webhooks, and CLI tools.",
  },
  {
    icon: Users,
    title: "Team collaboration",
    description: "Share, review, and iterate on prompts with your team.",
  },
  {
    icon: TrendingUp,
    title: "Analytics & insights",
    description: "Track performance and optimize with detailed analytics.",
  },
]

const STATS = [
  { value: "1M+", label: "Prompts deployed" },
  { value: "50k+", label: "Active developers" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "150ms", label: "Global latency" },
]

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
        
        <div className="relative py-24 sm:py-32 lg:py-40">
          <div className="container">
            <div className="text-center max-w-4xl mx-auto">
              {/* Announcement badge */}
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors bg-white/50 border-gray-200 dark:bg-gray-800/50 dark:border-gray-700 backdrop-blur-sm mb-8">
                <Sparkles className="mr-2 h-3 w-3 text-blue-600" />
                <span>Introducing PromptMarket 2.0</span>
                <ChevronRight className="ml-1 h-3 w-3 text-gray-500" />
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-100 dark:to-white bg-clip-text text-transparent">
                  Build and deploy
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  AI prompts
                </span>
              </h1>
              
              <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-8">
                The AI prompt marketplace for developers. Deploy, scale, and monetize your prompts with zero configuration.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-base px-8 py-6 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" 
                  asChild
                >
                  <Link href="/marketplace">
                    Start deploying
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-base px-8 py-6 border-gray-300 dark:border-gray-600"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Watch demo
                </Button>
              </div>

              {/* Stats */}
              <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
                {STATS.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by section */}
      <section className="py-16 border-t border-gray-200 dark:border-gray-800">
        <div className="container">
          <p className="text-center text-sm font-medium text-gray-500 dark:text-gray-400 mb-8">
            Trusted by teams at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {TRUSTED_COMPANIES.map((company, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-medium">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to ship AI prompts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              From idea to production in seconds. Built for developers who want to focus on building, not infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, index) => (
              <Card key={index} className="border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Code example section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Deploy with a single command
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                From localhost to production in seconds
              </p>
            </div>
            
            <div className="bg-black rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-green-400">
                <span className="text-gray-500">$</span> npx promptmarket deploy
              </div>
              <div className="text-gray-400 mt-2">
                <div>🔍 Analyzing prompts...</div>
                <div>📦 Building optimized bundle...</div>
                <div>🚀 Deploying to edge network...</div>
                <div className="text-green-400">✅ Deployed to https://my-prompts.promptmarket.app</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Start building today
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of developers already building with PromptMarket
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-base px-8 py-6 bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100" 
                asChild
              >
                <Link href="/marketplace">
                  Get started for free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8 py-6 border-gray-300 dark:border-gray-600"
              >
                Talk to sales
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
              No credit card required • Free tier available
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}