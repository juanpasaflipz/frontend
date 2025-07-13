"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User, Menu, Sparkles, X } from "lucide-react"
import { useState } from "react"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        {/* Logo */}
        <Link href="/" className="mr-6 flex items-center space-x-2 group">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground transition-all duration-200 group-hover:scale-105 group-hover:shadow-glow-sm">
            <Sparkles className="h-3.5 w-3.5" />
          </div>
          <span className="text-lg font-semibold tracking-tight">PromptMarket</span>
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
                className="h-8 w-full rounded-md border border-input bg-background/50 pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring/20 transition-all duration-200"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-1 text-sm font-medium">
            <Link 
              href="/marketplace" 
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Browse
            </Link>
            <Link 
              href="/categories" 
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Categories
            </Link>
            <Link 
              href="/trending" 
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Trending
            </Link>
            <Link 
              href="/sell" 
              className="px-3 py-1.5 rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
            >
              Sell
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-accent">
              <User className="h-4 w-4" />
            </Button>
            <Button size="sm" className="ml-2 h-8 px-3 text-xs font-medium">
              Sign In
            </Button>
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
          <div className="container py-3 space-y-3">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search prompts..."
                className="h-8 w-full rounded-md border border-input bg-background pl-8 pr-3 text-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring/20 transition-all duration-200"
              />
            </div>
            <nav className="flex flex-col space-y-1">
              <Link 
                href="/marketplace" 
                className="px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                href="/categories" 
                className="px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                href="/trending" 
                className="px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Trending
              </Link>
              <Link 
                href="/sell" 
                className="px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Sell
              </Link>
            </nav>
            <div className="pt-2 border-t border-border/40">
              <Button className="w-full h-8 text-xs font-medium" size="sm">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}