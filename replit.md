# Debt Relief Services Web Application

## Overview

This is a full-stack web application for a debt relief services company built with React, Express, and PostgreSQL. The application allows potential clients to book consultations, submit contact forms, and provides an informational website about debt relief services. It uses modern web technologies including TypeScript, Tailwind CSS, and shadcn/ui components for a professional user experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with shadcn/ui styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Validation**: Zod schemas for request validation
- **Session Management**: Express sessions with PostgreSQL store
- **Development**: Hot reload with tsx and Vite integration

### Database Strategy
- **Primary Database**: PostgreSQL (configured for production)
- **Development**: In-memory storage fallback for development
- **ORM**: Drizzle ORM with type-safe queries
- **Migrations**: Drizzle Kit for schema migrations

## Key Components

### Database Schema
- **Users Table**: Authentication and user management
- **Consultations Table**: Client consultation bookings with personal details and scheduling
- **Contacts Table**: General contact form submissions

### API Endpoints
- `POST /api/consultations` - Book a new consultation
- `GET /api/consultations` - Retrieve all consultations (admin)
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve contact submissions (admin)

### Frontend Pages
- **Home Page**: Main landing page with services, testimonials, and contact forms
- **FAQ Page**: Comprehensive frequently asked questions with accordion-style answers
- **Consultation Modal**: Interactive form for booking consultations
- **Contact Form**: General inquiry form

### UI Features
- Responsive design with mobile-first approach
- Accessible form components with proper validation
- Toast notifications for user feedback
- Professional color scheme with green primary colors
- Interactive accordions, modals, and form elements
- Reusable contact button components for consistent CTA styling

## Data Flow

1. **Client Interaction**: Users visit the landing page and interact with consultation booking or contact forms
2. **Form Validation**: Client-side validation using React Hook Form and Zod schemas
3. **API Communication**: Form submissions sent to Express API endpoints
4. **Data Persistence**: Validated data stored in PostgreSQL via Drizzle ORM
5. **User Feedback**: Success/error notifications displayed via toast system
6. **Query Invalidation**: React Query automatically refreshes related data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **connect-pg-simple**: PostgreSQL session store for Express
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: Type-safe database ORM
- **react-hook-form**: Form state management
- **zod**: Runtime type validation

### UI Dependencies
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **class-variance-authority**: Utility for component variants

## Deployment Strategy

### Production Environment
- **Platform**: Replit with autoscale deployment
- **Build Process**: Vite builds client assets, esbuild bundles server
- **Database**: PostgreSQL 16 module configured
- **Port Configuration**: Internal port 5000, external port 80
- **Environment**: Production mode with optimized builds

### Development Environment
- **Hot Reload**: Both client and server with automatic rebuilds
- **Database**: In-memory storage for development testing
- **Debugging**: Source maps and development error overlays
- **File Watching**: Automatic restarts on file changes

## Changelog

```
Changelog:
- June 17, 2025. Initial setup
- June 26, 2025. Added FAQ page with accordion-style questions, updated navigation routing
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```