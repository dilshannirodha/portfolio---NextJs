'use client'

import Image from 'next/image'
import profileImg from '@/assets/prpfile.jpeg'
import { motion, Variants } from 'framer-motion'
import BackgroundSkeleton from '@/components/BackgroundSkeleton'

const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function AboutPage() {
  return (
    <>
    <BackgroundSkeleton />
      <section className="min-h-screen  text-white ">
        {/* Header */}
        <div className="max-w-7xl mx-auto pt-20 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Profile Image */}
            <motion.div
              className="flex justify-center lg:justify-start relative z-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeScale}
            >
              {/* Green accent border */}
              <div className="absolute -left-6 top-0 w-6 h-full bg-green-400"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-96 rounded-lg overflow-hidden shadow-2xl bg-gray-800">
                {/* Profile Image with proper styling */}
                <Image
                  src={profileImg}
                  alt="Dilshan Nirodha"
                  fill
                  className="object-cover"
                  style={{
                    objectPosition: 'top center',
                    filter: 'grayscale(20%) contrast(110%)',
                  }}
                />
                {/* Optional overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/20"></div>
              </div>
            </motion.div>

            {/* Right Side - Content (your original text content here) */}
            <div className="space-y-8 z-1">
              {/* About Me Header */}
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-5xl font-bold">About Me</h2>
                <div className="flex-1 h-1 bg-green-400 rounded"></div>
              </div>

              {/* Description */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I`&apos;`m a passionate <span className="text-green-400 font-semibold">fullstack developer</span> with
                  experience in modern frontend and backend technologies.
                </p>

                <div className="space-y-8">
                  {/* Frontend Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      Frontend Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['React', 'Angular', 'Next.js', 'Flutter', 'Tailwind CSS'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      Backend Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['Node.js', 'Express', '.NET Web API', 'Spring Boot', 'Laravel', 'Flask Api', 'SQL', 'MongoDB'].map(
                        (skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-colors"
                          >
                            {skill}
                          </span>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <span className="w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {['Java', 'C#', 'Python', 'JavaScript', 'TypeScript', 'PHP', 'C++'].map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-gray-800 rounded-full text-sm border border-green-400/30 hover:border-green-400 hover:bg-green-400/10 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed">
                  I`&apos;`m a <span className="text-green-400 font-semibold">Full Stack Developer</span> who also builds AI
                  solutions, with experience in YOLO model training, image processing. I love creating applications that
                  combine web technologies with computer vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
