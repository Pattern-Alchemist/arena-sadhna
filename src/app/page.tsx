'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Archive', href: '/archive' },
    { label: 'Manuscripts', href: '/manuscripts' },
    { label: 'Ritual', href: '/ritual' },
    { label: 'Wisdom', href: '/wisdom' },
    { label: 'Calendar', href: '/calendar' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e27] via-[#1a0f3a] to-[#0a1f3a]">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/90 backdrop-blur border-b border-[#00f0ff]/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="text-2xl font-display font-bold">
              <span className="text-[#00f0ff]">ASTRO</span><span className="text-[#ff006e]">KALKI</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#e0f2ff] hover:text-[#00f0ff] transition-colors text-sm font-mono uppercase tracking-wider"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <div className="w-full h-0.5 bg-[#00f0ff]"></div>
            <div className="w-full h-0.5 bg-[#00f0ff]"></div>
            <div className="w-full h-0.5 bg-[#00f0ff]"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0e27] border-t border-[#00f0ff]/30 p-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#e0f2ff] hover:text-[#00f0ff] transition-colors text-sm font-mono uppercase tracking-wider"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00f0ff] rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#ff006e] rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl">
          <p className="text-sm font-mono text-[#00f0ff] uppercase tracking-widest mb-6">Welcome to the future</p>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter leading-none">
            <span className="text-[#00f0ff]">DECODE</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#ff006e] to-[#39ff14]">YOUR BECOMING</span>
          </h1>

          <p className="text-xl md:text-2xl font-mono text-[#8899aa] mb-12 leading-relaxed max-w-3xl mx-auto">
            Ancient wisdom. Modern interface.
            <br />
            <span className="text-[#39ff14]">// The patterns you need are already within</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/archive"
              className="px-8 py-4 text-lg font-mono font-bold text-[#0a0e27] bg-[#00f0ff] border-2 border-[#00f0ff] rounded-none hover:shadow-[0_0_20px_rgba(0,240,255,0.8)] transition-all duration-300"
            >
              ENTER ARCHIVE
            </Link>

            <Link
              href="/manuscripts"
              className="px-8 py-4 text-lg font-mono font-bold text-[#00f0ff] border-2 border-[#00f0ff] rounded-none bg-transparent hover:bg-[rgba(0,240,255,0.1)] transition-all duration-300"
            >
              EXPLORE FREE
            </Link>
          </div>

          <div className="mt-20 text-center">
            <p className="text-[#8899aa] font-mono text-sm">SCROLL_DOWN_TO_CONTINUE</p>
            <div className="mt-4 text-2xl animate-bounce">↓</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 bg-[rgba(0,240,255,0.02)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-16 text-center">
            <span className="text-[#ff006e]">EXPLORE</span> <span className="text-[#00f0ff]">TOOLS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: '/ritual', label: 'Ritual Mode', icon: '🕉️' },
              { href: '/journal', label: 'Journal', icon: '📝' },
              { href: '/calendar', label: 'Calendar', icon: '📅' },
              { href: '/yantras', label: 'Yantras', icon: '✨' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="p-6 border border-[#00f0ff]/30 bg-[#0a0e27] hover:bg-[#1a1f3a] hover:border-[#00f0ff] rounded-none transition-all duration-300 text-center group"
              >
                <div className="text-4xl mb-3 group-hover:text-[#ff006e] transition-colors">{item.icon}</div>
                <p className="text-[#00f0ff] font-mono uppercase text-sm font-bold group-hover:text-[#39ff14] transition-colors">{item.label}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-[#ff006e] p-12 bg-[rgba(255,1,110,0.05)] rounded-none">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[#ff006e]">
              READY TO DECODE?
            </h2>
            <p className="text-[#8899aa] font-mono text-lg mb-8">
              Your personal cipher awaits. Unlock patterns that have shaped your life.
            </p>
            <Link href="/archive" className="inline-block px-12 py-4 text-lg font-mono font-bold text-[#0a0e27] bg-[#ff006e] border-2 border-[#ff006e] rounded-none hover:shadow-[0_0_30px_rgba(255,1,110,0.8)] transition-all duration-300">
              BEGIN TRANSMISSION
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#00f0ff]/20 py-12 px-4 bg-[#0a0e27]/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-xl font-bold mb-2">
                <span className="text-[#00f0ff]">AK</span>
              </div>
              <p className="text-[#8899aa] font-mono text-sm">Decode your becoming.</p>
            </div>
            {[
              { title: 'EXPLORE', links: [{ label: 'Archive', href: '/archive' }, { label: 'Manuscripts', href: '/manuscripts' }] },
              { title: 'TOOLS', links: [{ label: 'Ritual', href: '/ritual' }, { label: 'Journal', href: '/journal' }] },
              { title: 'RESOURCES', links: [{ label: 'Wisdom', href: '/wisdom' }, { label: 'Calendar', href: '/calendar' }] },
            ].map((col, i) => (
              <div key={i}>
                <p className="text-[#00f0ff] font-mono text-xs uppercase tracking-widest mb-4">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-[#8899aa] hover:text-[#39ff14] transition-colors font-mono text-sm">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[#00f0ff]/20 pt-8 text-center">
            <p className="text-[#8899aa] font-mono text-xs">© 2026 ASTROKALKI. Future-proof.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
