import React, { useEffect, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';

const Header = ({ onServicesClick, onAboutUsClick, onPlansClick, onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = (action) => { setIsMenuOpen(false); action(); };
  const linkTone = isScrolled ? 'text-[#0a2854]' : 'text-white';

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-sm backdrop-blur-md' : 'bg-[#062653]/85'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-3" aria-label="Ir al inicio">
          <span className={`flex items-center rounded-md px-2 py-1 transition-all duration-300 ${isScrolled ? '' : 'bg-white/95 shadow-sm'}`}>
            <img src="/sermain-wordmark.png" alt="Sermain" className="h-10 w-auto object-contain sm:h-11" />
          </span>
          <span className={`hidden border-l pl-3 text-xs font-bold uppercase tracking-[0.18em] sm:block ${isScrolled ? 'border-slate-200 text-slate-500' : 'border-white/30 text-white/80'}`}>
            Mantenimiento y montaje industrial
          </span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          <button onClick={onServicesClick} className={`nav-link ${linkTone}`}>Servicios</button>
          <button onClick={onPlansClick} className={`nav-link ${linkTone}`}>Planes</button>
          <button onClick={onAboutUsClick} className={`nav-link ${linkTone}`}>Nosotros</button>
          <button onClick={onContactClick} className="inline-flex items-center gap-2 rounded-full bg-[#f39200] px-5 py-2.5 text-sm font-bold text-[#062653] shadow-lg shadow-orange-500/20 transition hover:bg-[#ffab24]">
            <MessageCircle size={17} /> WhatsApp
          </button>
        </nav>

        <button className={`rounded-lg p-2 md:hidden ${linkTone}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Abrir menú">
          {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-5 shadow-xl md:hidden">
          <div className="flex flex-col gap-4">
            <button onClick={() => navigate(onServicesClick)} className="text-left font-semibold text-[#0a2854]">Servicios</button>
            <button onClick={() => navigate(onPlansClick)} className="text-left font-semibold text-[#0a2854]">Planes de mantenimiento</button>
            <button onClick={() => navigate(onAboutUsClick)} className="text-left font-semibold text-[#0a2854]">Nosotros</button>
            <button onClick={() => navigate(onContactClick)} className="rounded-full bg-[#f39200] px-5 py-3 text-center font-bold text-[#062653]">Contactar por WhatsApp</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
