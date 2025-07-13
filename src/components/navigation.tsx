"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Menu } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-xl font-bold">PromptMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search prompts..."
                className="h-9 w-full rounded-md border border-input bg-background px-8 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/marketplace" className="transition-colors hover:text-primary">
              Browse
            </Link>
            <Link href="/categories" className="transition-colors hover:text-primary">
              Categories
            </Link>
            <Link href="/trending" className="transition-colors hover:text-primary">
              Trending
            </Link>
            <Link href="/sell" className="transition-colors hover:text-primary">
              Sell
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button>Sign In</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t md:hidden">
          <div className="container py-4">
            <div className="mb-4">
              <input
                type="search"
                placeholder="Search prompts..."
                className="h-9 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <Link href="/marketplace" className="px-2 py-1.5 text-sm transition-colors hover:text-primary">
                Browse
              </Link>
              <Link href="/categories" className="px-2 py-1.5 text-sm transition-colors hover:text-primary">
                Categories
              </Link>
              <Link href="/trending" className="px-2 py-1.5 text-sm transition-colors hover:text-primary">
                Trending
              </Link>
              <Link href="/sell" className="px-2 py-1.5 text-sm transition-colors hover:text-primary">
                Sell
              </Link>
              <hr className="my-2" />
              <Button className="w-full">Sign In</Button>
            </nav>
          </div>
        </div>
      )}
    </nav>
  )
}