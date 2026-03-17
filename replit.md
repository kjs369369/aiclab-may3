# 김진수 Kimjinsoo Portfolio Website

## Overview

This is a modern, responsive portfolio website for 김진수 (Kimjinsoo), an AI content expert and creative professional. The application is built as a full-stack web application showcasing AI education, content creation, brand consulting, and art creation expertise. The site features a sleek dark theme with gradient accents, smooth animations, and a professional layout designed to highlight AI content capabilities and creative work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with custom shadcn/ui components for accessible, customizable interface elements
- **Styling**: Tailwind CSS with custom CSS variables for consistent theming and responsive design
- **State Management**: TanStack Query (React Query) for server state management and data fetching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server**: Express.js with TypeScript for the REST API backend
- **Development Setup**: Custom Vite integration for seamless full-stack development
- **Storage Interface**: Abstracted storage layer with in-memory implementation for user management
- **Session Management**: Connect-pg-simple for PostgreSQL-based session storage
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Database Design
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL configured for production deployment
- **Schema**: User management schema with UUID primary keys and unique constraints
- **Migrations**: Drizzle Kit for database schema management and versioning

### UI/UX Design Patterns
- **Design System**: Consistent component library with variant-based styling using class-variance-authority
- **Theme**: Dark-mode focused design with navy/blue color palette and gradient accents
- **Typography**: Inter font family for modern, readable text
- **Animations**: CSS-based smooth transitions and hover effects
- **Responsiveness**: Mobile-first responsive design with Tailwind breakpoints

### Development Workflow
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Configured for clean imports (@/, @shared/, @assets/)
- **Hot Reload**: Vite HMR for instant development feedback
- **Build Process**: Separate client and server builds with esbuild for production optimization

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **State Management**: TanStack React Query for server state and caching
- **Routing**: Wouter for lightweight client-side navigation

### UI and Styling
- **Component Library**: Complete Radix UI suite for accessible primitives
- **Styling Framework**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Font Awesome for comprehensive icon library
- **Fonts**: Google Fonts (Inter) for typography

### Backend and Database
- **Database Driver**: Neon Database serverless PostgreSQL driver
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Validation**: Zod for runtime type validation and schema generation
- **Session Storage**: Connect-pg-simple for PostgreSQL session management

### Development Tools
- **Build Tool**: Vite with React plugin and runtime error overlay
- **Replit Integration**: Replit-specific plugins for development environment
- **TypeScript**: Full TypeScript support with strict configuration
- **Package Manager**: npm with lockfile for dependency management

### Additional Libraries
- **Date Handling**: date-fns for date manipulation and formatting
- **Utility Libraries**: clsx and tailwind-merge for conditional styling
- **Carousel**: Embla Carousel for smooth image/content carousels
- **Command Interface**: cmdk for command palette functionality