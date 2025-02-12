import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const HeroSection = ({ onContactClick, onServicesClick }) => {
  const slides = [
    {
      image: '/Header_maq.webp',
      title: 'Soluciones Técnicas en Mantenimiento',
      subtitle: 'Expertos en Automatización Industrial'
    },
    {
      image: '/generadori.webp',
      title: 'Mantenimiento de Generadores',
      subtitle: 'Servicio Profesional y Confiable'
    },
    {
      image: '/compresion.webp',
      title: 'Sistemas de Compresión',
      subtitle: 'Instalación y Mantenimiento Especializado'
    },
    {
      image: '/disenio_electrico.webp',
      title: 'Proyectos de Diseño Eléctrico',
      subtitle: 'Soluciones Innovadoras y Eficientes'
    }
  ];

  const responsive = {
    all: {
      breakpoint: { max: 4000, min: 0 },
      items: 1
    }
  };

  return (
    <section className="relative h-screen">
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={5000}
        showDots={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list"
        className="h-screen"
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative h-screen w-full">
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />

            {/* Imagen de fondo */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
              }}
            />

            {/* Contenido */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fadeIn">
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent">
                    {slide.title}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slideUp">
                  {slide.subtitle}
                </p>
                <div className="space-x-4">
                  {/* Botón Contactar con scroll */}
                  <button
                    onClick={onContactClick}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    Contactar
                  </button>
                  {/* Botón Ver Servicios con scroll */}
                  <button
                    onClick={onServicesClick}
                    className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
                  >
                    Ver Servicios
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default HeroSection;
