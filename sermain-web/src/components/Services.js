import React from 'react';

const services = [
  {
    title: 'Mecánico',
    description: 'Mantenimiento de maquinaria mecánica, incluyendo inspección, reparación y actualización de equipos industriales. Ofrecemos soluciones preventivas para evitar fallos en la maquinaria.',
    img: '/Mecanico.jpg',
    icon: '/mecicon.jpg'
  },
  {
    title: 'Hidráulico',
    description: 'Soluciones completas en sistemas hidráulicos, desde la instalación hasta la reparación. Nos especializamos en el diagnóstico de problemas y optimización del rendimiento.',
    img: '/hidraulico.jpg',
    icon: '/hidricon.jpg'
  },
  {
    title: 'Eléctrico',
    description: 'Instalación y mantenimiento de sistemas eléctricos industriales y residenciales. Nuestros servicios incluyen desde la instalación de cableado hasta la reparación de circuitos complejos.',
    img: '/panel_electrico.jpg',
    icon: '/elecicon.jpg'
  },
  {
    title: 'Generadores y Compresores',
    description: 'Mantenimiento y reparación de generadores y compresores de diversas marcas. Proporcionamos asistencia técnica para garantizar el correcto funcionamiento y la máxima eficiencia de tus equipos.',
    img: '/generador.jpg',
    icon: '/geneicon.jpg'
  },
  {
    title: 'Automatización',
    description: 'Soluciones avanzadas en automatización industrial para optimizar los procesos de producción y mejorar la eficiencia. Desde la programación de PLC hasta la instalación de sistemas SCADA.',
    img: '/PLC.jpg',
    icon: '/plcicon.jpg'
  },
  {
    title: 'Climatización',
    description: 'Instalación y mantenimiento de sistemas de climatización para ambientes industriales y comerciales. Garantizamos confort y eficiencia energética en tus instalaciones.',
    img: '/chiller.jpg',
    icon: '/chillericon.webp'
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-6 bg-gray-100 scroll-mt-20">
      <h2 className="text-center text-4xl font-bold text-blue-800">Nuestros Servicios</h2>
      <p className="text-center mt-4 text-gray-600 max-w-2xl mx-auto">Ofrecemos una variedad de servicios especializados diseñados para satisfacer las necesidades de diferentes sectores industriales. Nuestro equipo de expertos está preparado para brindarte soluciones personalizadas.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 p-6">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover mb-4"/>
            <div className="flex flex-col items-center">
              <img src={service.icon} alt={`${service.title} icon`} className="w-12 h-12 mb-4"/>
              <h3 className="text-2xl font-bold text-blue-800">{service.title}</h3>
              <p className="mt-4 text-gray-600 text-justify">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
