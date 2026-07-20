import React from 'react';
import { Check, ClipboardCheck, Crown, Droplets } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    description: 'Para mantener el control y detectar a tiempo.',
    icon: ClipboardCheck,
    items: ['Inspección general', 'Limpieza de componentes', 'Pruebas operativas', 'Reporte técnico detallado'],
  },
  {
    name: 'Estándar',
    description: 'El equilibrio entre prevención y rendimiento.',
    icon: Droplets,
    featured: true,
    items: ['Todo lo del plan Básico', 'Cambio de aceite', 'Cambio de filtros', 'Ajustes y calibraciones'],
  },
  {
    name: 'Premium',
    description: 'Máxima respuesta para operaciones críticas.',
    icon: Crown,
    items: ['Todo lo del plan Estándar', 'Atención prioritaria', 'Monitoreo remoto', 'Disponibilidad 24/7', 'Soporte técnico especializado'],
  },
];

const MaintenancePlans = () => (
  <section id="plans" className="bg-white px-5 py-24 scroll-mt-16 lg:px-8">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">Mantenimiento a tu medida</p>
        <h2 className="section-title">Planes para mantener tu equipo siempre listo.</h2>
        <p className="section-copy">Elige el nivel de acompañamiento que necesita tu operación. Podemos adaptar cada plan al tipo de máquina, horas de uso y criticidad del proceso.</p>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {plans.map(({ name, description, icon: Icon, items, featured }) => (
          <article key={name} className={`relative overflow-hidden rounded-2xl border p-7 ${featured ? 'border-[#f39200] bg-[#062653] text-white shadow-xl shadow-blue-950/20' : 'border-slate-200 bg-slate-50 text-slate-900'}`}>
            {featured && <span className="absolute right-5 top-5 rounded-full bg-[#f39200] px-3 py-1 text-xs font-black uppercase tracking-wider text-[#062653]">Más elegido</span>}
            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${featured ? 'bg-[#f39200] text-[#062653]' : 'bg-[#062653] text-white'}`}><Icon size={24} /></div>
            <h3 className="mt-6 text-2xl font-black uppercase">Plan {name}</h3>
            <p className={`mt-2 min-h-12 leading-relaxed ${featured ? 'text-slate-200' : 'text-slate-600'}`}>{description}</p>
            <ul className="mt-6 space-y-3 border-t border-current/10 pt-6">
              {items.map((item) => <li key={item} className="flex gap-3 text-sm font-medium"><Check className={`mt-0.5 shrink-0 ${featured ? 'text-[#f39200]' : 'text-[#0a6caf]'}`} size={17} /> {item}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-slate-500">¿Necesitas una combinación diferente? Diseñamos un plan según tu equipo y tu operación.</p>
    </div>
  </section>
);

export default MaintenancePlans;
