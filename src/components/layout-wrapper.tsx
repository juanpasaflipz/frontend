import { Navigation } from "./navigation"
import { Footer } from "./footer"

interface LayoutWrapperProps {
  children: React.ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}