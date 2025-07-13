# Frontend - AI Prompt Marketplace

This is the frontend Next.js application for the AI Prompt Marketplace, featuring a modern UI with v0.dev-inspired design.

## Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Landing page with hero, categories, featured prompts
│   │   ├── marketplace/       # Browse prompts with filters, search, sorting
│   │   └── prompts/[id]/      # Individual prompt detail pages
│   ├── components/
│   │   ├── ui/                # Reusable UI components (Button, Card, Badge)
│   │   ├── navigation.tsx     # Header with search and menu
│   │   ├── footer.tsx         # Site footer
│   │   ├── layout-wrapper.tsx # Common layout structure
│   │   └── prompt-card.tsx    # Prompt display component
│   └── lib/
│       └── utils.ts           # Utility functions (cn for className merging)
```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling with modern syntax
- **Lucide React** - Icon library
- **React Query** - Data fetching (ready to implement)
- **Axios** - HTTP client (ready to implement)

## Design System

Inspired by v0.dev's clean aesthetic:

- **Colors**: HSL-based color system for smooth theming
- **Typography**: Clean hierarchy with consistent spacing (8pt grid)
- **Components**: Shadcn/ui patterns with custom implementation
- **Interactions**: Smooth 200ms transitions, hover effects, active states
- **Layout**: Mobile-first responsive design

## Key Features Implemented

### Landing Page (`/`)
- Hero section with gradient backgrounds
- Category grid with hover effects
- Featured prompts showcase
- Call-to-action sections
- Statistics display

### Marketplace (`/marketplace`)
- Search functionality
- Category filtering
- Price range filters
- Sort options (popular, newest, price, rating)
- Grid/list view toggle
- Mobile-responsive filters

### Prompt Detail (`/prompts/[id]`)
- Comprehensive prompt information
- Tabbed interface (description, examples, reviews)
- Seller information sidebar
- Related prompts
- Purchase controls
- Review system display

## Development Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Environment Setup

The frontend currently uses mock data for demonstration. To connect to the backend API:

1. Ensure backend is running on `http://localhost:8000`
2. Update API configuration in environment variables
3. Replace mock data with React Query API calls

## Current Status

✅ **Completed:**
- Complete UI implementation with modern design
- All core pages (landing, marketplace, prompt detail)
- Responsive design with mobile support
- Component library with reusable UI elements
- Mock data integration for development

🔄 **Next Steps:**
- Connect to backend API endpoints
- Implement React Query for data fetching
- Add authentication flows
- Integrate Stripe checkout
- Add loading states and error handling

## Design Highlights

- **v0.dev-inspired**: Clean, modern aesthetic with subtle gradients
- **Smooth Interactions**: Hover effects, scale transforms, shadow elevation
- **Glass Morphism**: Backdrop blur effects on navigation
- **Consistent Spacing**: 8pt grid system throughout
- **Professional Polish**: Proper focus states, accessibility considerations

## Component Examples

### Button Usage
```tsx
<Button variant="default" size="lg" asChild>
  <Link href="/marketplace">Browse Prompts</Link>
</Button>
```

### Card Usage
```tsx
<Card className="hover:shadow-lg hover:scale-[1.02]">
  <CardHeader>
    <CardTitle>Prompt Title</CardTitle>
  </CardHeader>
  <CardContent>Content here</CardContent>
</Card>
```

## Integration Notes

The frontend is designed to integrate with the FastAPI backend through:
- RESTful API calls to `/api/v1/*` endpoints
- JWT authentication handling
- Stripe checkout integration
- Real-time search and filtering
- User dashboard functionality

Ready for API integration and deployment! 🚀