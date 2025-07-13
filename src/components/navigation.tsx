"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Menu, Sparkles, X } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6 md:px-8 lg:px-12 flex h-20 items-center">
        {/* Logo */}
        <Link href="/" className="mr-8 lg:mr-12 flex items-center space-x-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-200 group-hover:scale-105">
            <Sparkles className="h-6 w-6" />
          </div>
          <span className="text-2xl font-bold">PromptMarket</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          {/* Search Bar */}
          <div className="flex w-full max-w-sm items-center space-x-2">
            <div className="relative w-full">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search prompts..."
                className="h-10 w-full rounded-md border border-input bg-background/50 pl-10 pr-4 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-10 lg:space-x-12 text-base font-medium">
            <Link 
              href="/marketplace" 
              className="hover:text-primary transition-colors"
            >
              Browse
            </Link>
            <Link 
              href="/categories" 
              className="hover:text-primary transition-colors"
            >
              Categories
            </Link>
            <Link 
              href="/trending" 
              className="hover:text-primary transition-colors"
            >
              Trending
            </Link>
            <Link 
              href="/sell" 
              className="hover:text-primary transition-colors"
            >
              Sell
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Start Free Trial</Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto h-8 w-8 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Menu className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-sm md:hidden animate-fade-in">
          <div className="container px-6 py-6 space-y-6">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search prompts..."
                className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring/20 transition-all duration-200"
              />
            </div>
            <nav className="flex flex-col space-y-2">
              <Link 
                href="/marketplace" 
                className="px-4 py-3 text-base rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                href="/categories" 
                className="px-4 py-3 text-base rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/trending" 
                className="px-4 py-3 text-base rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                href="/sell" 
                className="px-4 py-3 text-base rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
            </nav>
            <div className="pt-4 border-t border-border/40">
              <Button className="w-full h-12 text-base font-medium" size="lg">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}