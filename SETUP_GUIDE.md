# Advanced UI/UX Stack - Setup & Quick Start

## Installation Complete ✓

All dependencies have been installed. Your project now includes:

### Installed Packages
```json
{
  "react-hook-form": "^7.x",           // Form management
  "@hookform/resolvers": "^3.x",       // Zod integration
  "zustand": "^4.x",                   // State management
  "@radix-ui/*": "^latest",            // Accessible primitives
  "clsx": "^2.x",                      // Class utility
  "tailwind-merge": "^2.x",            // Smart class merging
  "lucide-react": "^latest",           // Icon library
  "class-variance-authority": "^0.7.x" // Type-safe variants
}
```

### Pre-existing Stack
```json
{
  "next": "14.2.3",                    // React framework
  "react": "18.3.1",                   // UI library
  "typescript": "5.4.5",               // Type safety
  "tailwindcss": "3.4.3",              // CSS framework
  "motion": "12.42.2",                 // Animations
  "zod": "3.23.8",                     // Validation
  "@tanstack/react-query": "^5.x",     // Server state
  "drizzle-orm": "^0.45.x",            // Database ORM
  "@trpc/client": "^11.x",             // Type-safe API
  "postgres": "^3.x"                   // Database driver
}
```

## Quick Start

### 1. Using Pre-built Components

```tsx
import { Button, Card, CardHeader, CardTitle, Input, Label } from '@/components/ui'

export function Dashboard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome</CardTitle>
      </CardHeader>
      <Button>Start</Button>
    </Card>
  )
}
```

### 2. Creating Forms with Full Type Safety

```tsx
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <input {...register('email')} />
      {errors.email && <p>{errors.email.message}</p>}
    </form>
  )
}
```

### 3. Managing UI State

```tsx
import { useUIStore } from '@/store/ui-store'

export function Settings() {
  const { theme, setTheme } = useUIStore()
  
  return (
    <button onClick={() => setTheme('dark')}>
      Current: {theme}
    </button>
  )
}
```

### 4. Adding Animations

```tsx
import { motion } from 'motion/react'

export function Card() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      Content
    </motion.div>
  )
}
```

## File Structure

```
src/
  app/
    showcase/           ← Component showcase page
    ...
  components/
    ui/                 ← Pre-built components
      Button.tsx
      Card.tsx
      Dialog.tsx
      Input.tsx
      Label.tsx
      index.ts         ← Export all components
    examples/           ← Working examples
      LoginForm.tsx
      AnimationShowcase.tsx
      StateManagementDemo.tsx
  hooks/                ← Custom React hooks
    useMediaQuery.ts
    useLocalStorage.ts
    useAsync.ts
  lib/
    cn.ts              ← Class merging utility
    form-schema.ts     ← Zod schemas
  store/
    ui-store.ts        ← Zustand store
```

## Development Workflow

### Start Development Server
```bash
npm run dev
```

Then visit:
- Home: http://localhost:3000
- Component Showcase: http://localhost:3000/showcase

### Build for Production
```bash
npm run build
npm start
```

## Key Concepts

### 1. Type-Safe Forms

Define once, use everywhere:

```tsx
// Define schema
export const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(10),
})

// Get TypeScript types automatically
export type ContactForm = z.infer<typeof contactSchema>

// Use in component
export function ContactForm() {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = (data: ContactForm) => {
    // data is fully typed!
  }
}
```

### 2. Component Variants with CVA

```tsx
import { cva, type VariantProps } from 'class-variance-authority'

const variants = cva(
  'px-4 py-2 rounded-md',
  {
    variants: {
      color: {
        red: 'bg-red-500 text-white',
        blue: 'bg-blue-500 text-white',
      },
      size: {
        sm: 'text-sm',
        lg: 'text-lg',
      },
    },
  }
)

export function MyButton({ color, size, ...props }: VariantProps<typeof variants>) {
  return <button className={variants({ color, size })} {...props} />
}
```

### 3. Responsive Layouts with Motion

```tsx
export function ResponsiveLayout() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <motion.div layout className={isMobile ? 'flex flex-col' : 'flex flex-row'}>
      {/* Content */}
    </motion.div>
  )
}
```

## Performance Tips

1. **Use React.memo for expensive components**
   ```tsx
   export const Card = React.memo(({ data }) => (...))
   ```

2. **Lazy load heavy features**
   ```tsx
   const HeavyComponent = dynamic(() => import('./Heavy'))
   ```

3. **Keep forms optimized**
   ```tsx
   // Use native inputs (not controlled components)
   <input {...register('name')} />
   ```

4. **Batch state updates**
   ```tsx
   // Good: Zustand handles this automatically
   store.setState({ a: 1, b: 2 })
   ```

5. **Use Motion for GPU-accelerated animations**
   ```tsx
   // Animates on GPU (not on main thread)
   <motion.div animate={{ x: 100 }} />
   ```

## Testing Components

### Example Test
```tsx
import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui'

describe('Button', () => {
  it('renders', () => {
    render(<Button>Click</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
```

## Accessibility

All components include proper ARIA attributes:

```tsx
<Button aria-label="Close menu" aria-pressed={isOpen}>
  Close
</Button>

<Input aria-invalid={!!error} aria-describedby="error-msg" />

<div role="status" aria-live="polite">
  {notification}
</div>
```

## Common Patterns

### Modal Dialog
```tsx
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui'

<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    {/* Content */}
  </DialogContent>
</Dialog>
```

### Notification System
```tsx
const { addNotification } = useUIStore()

// Add notification
addNotification('success', 'Changes saved!')

// They appear in your notification container
```

### Theme Toggle
```tsx
const { theme, setTheme } = useUIStore()

<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
  Toggle Theme
</button>
```

## Deployment

Your app is ready to deploy to:
- **Vercel** (recommended - made by Next.js creators)
- **Netlify**
- **Docker**
- **Any Node.js hosting**

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## Next Steps

1. ✅ Read `/ADVANCED_STACK_SUMMARY.md`
2. ✅ Check `/INTEGRATION_GUIDE.md` for examples
3. ✅ Visit `/app/showcase` to see all components
4. ✅ Look at `/src/components/examples/` for working demos
5. ✅ Start building your features!

## Support & Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com
- **Radix UI**: https://www.radix-ui.com
- **React Hook Form**: https://react-hook-form.com
- **Zod**: https://zod.dev
- **Motion**: https://motion.dev
- **Zustand**: https://github.com/pmndrs/zustand

## Questions?

All technologies are well-documented with extensive examples. Each file in this project has inline comments explaining the patterns used.

Happy coding! 🚀
