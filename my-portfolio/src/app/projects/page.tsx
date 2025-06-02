import ProjectCard from '../../components/ProjectCard'
import projects from '../../data/projects.json'

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-gray-900 text-white p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-5xl font-bold">Projects</h2>
          <div className="flex-1 h-1 bg-green-400 rounded"></div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
