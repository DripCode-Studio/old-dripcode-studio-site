import React from "react";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%239C92AC%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full px-4 py-2 mb-8">
              <Zap className="w-4 h-4 text-blue-400 mr-2" />
              <span className="text-blue-400 text-sm font-medium">
                Crafting Digital Excellence
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {t("heroTitle")
                .split(" ")
                .map((word, index) => (
                  <span key={index}>
                    {word === "Digital" ? (
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : word === "Numériques" ? (
                      <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word
                    )}
                    {index < t("heroTitle").split(" ").length - 1 && " "}
                  </span>
                ))}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              {t("heroSubtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:dripcodestudio@gmail.com"
                className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t("startProject")}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://youtube.com/@dripcodestudio"
                target="_blank"
                className="group border-2 border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                {t("viewWork")}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">100+</div>
                <div className="text-gray-400 text-sm">
                  {t("projectsDelivered")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400 text-sm">
                  {t("clientSatisfaction")}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">3+</div>
                <div className="text-gray-400 text-sm">
                  {t("yearsExperience")}
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <Code className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Clean Code</h3>
                  <p className="text-gray-400 text-sm">
                    Maintainable, scalable solutions
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <Zap className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">
                    Fast Delivery
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Rapid development cycles
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <Users className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Team Work</h3>
                  <p className="text-gray-400 text-sm">
                    Collaborative approach
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-3"></div>
                  <h3 className="text-white font-semibold mb-2">Innovation</h3>
                  <p className="text-gray-400 text-sm">
                    Cutting-edge technology
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-30 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
