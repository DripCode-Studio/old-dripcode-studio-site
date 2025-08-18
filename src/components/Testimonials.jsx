import React from "react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "DevCraft transformed our vision into a stunning web application that exceeded all expectations. Their attention to detail and technical expertise is unmatched.",
    },
    {
      name: "Michael Chen",
      position: "Founder, GrowthLab",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "Working with this team was a game-changer for our business. They delivered a complex e-commerce platform on time and within budget. Highly recommended!",
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, InnovateCorp",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "The level of professionalism and quality of work from DevCraft is outstanding. Our new website has significantly improved our conversion rates.",
    },
    {
      name: "David Thompson",
      position: "CTO, DataFlow Systems",
      image:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
      rating: 5,
      text: "From concept to deployment, the team handled everything seamlessly. Their technical skills and communication throughout the project were exceptional.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("testimonialsTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Clients" || word === "Say" ? (
                    <span className="text-blue-600 dark:text-cyan-400">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                  {index < t("testimonialsTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t("testimonialsSubtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {testimonial.position}
                  </p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200 dark:text-blue-800" />
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                98%
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {t("clientSatisfaction")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                150+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {t("projectsDelivered")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {t("happyClients")}
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-2">
                5
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                {t("yearsExperience")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
