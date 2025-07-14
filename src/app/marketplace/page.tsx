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
  X,
  Filter
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
      <div className="container py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            AI Prompt Marketplace
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover {filteredAndSortedPrompts.length} high-quality prompts from verified creators
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search prompts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 pl-10 pr-4 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-full transition-colors ${
                    selectedCategory === category
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center gap-3">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* Price Filter */}
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {PRICE_RANGES.map((range) => (
                  <option key={range.value} value={range.value}>
                    {range.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-200 dark:border-gray-700 rounded-lg">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${
                    viewMode === "grid"
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <Grid3X3 className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${
                    viewMode === "list"
                      ? "bg-gray-100 dark:bg-gray-800"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredAndSortedPrompts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No prompts found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filters to find what you're looking for.
            </p>
          </div>
        ) : (
          <div
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }
          >
            {filteredAndSortedPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                prompt={prompt}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredAndSortedPrompts.length > 0 && (
          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="px-8 py-3 text-sm font-medium"
            >
              Load more prompts
            </Button>
          </div>
        )}
      </div>
    </LayoutWrapper>
  )
}