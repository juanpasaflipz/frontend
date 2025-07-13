import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye } from "lucide-react"
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
    <Card className="group relative flex h-full flex-col overflow-hidden hover:shadow-lg hover:scale-[1.02] hover:border-primary/20">
      <Link href={`/prompts/${id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View prompt</span>
      </Link>
      
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge variant="secondary" className="mb-2">
            {category}
          </Badge>
          <div className="flex items-center gap-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground">by {sellerName}</p>
      </CardHeader>
      
      <CardContent className="flex-1 pb-3">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {description}
        </p>
        {tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="pt-3">
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-2xl font-bold">${price}</p>
            <p className="text-xs text-muted-foreground">
              {salesCount} sales
            </p>
          </div>
          <div className="relative z-20 flex gap-2">
            <Button size="sm" variant="outline" className="group/btn">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="group/btn">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}