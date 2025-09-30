
interface Project {
  id: number
  title: string
  category: string
  description: string
  image: string
  tech: string[]
}

interface WorkCardProps {
  project: Project
}

export function WorkCard({ project }: WorkCardProps) {
  return (
    <div className="group bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 bg-gray-200">
        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
          <span className="text-white text-lg font-semibold">{project.title}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <button className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors">
          View Project
        </button>
      </div>
    </div>
  )
}



