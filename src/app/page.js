import { getProjects } from '@/lib/wordpress';
import ProjectCard from '@/components/ProjectCard';

export default async function HomePage() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">
            We Build Digital Experiences That Matter
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            A creative agency specializing in web design, branding, and digital marketing
            for forward-thinking businesses.
          </p>
          <a 
            href="/projects" 
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View Our Work
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600">
            Check out some of our recent work for amazing clients
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}