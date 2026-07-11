# Advanced UI/UX Stack - Integration Guide

This guide shows how to use each part of the advanced modern stack in your application.

## Quick Start

### 1. Using Components

All UI components are built with Radix UI primitives and styled with Tailwind CSS.

```tsx
import { Button } from '@/components/ui'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

export function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello World</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={() => console.log('clicked')}>
          Click me
        </Button>
      </CardContent>
    </Card>
  )
}
```

### 2. Creating Forms with Validation

Define a schema once, get type safety everywhere:

```tsx
// lib/form-schema.ts
export const contactSchema = z.object({
  name: z.string().min(1, 'Name required'),
  email: emailSchema,
  message: z.string().min(10, 'Message too short'),
})

// components/ContactForm.tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from '@/lib/form-schema'

export function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(contactSchema),
  })

  return (
    <form onSubmit={handleSubmit((data) => {
      // data is fully typed based on schema
      console.log(data) // { name: string, email: string, message: string }
    })}>
      <input {...register('name')} />
      {errors.name && <p>{errors.name.message}</p>}
      {/* ... */}
    </form>
  )
}
```

### 3. Managing Client State

Use Zustand for theme, modals, notifications, sidebar state:

```tsx
import { useUIStore } from '@/store/ui-store'

export function MyComponent() {
  const { theme, setTheme, notifications, addNotification } = useUIStore()

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Toggle Dark</button>
      <button onClick={() => addNotification('success', 'Done!')}>
        Add Notification
      </button>
    </div>
  )
}
```

### 4. Adding Animations

Use Motion library for smooth, performant animations:

```tsx
import { motion } from 'motion/react'

export function AnimatedCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card>
        <CardContent>Smooth animation</CardContent>
      </Card>
    </motion.div>
  )
}
```

### 5. Creating Custom Components

All components use CVA for type-safe variants:

```tsx
// components/MyComponent.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/cn'

const myComponentVariants = cva(
  'px-4 py-2 rounded-md transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-charcoal text-cream hover:bg-slate-800',
        secondary: 'bg-beige text-charcoal hover:bg-slate-200',
      },
      size: {
        sm: 'text-sm',
        md: 'text-base',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface MyComponentProps extends VariantProps<typeof myComponentVariants> {}

export function MyComponent({ variant, size, ...props }: MyComponentProps) {
  return (
    <div className={cn(myComponentVariants({ variant, size }))} {...props}>
      Content
    </div>
  )
}
```

## Component Library Reference

### Button

```tsx
import { Button } from '@/components/ui'

<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="accent">Accent</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button fullWidth>Full Width</Button>
```

### Card

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui'

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### Dialog

```tsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui'

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Description</DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
```

### Input & Label

```tsx
import { Input, Label } from '@/components/ui'

<div>
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" />
</div>
```

## Custom Hooks

### useMediaQuery

Detect responsive breakpoints:

```tsx
import { useMediaQuery } from '@/hooks'

export function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  
  return (
    <div>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  )
}
```

### useLocalStorage

Persist state to localStorage:

```tsx
import { useLocalStorage } from '@/hooks'

export function MyComponent() {
  const [preference, setPreference] = useLocalStorage('my-preference', 'default')
  
  return (
    <button onClick={() => setPreference('new-value')}>
      Current: {preference}
    </button>
  )
}
```

### useAsync

Handle async operations:

```tsx
import { useAsync } from '@/hooks'

export function DataComponent() {
  const { status, data, error, execute } = useAsync(
    () => fetch('/api/data').then(r => r.json()),
    true // execute immediately
  )
  
  if (status === 'pending') return <p>Loading...</p>
  if (status === 'error') return <p>Error: {error?.message}</p>
  if (status === 'success') return <p>Data: {data}</p>
}
```

## Color Palette

All colors are defined as CSS variables and accessible via Tailwind classes:

```
Cream: #F9F6F1           bg-cream, text-cream
Charcoal: #2C2C2C        bg-charcoal, text-charcoal
Terracotta: #C67C4E      bg-terracotta, text-terracotta
Navy: #1B2B3D            bg-navy, text-navy
Taupe: #8B8680           bg-taupe, text-taupe
Beige: #E8E4DC           bg-beige, text-beige
Gold: #D4AF37            bg-gold, text-gold
Slate: #495057           bg-slate, text-slate
```

## Typography

All fonts are configured via CSS variables:

- **Display Font**: Playfair Display (headers, hero text)
- **Body Font**: Lora (paragraphs, descriptions)
- **Mono Font**: SF Mono (code, technical text)

```tsx
<h1 className="font-display text-3xl">Heading</h1>
<p className="font-body">Body text</p>
<code className="font-mono">const x = 1;</code>
```

## Performance Tips

1. **Component splitting**: Keep components focused and small
2. **Code splitting**: Use `next/dynamic` for heavy components
3. **Image optimization**: Use Next.js Image component
4. **Form optimization**: Use React Hook Form with native inputs (not controlled components)
5. **Animations**: Use Motion library (GPU-accelerated)
6. **State**: Keep server state in TanStack Query, UI state in Zustand

## Accessibility

All components include proper ARIA attributes:

- Buttons: `aria-pressed`, `aria-disabled`
- Form inputs: `aria-invalid`, `aria-label`
- Dialogs: `aria-modal`, focus management
- Cards: Semantic `<section>` or `<article>`

## Testing

Example with Vitest + React Testing Library:

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui'

describe('Button', () => {
  it('renders and responds to clicks', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    
    screen.getByRole('button', { name: /click/i }).click()
    expect(handleClick).toHaveBeenCalled()
  })
})
```

## Deployment

All components work great with Vercel, Netlify, or any host:

```bash
npm run build    # Next.js handles tree-shaking and minification
npm start        # Prod server
```

Bundle size is optimized automatically by Next.js and Tailwind.

## Resources

- [Component Examples](/src/components/examples/) - See working examples
- [STACK.md](/STACK.md) - Deep dive into each technology
- [Next.js Docs](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [React Hook Form](https://react-hook-form.com)
- [Zod](https://zod.dev)
- [Motion](https://motion.dev)
- [Zustand](https://github.com/pmndrs/zustand)
