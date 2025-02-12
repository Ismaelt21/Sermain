import React, { useState, useEffect } from "react";

const Header = ({ onServicesClick, onAboutUsClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8); // Cambia al 80% de la pantalla
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-transparent text-blue-900" // Fondo transparente, texto azul
          : "bg-white text-blue-800" // Estado normal
      }`}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-8 lg:px-3">
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img src="/Sermainv2.png" alt="Sermain Logo" className="h-20 w-28" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button
                  onClick={onServicesClick}
                  className="hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={onAboutUsClick}
                  className="hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={onContactClick}
                  className="hover:text-blue-500 transition-colors duration-300 text-lg font-medium"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="p-2">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
