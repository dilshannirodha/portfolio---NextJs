interface ProjectProps {
  project: {
    title: string
    description: string
    link: string
    tags?: string[]
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="z-1 group relative bg-gray-800/50 hover:bg-gray-800/70 p-6 rounded-xl border border-gray-700 hover:border-green-400/30 transition-all duration-300 overflow-hidden">
      {/* Glow effect */}
      <div className="z-1 absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="z-1 relative z-10">
        <h3 className="z-1 text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-3">
          {project.title}
        </h3>
        
        <p className="z-1 text-gray-300/90 mb-5 leading-relaxed">
          {project.description}
        </p>
        
        {/* Tags */}
        {project.tags && (
          <div className="z-1 flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="z-1 px-3 py-1 text-xs bg-gray-700/50 text-green-400/90 rounded-full border border-gray-600 group-hover:border-green-400/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="z-1 inline-flex items-center gap-1 text-green-400 hover:text-white font-medium transition-colors"
        >
          View Project
          <span className="z-1 inline-block group-hover:translate-x-1 transition-transform">
            →
          </span>
        </a>
      </div>
    </div>
  )
}