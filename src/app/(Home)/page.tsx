import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Professional web developer specializing in business websites, landing pages, and web applications. Ready to help your business grow online.",
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              I build fast & professional websites for{" "}
              <span className="text-blue-600">businesses ready to grow</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business vision into a powerful online presence. 
              Specializing in modern, responsive websites that convert visitors into customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link 
                href="/work" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technologies I Use
            </h2>
            <p className="text-lg text-gray-600">
              Modern, reliable tools for building exceptional websites
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "Next.js",
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Vercel"
            ].map((tech) => (
              <div key={tech} className="text-center">
                <div className="bg-gray-100 rounded-lg p-4 mb-2">
                  <span className="text-lg font-semibold text-gray-700">{tech}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Build Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What I Build
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From simple landing pages to complex web applications, 
              I create solutions that help your business succeed online.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Landing Pages",
                description: "High-converting pages that turn visitors into customers",
                link: "/services/landing-pages"
              },
              {
                title: "Business Websites",
                description: "Professional sites that build trust and credibility",
                link: "/services/business-websites"
              },
              {
                title: "Ecommerce",
                description: "Online stores that drive sales and growth",
                link: "/services/ecommerce"
              },
              {
                title: "Web Applications",
                description: "Custom solutions for your unique business needs",
                link: "/services/web-apps"
              },
              {
                title: "Portfolios",
                description: "Showcase your work with stunning portfolio sites",
                link: "/services/portfolios"
              },
              {
                title: "Dashboards",
                description: "Data visualization and management interfaces",
                link: "/services/dashboards"
              }
            ].map((service) => (
              <Link 
                key={service.title}
                href={service.link}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 text-blue-600 font-medium group-hover:text-blue-700">
                  Learn more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and turn your vision into reality. 
            I'm here to help your business succeed online.
          </p>
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </>
  );
}
