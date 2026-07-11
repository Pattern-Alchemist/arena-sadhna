import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden px-4 bg-[var(--color-background)]">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-cyan)] rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[var(--color-magenta)] rounded-full mix-blend-screen opacity-10 blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-[var(--color-lime)] rounded-full mix-blend-screen opacity-5 blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Glitch effect text */}
        <div className="mb-8 relative h-40 flex items-center justify-center">
          <div className="text-9xl font-display font-black tracking-tighter relative">
            <span className="text-[var(--color-cyan)] opacity-80">4</span>
            <span className="text-[var(--color-magenta)] text-opacity-60">0</span>
            <span className="text-[var(--color-lime)] opacity-80">4</span>
            
            {/* Glitch layers */}
            <div className="absolute inset-0 text-9xl font-display font-black tracking-tighter animate-[cyber-glitch_2s_infinite]">
              <span className="text-[var(--color-cyan)] opacity-50">404</span>
            </div>
          </div>
        </div>

        {/* Status text */}
        <p className="text-sm font-mono text-[var(--color-cyan)] uppercase tracking-widest mb-4">
          // ERROR_SIGNAL_LOST
        </p>

        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-[var(--color-white)]">
          ARCHIVE FRAGMENT
          <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-cyan)] via-[var(--color-magenta)] to-[var(--color-pink)]">
            NOT FOUND
          </span>
        </h1>

        <p className="text-lg font-mono text-[var(--color-light-gray)] mb-12 max-w-xl mx-auto">
          The pattern you're seeking has dispersed into the quantum void. 
          <br/>
          <span className="text-[var(--color-lime)]">// Let's navigate back to known coordinates...</span>
        </p>

        {/* Navigation options */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="group relative px-8 py-4 text-lg font-mono font-bold text-[var(--color-background)] bg-[var(--color-cyan)] border-2 border-[var(--color-cyan)] rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.8)]">
            <span className="relative z-10">RETURN HOME</span>
            <div className="absolute inset-0 bg-[var(--color-magenta)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </Link>

          <Link href="/archive" className="px-8 py-4 text-lg font-mono font-bold text-[var(--color-magenta)] border-2 border-[var(--color-magenta)] rounded-none bg-transparent hover:bg-[rgba(255,1,110,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,1,110,0.5)]">
            ENTER ARCHIVE
          </Link>

          <Link href="/wisdom" className="px-8 py-4 text-lg font-mono font-bold text-[var(--color-lime)] border-2 border-[var(--color-lime)] rounded-none bg-transparent hover:bg-[rgba(57,255,20,0.1)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(57,255,20,0.5)]">
            EXPLORE WISDOM
          </Link>
        </div>

        {/* Helpful suggestions */}
        <div className="bg-[rgba(0,240,255,0.05)] border border-[var(--color-cyan)]/30 rounded-none p-6 font-mono text-sm text-[var(--color-light-gray)]">
          <p className="text-[var(--color-cyan)] mb-3 uppercase">Suggested coordinates:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div><Link href="/manuscripts" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/manuscripts</Link></div>
            <div><Link href="/ritual" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/ritual</Link></div>
            <div><Link href="/journal" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/journal</Link></div>
            <div><Link href="/calendar" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/calendar</Link></div>
            <div><Link href="/yantras" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/yantras</Link></div>
            <div><Link href="/wisdom" className="text-[var(--color-lime)] hover:text-[var(--color-cyan)]">/wisdom</Link></div>
          </div>
        </div>
      </div>
    </div>
  );
}
