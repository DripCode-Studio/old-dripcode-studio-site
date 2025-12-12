import React from "react";
import { Award, Users, Target, Lightbulb } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: t("missionDriven"),
      description: t("missionDesc"),
    },
    {
      icon: Lightbulb,
      title: t("innovationFirst"),
      description: t("innovationDesc"),
    },
    {
      icon: Users,
      title: t("clientCentric"),
      description: t("clientCentricDesc"),
    },
    {
      icon: Award,
      title: t("qualityAssured"),
      description: t("qualityDesc"),
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {t("aboutTitle")}{" "}
              <span className="text-blue-600 dark:text-cyan-400">
                DripCode Studio
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("aboutDesc1")}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t("aboutDesc2")}
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  100+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("projectsCompleted")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  10+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("happyClients")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  98%
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("clientRetention")}
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                  24/7
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {t("supportAvailable")}
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team working together"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-1 md:-left-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400 mb-1">
                3+
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                {t("yearsExperience")}
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-16">
            {t("coreValues")}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6 w-fit mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600 dark:text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
