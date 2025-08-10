# Glamp Peaks Mestia - 360° Virtual Tour

## Overview

This is a modern web application for Glamp Peaks Mestia, a luxury glamping site in Svaneti, Georgia. The application provides an immersive 360° virtual tour experience showcasing different areas of the glamping facility including dome accommodations, forest areas, dining spaces, and wellness facilities. Built with React and TypeScript, the application features a clean, responsive interface with smooth navigation between different virtual tour locations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for consistent theming
- **State Management**: TanStack Query for server state management and caching
- **Animations**: Framer Motion for smooth page transitions and interactive animations
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Development**: Hot reloading with Vite integration for seamless development experience
- **Session Management**: Express sessions with PostgreSQL session store using connect-pg-simple
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

### Data Storage
- **Database**: PostgreSQL as the primary database
- **ORM**: Drizzle ORM for type-safe database operations and migrations
- **Connection**: Neon Database serverless PostgreSQL for cloud hosting
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Session Store**: PostgreSQL-backed session storage for user sessions

### Authentication & Authorization
- **Session-based Authentication**: Using Express sessions stored in PostgreSQL
- **User Management**: Basic user schema with username/password authentication
- **Security**: Password hashing and secure session management (implementation pending)

### Development & Build
- **Monorepo Structure**: Shared TypeScript interfaces between client and server
- **Build Process**: Vite for frontend bundling, esbuild for server bundling
- **Development**: Concurrent development server with hot reloading
- **Type Safety**: Strict TypeScript configuration across all packages

### Virtual Tour Integration
- **360° Media**: Integration ready for panoramic image/video content
- **Navigation System**: Room-based navigation with categorized tour locations
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Performance**: Optimized asset loading and caching strategies

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack React Query for server state and caching

### UI & Styling
- **Component Library**: Shadcn/ui built on Radix UI primitives
- **Icons**: Lucide React icons, React Icons for social media icons
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Animations**: Framer Motion for smooth transitions

### Backend Infrastructure
- **Server**: Express.js with TypeScript support
- **Database**: PostgreSQL via Neon Database serverless
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Session Management**: connect-pg-simple for PostgreSQL session store

### Development Tools
- **Build Tools**: Vite with React plugin, esbuild for server bundling
- **Development**: tsx for TypeScript execution, Replit development plugins
- **Utilities**: date-fns for date manipulation, clsx and class-variance-authority for styling utilities

### Third-party Integrations
- **Database Hosting**: Neon Database for serverless PostgreSQL
- **Session Storage**: PostgreSQL-backed session persistence
- **Development Environment**: Replit-specific development tools and error handling