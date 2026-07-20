import React from 'react';
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

const HeroSection = ({ onContactClick, onServicesClick }) => (
  <section className="relative flex min-h-[720px] items-center overflow-hidden bg-[#062653] pt-20 lg:min-h-screen">
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/sermain-hero-industrial.png')" }} />
    <div className="absolute inset-0 bg-gradient-to-r from-[#062653] via-[#062653]/95 to-[#062653]/10" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#062653] via-transparent to-[#062653]/20" />

    <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-8">
      <div className="max-w-2xl">
        <div className="mb-6 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ffae2f]">
          <span className="h-1 w-10 rounded-full bg-[#f39200]" /> Servicio de mantenimiento y montaje de maquinaria industrial
        </div>
        <h1 className="text-5xl font-black uppercase leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
          Tu maquinaria lista para operar.
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200 sm:text-xl">
          Planes de mantenimiento, montaje e instalación para proteger tu inversión, reducir paradas inesperadas y mantener tu industria en movimiento.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <button onClick={onContactClick} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#f39200] px-7 py-3.5 font-extrabold text-[#062653] transition hover:bg-[#ffae2f]">
            Cotiza por WhatsApp <MessageCircle size={18} />
          </button>
          <button onClick={onServicesClick} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-bold text-white transition hover:border-white hover:bg-white/10">
            Ver soluciones <ArrowRight size={18} />
          </button>
        </div>
        <div className="mt-12 grid gap-3 text-sm font-semibold text-slate-200 sm:grid-cols-3">
          <span className="flex items-center gap-2"><CheckCircle2 className="text-[#f39200]" size={18} /> Personal calificado</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="text-[#f39200]" size={18} /> Seguridad garantizada</span>
          <span className="flex items-center gap-2"><CheckCircle2 className="text-[#f39200]" size={18} /> Entrega a tiempo</span>
        </div>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-slate-50 to-transparent" />
  </section>
);

export default HeroSection;
