"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
<<<<<<< HEAD
import { Menu, X, Zap } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"
=======
import { ThemeToggle } from "./theme-toggle"
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3

const NAVIGATION_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" }
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
<<<<<<< HEAD
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-6 lg:px-8">
=======
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6 md:px-8 lg:px-12 flex h-20 items-center">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
        {/* Logo */}
<<<<<<< HEAD
        <Link href="/" className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
            <Zap className="h-6 w-6 text-white" />
=======
        <Link href="/" className="mr-8 lg:mr-12 flex items-center space-x-3 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all duration-200 group-hover:scale-105">
            <Sparkles className="h-6 w-6" />
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
          </div>
<<<<<<< HEAD
          <span className="font-bold text-xl">StreamLine</span>
=======
          <span className="text-2xl font-bold">PromptMarket</span>
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
        </Link>

        {/* Desktop Navigation */}
<<<<<<< HEAD
        <nav className="hidden md:flex items-center space-x-10">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors py-2"
=======
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
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
            >
              {link.label}
            </Link>
<<<<<<< HEAD
          ))}
        </nav>
=======
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
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3

<<<<<<< HEAD
        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-6">
          <ThemeToggle />
          <Button variant="ghost" size="sm" className="px-4 py-2">
            Sign In
          </Button>
          <Button size="sm" className="px-6 py-2">
            Start Free Trial
          </Button>
=======
          {/* Right Side Actions */}
          <div className="flex items-center space-x-6">
            <ThemeToggle />
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button>Start Free Trial</Button>
          </div>
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-3 md:hidden">
          <ThemeToggle />
          <button
            className="p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
<<<<<<< HEAD
        <div className="md:hidden border-t bg-background">
          <div className="container py-6 space-y-6 px-6">
            <nav className="flex flex-col space-y-4">
              {NAVIGATION_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-blue-600 transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
=======
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
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
            </nav>
<<<<<<< HEAD
            <div className="flex flex-col space-y-3 pt-6 border-t">
              <Button variant="ghost" size="sm" className="justify-start px-4 py-3">
=======
            <div className="pt-4 border-t border-border/40">
              <Button className="w-full h-12 text-base font-medium" size="lg">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                Sign In
              </Button>
              <Button size="sm" className="justify-start px-6 py-3">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}