import Link from "next/link";
import Image from "next/image";
import type { IProject } from "@/constants";

interface WorkCardProps {
  project: IProject;
}

export default function WorkCard({ project }: WorkCardProps) {
  return (
    <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-700/50 hover:border-gray-600">
      <div
        className="relative h-64 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.gradient[0]}, ${project.gradient[1]})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <h3 className="text-white text-2xl font-bold mb-2 drop-shadow-lg">
              {project.name}
            </h3>
          </div>
        </div>
      </div>

      <div className="p-6">
        <p className="text-gray-300 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs font-medium rounded-full hover:bg-gray-600/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.url && (
            <Link
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-white text-gray-900 text-center py-2.5 px-4 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
            >
              View Project →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
