import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-4xl font-bold text-blue-800 mb-16">
          Contáctanos
        </h2>


        {/* Grid de Información de Contacto */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Teléfono */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Phone className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-800">Teléfono</h3>
            </div>
            <p className="text-gray-600">
              <a href="tel:+593958888739" className="hover:text-blue-600">
                095-888-8739
              </a>
            </p>
          </div>

          {/* Correo */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-800">Correo Electrónico</h3>
            </div>
            <p className="text-gray-600">
              <a href="mailto:sermain_0414@outlook.ec" className="hover:text-blue-600">
                sermain_0414@outlook.ec
              </a>
            </p>
          </div>

          {/* Horario */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center mb-4">
              <Clock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-800">Horario de Atención</h3>
            </div>
            <p className="text-gray-600">Lunes a Viernes</p>
            <p className="text-gray-600">8:00 AM - 6:00 PM</p>
          </div>

          {/* Ubicación */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow md:col-span-2 lg:col-span-3">
            <div className="flex items-center mb-4">
              <MapPin className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-800">Ubicación</h3>
            </div>
            <p className="text-gray-600 mb-4">Quito, Ecuador</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;