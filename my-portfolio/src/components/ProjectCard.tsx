interface ProjectProps {
  project: {
    title: string
    description: string
    link: string
  }
}

export default function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-700">
      <h3 className="text-2xl font-bold text-green-400 mb-2">{project.title}</h3>
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-green-400 hover:underline font-medium"
      >
        View Project →
      </a>
    </div>
  )
}
