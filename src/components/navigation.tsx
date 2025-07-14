"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              PromptMarket
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <button className="flex items-center space-x-1 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              <span>Products</span>
              <ChevronDown className="h-3 w-3" />
            </button>
          </div>
          <Link href="/marketplace" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Marketplace
          </Link>
          <Link href="#pricing" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Pricing
          </Link>
          <Link href="#docs" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Docs
          </Link>
          <Link href="#enterprise" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Enterprise
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="ghost" className="hidden md:inline-flex text-sm font-medium">
            Log in
          </Button>
          <Button className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-sm font-medium">
            Sign up
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 md:hidden">
          <nav className="container px-4 py-6 space-y-4">
            <div className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Products
              </div>
              <Link 
                href="/marketplace" 
                className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Marketplace
              </Link>
            </div>
            
            <Link 
              href="#pricing" 
              className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#docs" 
              className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Docs
            </Link>
            <Link 
              href="#enterprise" 
              className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Enterprise
            </Link>
            
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
              <Button variant="ghost" className="w-full justify-start text-sm font-medium">
                Log in
              </Button>
              <Button className="w-full bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100 text-sm font-medium">
                Sign up
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}