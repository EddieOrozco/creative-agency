import { getProjects, getProjectBySlug } from '@/lib/wordpress';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Generate static paths for all projects
export async function generateStaticParams() {
  const projects = await getProjects();
  
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;  // ← AWAIT params first!
  const project = await getProjectBySlug(slug);
  
  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Creative Agency`,
    description: project.excerpt || `Case study: ${project.title}`,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;  // ← AWAIT params first!
  const project = await getProjectBySlug(slug);

  // If project doesn't exist, show 404
  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Image */}
      <div className="relative h-96 w-full">
        {project.featuredImage?.node?.sourceUrl && (
          <Image
            src={project.featuredImage.node.sourceUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl">{project.projectDetails?.clientName}</p>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Project Type Badge */}
        <div className="mb-8">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold capitalize">
            {String(project.projectDetails?.projectType || 'general').replace('-', ' ')}
          </span>
        </div>

        {/* Challenge Section */}
        {project.projectDetails?.challenge && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Challenge</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.projectDetails.challenge}
            </p>
          </section>
        )}

        {/* Solution Section */}
        {project.projectDetails?.solution && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {project.projectDetails.solution}
            </p>
          </section>
        )}

        {/* Results Section */}
        {project.projectDetails?.results && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Results</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-800 whitespace-pre-line">
                {project.projectDetails.results}
              </p>
            </div>
          </section>
        )}

        {/* Testimonial */}
        {project.projectDetails?.testimonial && (
          <section className="mb-12 bg-gray-100 p-8 rounded-lg">
            <div className="text-center">
              <p className="text-2xl text-gray-800 italic mb-4">
                "{project.projectDetails.testimonial}"
              </p>
              {project.projectDetails?.testimonialAuthor && (
                <p className="text-gray-600 font-semibold">
                  — {project.projectDetails.testimonialAuthor}
                </p>
              )}
            </div>
          </section>
        )}

        {/* Back to Projects Button */}
        <div className="text-center pt-8">
          <Link 
            href="/projects"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            ← Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}