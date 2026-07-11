'use client'

import { motion } from 'motion/react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'

/**
 * Example animation showcase using Motion library
 * Demonstrates:
 * - Smooth entry animations
 * - Hover interactions
 * - Layout transitions
 * - Staggered animations
 */
export function AnimationShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      className="space-y-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated Cards Grid */}
      <div>
        <h2 className="mb-4 text-2xl font-display font-semibold text-charcoal">
          Animated Cards
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4" variants={containerVariants}>
          {[1, 2, 3].map((i) => (
            <motion.div key={i} variants={itemVariants}>
              <motion.div
                whileHover={{
                  y: -8,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                transition={{ duration: 0.2 }}
              >
                <Card className="cursor-pointer">
                  <CardHeader>
                    <CardTitle>Card {i}</CardTitle>
                    <CardDescription>Premium animation example</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate">
                      Hover to see interactive animations powered by Motion library
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Animated Button */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button size="lg" variant="accent">
            Click me for smooth interaction
          </Button>
        </motion.div>
      </motion.div>

      {/* Loading Animation */}
      <motion.div variants={itemVariants}>
        <h3 className="mb-2 text-lg font-display font-semibold text-charcoal">
          Loading State
        </h3>
        <motion.div
          className="flex gap-2"
          variants={containerVariants}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-terracotta rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
