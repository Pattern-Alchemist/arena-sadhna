import React from 'react';
import Link from 'next/link';

export default function NeonHomepage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-20">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[var(--color-cyan)] rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[var(--color-magenta)] rounded-full mix-blend-screen opacity-20 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[var(--color-purple)] rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="text-sm tracking-widest text-[var(--color-cyan)] uppercase font-mono">
              // Welcome to the future
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-display font-bold mb-6 tracking-tighter">
            <span className="text-[var(--color-cyan)]">ASTRO</span>
            <span className="text-[var(--color-white)]">KALKI</span>
            <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-magenta)] to-[var(--color-pink)]" style={{textShadow: '0 0 30px rgba(0, 240, 255, 0.8), 0 0 60px rgba(255, 1, 110, 0.6)'}}>
              ARCHIVE
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-mono text-[var(--color-light-gray)] mb-12 leading-relaxed max-w-3xl mx-auto">
            Decode the patterns. Unlock your potential. <br/>
            <span className="text-[var(--color-lime)]">// The wisdom you need is already within</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/archive" className="group relative px-8 py-4 text-lg font-mono font-bold text-[var(--color-background)] bg-[var(--color-cyan)] border-2 border-[var(--color-cyan)] rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]">
              <span className="relative z-10">ENTER ARCHIVE</span>
              <div className="absolute inset-0 bg-[var(--color-magenta)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>

            <Link href="/manuscripts" className="px-8 py-4 text-lg font-mono font-bold text-[var(--color-cyan)] border-2 border-[var(--color-cyan)] rounded-none bg-transparent hover:bg-[rgba(0,240,255,0.1)] transition-all duration-300">
              EXPLORE FREE
            </Link>
          </div>

          <div className="mt-20 text-center">
            <p className="text-[var(--color-light-gray)] font-mono text-sm">SCROLL_DOWN_TO_CONTINUE</p>
            <div className="mt-4 text-2xl animate-bounce">↓</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
              <span className="text-[var(--color-magenta)]">NEXT GEN</span> <span className="text-[var(--color-cyan)]">WISDOM</span>
            </h2>
            <p className="text-[var(--color-light-gray)] font-mono text-lg">Ancient knowledge. Modern interface. Zero compromise.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '◈', title: 'QUANTUM VAULT', desc: 'End-to-end encrypted. Only you control access.' },
              { icon: '✦', title: 'NEURAL SYNC', desc: 'AI-powered insights aligned with your journey.' },
              { icon: '⚡', title: 'REAL TIME FLOW', desc: 'Track patterns. Watch transformations unfold.' }
            ].map((feature, i) => (
              <div key={i} className="group p-6 border-2 border-[var(--color-cyan)] bg-[rgba(0,240,255,0.05)] hover:bg-[rgba(0,240,255,0.1)] rounded-none transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.5)]">
                <div className="text-3xl mb-4 text-[var(--color-magenta)] group-hover:text-[var(--color-cyan)] transition-colors">{feature.icon}</div>
                <h3 className="text-xl font-bold font-display text-[var(--color-cyan)] mb-2 uppercase">{feature.title}</h3>
                <p className="text-[var(--color-light-gray)] font-mono text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-[var(--color-magenta)] p-12 bg-[rgba(255,1,110,0.05)] rounded-none">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-[var(--color-magenta)]">
              READY TO DECODE?
            </h2>
            <p className="text-[var(--color-light-gray)] font-mono text-lg mb-8">
              Your personal cipher awaits. Unlock patterns that have shaped your life.
            </p>
            <Link href="/archive" className="inline-block px-12 py-4 text-lg font-mono font-bold text-[var(--color-background)] bg-[var(--color-magenta)] border-2 border-[var(--color-magenta)] rounded-none hover:shadow-[0_0_30px_rgba(255,1,110,0.8)] transition-all duration-300">
              BEGIN TRANSMISSION
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t-2 border-[var(--color-cyan)]/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold mb-2">
                <span className="text-[var(--color-cyan)]">A</span><span className="text-[var(--color-magenta)]">K</span>
              </div>
              <p className="text-[var(--color-light-gray)] font-mono text-sm">Decode your becoming.</p>
            </div>
            {[
              { title: 'EXPLORE', links: [{ label: 'Archive', href: '/archive' }, { label: 'Practices', href: '/ritual' }, { label: 'Teachings', href: '/wisdom' }] },
              { title: 'LEARN', links: [{ label: 'Manuscripts', href: '/manuscripts' }, { label: 'Courses', href: '/knowledge' }, { label: 'Glossary', href: '/glossary' }] },
              { title: 'TOOLS', links: [{ label: 'Journal', href: '/journal' }, { label: 'Calendar', href: '/calendar' }, { label: 'Yantras', href: '/yantras' }] }
            ].map((col, i) => (
              <div key={i}>
                <p className="text-[var(--color-cyan)] font-mono text-xs uppercase tracking-widest mb-4">{col.title}</p>
                <ul className="space-y-2">
                  {col.links.map((link, j) => (
                    <li key={j}><Link href={link.href} className="text-[var(--color-light-gray)] hover:text-[var(--color-lime)] transition-colors font-mono text-sm">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-[var(--color-cyan)]/30 pt-8 text-center">
            <p className="text-[var(--color-light-gray)] font-mono text-xs">
              © 2026 ASTROKALKI. Patterns preserved. Future-proof.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
