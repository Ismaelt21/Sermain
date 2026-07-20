import React from 'react';

const Footer = () => (
  <footer className="bg-[#041328] px-5 py-7 text-slate-400 lg:px-8">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-sm sm:flex-row">
      <span className="font-semibold tracking-wide text-white">SERMAIN · Soluciones que mueven tu industria.</span>
      <span>© {new Date().getFullYear()} Sermain. Quito, Ecuador.</span>
    </div>
  </footer>
);

export default Footer;
