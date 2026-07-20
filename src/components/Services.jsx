import React from 'react';
import { ArrowUpRight, Bot, CircuitBoard, Fan, Gauge, Settings, Wrench } from 'lucide-react';

const services = [
  { title: 'Mantenimiento mecánico', description: 'Inspección, reparación y mantenimiento preventivo para maquinaria de producción.', img: '/Mecanico.jpg', icon: Wrench },
  { title: 'Sistemas hidráulicos', description: 'Diagnóstico, instalación y optimización de bombas y sistemas hidráulicos.', img: '/hidraulico.jpg', icon: Gauge },
  { title: 'Soluciones eléctricas', description: 'Instalación y mantenimiento de tableros, motores y sistemas industriales.', img: '/panel_electrico.jpg', icon: CircuitBoard },
  { title: 'Generadores y compresores', description: 'Asistencia técnica para asegurar energía y aire comprimido cuando los necesitas.', img: '/generador.jpg', icon: Settings },
  { title: 'Automatización industrial', description: 'Control, programación de PLC y mejoras para procesos más eficientes.', img: '/PLC.jpg', icon: Bot },
  { title: 'Climatización industrial', description: 'Instalación y mantenimiento de sistemas HVAC para ambientes exigentes.', img: '/chiller.jpg', icon: Fan },
];

const Services = () => (
  <section id="services" className="bg-slate-50 px-5 py-24 scroll-mt-16 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="max-w-2xl">
        <p className="eyebrow">Nuestros servicios</p>
        <h2 className="section-title">Experiencia, precisión y seguridad en cada proyecto.</h2>
        <p className="section-copy">Desde el mantenimiento preventivo hasta la instalación y montaje, integramos especialidades para que tu planta trabaje con menos paradas y mayor rendimiento.</p>
      </div>
      <div className="mt-10 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-8 text-sm font-bold text-[#062653]">
        {['Bombas industriales', 'Generadores eléctricos', 'Motores eléctricos', 'Compresores', 'Sistemas neumáticos', 'Bandas transportadoras', 'Tableros eléctricos', 'Maquinaria de producción'].map((item) => <span key={item} className="rounded-full bg-white px-4 py-2 shadow-sm ring-1 ring-slate-200">{item}</span>)}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, img, icon: Icon }) => (
          <article key={title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-52 overflow-hidden">
              <img src={img} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
              <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white"><Icon size={21} /></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue-700">Conocer más <ArrowUpRight size={16} /></div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
