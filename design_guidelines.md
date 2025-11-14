# Design Guidelines: Student Opportunity Discovery Platform

## Design Approach
**Hybrid Approach**: Combining Notion's clean information architecture with Airbnb's approachable card-based browsing. This platform prioritizes **findability and speed** - students should locate relevant opportunities within seconds. Draw inspiration from Linear's clarity and Stripe's restraint while maintaining warmth for the student audience.

## Typography Hierarchy
- **Headlines**: Bold, confident sans-serif (Inter or Poppins via Google Fonts)
  - Hero: text-5xl to text-6xl, font-bold
  - Section titles: text-3xl to text-4xl, font-semibold
- **Body**: Clean, readable (Inter or system fonts)
  - Primary text: text-base, font-normal
  - Card descriptions: text-sm
  - Labels/tags: text-xs to text-sm, font-medium
- **Emphasis**: Use font-semibold for key information (deadlines, funding status)

## Layout System
**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, and 12 for consistency
- Component padding: p-4, p-6, p-8
- Section spacing: py-12 on mobile, py-20 on desktop
- Card gaps: gap-4 to gap-6
- Container: max-w-7xl with px-4 for mobile, px-8 for desktop

**Grid Strategy**:
- Opportunity cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Filter sidebar: Sticky left column (w-64 to w-72) on desktop, collapsible drawer on mobile
- Ecuador section: Featured banner with 2-column layout (lg:grid-cols-2)

## Component Library

### Navigation Header
- Sticky top navigation (sticky top-0 z-50)
- Logo left, search bar center, language toggle right
- Include trust indicator: "500+ verified opportunities" below logo
- Height: h-16 to h-20 with shadow-sm

### Hero Section (Above the Fold)
- **Height**: 60vh to 70vh with centered content
- **Structure**: 
  - Large headline: "Find Your Perfect Opportunity"
  - Subheading: "Free programs, internships, and volunteering - filtered for students like you"
  - Quick filter pills: "Fully Funded", "Ecuador Only", "Closing Soon", "No Experience Required"
  - Search bar with icon (w-full max-w-2xl)
- **CTA**: Primary button "Explore Opportunities" with blurred background treatment (backdrop-blur-md bg-white/20)

### Filter Panel (Left Sidebar Desktop / Drawer Mobile)
- Collapsible sections with clear labels
- **Filter categories**:
  - Cost (checkboxes: Free, Paid, Fully Funded)
  - Location (multi-select dropdown with search)
  - Competitiveness (range slider: Low → High)
  - Career Area (tags: STEM, Arts, Healthcare, etc.)
  - Deadline Status (radio: Open Now, Reopening Soon, Closed)
  - Language (Spanish, English, Both)
- Active filter tags displayed above results with x-dismiss
- "Clear All Filters" link at bottom

### Opportunity Cards
- **Card structure** (rounded-lg shadow-md hover:shadow-lg transition):
  - Top: Organization logo placeholder (h-12 w-12)
  - Title: text-lg font-semibold, 2-line clamp
  - Key badges: Funding status, Competitiveness level, Language
  - Description: text-sm, 3-line clamp
  - Quick facts grid (2x2): Location, Deadline, Duration, Age Range
  - CTA button: "View Details" - full width, subtle styling
- **Deadline treatment**: 
  - Open: Green badge "Apply by [date]"
  - Reopening: Orange badge "Reopens [date]"
  - Closed: Gray badge with countdown to next cycle
- **Spacing**: p-6 internal padding, mb-6 between cards

### Ecuador Special Section
- Full-width colored banner between main content sections
- **Layout**: 2-column on desktop
  - Left: Icon + "Opportunities in Ecuador" heading + description
  - Right: 2-3 featured Ecuador opportunity cards (compact version)
- **Distinguishing element**: Border accent and subtle background tint
- Spanish/English language toggle prominent

### Search Bar
- Large, prominent (h-12 to h-14)
- Icon prefix (magnifying glass)
- Placeholder: "Search programs, organizations, or keywords..."
- Live search suggestions dropdown (max-h-96 overflow-y-auto)
- Recent searches stored locally

### Deadline Update System Indicator
- Small badge system on cards showing status
- Footer note: "Deadlines update automatically - Last updated [timestamp]"
- Visual indicator (rotating icon) when data refreshes

### Footer
- **Multi-column** (grid-cols-2 md:grid-cols-4):
  - About the Project + TechGirls mention
  - Quick Links (Home, Ecuador, Submit Opportunity, Contact)
  - Resources (FAQ, How to Apply, Scholarship Tips)
  - Social proof + Newsletter signup
- Copyright and accessibility statement
- Language selector if not in header

## Accessibility Features
- High contrast text throughout (WCAG AA minimum)
- Focus indicators on all interactive elements (ring-2 ring-offset-2)
- Skip-to-content link for keyboard navigation
- Aria labels on all filter controls and cards
- Screen reader announcements for filter updates
- Mobile: Minimum touch target 44x44px

## Animations (Minimal)
- Card hover: subtle lift (translateY(-2px)) with shadow increase
- Filter panel: smooth slide-in on mobile (transition-transform duration-300)
- Search dropdown: fade-in (transition-opacity)
- **No** scroll-triggered animations to maintain performance

## Images

### Hero Background
- **Description**: Diverse group of young students collaborating on laptops in bright, modern space - conveys opportunity and community
- **Treatment**: Subtle overlay (bg-gradient-to-r from-blue-900/60 to-blue-700/40) to ensure text readability
- **Placement**: Full-width background image (bg-cover bg-center)

### Card Placeholders
- Organization logos (actual logos when available, generic icons otherwise)
- 64x64px square with rounded corners
- Fallback: First letter of organization name on solid background

### Ecuador Section
- **Description**: Iconic Ecuador landmark (Mitad del Mundo or Quito cityscape) as background or accent image
- **Placement**: Right side of 2-column layout or subtle background
- **Size**: Medium (w-1/2 on desktop, hidden on mobile for performance)

### Empty States
- Illustration when no results found: Friendly graphic of telescope/binoculars searching
- Text: "No opportunities match your filters. Try adjusting your criteria!"

## Responsive Breakpoints
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Filter sidebar → bottom drawer on mobile
- 3-column cards → 2-column → 1-column as screen narrows
- Hero text scales: text-3xl → text-5xl → text-6xl across breakpoints