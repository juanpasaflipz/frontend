import Link from "next/link"
import { Sparkles, Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
<<<<<<< HEAD
    <footer className="border-t border-border/40 bg-background/50">
      <div className="container py-16 md:py-20 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div>
            <h3 className="mb-6 text-sm font-semibold">Product</h3>
            <ul className="space-y-4 text-sm">
=======
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-20">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">PromptMarket</span>
            </div>
            <p className="text-gray-400">
              The premier marketplace for buying and selling high-quality AI prompts. 
              Accelerate your AI workflows with professionally crafted prompts.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Marketplace</h3>
            <ul className="space-y-2">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
              <li>
<<<<<<< HEAD
                <Link href="/marketplace" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
=======
                <Link href="/marketplace" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                  Browse Prompts
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/categories" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
=======
                <Link href="/categories" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                  Categories
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/trending" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
=======
                <Link href="/trending" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                  Trending
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Pricing
=======
                <Link href="/new" className="text-gray-400 hover:text-white transition-colors">
                  New Arrivals
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
          
          <div>
            <h3 className="mb-6 text-sm font-semibold">Company</h3>
            <ul className="space-y-4 text-sm">
=======

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">For Sellers</h3>
            <ul className="space-y-2">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
              <li>
<<<<<<< HEAD
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  About
=======
                <Link href="/sell" className="text-gray-400 hover:text-white transition-colors">
                  Start Selling
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Blog
=======
                <Link href="/seller-guide" className="text-gray-400 hover:text-white transition-colors">
                  Seller Guide
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Careers
=======
                <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Contact
=======
                <Link href="/success-stories" className="text-gray-400 hover:text-white transition-colors">
                  Success Stories
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
            </ul>
          </div>
<<<<<<< HEAD
          
          <div>
            <h3 className="mb-6 text-sm font-semibold">Resources</h3>
            <ul className="space-y-4 text-sm">
=======

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
              <li>
<<<<<<< HEAD
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
=======
                <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                  Help Center
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/community" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Community
=======
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
<<<<<<< HEAD
            </ul>
          </div>
          
          <div>
            <h3 className="mb-6 text-sm font-semibold">Legal</h3>
            <ul className="space-y-4 text-sm">
=======
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
              <li>
<<<<<<< HEAD
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Privacy Policy
=======
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
              <li>
<<<<<<< HEAD
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Terms of Service
=======
                <Link href="/status" className="text-gray-400 hover:text-white transition-colors">
                  System Status
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
                </Link>
              </li>
<<<<<<< HEAD
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/licenses" className="text-muted-foreground hover:text-foreground transition-colors py-1 block">
                  Licenses
                </Link>
              </li>
=======
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
            </ul>
          </div>
        </div>
<<<<<<< HEAD
        
        <div className="mt-16 border-t border-border/40 pt-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © 2024 PromptMarket. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors p-1">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </Link>
            </div>
=======

        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} PromptMarket. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
              Cookie Policy
            </Link>
>>>>>>> 2ceca890dc5a77b49120b1d17dec4bb9dd40d6c3
          </div>
        </div>
      </div>
    </footer>
  )
}