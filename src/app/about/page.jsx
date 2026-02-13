export const metadata = {
  title: 'About Us | Creative Agency',
  description: 'Learn about our creative agency and the team behind the work',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-4">About Our Agency</h1>
          <p className="text-xl text-blue-100">
            We're a team of creative professionals passionate about helping businesses grow
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Creative Agency was founded with a simple mission: to help forward-thinking 
            businesses create exceptional digital experiences that drive real results.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            With over 10 years of combined experience in web design, branding, and 
            digital marketing, our team brings expertise and creativity to every project.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">What We Do</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Web Design</h3>
              <p className="text-gray-600">
                Beautiful, responsive websites that engage users and drive conversions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Branding</h3>
              <p className="text-gray-600">
                Memorable brand identities that set you apart from the competition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Marketing</h3>
              <p className="text-gray-600">
                Strategic campaigns that reach your audience and grow your business.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-12 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Let's discuss your project and see how we can help.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}