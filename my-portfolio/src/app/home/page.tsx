'use client'

import { ArrowRight, Mail, Github, Linkedin } from 'lucide-react'
import profileImg from '@/assets/prpfile.jpeg'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import BackgroundSkeleton from '@/components/BackgroundSkeleton'





export default function HomePage() {
    const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}
  return (
    <>
                            <BackgroundSkeleton />


    <motion.div
      className="min-h-screen bg-transparent text-white relative z-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div className="absolute top-8 left-12" variants={fadeUp}>
        <h1 className="text-xl font-bold tracking-wider">PORTFOLIO.</h1>
      </motion.div>

      {/* Profile Image */}
      <motion.div className="flex justify-center mb-16" variants={fadeUp}>
        <div className="relative w-64 h-64">
          <div className="absolute inset-0 rounded-full border-8 border-green-400/30 transform translate-x-3 translate-y-3" />
          <div className="absolute inset-0 rounded-full border-8 border-green-400/50 transform translate-x-1.5 translate-y-1.5" />
          <div className="absolute inset-0 rounded-full border-8 border-green-400" />
          <Image
            src={profileImg}
            alt="Dilshan Nirodha"
            fill
            className="rounded-full object-cover border-4 border-white"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          className="text-green-400 text-lg mb-4 font-light"
          variants={fadeUp}
        >
          Hello Everyone.
        </motion.p>

        <motion.h1
          className="text-6xl font-bold mb-8 leading-tight"
          variants={fadeUp}
        >
          I&apos;M Dilshan
          <br />
          Nirodha
        </motion.h1>

        <motion.div className="flex justify-center mb-12" variants={fadeUp}>
          <div className="border-2 border-green-400 px-8 py-3 flex items-center gap-3 hover:bg-green-400 hover:text-gray-900 transition-all duration-300 cursor-pointer group">
            <span className="font-semibold tracking-wider">
              FULLSTACK DEVELOPER
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          variants={fadeUp}
        >
          <span className="text-green-400 font-medium">
            Full Stack Craftsman
          </span>{' '}
          weaving digital experiences from{' '}
          <span className="text-green-400">frontend elegance</span> to{' '}
          <span className="text-green-400">backend robustness</span>. Transforming
          ideas into <span className="text-green-400">scalable solutions</span>{' '}
          with clean code and intuitive interfaces.
        </motion.p>

        {/* Contact Icons */}
        <motion.div
          className="flex justify-center items-center gap-4"
          variants={fadeUp}
        >
          <span className="text-green-400 font-semibold">Contact Me</span>
          <div className="flex gap-3">
            <a
              href="mailto:nirodhadilshan123@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
            >
              <Mail className="w-5 h-5 text-gray-900" />
            </a>
            <a
              href="https://github.com/dilshannirodha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
            >
              <Github className="w-5 h-5 text-gray-900" />
            </a>
            <a
              href="https://www.linkedin.com/in/dilshan-nirodha-585a5631b"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-green-400 rounded-full flex items-center justify-center hover:bg-green-500 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-900" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>

    </>
  )
}
