import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromptCardProps {
  id: string
  title: string
  description: string
  price: number
  category: string
  rating: number
  salesCount: number
  sellerName: string
  tags?: string[]
}

export function PromptCard({
  id,
  title,
  description,
  price,
  category,
  rating,
  salesCount,
  sellerName,
  tags = [],
}: PromptCardProps) {
  return (
    <Card className="group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-large hover:-translate-y-1 hover:border-primary/20">
      <Link href={`/prompts/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View prompt</span>
      </Link>
      
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      <CardHeader className="relative pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs font-medium px-2 py-1">
            {category}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {sellerName}</p>
      </CardHeader>
      
      <CardContent className="relative flex-1 pb-3">
        <p className="line-clamp-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs px-2 py-0.5 rounded-md">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs px-2 py-0.5 rounded-md">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="relative pt-3 border-t bg-muted/20">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xl font-bold">${price}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="h-3 w-3" />
                <span>{salesCount} sales</span>
              </div>
            </div>
          </div>
          <div className="relative z-20 flex gap-2">
            <Button size="sm" variant="outline" className="h-8 w-8 p-0 hover:bg-primary hover:text-primary-foreground transition-colors">
              <Eye className="h-3.5 w-3.5" />
            </Button>
            <Button size="sm" className="h-8 px-3 text-xs font-medium">
              <ShoppingCart className="h-3 w-3 mr-1" />
              Buy
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}