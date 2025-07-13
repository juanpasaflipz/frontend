import { Navigation } from "./navigation"
import { Footer } from "./footer"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 px-4 sm:px-6 lg:px-8">
        <div className="py-8 sm:py-12 lg:py-16">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}