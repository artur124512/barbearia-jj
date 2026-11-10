import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, Scissors, ExternalLink } from 'lucide-react';
import { GALLERY_DATA } from '../data/mockData';
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, getWhatsAppUrl } from '../constants';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('todos');

  const filterTabs = [
    { key: 'todos', label: 'Todos os Trabalhos' },
    { key: 'fade', label: 'Degradês (Fade)' },
    { key: 'barba', label: 'Barba Alinhada' },
    { key: 'social', label: 'Cortes na Tesoura' },
    { key: 'platinado', label: 'Química & Platinados' },
  ];

  const filteredGallery = filter === 'todos'
    ? GALLERY_DATA
    : GALLERY_DATA.filter((item) => item.category === filter);

  return (
    <section id="galeria" className="py-24 relative overflow-hidden bg-gradient-to-b from-dark-base via-dark-card/40 to-dark-base border-t border-gold/15">
      
      {/* Background Lighting */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-xs sm:text-sm font-semibold text-gold">
            <Scissors className="w-4 h-4 text-gold" />
            <span>Portfólio de Joares Meireles</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Galeria de Trabalhos <br />
            <span className="text-gold-gradient">Feitos na Barbearia J&J</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-muted">
            Confira alguns dos cortes, barbas e transformações realizadas pessoalmente por Joares Meireles. 
            Do degradê navalhado perfeito aos cortes sociais clássicos na tesoura.
          </p>
        </div>

        {/* Gallery Filter Buttons */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 sm:px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filter === tab.key
                  ? 'bg-gold-gradient text-dark-base shadow-gold-glow font-bold'
                  : 'bg-dark-card text-slate-300 hover:text-white hover:bg-dark-cardHover border border-gold/20'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredGallery.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                className="group relative h-[380px] rounded-2xl overflow-hidden border border-gold/20 hover:border-gold shadow-lg hover:shadow-gold-glow/40 transition-all duration-500 bg-dark-card"
              >
                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95"
                />

                {/* Always-on Top Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-dark-base/80 backdrop-blur-md text-gold border border-gold/30">
                    {item.tag}
                  </span>
                </div>

                {/* Gradient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-base via-dark-base/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 z-10" />

                {/* Hover Content Details */}
                <div className="absolute inset-x-0 bottom-0 p-6 z-20 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-gold transition-colors leading-tight mb-1">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs text-slate-300 mb-4 flex items-center gap-1.5">
                    <span>Barbeiro:</span>
                    <strong className="text-gold font-semibold">{item.barberName}</strong>
                  </div>

                  {/* Fast Action in Hover */}
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={getWhatsAppUrl(`Olá, Joares! Vi o corte "${item.title}" no site da Barbearia J&J e gostaria de agendar um horário.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 px-3 rounded-lg bg-gold-gradient text-dark-base text-xs font-bold flex items-center justify-center gap-1.5 shadow-gold-glow"
                    >
                      <Scissors className="w-3.5 h-3.5 -rotate-45" />
                      <span>Quero este corte</span>
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram Footer CTA */}
        <div className="mt-14 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-dark-card hover:bg-dark-cardHover border border-gold/40 hover:border-gold shadow-lg hover:shadow-gold-glow transition-all duration-300 transform hover:-translate-y-0.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 flex items-center justify-center text-white">
              <Instagram className="w-5 h-5" />
            </div>
            <span>Ver mais cortes no Instagram {INSTAGRAM_HANDLE}</span>
            <ExternalLink className="w-4 h-4 text-gold group-hover:translate-x-0.5 transition-transform" />
          </a>
          <p className="text-xs text-slate-500 mt-2">
            Acompanhe o dia a dia e as novidades da Barbearia J&J direto no Instagram.
          </p>
        </div>

      </div>
    </section>
  );
};
