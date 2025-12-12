import React from "react";
import {
  Globe,
  Smartphone,
  Database,
  Palette,
  ShoppingCart,
  BarChart3,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Globe,
      title: t("webDev"),
      description: t("webDevDesc"),
      features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
    },
    {
      icon: Smartphone,
      title: t("mobileApps"),
      description: t("mobileAppsDesc"),
      features: ["iOS & Android", "React Native", "App Store Optimization"],
    },
    {
      icon: ShoppingCart,
      title: t("ecommerce"),
      description: t("ecommerceDesc"),
      features: [
        "Payment Integration",
        "Inventory Management",
        "Analytics Dashboard",
      ],
    },
    {
      icon: Database,
      title: t("backend"),
      description: t("backendDesc"),
      features: ["RESTful APIs", "Database Design", "Cloud Deployment"],
    },
    {
      icon: Palette,
      title: t("uiux"),
      description: t("uiuxDesc"),
      features: ["User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: BarChart3,
      title: t("strategy"),
      description: t("strategyDesc"),
      features: ["Market Analysis", "Growth Strategy", "Performance Tracking"],
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("servicesTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Services" ? (
                    <span className="text-blue-600 dark:text-cyan-400">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < t("servicesTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("servicesSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-sm hover:shadow-xl dark:hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-blue-600 dark:text-cyan-400" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                  >
                    <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="mailto:dripcodestudio@gmail.com"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            {t("getQuote")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
