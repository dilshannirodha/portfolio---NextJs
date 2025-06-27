'use client'

import { motion, Variants } from 'framer-motion'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects.json'
import BackgroundSkeleton from '@/components/BackgroundSkeleton'

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeOut' } 
  },
}

export default function ProjectsPage() {
  return (
    <>
    <BackgroundSkeleton />
    <section className="min-h-screen  text-white p-12 z-2">
      <div className="max-w-7xl mx-auto z-1">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 z-1">
          <h2 className="text-5xl font-bold z-1">Projects</h2>
          <div className="flex-1 h-1 bg-green-400 rounded z-1"></div>
        </div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {projects.map((project, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
    </>
  )
}
