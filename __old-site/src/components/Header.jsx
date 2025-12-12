import React, { useState, useEffect } from "react";
import { Menu, X, Code, Sun, Moon, Globe } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { useLanguage } from "../contexts/LanguageContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("home"), href: "#home" },
    { name: t("services"), href: "#services" },
    { name: t("about"), href: "#about" },
    { name: t("portfolio"), href: "#portfolio" },
    { name: t("contact"), href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <img
            src="/logo.png"
            className="w-[200px] h-[150px] object-contain  "
            alt="DripCode Studio Logo"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:scale-105 transform  ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400"
                    : "text-white hover:text-cyan-400"
                }`}
              >
                {item.name}
              </a>
            ))}

            {/* Theme Toggle */}
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button> */}

            {/* Language Toggle */}
            <div className="relative">
              <button
                onClick={() => changeLanguage(language === "en" ? "fr" : "en")}
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4 mr-1" />
                <span className="text-sm font-medium">
                  {language.toUpperCase()}
                </span>
              </button>
            </div>

            <a
              href="mailto:dripcodestudio@gmail.com"
              className={`font-semibold px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                scrolled
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg hover:shadow-xl"
                  : "bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20"
              }`}
            >
              {t("getStarted")}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button> */}

            <button
              onClick={() => changeLanguage(language === "en" ? "fr" : "en")}
              className={`flex items-center p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-xs font-medium">
                {language.toUpperCase()}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg  mt-5 rounded-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 w-full">
                <a
                  href="mailto:dripcodestudio@gmail.com"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t("getStarted")}
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Header;
