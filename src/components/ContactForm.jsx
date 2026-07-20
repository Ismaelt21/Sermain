import React from 'react';
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const ContactForm = () => (
  <section className="bg-[#062653] px-5 py-24 text-white lg:px-8">
    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
      <div>
        <p className="eyebrow text-[#ffae2f]">Cotiza tu proyecto</p>
        <h2 className="mt-4 max-w-xl text-4xl font-black uppercase tracking-tight sm:text-5xl">Mantén tu industria en movimiento.</h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">Cuéntanos qué equipo necesitas instalar, mantener o reparar. Te ayudamos a encontrar una solución sin compromiso.</p>
        <a href="https://wa.me/593983096781" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f39200] px-6 py-3 font-black text-[#062653] transition hover:bg-[#ffae2f]"><MessageCircle size={19} /> Escribir por WhatsApp <ArrowUpRight size={17} /></a>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <a href="tel:+593983096781" className="contact-item"><Phone size={20} /><span><small>Llámamos</small>098 309 6781</span></a>
        <a href="mailto:sermain_0414@outlook.es" className="contact-item"><Mail size={20} /><span><small>Escríbenos</small>sermain_0414@outlook.es</span></a>
        <div className="contact-item"><MapPin size={20} /><span><small>Visítanos</small>Av. de la Prensa OE5-28 y Pasaje Manuel Herrera</span></div>
      </div>
    </div>
  </section>
);

export default ContactForm;
