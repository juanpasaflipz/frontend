import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button"
    
    const buttonClassName = cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden",
      {
        "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:shadow-md hover:-translate-y-0.5":
          variant === "default",
        "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:shadow-md hover:-translate-y-0.5":
          variant === "destructive",
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground hover:border-accent-foreground/20 hover:shadow-sm":
          variant === "outline",
        "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 hover:shadow-md hover:-translate-y-0.5":
          variant === "secondary",
        "hover:bg-accent hover:text-accent-foreground": variant === "ghost",
        "text-primary underline-offset-4 hover:underline": variant === "link",
      },
      {
        "h-9 px-4 py-2": size === "default",
        "h-8 rounded-md px-3 text-xs": size === "sm",
        "h-10 rounded-md px-8 text-base font-semibold": size === "lg",
        "h-9 w-9": size === "icon",
      },
      className
    )

    if (asChild) {
      return React.Children.map(props.children as React.ReactElement, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            className: cn(child.props.className, buttonClassName),
            ref,
          })
        }
        return child
      })
    }

    return (
      <button
        className={buttonClassName}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }