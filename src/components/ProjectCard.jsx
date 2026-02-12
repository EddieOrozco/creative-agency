import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  // Safely get project type as a string
  const projectType = String(project.projectDetails?.projectType || 'general')
    .replace('-', ' ')
    .replace('_', ' ');

  return (
    <Link 
      href={`/projects/${project.slug}`}
      className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden block"
    >
      {/* Project Image */}
      {project.featuredImage?.node?.sourceUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-200">
          <Image
            src={project.featuredImage.node.sourceUrl}
            alt={project.title || 'Project image'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3">
          {project.projectDetails?.clientName || 'Client Name'}
        </p>

        {/* Project Type Badge */}
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full capitalize">
          {projectType}
        </span>
      </div>
    </Link>
  );
}