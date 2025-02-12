import React from 'react';
import { Building2, Target } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">
          Sobre Nosotros
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Misión */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Building2 className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-blue-800">Misión</h3>
              </div>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-justify">
                Nuestra misión es ofrecer soluciones integrales e innovadoras en los campos 
                de la electricidad, neumática y automatización industrial. Nos enfocamos en 
                entender y satisfacer las necesidades específicas de nuestros clientes, 
                proporcionando productos y servicios que no solo mejoran la eficiencia y 
                productividad de sus procesos, sino que también aportan valor a largo plazo. 
                Nos comprometemos a mantener altos estándares de calidad y fiabilidad, 
                garantizando que cada solución implementada esté alineada con los objetivos 
                estratégicos de nuestros clientes, promoviendo su crecimiento y éxito en un 
                entorno competitivo.
              </p>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-blue-600 mr-4" />
                <h3 className="text-2xl font-bold text-blue-800">Visión</h3>
              </div>
              <div className="h-1 w-20 bg-blue-600 mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed text-justify">
                Nuestra visión es consolidarnos como líderes en el mercado de soluciones 
                industriales, siendo reconocidos por nuestra dedicación a la innovación, 
                el servicio al cliente y la sostenibilidad. Aspiramos a expandir nuestra 
                presencia a nivel nacional e internacional, estableciendo alianzas estratégicas 
                y adoptando las tecnologías más avanzadas para ofrecer soluciones que impulsen 
                el desarrollo tecnológico y económico de nuestros clientes. En nuestro camino 
                hacia el liderazgo, buscamos ser un referente en la industria, inspirando 
                confianza y fidelidad a través de un enfoque ético y responsable en todas 
                nuestras operaciones.
              </p>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;