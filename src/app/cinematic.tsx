'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const CinematicHomepage = () => {
  const { scrollY } = useScroll();

  // Act I parallax
  const act1Y = useTransform(scrollY, [0, 800], [0, 300]);
  const act1Opacity = useTransform(scrollY, [0, 400, 800], [1, 1, 0]);

  // Act II parallax
  const act2Y = useTransform(scrollY, [800, 1600], [300, 0]);
  const act2Opacity = useTransform(scrollY, [800, 1200, 1600], [0, 1, 0]);

  // Act III parallax
  const act3Y = useTransform(scrollY, [1600, 2400], [300, 0]);
  const act3Opacity = useTransform(scrollY, [1600, 2000, 2400], [0, 1, 0]);

  // Act IV parallax
  const act4Y = useTransform(scrollY, [2400, 3200], [300, 0]);
  const act4Opacity = useTransform(scrollY, [2400, 2800, 3200], [0, 1, 0]);

  return (
    <div className="bg-void text-lunar-white">
      {/* ACT I: AWAKENING */}
      <motion.section
        style={{ y: act1Y, opacity: act1Opacity }}
        className="cinematic-section h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1604147706283-d7119b5b822c?w=1920&q=80"
            alt="Eclipse"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <motion.div
          className="cinematic-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h1 className="font-display font-bold tracking-tight-cinematic text-center leading-none">
            YOU ARE NOT LOST.
          </h1>
          <motion.p
            className="mt-8 max-w-2xl text-center text-lg font-light tracking-wide"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: false }}
          >
            You are living a pattern encoded in your deepest psychology. Karmic patterns reveal the hidden loops shaping your relationships, decisions, and destiny.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: false }}
            className="mt-12"
          >
            <Link href="/dashboard" className="btn-gold">
              Begin The Pattern Recognition →
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ACT II: RECOGNITION */}
      <motion.section
        style={{ y: act2Y, opacity: act2Opacity }}
        className="cinematic-section h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&q=80"
            alt="Pattern"
            className="cinematic-bg object-cover ken-burns"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <motion.div
          className="cinematic-content max-w-3xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <p className="text-2xl font-light leading-relaxed mb-8">
              You repeat relationships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <p className="text-2xl font-light leading-relaxed mb-8">
              You repeat decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <p className="text-2xl font-light leading-relaxed mb-8">
              You repeat emotional reactions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <p className="text-2xl font-light leading-relaxed">
              The pattern is not random.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold text-stellar-gold tracking-tight-cinematic">
              It is encoded.
            </h2>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* ACT III: CONFRONTATION */}
      <motion.section
        style={{ y: act3Y, opacity: act3Opacity }}
        className="cinematic-section h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80"
            alt="Shadow"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <motion.div
          className="cinematic-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <motion.h1
            className="font-display font-bold tracking-tight-cinematic text-center leading-none max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false }}
          >
            What you refuse to see controls what you cannot change.
          </motion.h1>

          <motion.blockquote
            className="mt-12 text-center max-w-2xl italic text-lg font-light leading-relaxed border-l-2 border-stellar-gold pl-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: false }}
          >
            <p>
              "Until you make the unconscious conscious, it will direct your life and you will call it fate." — C.G. Jung
            </p>
          </motion.blockquote>
        </motion.div>
      </motion.section>

      {/* ACT IV: TRANSFORMATION */}
      <motion.section
        style={{ y: act4Y, opacity: act4Opacity }}
        className="cinematic-section h-screen"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1920&q=80"
            alt="Warrior"
            className="cinematic-bg object-cover"
          />
          <div className="cinematic-overlay" />
          <div className="cinematic-vignette" />
        </div>

        <motion.div
          className="cinematic-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false }}
        >
          <h1 className="font-display font-bold tracking-tight-cinematic text-center leading-none max-w-4xl">
            The Warrior is not the hero. The Warrior is the one who stops running.
          </h1>

          <motion.div
            className="mt-16 grid grid-cols-1 gap-12 max-w-4xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            viewport={{ once: false }}
          >
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
            ].map((service, idx) => (
              <motion.div
                key={service.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                viewport={{ once: false }}
                className="border-l border-stellar-gold pl-6 py-2"
              >
                <Link href={service.link} className="group">
                  <h3 className="text-2xl font-bold text-stellar-gold group-hover:text-[#E8D737] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-lunar-white font-light leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>

      {/* CLOSING */}
      <section className="bg-deep-gray py-24 text-center">
        <motion.div
          className="max-w-2xl mx-auto px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
        >
          <p className="text-lg font-light leading-relaxed text-lunar-white mb-8">
            The pattern cannot be broken. It can only be transformed. Step into AstroKalki and become the conscious author of your own destiny.
          </p>
          <Link href="/dashboard" className="btn-gold inline-block">
            Enter the Archive
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default CinematicHomepage;
