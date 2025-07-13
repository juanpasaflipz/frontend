import { Button } from "@/components/ui/button"
import { PromptCard } from "@/components/prompt-card"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { ArrowRight, Sparkles, TrendingUp, Shield } from "lucide-react"
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
  { name: "Marketing", count: 234, icon: TrendingUp },
  { name: "Sales", count: 189, icon: Sparkles },
  { name: "Development", count: 156, icon: Shield },
  { name: "Support", count: 143, icon: Shield },
  { name: "Analytics", count: 98, icon: TrendingUp },
  { name: "E-commerce", count: 87, icon: Sparkles },
];

export default function HomePage() {
  return (
    <LayoutWrapper>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Background gradient mesh */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              The B2B Marketplace for{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                AI Prompts
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
              Buy and sell optimized AI prompts for marketing, sales, development, and more. 
              Save hours of testing and get proven results instantly.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" asChild>
                <Link href="/marketplace">
                  Browse Prompts <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/sell">Start Selling</Link>
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold">10k+</p>
              <p className="text-sm text-muted-foreground">Active Prompts</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">50k+</p>
              <p className="text-sm text-muted-foreground">Satisfied Users</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">4.8</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold">$2M+</p>
              <p className="text-sm text-muted-foreground">Seller Earnings</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Browse by Category</h2>
            <Button variant="ghost" asChild>
              <Link href="/categories">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href={`/marketplace?category=${category.name.toLowerCase()}`}
                  className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md hover:scale-[1.02] hover:border-primary/20"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <Icon className="h-8 w-8 text-primary" />
                    <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mb-1 text-lg font-semibold">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} prompts</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Prompts */}
      <section className="relative py-16">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/30 via-muted/50 to-muted/30" />
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold">Featured Prompts</h2>
              <p className="mt-2 text-muted-foreground">
                Hand-picked prompts with exceptional performance
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link href="/marketplace?sort=featured">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_PROMPTS.map((prompt) => (
              <PromptCard key={prompt.id} {...prompt} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary p-8 text-center text-white shadow-xl md:p-12">
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
            }} />
            <h2 className="mb-4 text-3xl font-bold">Ready to Start Selling?</h2>
            <p className="mb-8 text-lg opacity-90">
              Join thousands of prompt engineers earning passive income
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/sell">Start Selling Now</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white bg-white/10 text-white hover:bg-white/20" asChild>
                <Link href="/docs">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  )
}