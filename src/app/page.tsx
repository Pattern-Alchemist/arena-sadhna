import React from 'react';
import Link from 'next/link';

export default function CinematicHomepage() {
  return (
    <div className="bg-void text-lunar-white">
      {/* ACT I: AWAKENING */}
      <section className="cinematic-section h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&q=80"
            alt="Eclipse"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <div className="cinematic-content">
          <h1 className="text-monumental text-center leading-none">
            YOU ARE NOT LOST.
          </h1>
          <p className="mt-8 max-w-2xl text-center text-xl font-light tracking-wide">
            You are living a pattern encoded in your deepest psychology. Karmic patterns reveal the hidden loops shaping your relationships, decisions, and destiny.
          </p>
          <div className="mt-12">
            <Link href="/dashboard" className="btn-gold">
              Begin The Pattern Recognition →
            </Link>
          </div>
        </div>
      </section>

      {/* ACT II: RECOGNITION */}
      <section className="cinematic-section h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"
            alt="Pattern"
            className="cinematic-bg object-cover ken-burns"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <div className="cinematic-content max-w-3xl">
          <div className="text-center">
            <p className="text-3xl font-light leading-relaxed mb-8">
              You repeat relationships.
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-light leading-relaxed mb-8">
              You repeat decisions.
            </p>
          </div>

          <div className="text-center">
            <p className="text-3xl font-light leading-relaxed mb-8">
              You repeat emotional reactions.
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-3xl font-light leading-relaxed">
              The pattern is not random.
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-stellar-gold text-6xl font-bold tracking-tight-cinematic">
              It is encoded.
            </h2>
          </div>
        </div>
      </section>

      {/* ACT III: CONFRONTATION */}
      <section className="cinematic-section h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Shadow"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <div className="cinematic-content">
          <h1 className="text-monumental text-center leading-none max-w-4xl">
            What you refuse to see controls what you cannot change.
          </h1>

          <blockquote className="mt-12 text-center max-w-2xl italic text-xl font-light leading-relaxed border-l-2 border-stellar-gold pl-6">
            <p>
              "Until you make the unconscious conscious, it will direct your life and you will call it fate." — C.G. Jung
            </p>
          </blockquote>
        </div>
      </section>

      {/* ACT IV: TRANSFORMATION */}
      <section className="cinematic-section h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&q=80"
            alt="Warrior"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <div className="cinematic-content">
          <h1 className="text-monumental text-center leading-none max-w-4xl">
            The Warrior is not the hero. The Warrior is the one who stops running.
          </h1>

          <div className="mt-16 grid grid-cols-1 gap-12 max-w-4xl">
            {[
              {
                title: 'Pattern Audit',
                description: 'Identify the precise loops that govern your behavior.',
                link: '/pattern-audit',
              },
              {
                title: 'Karmic Blueprint',
                description: 'Decode your psychological signature and karmic trajectory.',
                link: '/karmic-blueprint',
              },
              {
                title: 'Dharma Navigation',
                description: 'Align your purpose with your deepest nature.',
                link: '/dharma-navigation',
              },
              {
                title: "Warrior's Journey",
                description: 'The intensive six-chapter transformation protocol.',
                link: '/warriors-journey',
              },
            ].map((service) => (
              <div
                key={service.link}
                className="border-l border-stellar-gold pl-6 py-2 group"
              >
                <Link href={service.link} className="block">
                  <h3 className="text-3xl font-bold text-stellar-gold group-hover:text-[#E8D737] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lunar-white font-light leading-relaxed text-lg">
                    {service.description}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="bg-deep-gray py-24 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <p className="text-xl font-light leading-relaxed text-lunar-white mb-8">
            The pattern cannot be broken. It can only be transformed. Step into AstroKalki and become the conscious author of your own destiny.
          </p>
          <Link href="/dashboard" className="btn-gold inline-block">
            Enter the Archive
          </Link>
        </div>
      </section>
    </div>
  );
}
