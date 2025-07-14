"use client"

import { useState, useMemo } from "react"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { PromptCard } from "@/components/prompt-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  Search, 
  SlidersHorizontal, 
  ChevronDown,
  Grid3X3,
  List,
  X
} from "lucide-react"

// Mock data - in production this would come from API
const ALL_PROMPTS = [
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
    createdAt: "2024-01-15",
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
    createdAt: "2024-01-10",
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
    createdAt: "2024-01-05",
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
    createdAt: "2024-01-20",
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
    createdAt: "2024-01-12",
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
    createdAt: "2024-01-18",
  },
  {
    id: "7",
    title: "Social Media Content Calendar",
    description: "Generate month-long content calendars with post ideas, hashtags, and engagement strategies for multiple platforms.",
    price: 45,
    category: "Marketing",
    rating: 4.7,
    salesCount: 267,
    sellerName: "SocialPro AI",
    tags: ["social-media", "content", "planning", "marketing"],
    createdAt: "2024-01-08",
  },
  {
    id: "8",
    title: "Legal Document Analyzer",
    description: "Review and summarize legal documents, contracts, and agreements. Highlights key terms and potential issues.",
    price: 89,
    category: "Legal",
    rating: 4.8,
    salesCount: 145,
    sellerName: "LegalEase AI",
    tags: ["legal", "contracts", "analysis", "compliance"],
    createdAt: "2024-01-22",
  },
  {
    id: "9",
    title: "Video Script Generator",
    description: "Create engaging video scripts for YouTube, TikTok, and other platforms. Includes hooks, storytelling, and CTAs.",
    price: 55,
    category: "Content",
    rating: 4.6,
    salesCount: 198,
    sellerName: "VideoScript Pro",
    tags: ["video", "script", "youtube", "content"],
    createdAt: "2024-01-25",
  },
];

const CATEGORIES = [
  "All",
  "Marketing",
  "Sales",
  "Development",
  "Support",
  "Analytics",
  "E-commerce",
  "Legal",
  "Content",
];

const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "newest", label: "Newest First" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

const PRICE_RANGES = [
  { value: "all", label: "All Prices" },
  { value: "0-25", label: "Under $25" },
  { value: "25-50", label: "$25 - $50" },
  { value: "50-100", label: "$50 - $100" },
  { value: "100+", label: "$100+" },
];

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("popular")
  const [priceRange, setPriceRange] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showFilters, setShowFilters] = useState(false)

  // Filter and sort prompts
  const filteredAndSortedPrompts = useMemo(() => {
    let filtered = ALL_PROMPTS;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (prompt) =>
          prompt.title.toLowerCase().includes(query) ||
          prompt.description.toLowerCase().includes(query) ||
          prompt.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory !== "All") {
      filtered = filtered.filter((prompt) => prompt.category === selectedCategory);
    }

    // Price range filter
    if (priceRange !== "all") {
      const [min, max] = priceRange.split("-").map((n) => parseInt(n) || Infinity);
      filtered = filtered.filter((prompt) => {
        if (max === Infinity) return prompt.price >= min;
        return prompt.price >= min && prompt.price <= max;
      });
    }

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case "popular":
        sorted.sort((a, b) => b.salesCount - a.salesCount);
        break;
      case "newest":
        sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
    }

    return sorted;
  }, [searchQuery, selectedCategory, sortBy, priceRange]);

  return (
    <LayoutWrapper>
      <div className="container px-6 md:px-8 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div className="mb-16">
          <h1 className="mb-6 text-4xl lg:text-5xl font-bold">Browse AI Prompts</h1>
          <p className="text-muted-foreground">
            Discover {filteredAndSortedPrompts.length} high-quality prompts from verified sellers
          </p>
        </div>

        {/* Search and Filters Bar */}
        <div className="mb-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm outline-none focus:border-primary"
            />
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-2">
            {/* Mobile filters toggle */}
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden"
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>

            {/* Sort dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 pr-8 text-sm outline-none focus:border-primary appearance-none cursor-pointer"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-2.5 h-4 w-4 pointer-events-none" />
            </div>

            {/* View mode toggle */}
            <div className="hidden lg:flex items-center rounded-md border">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                className="rounded-none rounded-l-md"
                onClick={() => setViewMode("grid")}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                className="rounded-none rounded-r-md"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="flex gap-16 lg:gap-20">
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-72 xl:w-80 shrink-0">
            <div className="sticky top-24 space-y-10">
              {/* Categories */}
              <div>
                <h3 className="mb-4 text-sm font-semibold">Categories</h3>
                <div className="space-y-1">
                  {CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="mb-4 text-sm font-semibold">Price Range</h3>
                <div className="space-y-1">
                  {PRICE_RANGES.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => setPriceRange(range.value)}
                      className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                        priceRange === range.value
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Filters */}
              {(selectedCategory !== "All" || priceRange !== "all") && (
                <div>
                  <h3 className="mb-4 text-sm font-semibold">Active Filters</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategory !== "All" && (
                      <Badge variant="secondary" className="pr-1">
                        {selectedCategory}
                        <button
                          onClick={() => setSelectedCategory("All")}
                          className="ml-1 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                    {priceRange !== "all" && (
                      <Badge variant="secondary" className="pr-1">
                        {PRICE_RANGES.find((r) => r.value === priceRange)?.label}
                        <button
                          onClick={() => setPriceRange("all")}
                          className="ml-1 rounded-sm hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    )}
                  </div>
                </div>
              )}
            </div>
          </aside>

          {/* Mobile Filters - Overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-background lg:hidden">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFilters(false)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex-1 overflow-y-auto p-6 space-y-8">
                  {/* Categories */}
                  <div>
                    <h3 className="mb-4 text-sm font-semibold">Categories</h3>
                    <div className="space-y-1">
                      {CATEGORIES.map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            selectedCategory === category
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="mb-4 text-sm font-semibold">Price Range</h3>
                    <div className="space-y-1">
                      {PRICE_RANGES.map((range) => (
                        <button
                          key={range.value}
                          onClick={() => setPriceRange(range.value)}
                          className={`w-full rounded-md px-3 py-2 text-left text-sm transition-colors ${
                            priceRange === range.value
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                        >
                          {range.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="border-t p-4">
                  <Button
                    className="w-full"
                    onClick={() => setShowFilters(false)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Main Content */}
          <main className="flex-1">
            {/* Results count */}
            <p className="mb-6 text-sm text-muted-foreground">
              {filteredAndSortedPrompts.length} results
              {searchQuery && ` for "${searchQuery}"`}
            </p>

            {/* Prompts Grid/List */}
            {filteredAndSortedPrompts.length > 0 ? (
              <div
                className={
                  viewMode === "grid"
                    ? "grid gap-10 lg:gap-12 sm:grid-cols-2 xl:grid-cols-3"
                    : "space-y-8"
                }
              >
                {filteredAndSortedPrompts.map((prompt) => (
                  <PromptCard key={prompt.id} {...prompt} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-dashed p-12 text-center">
                <p className="text-muted-foreground">
                  No prompts found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                    setPriceRange("all");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}

            {/* Load More / Pagination would go here */}
            {filteredAndSortedPrompts.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </LayoutWrapper>
  );
}