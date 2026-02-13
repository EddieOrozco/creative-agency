import { getProjects } from '@/lib/wordpress';
import ProjectCard from '@/components/ProjectCard';

export const metadata = {
  title: 'Our Projects | Creative Agency',
  description: 'View our portfolio of web design, branding, and digital marketing projects',
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Work</h1>
          <p className="text-lg text-gray-600">
            Explore our portfolio of {projects.length} successful projects
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
