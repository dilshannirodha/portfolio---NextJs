'use client'

import { Mail, Linkedin, Github } from 'lucide-react'
import { motion, Variants } from 'framer-motion'
import BackgroundSkeleton from '@/components/BackgroundSkeleton'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ContactPage() {
  return (
    <>
    <BackgroundSkeleton />
    <section className="min-h-screen  text-white p-12 z-1">
      <div className="max-w-4xl mx-auto z-1">
        {/* Header */}
        <div className="flex items-center gap-4 mb-10 z-1">
          <h2 className="text-5xl font-bold z-1">Contact</h2>
          <div className="flex-1 h-1 bg-green-400 rounded z-1"></div>
        </div>

        {/* Contact Info Boxes */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 z-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
          variants={containerVariants}
        >
          {/* Email */}
          <motion.div
            className="z-1 border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition"
            variants={fadeUp}
          >
            <div className="z-1 bg-green-500 p-2 rounded-full">
              <Mail className="z-1 text-white w-6 h-6" />
            </div>
            <div>
              <p className="z-1 text-sm text-gray-400">Email</p>
              <a
                href="mailto:nirodhadilshan123@gmail.com"
                className="z-1 text-green-300 hover:underline break-all"
              >
                nirodhadilshan123@gmail.com
              </a>
            </div>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            className="z-1 border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition"
            variants={fadeUp}
          >
            <div className="z-1 bg-green-500 p-2 rounded-full">
              <Linkedin className="z-1 text-white w-6 h-6" />
            </div>
            <div>
              <p className="z-1 text-sm text-gray-400">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/dilshan-nirodha-585a5631b"
                target="_blank"
                rel="noopener noreferrer"
                className="z-1 text-green-300 hover:underline break-all"
              >
                linkedin.com/in/dilshan-nirodha-585a5631b
              </a>
            </div>
          </motion.div>

          {/* GitHub */}
          <motion.div
            className="z-1 border border-green-400 rounded-lg p-6 flex items-center gap-4 hover:bg-gray-800 transition"
            variants={fadeUp}
          >
            <div className="z-1 bg-green-500 p-2 rounded-full">
              <Github className="z-1 text-white w-6 h-6" />
            </div>
            <div>
              <p className="z-1 text-sm text-gray-400">GitHub</p>
              <a
                href="https://github.com/dilshannirodha"
                target="_blank"
                rel="noopener noreferrer"
                className="z-1 text-green-300 hover:underline break-all"
              >
                github.com/dilshannirodha
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
    </>
  )
}
