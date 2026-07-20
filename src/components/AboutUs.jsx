import React from 'react';
import { CheckCircle2, Target, Users, Zap } from 'lucide-react';

const AboutUs = () => (
  <section id="about" className="overflow-hidden bg-white px-5 py-24 scroll-mt-16 lg:px-8">
    <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-slate-900">
        <img src="/Sermain.jpg" alt="Equipo y soluciones industriales Sermain" className="absolute inset-0 h-full w-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#061a35] via-[#061a35]/30 to-transparent" />
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <p className="text-4xl font-bold">Precisión que mueve industrias.</p>
          <p className="mt-3 text-slate-200">Una visión integral para cada desafío técnico.</p>
        </div>
      </div>
      <div>
        <p className="eyebrow">Nuestra forma de trabajar</p>
        <h2 className="section-title">Expertos en conectar equipos, procesos y resultados.</h2>
        <p className="section-copy">En Sermain entendemos que una solución industrial debe funcionar en el mundo real. Por eso combinamos conocimiento técnico, diagnóstico cercano y ejecución responsable para acompañar cada proyecto.</p>
        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          <div className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0 text-blue-600" /><div><h3 className="font-bold text-slate-900">Diagnóstico preciso</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">Analizamos la causa, no solo el síntoma.</p></div></div>
          <div className="flex gap-3"><Zap className="mt-1 shrink-0 text-blue-600" /><div><h3 className="font-bold text-slate-900">Respuesta práctica</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">Soluciones adaptadas a tu operación.</p></div></div>
          <div className="flex gap-3"><Users className="mt-1 shrink-0 text-blue-600" /><div><h3 className="font-bold text-slate-900">Acompañamiento</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">Comunicación clara durante todo el proceso.</p></div></div>
          <div className="flex gap-3"><Target className="mt-1 shrink-0 text-blue-600" /><div><h3 className="font-bold text-slate-900">Enfoque preventivo</h3><p className="mt-1 text-sm leading-relaxed text-slate-600">Más continuidad, menos paradas inesperadas.</p></div></div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
