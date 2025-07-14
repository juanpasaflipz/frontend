import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PromptCardProps {
  prompt: {
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
  viewMode?: "grid" | "list"
}

export function PromptCard({ prompt, viewMode = "grid" }: PromptCardProps) {
  const {
    id,
    title,
    description,
    price,
    category,
    rating,
    salesCount,
    sellerName,
    tags = [],
  } = prompt

  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <Badge variant="secondary" className="text-xs font-medium">
                  {category}
                </Badge>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{rating.toFixed(1)}</span>
                  <span className="text-sm text-gray-500">({salesCount})</span>
                </div>
              </div>
              
              <Link href={`/prompts/${id}`} className="group">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2">
                  {title}
                </h3>
              </Link>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                by {sellerName}
              </p>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">
                {description}
              </p>
              
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags.slice(0, 4).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                  {tags.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{tags.length - 4}
                    </Badge>
                  )}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-4 ml-6">
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${price}
                </p>
                <p className="text-sm text-gray-500">
                  {salesCount} sales
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
                <Button size="sm" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Buy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-200 dark:border-gray-800">
      <CardHeader className="p-6 pb-4">
        <div className="flex items-start justify-between mb-3">
          <Badge variant="secondary" className="text-xs font-medium">
            {category}
          </Badge>
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <Link href={`/prompts/${id}`} className="group">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
            {title}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 dark:text-gray-400">
          by {sellerName}
        </p>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 flex-1">
        <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
          {description}
        </p>
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
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
      
      <CardFooter className="p-6 pt-4 border-t border-gray-100 dark:border-gray-800">
        <div className="flex w-full items-center justify-between">
          <div>
            <p className="text-xl font-bold text-gray-900 dark:text-white">
              ${price}
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {salesCount} sales
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Eye className="h-4 w-4" />
            </Button>
            <Button size="sm" className="bg-black hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-100">
              <ShoppingCart className="h-4 w-4 mr-2" />
              Buy
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}