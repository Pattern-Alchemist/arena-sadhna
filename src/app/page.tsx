import React from 'react';
import Link from 'next/link';

export default function PremiumHomepage() {
  return (
    <div className="bg-cream text-charcoal">
      {/* Hero Section */}
      <section className="section-hero min-h-[90vh] bg-gradient-to-b from-cream via-beige to-cream px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {/* Subtle line decoration */}
          <div className="mb-12 flex justify-center pt-20">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-terracotta to-transparent"></div>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up text-center font-display text-5xl md:text-7xl font-semibold tracking-tight-premium text-charcoal mb-6">
            The Archive
            <br />
            <span className="text-terracotta">of Becoming</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up mx-auto max-w-2xl text-center text-lg md:text-xl text-slate mt-8 mb-12" style={{ animationDelay: '0.2s' }}>
            Discover the patterns encoded in your lineage. Understand the wisdom your soul has been trying to teach you across lifetimes.
          </p>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-12" style={{ animationDelay: '0.4s' }}>
            <Link href="/unlock" className="btn-primary">
              Unlock Your Archive
            </Link>
            <Link href="/explore" className="btn-secondary">
              Explore Freely
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fade-in mt-20 flex justify-center" style={{ animationDelay: '0.6s' }}>
            <div className="text-center text-sm text-taupe tracking-luxe">
              <p>SCROLL TO DISCOVER</p>
              <div className="mt-4 text-2xl opacity-50">↓</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - Premium Visual Story */}
      <section className="space-section px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 space-y-3 text-center">
            <p className="text-sm tracking-luxe text-terracotta uppercase">How It Works</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Your Personal Cipher</h2>
          </div>

          {/* Three column gallery layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square bg-gradient-to-br from-terracotta/20 to-navy/5 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-display text-terracotta mb-2">I</div>
                    <p className="text-sm text-slate">Select</p>
                  </div>
                </div>
              </div>
              <p className="text-slate leading-relaxed">Choose from patterns, practices, and archetypes that resonate with your journey.</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square bg-gradient-to-br from-navy/5 to-terracotta/20 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-display text-navy mb-2">II</div>
                    <p className="text-sm text-slate">Understand</p>
                  </div>
                </div>
              </div>
              <p className="text-slate leading-relaxed">Receive personalized wisdom encoded from ancient traditions and modern psychology.</p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square bg-gradient-to-br from-beige to-taupe/10 rounded-sm overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-display text-charcoal mb-2">III</div>
                    <p className="text-sm text-slate">Transform</p>
                  </div>
                </div>
              </div>
              <p className="text-slate leading-relaxed">Apply these insights to navigate your becoming with clarity and purpose.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="divider mx-auto max-w-7xl"></div>
      </div>

      {/* Split Section - Philosophy */}
      <section className="space-section px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="section-split min-h-96">
            {/* Left: Text */}
            <div className="flex flex-col justify-center py-12 md:py-0 md:pr-12 lg:pr-16">
              <p className="text-xs tracking-luxe text-terracotta uppercase mb-6">The Philosophy</p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">What Has Been Trying to Speak Through You</h2>
              <p className="text-slate text-lg leading-relaxed mb-6">
                Every life pattern, every recurring challenge, every moment of transcendence—they are signatures of your soul&apos;s curriculum. The Archive doesn&apos;t promise easy answers. It offers something more valuable: clarity about what you&apos;re meant to become.
              </p>
              <div className="mt-2">
                <Link href="/about" className="inline-flex items-center text-terracotta font-semibold hover:text-navy transition-colors">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full h-full bg-gradient-to-br from-terracotta/10 to-navy/5 rounded-sm flex items-center justify-center min-h-96">
                <div className="text-center">
                  <div className="text-6xl text-taupe/30 mb-4">∞</div>
                  <p className="text-sm text-taupe tracking-luxe uppercase">Infinite Becoming</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="divider mx-auto max-w-7xl"></div>
      </div>

      {/* Features Grid */}
      <section className="space-section px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <p className="text-sm tracking-luxe text-terracotta uppercase mb-4">Features</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal">Everything You Need</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Feature 1 */}
            <div className="border-l-2 border-terracotta pl-6">
              <h3 className="font-display text-2xl text-charcoal mb-3">Personal Vault</h3>
              <p className="text-slate">End-to-end encrypted storage for your most private insights and patterns. Only you hold the key.</p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-2 border-navy pl-6">
              <h3 className="font-display text-2xl text-charcoal mb-3">Wisdom Library</h3>
              <p className="text-slate">Curated teachings from lineages, psychology, and contemporary insight designed for modern souls.</p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-2 border-terracotta pl-6">
              <h3 className="font-display text-2xl text-charcoal mb-3">Tracking Tools</h3>
              <p className="text-slate">Monitor your patterns, rituals, and transformations. Watch yourself evolve with intentionality.</p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-2 border-navy pl-6">
              <h3 className="font-display text-2xl text-charcoal mb-3">Living Practices</h3>
              <p className="text-slate">Daily rituals, meditations, and embodied practices that meet you where you are on your journey.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="divider mx-auto max-w-7xl"></div>
      </div>

      {/* Final CTA */}
      <section className="space-section px-4 sm:px-6 lg:px-8 bg-cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">Begin Your Becoming</h2>
          <p className="text-lg text-slate mb-10">
            The archive is waiting. Not with judgment, but with infinite patience and the wisdom of a thousand lifetimes.
          </p>
          <Link href="/unlock" className="btn-accent">
            Enter the Archive
          </Link>
        </div>
      </section>

      {/* Footer Minimal */}
      <footer className="border-t border-beige px-4 sm:px-6 lg:px-8 py-12 bg-white/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-display text-sm font-semibold text-charcoal mb-4">AstroKalki</p>
              <p className="text-xs text-taupe">The archive of your becoming.</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-charcoal mb-3 uppercase tracking-luxe">Explore</p>
              <ul className="space-y-2 text-xs text-slate">
                <li><Link href="#" className="hover:text-terracotta">Archive</Link></li>
                <li><Link href="#" className="hover:text-terracotta">Practices</Link></li>
                <li><Link href="#" className="hover:text-terracotta">Teachings</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-charcoal mb-3 uppercase tracking-luxe">Learn</p>
              <ul className="space-y-2 text-xs text-slate">
                <li><Link href="#" className="hover:text-terracotta">About</Link></li>
                <li><Link href="#" className="hover:text-terracotta">Philosophy</Link></li>
                <li><Link href="#" className="hover:text-terracotta">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold text-charcoal mb-3 uppercase tracking-luxe">Connect</p>
              <ul className="space-y-2 text-xs text-slate">
                <li><Link href="#" className="hover:text-terracotta">Privacy</Link></li>
                <li><Link href="#" className="hover:text-terracotta">Terms</Link></li>
                <li><Link href="#" className="hover:text-terracotta">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="divider"></div>
          <div className="mt-8 text-center text-xs text-taupe">
            <p>© 2026 AstroKalki. All patterns preserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
