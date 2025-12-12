import React from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Portfolio = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A modern e-commerce solution with advanced filtering, secure payments, and admin dashboard.",
      image:
        "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800",
      category: "E-commerce",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      featured: true,
    },
    {
      title: "Healthcare Dashboard",
      description:
        "Comprehensive patient management system with real-time analytics and reporting.",
      image:
        "https://images.pexels.com/photos/3861943/pexels-photo-3861943.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web App",
      technologies: ["Next.js", "TypeScript", "PostgreSQL"],
      featured: true,
    },
    {
      title: "Real Estate Platform",
      description:
        "Property listing platform with advanced search, virtual tours, and lead management.",
      image:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web App",
      technologies: ["React", "Express", "MySQL", "AWS"],
      featured: false,
    },
    {
      title: "Restaurant Management",
      description:
        "Complete restaurant management system with POS, inventory, and customer management.",
      image:
        "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Web App",
      technologies: ["Vue.js", "Django", "PostgreSQL"],
      featured: false,
    },
    {
      title: "Learning Management System",
      description:
        "Educational platform with course management, progress tracking, and video streaming.",
      image:
        "https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Education",
      technologies: ["React", "Firebase", "Stripe"],
      featured: false,
    },
    {
      title: "Fitness Tracking App",
      description:
        "Mobile-first fitness application with workout plans, progress tracking, and social features.",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Mobile App",
      technologies: ["React Native", "Node.js", "MongoDB"],
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="portfolio"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("portfolioTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Portfolio" ? (
                    <span className="text-blue-600 dark:text-cyan-400">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < t("portfolioTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("portfolioSubtitle")}
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4 text-white" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 hover:bg-white/30 transition-colors">
                    <Github className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="group/btn text-blue-600 dark:text-cyan-400 font-semibold flex items-center hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
                  {t("viewProject")}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-4">
                <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs font-medium mb-2 inline-block">
                  {project.category}
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 2).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 2 && (
                    <span className="text-gray-500 dark:text-gray-400 text-xs px-1">
                      +{project.technologies.length - 2}
                    </span>
                  )}
                </div>

                <button className="text-blue-600 dark:text-cyan-400 text-sm font-semibold hover:text-blue-700 dark:hover:text-cyan-300 transition-colors">
                  {t("learnMore")} →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://www.youtube.com/@dripcodestudio"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t("viewAllProjects")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
