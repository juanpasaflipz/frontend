"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  Share2, 
  Shield, 
  Check,
  Copy,
  ChevronRight,
  User,
  Calendar,
  Package,
  MessageSquare,
  TrendingUp
} from "lucide-react"

// Mock data - in production this would come from API
const PROMPT_DETAILS = {
  id: "1",
  title: "Advanced Sales Email Generator",
  description: "Generate personalized B2B sales emails that convert. Uses advanced persuasion techniques and customizable templates for different industries.",
  longDescription: `This advanced prompt helps you create highly personalized B2B sales emails that significantly improve your conversion rates. 

Key Features:
- Industry-specific templates for 20+ verticals
- Psychological persuasion techniques based on proven sales methodologies
- Dynamic personalization tokens for recipient data
- A/B testing variations included
- Follow-up sequence generator

Perfect for sales teams, marketing agencies, and freelancers who need to create compelling outreach emails at scale.`,
  price: 49,
  category: "Sales",
  rating: 4.8,
  reviewCount: 156,
  salesCount: 234,
  sellerName: "SalesGuru Pro",
  sellerRating: 4.9,
  sellerSalesCount: 1234,
  tags: ["email", "b2b", "conversion", "templates", "outreach", "cold-email"],
  features: [
    "20+ industry-specific templates",
    "Psychological persuasion framework",
    "Dynamic personalization",
    "A/B testing variations",
    "Follow-up sequences",
    "Subject line optimizer",
    "CTA recommendations",
    "Tone adjustment options"
  ],
  whatsIncluded: [
    "Main prompt with detailed instructions",
    "Variable guide and examples",
    "20+ industry templates",
    "Best practices guide (PDF)",
    "Video tutorial (15 min)",
    "Lifetime updates",
    "Email support"
  ],
  exampleInput: `Industry: SaaS
Product: Project Management Tool
Target: VP of Engineering
Company Size: 100-500 employees
Pain Point: Team collaboration`,
  exampleOutput: `Subject: Quick question about [Company]'s engineering workflows

Hi [Name],

I noticed [Company] has been scaling rapidly - congrats on the recent Series B! 

With your engineering team growing from 20 to 50+ developers, I'm curious: how are you handling the increased complexity in project coordination?

Many VPs of Engineering at similar-stage companies tell me their biggest challenge is maintaining visibility across multiple teams while avoiding meeting overload.

Would you be open to a brief 15-minute call next week to discuss how companies like [Similar Company 1] and [Similar Company 2] solved this?

Best,
[Your Name]

P.S. I put together a quick 2-minute video showing how [Similar Company] reduced their planning meetings by 40% - happy to share if helpful.`,
  reviews: [
    {
      id: "r1",
      userName: "Marketing Mike",
      rating: 5,
      date: "2024-01-10",
      comment: "This prompt transformed our cold outreach. Response rates went from 2% to 12% in the first month!",
      helpful: 23,
    },
    {
      id: "r2",
      userName: "Sarah J.",
      rating: 4,
      date: "2024-01-05",
      comment: "Great prompt with lots of customization options. Would love to see more industries added.",
      helpful: 15,
    },
    {
      id: "r3", 
      userName: "TechSales Pro",
      rating: 5,
      date: "2023-12-28",
      comment: "Worth every penny. The psychological framework alone is gold. Excellent support from the seller too.",
      helpful: 31,
    }
  ],
  relatedPrompts: [
    {
      id: "2",
      title: "LinkedIn Outreach Message Generator",
      price: 39,
      rating: 4.7,
      salesCount: 189,
    },
    {
      id: "3",
      title: "Sales Call Script Builder",
      price: 59,
      rating: 4.8,
      salesCount: 145,
    },
    {
      id: "4",
      title: "Proposal Template Generator",
      price: 69,
      rating: 4.6,
      salesCount: 98,
    }
  ]
};

export default function PromptDetailPage() {
  const params = useParams()
  const [activeTab, setActiveTab] = useState<"description" | "reviews" | "examples">("description")
  const [isFavorited, setIsFavorited] = useState(false)
  const [copiedExample, setCopiedExample] = useState(false)

  const prompt = PROMPT_DETAILS; // In production, fetch based on params.id

  const handleCopyExample = () => {
    navigator.clipboard.writeText(prompt.exampleOutput)
    setCopiedExample(true)
    setTimeout(() => setCopiedExample(false), 2000)
  }

  return (
    <LayoutWrapper>
      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container py-3">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/marketplace" className="hover:text-foreground">Marketplace</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href={`/marketplace?category=${prompt.category}`} className="hover:text-foreground">
              {prompt.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{prompt.title}</span>
          </nav>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{prompt.category}</Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{prompt.rating}</span>
                  <span className="text-sm text-muted-foreground">({prompt.reviewCount} reviews)</span>
                </div>
                <span className="text-sm text-muted-foreground">• {prompt.salesCount} sales</span>
              </div>
              
              <h1 className="mb-4 text-3xl font-bold">{prompt.title}</h1>
              
              <p className="mb-6 text-lg text-muted-foreground">{prompt.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {prompt.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div>
              <div className="border-b">
                <nav className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab("description")}
                    className={`border-b-2 pb-4 text-sm font-medium transition-colors ${
                      activeTab === "description"
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Description
                  </button>
                  <button
                    onClick={() => setActiveTab("examples")}
                    className={`border-b-2 pb-4 text-sm font-medium transition-colors ${
                      activeTab === "examples"
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Examples
                  </button>
                  <button
                    onClick={() => setActiveTab("reviews")}
                    className={`border-b-2 pb-4 text-sm font-medium transition-colors ${
                      activeTab === "reviews"
                        ? "border-primary text-foreground"
                        : "border-transparent text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Reviews ({prompt.reviewCount})
                  </button>
                </nav>
              </div>

              <div className="pt-6">
                {/* Description Tab */}
                {activeTab === "description" && (
                  <div className="space-y-6">
                    <div className="prose prose-gray dark:prose-invert max-w-none">
                      <div className="whitespace-pre-line">{prompt.longDescription}</div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Key Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {prompt.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">What's Included</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {prompt.whatsIncluded.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Package className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <span className="text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Examples Tab */}
                {activeTab === "examples" && (
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Example Input</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <pre className="rounded-md bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto">
                          <code>{prompt.exampleInput}</code>
                        </pre>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-lg">Example Output</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopyExample}
                          >
                            {copiedExample ? (
                              <>
                                <Check className="mr-2 h-4 w-4" />
                                Copied
                              </>
                            ) : (
                              <>
                                <Copy className="mr-2 h-4 w-4" />
                                Copy
                              </>
                            )}
                          </Button>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <pre className="rounded-md bg-gray-100 dark:bg-gray-800 p-4 text-sm overflow-x-auto whitespace-pre-wrap">
                          <code>{prompt.exampleOutput}</code>
                        </pre>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {/* Reviews Tab */}
                {activeTab === "reviews" && (
                  <div className="space-y-6">
                    {prompt.reviews.map((review) => (
                      <Card key={review.id}>
                        <CardContent className="pt-6">
                          <div className="mb-3 flex items-start justify-between">
                            <div>
                              <p className="font-medium">{review.userName}</p>
                              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={`h-3 w-3 ${
                                        i < review.rating
                                          ? "fill-yellow-400 text-yellow-400"
                                          : "text-gray-300"
                                      }`}
                                    />
                                  ))}
                                </div>
                                <span>•</span>
                                <span>{new Date(review.date).toLocaleDateString()}</span>
                              </div>
                            </div>
                          </div>
                          <p className="mb-3 text-sm">{review.comment}</p>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <button className="flex items-center gap-1 hover:text-foreground">
                              <TrendingUp className="h-4 w-4" />
                              Helpful ({review.helpful})
                            </button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Purchase Card */}
            <Card className="sticky top-20">
              <CardContent className="pt-6">
                <div className="mb-6 text-center">
                  <p className="text-3xl font-bold">${prompt.price}</p>
                  <p className="text-sm text-muted-foreground">one-time purchase</p>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsFavorited(!isFavorited)}
                  >
                    <Heart className={`mr-2 h-5 w-5 ${isFavorited ? "fill-current" : ""}`} />
                    {isFavorited ? "Saved" : "Save for Later"}
                  </Button>
                  <Button variant="ghost" className="w-full">
                    <Share2 className="mr-2 h-5 w-5" />
                    Share
                  </Button>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-md bg-green-50 dark:bg-green-950 p-3 text-sm text-green-700 dark:text-green-300">
                  <Shield className="h-4 w-4 shrink-0" />
                  <span>30-day money-back guarantee</span>
                </div>
              </CardContent>
            </Card>

            {/* Seller Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Seller Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{prompt.sellerName}</p>
                    <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{prompt.sellerRating}</span>
                      </div>
                      <span>•</span>
                      <span>{prompt.sellerSalesCount} sales</span>
                    </div>
                    <div className="mt-3 flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Contact
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Prompts */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">You Might Also Like</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {prompt.relatedPrompts.map((related) => (
                    <Link
                      key={related.id}
                      href={`/prompts/${related.id}`}
                      className="block rounded-md border p-3 transition-colors hover:bg-gray-50 dark:hover:bg-gray-900"
                    >
                      <p className="mb-1 font-medium text-sm line-clamp-2">{related.title}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-bold">${related.price}</span>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{related.rating}</span>
                          <span>• {related.salesCount} sales</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
}