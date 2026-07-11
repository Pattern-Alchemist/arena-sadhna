import { Button } from '@/components/ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

export const metadata = {
  title: 'Advanced Stack Showcase',
  description: 'Showcase of modern UI components and design system',
}

export default function ShowcasePage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-display text-4xl font-bold text-charcoal mb-4">
            Advanced UI/UX Stack Showcase
          </h1>
          <p className="font-body text-lg text-slate max-w-2xl">
            Production-ready components built with Radix UI, Tailwind CSS, CVA, and modern React patterns.
            Everything you see here is fully accessible, type-safe, and ready for production.
          </p>
        </div>

        {/* Buttons Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Buttons</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Variants */}
                <div>
                  <p className="text-sm font-semibold text-charcoal mb-3">Variants</p>
                  <div className="flex flex-wrap gap-3">
                    <Button variant="default">Default</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="accent">Accent</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="outline">Outline</Button>
                  </div>
                </div>

                {/* Sizes */}
                <div>
                  <p className="text-sm font-semibold text-charcoal mb-3">Sizes</p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                </div>

                {/* States */}
                <div>
                  <p className="text-sm font-semibold text-charcoal mb-3">States</p>
                  <div className="flex flex-wrap gap-3">
                    <Button disabled>Disabled</Button>
                    <Button fullWidth>Full Width</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>Card {i}</CardTitle>
                  <CardDescription>Premium card component</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate">
                    Built with Radix UI primitives for maximum accessibility and customization.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Form Elements Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Form Elements</h2>
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6 max-w-md">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    placeholder="Your message here..."
                    className="flex h-24 w-full rounded-md border border-beige bg-cream px-3 py-2 text-base text-charcoal placeholder:text-slate placeholder:opacity-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>

                <Button className="w-full">Submit</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Color Palette Section */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-charcoal mb-6">Color Palette</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Cream', color: 'bg-cream', border: 'border' },
              { name: 'Charcoal', color: 'bg-charcoal', text: 'text-cream' },
              { name: 'Terracotta', color: 'bg-terracotta', text: 'text-cream' },
              { name: 'Navy', color: 'bg-navy', text: 'text-cream' },
              { name: 'Taupe', color: 'bg-taupe', text: 'text-cream' },
              { name: 'Beige', color: 'bg-beige', border: 'border' },
              { name: 'Gold', color: 'bg-gold', text: 'text-charcoal' },
              { name: 'Slate', color: 'bg-slate', text: 'text-cream' },
            ].map((palette) => (
              <div key={palette.name} className="space-y-2">
                <div
                  className={`h-20 rounded-lg ${palette.color} ${palette.text ? palette.text : 'text-charcoal'} ${palette.border || ''} flex items-center justify-center font-semibold`}
                >
                  {palette.name}
                </div>
                <p className="text-xs text-slate text-center">{palette.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack Info */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Tech Stack</CardTitle>
              <CardDescription>Advanced, production-ready technologies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">UI & Components</h3>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>✓ Radix UI - Accessible primitives</li>
                    <li>✓ Tailwind CSS v3 - Utility framework</li>
                    <li>✓ CVA - Type-safe variants</li>
                    <li>✓ Lucide Icons - 1,500+ free icons</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Forms & State</h3>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>✓ React Hook Form - Lightweight forms</li>
                    <li>✓ Zod - Schema validation</li>
                    <li>✓ Zustand - Client state management</li>
                    <li>✓ Motion - Smooth animations</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Data & API</h3>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>✓ TanStack Query - Server state</li>
                    <li>✓ tRPC - End-to-end type safety</li>
                    <li>✓ Drizzle ORM - Type-safe database</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal mb-3">Framework</h3>
                  <ul className="space-y-1 text-sm text-slate">
                    <li>✓ Next.js 14 - React framework</li>
                    <li>✓ App Router - Modern routing</li>
                    <li>✓ TypeScript 5 - Type safety</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentation Links */}
        <div className="mt-16 p-6 bg-beige rounded-lg border border-taupe">
          <h3 className="font-display text-lg font-semibold text-charcoal mb-3">Documentation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/ADVANCED_STACK_SUMMARY.md" className="text-terracotta hover:text-orange-600 underline">
                Advanced Stack Summary
              </a>
            </li>
            <li>
              <a href="/STACK.md" className="text-terracotta hover:text-orange-600 underline">
                Complete Tech Stack Guide
              </a>
            </li>
            <li>
              <a href="/INTEGRATION_GUIDE.md" className="text-terracotta hover:text-orange-600 underline">
                Integration & Usage Guide
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
