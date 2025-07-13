import { Button } from "@/components/ui/button"
import { PromptCard } from "@/components/prompt-card"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { ArrowRight, Sparkles, TrendingUp, Shield, Zap, Users, Star, DollarSign } from "lucide-react"
import Link from "next/link"

// Mock data for demonstration
const FEATURED_PROMPTS = [
  {
    id: "1",
    title: "Advanced Sales Email Generator",
    description: "Generate personalized B2B sales emails that convert. Uses advanced persuasion techniques and customizable templates for different industries.",
    price: 49,
    category: "Sales",
    rating: 4.8,
    salesCount: 234,
    sellerName: "SalesGuru Pro",
    tags: ["email", "b2b", "conversion", "templates"],
  },
  {
    id: "2",
    title: "SEO Content Brief Creator",
    description: "Create comprehensive content briefs optimized for search engines. Includes keyword research, outline generation, and competitive analysis.",
    price: 39,
    category: "Marketing",
    rating: 4.9,
    salesCount: 189,
    sellerName: "ContentCraft AI",
    tags: ["seo", "content", "marketing", "research"],
  },
  {
    id: "3",
    title: "Product Description Optimizer",
    description: "Transform basic product info into compelling e-commerce descriptions that drive sales. Works for any product category.",
    price: 29,
    category: "E-commerce",
    rating: 4.7,
    salesCount: 421,
    sellerName: "EcomExperts",
    tags: ["ecommerce", "copywriting", "conversion"],
  },
  {
    id: "4",
    title: "Code Review Assistant",
    description: "Automated code review with actionable feedback. Supports multiple languages and follows industry best practices.",
    price: 59,
    category: "Development",
    rating: 4.6,
    salesCount: 156,
    sellerName: "DevTools Pro",
    tags: ["code", "review", "quality", "automation"],
  },
  {
    id: "5",
    title: "Customer Support Response Kit",
    description: "Professional customer support responses for common scenarios. Maintains brand voice while resolving issues efficiently.",
    price: 35,
    category: "Support",
    rating: 4.8,
    salesCount: 312,
    sellerName: "SupportHero",
    tags: ["support", "customer-service", "templates"],
  },
  {
    id: "6",
    title: "Financial Report Analyzer",
    description: "Extract insights from financial statements and generate executive summaries. Perfect for quarterly reviews and investor updates.",
    price: 79,
    category: "Analytics",
    rating: 4.9,
    salesCount: 98,
    sellerName: "FinanceAI Labs",
    tags: ["finance", "analysis", "reporting", "insights"],
  },
];

const CATEGORIES = [
  { name: "Marketing", count: 234, icon: TrendingUp, color: "from-blue-500 to-cyan-500" },
  { name: "Sales", count: 189, icon: Zap, color: "from-purple-500 to-pink-500" },
  { name: "Development", count: 156, icon: Shield, color: "from-green-500 to-emerald-500" },
  { name: "Support", count: 143, icon: Users, color: "from-orange-500 to-red-500" },
  { name: "Analytics", count: 98, icon: TrendingUp, color: "from-indigo-500 to-purple-500" },
  { name: "E-commerce", count: 87, icon: Sparkles, color: "from-pink-500 to-rose-500" },
];

const STATS = [
  { label: "Active Prompts", value: "10k+", icon: Sparkles },
  { label: "Satisfied Users", value: "50k+", icon: Users },
  { label: "Average Rating", value: "4.8", icon: Star },
  { label: "Seller Earnings", value: "$2M+", icon: DollarSign },
];

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-gradient-to-br from-primary/8 to-transparent blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-gradient-to-tr from-accent/8 to-transparent blur-3xl" />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border bg-background/50 px-3 py-1.5 text-sm backdrop-blur-sm">
              <Sparkles className="mr-2 h-3.5 w-3.5 text-primary" />
              The premier B2B marketplace for AI prompts
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
              Buy & Sell{" "}
              <span className="gradient-text">
                AI Prompts
              </span>
              <br />
              That Actually Work
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground text-balance sm:text-xl max-w-3xl mx-auto">
              Save hours of testing and get proven results instantly. Join thousands of professionals 
              buying and selling optimized AI prompts for marketing, sales, development, and more.
            </p>
            
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center mb-12">
              <Button size="lg" className="group">
                <Link href="/marketplace" className="flex items-center">
                  Browse Prompts 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center group">
                  <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="text-2xl font-bold sm:text-3xl">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance sm:text-4xl">Browse by Category</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Discover prompts tailored to your specific needs across various industries and use cases
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/marketplace?category=${category.name.toLowerCase()}`}
                  className="group relative overflow-hidden rounded-lg border bg-card p-6 transition-all duration-300 hover:shadow-large hover:-translate-y-1"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity group-hover:opacity-5`} />
                  <div className="relative">
                    <div className="mb-4 flex items-center justify-between">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} text-white shadow-sm`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count} prompts available</p>
                  </div>
                </Link>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              <Link href="/categories" className="flex items-center">
                View All Categories <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="relative py-16 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/20" />
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-balance sm:text-4xl">Featured Prompts</h2>
            <p className="text-lg text-muted-foreground text-balance max-w-2xl mx-auto">
              Hand-picked prompts with exceptional performance and proven results
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROMPTS.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg">
              <Link href="/marketplace?sort=featured" className="flex items-center">
                View All Featured <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 text-center text-primary-foreground shadow-xl md:p-12">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px), radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </div>
            
            <div className="relative">
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Sparkles className="h-7 w-7" />
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-balance sm:text-4xl">Ready to Start Selling?</h2>
              <p className="mb-8 text-lg opacity-90 text-balance max-w-2xl mx-auto">
                Join thousands of prompt engineers earning passive income by sharing their expertise 
                with businesses worldwide
              </p>
              
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/sell">Start Selling Today</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  <Link href="/learn-more">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}