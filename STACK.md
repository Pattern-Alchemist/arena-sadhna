# AstroKalki - Advanced UI/UX Tech Stack

This project uses the most modern, production-ready technologies available as of 2024-2025. All dependencies are free and open-source.

## 🎨 Frontend Framework

- **Next.js 14** - React framework with App Router (RSC, SSR, built-in optimization)
- **React 18** - UI library with concurrent features and suspense support
- **TypeScript 5** - Static typing for type safety and better DX

## 🎭 UI Component System

### Design System Foundation
- **Tailwind CSS v3** - Utility-first CSS framework with optimized bundle
- **Class Variance Authority (CVA)** - Type-safe component variants with zero runtime cost
- **clsx + tailwind-merge** - Intelligent class composition without conflicts

### Component Library (Pre-built, Production-Ready)
- **Radix UI** - Unstyled, accessible primitives (Dialog, Dropdown, Label, Slot)
  - Full WAI-ARIA compliance
  - Zero styling opinions (we control appearance)
  - Keyboard navigation & screen reader support built-in

### Custom Components Built
- **Button** - Multiple variants (default, secondary, accent, ghost, outline) with CVA
- **Card** - Premium container with hover states and borders
- **Dialog** - Accessible modal with animations and focus management
- **Input** - Form input with focus states and validation styling
- **Label** - Accessible form label with Radix integration

## 🎬 Animation & Motion

- **Motion (Framer Motion v12)** - Production-standard animation library
  - Declarative animations via props
  - Layout animations and exit animations
  - GPU-accelerated transforms
  - 60fps performance optimization

## 📝 Form Management & Validation

- **React Hook Form** - Lightweight form state management (9.6kb)
  - Minimal re-renders via field-level subscription
  - Native HTML form integration
  - Zero dependencies on UI library
  - Perfect for both simple and complex forms

- **Zod** - TypeScript-first schema validation
  - Define single source of truth for data shape
  - Runtime validation with full type inference
  - Used via `zodResolver` with React Hook Form
  - Shareable schemas between client and server

- **@hookform/resolvers** - Zod integration bridge

**Example Usage:**
```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/lib/form-schema'

const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: zodResolver(loginSchema),
})
```

## 🎯 State Management

### Server State (API Data)
- **TanStack Query v5** - Server state management with caching, synchronization, and refetching
  - Automatic background refetching
  - Smart cache invalidation
  - Request deduplication
  - Optimistic updates support

### Client State (UI)
- **Zustand** - Lightweight client state management (2kb)
  - Minimal boilerplate
  - No provider hell
  - Devtools support
  - Perfect for modals, themes, notifications, sidebar state

## 🎨 Icons

- **Lucide React** - 1,500+ consistent, free icons
  - Tree-shakeable (only imported icons bundled)
  - Perfect for accessibility with proper `aria-label` support
  - Used by shadcn/ui and industry standard

## 📊 Data Layer

- **Drizzle ORM** - TypeScript-first SQL query builder
  - Type-safe queries with zero runtime overhead
  - Supports PostgreSQL, MySQL, SQLite
  - Server Actions compatible
  - Full migration support

- **TanStack TRocP** - Type-safe API layer
  - End-to-end TypeScript from database to UI
  - Automatic type inference
  - Built-in error handling

- **Dexie.js** - IndexedDB wrapper for offline support
  - Reactive queries
  - Full-text search
  - Works seamlessly with React

## 🏗️ Architecture Patterns

### Component Structure
```
src/
  components/
    ui/              # Base components (Button, Card, Dialog, etc.)
    features/        # Feature-specific components
    layout/          # Layout components (Nav, Footer, etc.)
  hooks/             # Custom React hooks
  lib/               # Utilities and helpers
    cn.ts            # Class merging utility
    form-schema.ts   # Zod validation schemas
  store/             # Zustand stores
  app/               # Next.js App Router pages
```

### Styling Approach
1. **Semantic HTML** - Proper semantic elements for accessibility
2. **Tailwind Utilities** - Rapid development with design tokens
3. **CVA Variants** - Type-safe component variations
4. **CSS Custom Properties** - Design tokens via CSS variables

### Performance Optimizations
- Code splitting via dynamic imports
- Image optimization with Next.js Image component
- Automatic minification and tree-shaking
- Zero JavaScript where possible (RSC)

## 🔐 Security & Best Practices

- **Zod Validation** - Runtime validation on client and server
- **Type Safety** - TypeScript catches errors at compile time
- **ARIA Compliance** - All components support screen readers
- **Focus Management** - Keyboard navigation built-in via Radix UI
- **XSS Protection** - React's built-in XSS prevention + Zod validation

## 📦 Bundle Size Targets

- Tailwind CSS: ~15kb
- React Hook Form: ~9.6kb
- Zod: ~12kb
- Motion: ~18kb
- Zustand: ~2kb
- **Total Framework: ~56kb** (gzipped)

## 🚀 Development Workflow

### Adding Components
1. Create component in `src/components/ui/[Component].tsx`
2. Use CVA for variants and type safety
3. Implement with Radix UI primitives for accessibility
4. Export from component file

### Creating Forms
1. Define schema in `src/lib/form-schema.ts` using Zod
2. Use `useForm` with `zodResolver` in your component
3. Register inputs with React Hook Form
4. Type inference happens automatically from schema

### Managing State
- **Global UI state**: Use Zustand stores (`src/store/*.ts`)
- **Server state**: Use TanStack Query for API data
- **Component state**: Use `useState` for local component state

## 🎯 Why This Stack?

✅ **Modern** - Latest 2024-2025 best practices
✅ **Type-Safe** - TypeScript + Zod for compile and runtime safety
✅ **Accessible** - Radix UI primitives with WCAG compliance
✅ **Performant** - Optimized bundle, lazy loading, efficient re-renders
✅ **DX** - Excellent developer experience with autocomplete and type hints
✅ **Scalable** - Patterns that work for simple and complex applications
✅ **Free** - All dependencies are MIT or permissive licenses

## 📚 Resources

- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Zustand](https://github.com/pmndrs/zustand)
- [Motion](https://motion.dev)
- [TanStack Query](https://tanstack.com/query)
- [Drizzle ORM](https://orm.drizzle.team)
