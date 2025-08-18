import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { toast } from "react-toastify";

const Contact = () => {
  const { t } = useLanguage();

  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(formRef.current);
    formData.append("access_key", import.meta.env.VITE_WEB3FORM_API_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully ✅");
        formRef.current.reset();
      } else {
        toast.error("Oops! Something went wrong ❌");
      }
    } catch (error) {
      toast.error("Error submitting form: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 dark:from-gray-900 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t("contactTitle")
              .split(" ")
              .map((word, index) => (
                <span key={index}>
                  {word === "Project?" || word === "Projet?" ? (
                    <span className="text-cyan-400">{word}</span>
                  ) : (
                    word
                  )}
                  {index < t("contactTitle").split(" ").length - 1 && " "}
                </span>
              ))}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t("contactSubtitle")}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-8">
                {t("getInTouch")}
              </h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-cyan-500/20 rounded-lg p-3 mr-4">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t("email")}</div>
                    <div className="text-gray-300">
                      dripcodestudio@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-500/20 rounded-lg p-3 mr-4">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t("phone")}</div>
                    <div className="text-gray-300">+1 (581) 446-5911</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-500/20 rounded-lg p-3 mr-4">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {t("office")}
                    </div>
                    <div className="text-gray-300">Quebec, CA</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-cyan-500/20 rounded-lg p-3 mr-4">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {t("schedule")}
                    </div>
                    <div className="text-gray-300">Mon - Fri, 9AM - 6PM</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="text-white font-semibold mb-2">
                  {t("responseTime")}
                </div>
                <div className="text-gray-300 text-sm">{t("responseDesc")}</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white font-semibold mb-2"
                    >
                      {t("fullName")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-white font-semibold mb-2"
                    >
                      {t("emailAddress")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-white font-semibold mb-2"
                    >
                      {t("company")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-white font-semibold mb-2"
                    >
                      {t("projectBudget")}
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    >
                      <option value="" className="text-gray-800">
                        Select budget range
                      </option>
                      <option value="under-5000" className="text-gray-800">
                        under $5000
                      </option>
                      <option value="5000-10000" className="text-gray-800">
                        $5000 - $10000
                      </option>
                      <option value="10000-25000" className="text-gray-800">
                        $10,000 - $25,000
                      </option>
                      <option value="25000-50000" className="text-gray-800">
                        $25,000 - $50,000
                      </option>
                      <option value="50000-above" className="text-gray-800">
                        $50,000+
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white font-semibold mb-2"
                  >
                    {t("projectDetails")} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {t("sendMessage")}
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t("needHelp")}
            </h3>
            <p className="text-gray-300 mb-6">{t("consultationDesc")}</p>
            <a
              href="https://calendly.com/dripcodestudio/30min"
              target="_blank"
              className="bg-white text-blue-900 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {t("scheduleFree")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
