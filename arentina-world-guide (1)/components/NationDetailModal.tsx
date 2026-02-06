import React, { useState, useEffect } from 'react';
import { Nation } from '../types';

interface NationDetailModalProps {
  nation: Nation | null;
  onClose: () => void;
}

const NationDetailModal: React.FC<NationDetailModalProps> = ({ nation, onClose }) => {
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);

  // Reset history view when nation changes
  useEffect(() => {
    setIsHistoryOpen(false);
  }, [nation?.id]);

  if (!nation) return null;

  const getThemeColors = (theme: string) => {
    switch (theme) {
      case 'astea': return { 
          title: 'text-yellow-400', 
          sub: 'text-yellow-600', 
          bg: 'bg-yellow-900/20',
          border: 'border-yellow-600/30',
          cardBg: 'bg-red-950/40',
          accent: '#C5A059'
      };
      case 'lanoer': return { 
          title: 'text-blue-200', 
          sub: 'text-blue-300', 
          bg: 'bg-blue-900/20',
          border: 'border-blue-400/30',
          cardBg: 'bg-blue-950/40',
          accent: '#e2e8f0'
      };
      case 'elgrain': return { 
          title: 'text-purple-300', 
          sub: 'text-purple-400', 
          bg: 'bg-purple-900/20',
          border: 'border-purple-500/30',
          cardBg: 'bg-purple-950/40',
          accent: '#c084fc'
      };
      default: return { 
          title: 'text-slate-300', 
          sub: 'text-slate-400', 
          bg: 'bg-slate-800',
          border: 'border-slate-700',
          cardBg: 'bg-slate-800',
          accent: '#94a3b8'
      };
    }
  };

  const themeColors = getThemeColors(nation.colorTheme);

  const renderHistoryBanner = () => {
    if (nation.id === 'elgrain') {
      return (
        <button 
          onClick={() => setIsHistoryOpen(true)}
          className="relative w-full group overflow-hidden rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-[1.02] hover:shadow-purple-900/60"
        >
          {/* Book Texture Background (Deep Purple #4B0032) */}
          <div className="absolute inset-0 bg-[#4B0032] bg-texture opacity-100"></div>
          
          {/* Stains & Antiquing */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          
          {/* Silver Crossed Wands Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none overflow-hidden">
             <div className="text-[25rem] text-slate-300 font-serif rotate-[15deg] group-hover:scale-110 transition-transform duration-[2000ms]">
                🪄
             </div>
             <div className="absolute inset-0 flex items-center justify-center animate-twinkle opacity-40">
                <div className="text-4xl text-white">✨</div>
                <div className="text-2xl text-white ml-20 mt-20">✨</div>
                <div className="text-3xl text-white mr-20 mb-20">✨</div>
             </div>
          </div>

          {/* Silver Ornate Border */}
          <div className="absolute inset-4 border-[1px] border-slate-400/30 pointer-events-none"></div>
          <div className="absolute inset-6 border-[3px] border-double border-slate-300/60 group-hover:border-slate-100 transition-colors duration-500 pointer-events-none"></div>
          
          {/* Ornate Corner flourishes */}
          <div className="absolute top-8 left-8 text-slate-300/50 group-hover:text-white text-5xl transition-all pointer-events-none drop-shadow-lg">✧</div>
          <div className="absolute top-8 right-8 text-slate-300/50 group-hover:text-white text-5xl transition-all pointer-events-none drop-shadow-lg">✧</div>
          <div className="absolute bottom-8 left-8 text-slate-300/50 group-hover:text-white text-5xl transition-all pointer-events-none drop-shadow-lg">✧</div>
          <div className="absolute bottom-8 right-8 text-slate-300/50 group-hover:text-white text-5xl transition-all pointer-events-none drop-shadow-lg">✧</div>

          <div className="relative z-10 py-24 px-12 flex flex-col items-center justify-center text-center">
              <span className="text-slate-300/70 text-xs tracking-[0.5em] uppercase mb-8 group-hover:tracking-[0.6em] transition-all font-serif drop-shadow-sm">Chronicles of Magic</span>
              
              <div className="flex flex-col items-center gap-4">
                  <h4 className="text-2xl sm:text-3xl font-zen font-black text-slate-100 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] group-hover:scale-105 transition-all duration-700 whitespace-nowrap">
                      《위대한 마법의 나라》
                  </h4>
                  <div className="relative w-48 h-[2px] overflow-visible">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/60 to-transparent group-hover:via-slate-100 transition-all duration-700"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-100 text-lg">✨</div>
                  </div>
                  <h4 className="text-base sm:text-lg font-serif text-slate-200/90 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:tracking-[0.1em] transition-all duration-500">
                      -엘그레인에 대한 기록과 고찰
                  </h4>
              </div>

              <div className="mt-16 flex items-center gap-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-[1px] bg-slate-300/40"></div>
                  <span className="text-slate-300/80 text-[11px] tracking-widest uppercase italic font-serif">Open the arcane records</span>
                  <div className="w-12 h-[1px] bg-slate-300/40"></div>
              </div>
          </div>

          {/* Spine Shadow */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-white/10"></div>
        </button>
      );
    }

    if (nation.id === 'lanoer') {
      return (
        <button 
          onClick={() => setIsHistoryOpen(true)}
          className="relative w-full group overflow-hidden rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-[1.02] hover:shadow-blue-900/60"
        >
          {/* Deep Navy/Black Background */}
          <div className="absolute inset-0 bg-[#0A1128] bg-texture opacity-100"></div>
          
          {/* Stains & Antiquing */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/60"></div>
          
          {/* Divine Light Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
             <div className="w-[40rem] h-[40rem] bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-[3000ms]"></div>
             <div className="absolute text-[22rem] text-royal-gold/20 font-serif group-hover:scale-110 transition-transform duration-[2000ms]">
                ⚜
             </div>
          </div>

          {/* Golden/Silver Ornate Border */}
          <div className="absolute inset-4 border-[1px] border-royal-gold/30 pointer-events-none"></div>
          <div className="absolute inset-6 border-[3px] border-double border-royal-gold/60 group-hover:border-royal-gold/90 transition-colors duration-500 pointer-events-none"></div>
          
          {/* Corner flourishes */}
          <div className="absolute top-8 left-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">✠</div>
          <div className="absolute top-8 right-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">✠</div>
          <div className="absolute bottom-8 left-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">✠</div>
          <div className="absolute bottom-8 right-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">✠</div>

          <div className="relative z-10 py-24 px-12 flex flex-col items-center justify-center text-center">
              <span className="text-royal-gold/70 text-sm tracking-[0.5em] uppercase mb-8 group-hover:tracking-[0.6em] transition-all font-serif drop-shadow-sm">Sacred Scripture</span>
              
              <div className="flex flex-col items-center gap-4">
                  <h4 className="text-3xl sm:text-4xl font-zen font-black text-white leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] group-hover:scale-105 transition-all duration-700 whitespace-nowrap">
                      《루미엘의 빛 아래》
                  </h4>
                  <div className="relative w-48 h-[2px] overflow-visible">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent group-hover:via-royal-gold transition-all duration-700"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-royal-gold text-lg">✙</div>
                  </div>
                  <h4 className="text-xl sm:text-2xl font-serif text-royal-gold/90 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:tracking-[0.1em] transition-all duration-500">
                      신성국 라노에르의 성전(聖典)
                  </h4>
                  <p className="text-sm text-white/40 mt-2 italic">(루미엘라 대신전 정본)</p>
              </div>

              <div className="mt-16 flex items-center gap-8 opacity-60 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-[1px] bg-royal-gold/40"></div>
                  <span className="text-royal-gold/80 text-[11px] tracking-widest uppercase italic font-serif">Read the holy word</span>
                  <div className="w-12 h-[1px] bg-royal-gold/40"></div>
              </div>
          </div>

          {/* Spine Shadow */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent"></div>
          <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-white/10"></div>
        </button>
      );
    }

    return (
      <button 
        onClick={() => setIsHistoryOpen(true)}
        className="relative w-full group overflow-hidden rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-700 hover:scale-[1.02] hover:shadow-red-900/60"
      >
         <div className="absolute inset-0 bg-[#8B0000] bg-texture opacity-100"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30 mix-blend-overlay"></div>
         <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
         <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none overflow-hidden">
            <div className="text-[25rem] text-royal-gold/50 font-serif rotate-[-5deg] group-hover:scale-105 transition-transform duration-[2000ms]">
               ♌︎
            </div>
         </div>
         <div className="absolute inset-4 border-[1px] border-royal-gold/30 pointer-events-none"></div>
         <div className="absolute inset-6 border-[3px] border-double border-royal-gold/60 group-hover:border-royal-gold/90 transition-colors duration-500 pointer-events-none"></div>
         <div className="absolute top-8 left-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">⚜</div>
         <div className="absolute top-8 right-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">⚜</div>
         <div className="absolute bottom-8 left-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">⚜</div>
         <div className="absolute bottom-8 right-8 text-royal-gold/50 group-hover:text-royal-gold text-5xl font-serif transition-all pointer-events-none drop-shadow-lg">⚜</div>
         <div className="relative z-10 py-24 px-12 flex flex-col items-center justify-center text-center">
             <span className="text-royal-gold/70 text-sm tracking-[0.5em] uppercase mb-8 group-hover:tracking-[0.6em] transition-all font-serif drop-shadow-sm">Imperial Chronicles</span>
             <div className="flex flex-col items-center gap-4">
                 <h4 className="text-4xl sm:text-5xl font-zen font-black text-royal-gold leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,1)] group-hover:scale-105 transition-all duration-700 whitespace-nowrap">
                     {nation.id === 'astea' ? '아스테아 제국' : nation.name}
                 </h4>
                 <div className="relative w-48 h-[2px] overflow-visible">
                     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-royal-gold/60 to-transparent group-hover:via-royal-gold transition-all duration-700"></div>
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-royal-gold text-lg">✦</div>
                 </div>
                 <h4 className="text-3xl sm:text-4xl font-zen font-black text-royal-gold/90 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] group-hover:tracking-[0.1em] transition-all duration-500">
                     건국기
                 </h4>
             </div>
             <div className="mt-16 flex items-center gap-8 opacity-60 group-hover:opacity-100 transition-opacity">
                 <div className="w-12 h-[1px] bg-royal-gold/40"></div>
                 <span className="text-royal-gold/80 text-[11px] tracking-widest uppercase italic font-serif">Open the sacred records</span>
                 <div className="w-12 h-[1px] bg-royal-gold/40"></div>
             </div>
         </div>
         <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black/80 to-transparent"></div>
         <div className="absolute top-0 bottom-0 left-2 w-[1px] bg-white/10"></div>
         <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-black/40"></div>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-[#050510]/95 backdrop-blur-md transition-opacity" onClick={onClose}></div>
      <div className="relative w-full max-w-6xl h-[100vh] sm:h-[90vh] overflow-y-auto glass-panel rounded-none sm:rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-fadeIn scrollbar-hide bg-[#0a0505]">
        <button onClick={onClose} className="fixed sm:absolute top-6 right-6 z-50 p-2 bg-black/40 text-white/70 hover:text-white rounded-full border border-white/10 hover:bg-black/60 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></svg>
        </button>

        <div className="relative h-[40vh] sm:h-[45vh] w-full shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0505] z-10"></div>
          <img src={nation.image} alt={nation.name} className="w-full h-full object-cover" />
          <div className="absolute bottom-0 left-0 w-full p-8 sm:p-12 z-20">
             <div className="max-w-4xl">
                <p className={`text-xl font-cursive text-white/80 tracking-wider mb-2 opacity-80`}>The Great Nation</p>
                <h2 className={`text-5xl sm:text-7xl font-serif font-black text-white drop-shadow-lg mb-4 leading-tight`}>{nation.name}</h2>
                <div className="flex items-center gap-4">
                    <div className={`h-px flex-1 ${themeColors.bg} bg-current opacity-50`}></div>
                    <p className="text-[#F5E6D3] font-light tracking-[0.2em] uppercase text-sm">{nation.englishName}</p>
                    <div className={`h-px flex-1 ${themeColors.bg} bg-current opacity-50`}></div>
                </div>
             </div>
          </div>
        </div>

        <div className="p-6 sm:p-12 relative overflow-hidden">
             <div className={`absolute top-20 right-10 text-[20rem] opacity-[0.03] font-serif font-bold pointer-events-none select-none ${themeColors.title}`}>{nation.name[0]}</div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                <div className="lg:col-span-4 space-y-8">
                    <div className={`p-6 rounded-xl border ${themeColors.border} bg-white/5 backdrop-blur-sm`}>
                        <h3 className={`font-fancy text-2xl font-bold mb-6 ${themeColors.title} border-b border-white/10 pb-4`}>Royal Decree</h3>
                        <dl className="space-y-4">
                            {[
                                { label: 'Capital', value: nation.capital },
                                { label: 'Symbol', value: nation.symbol },
                                { label: 'System', value: nation.system },
                                { label: 'Landmark', value: nation.landmark.name },
                                nation.religion ? { label: 'Religion', value: nation.religion } : null
                            ].filter(Boolean).map((item, idx) => (
                                <div key={idx} className="flex flex-col">
                                    <dt className="text-xs uppercase tracking-widest text-white/40 mb-1">{item?.label}</dt>
                                    <dd className="text-[#F5E6D3] font-serif text-lg leading-snug">{item?.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>

                    <div className={`p-6 rounded-xl border ${themeColors.border} bg-white/5 backdrop-blur-sm`}>
                         <h3 className={`font-fancy text-xl font-bold mb-6 ${themeColors.title}`}>Supreme Leadership</h3>
                         <div className="space-y-6">
                            {nation.leadership.map((leader, idx) => (
                                <div key={idx} className="relative pl-4 border-l-2 border-white/20">
                                    <p className={`text-xs uppercase tracking-wider mb-1 ${themeColors.sub}`}>{leader.title}</p>
                                    <p className="text-xl text-white font-serif mb-2">{leader.name}</p>
                                    <p className="text-sm text-white/60 font-light leading-relaxed">{leader.description}</p>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>

                <div className="lg:col-span-8 space-y-12">
                    {nation.keyFigures && nation.keyFigures.length > 0 && (
                        <section>
                            <h3 className="text-3xl font-serif text-white mb-8 flex items-baseline gap-4">
                                <span className={`${themeColors.title} font-cursive text-4xl`}>01.</span> Key Figures
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {nation.keyFigures.map((figure, idx) => (
                                    <div key={idx} className={`p-4 rounded-lg border ${themeColors.border} ${themeColors.cardBg} hover:bg-white/10 transition-colors group flex flex-col sm:flex-row gap-4 items-start`}>
                                        <div className="w-full sm:w-24 sm:h-32 shrink-0 overflow-hidden rounded-md border border-white/10 shadow-lg bg-black/50">
                                            {figure.image ? <img src={figure.image} alt={figure.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" /> : <div className={`w-full h-full flex items-center justify-center text-white/20`}>?</div>}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                                                <div>
                                                    <h4 className="text-lg font-serif font-bold text-white group-hover:text-[#F5E6D3] transition-colors leading-tight">{figure.name}</h4>
                                                    <p className={`text-xs ${themeColors.sub} uppercase tracking-wider mt-1`}>{figure.role}</p>
                                                </div>
                                                {figure.age && <span className="text-xs text-white/30 border border-white/10 px-2 py-0.5 rounded-full whitespace-nowrap">{figure.age}</span>}
                                            </div>
                                            <ul className="space-y-1 mt-2">
                                                {figure.description.map((desc, dIdx) => (
                                                    <li key={dIdx} className="text-sm text-white/70 font-light leading-relaxed flex items-start gap-2">
                                                        <span className={`mt-1.5 w-1 h-1 rounded-full bg-current opacity-50 shrink-0`}></span>
                                                        {desc}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    <section>
                        <h3 className="text-3xl font-serif text-white mb-6 flex items-baseline gap-4">
                            <span className={`${themeColors.title} font-cursive text-4xl`}>02.</span> Characteristics
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {nation.characteristics.map((char, i) => (
                                <div key={i} className={`p-4 rounded-lg border border-white/5 bg-white/5 flex gap-4 items-start hover:bg-white/10 transition-colors`}>
                                    <span className={`text-2xl mt-[-4px] ${themeColors.sub}`}>✦</span>
                                    <p className="text-[#F5E6D3]/90 leading-relaxed font-light">{char}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-3xl font-serif text-white mb-6 flex items-baseline gap-4">
                            <span className={`${themeColors.title} font-cursive text-4xl`}>03.</span> Power Groups
                        </h3>
                        <div className="space-y-4">
                            {nation.keyGroups.map((group, idx) => (
                                <div key={idx} className="group relative pl-8 py-2 border-l border-white/10">
                                    <div className={`absolute left-[-1px] top-0 bottom-0 w-1 bg-current opacity-50 scale-y-0 group-hover:scale-y-100 transition-transform origin-top`}></div>
                                    <h4 className={`text-xl font-serif font-bold text-white mb-1`}>{group.name}</h4>
                                    <p className="text-white/60 leading-relaxed font-light">{group.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h3 className="text-3xl font-serif text-white mb-6 flex items-baseline gap-4">
                            <span className={`${themeColors.title} font-cursive text-4xl`}>04.</span> Foreign Affairs
                        </h3>
                        <div className="grid grid-cols-1 gap-6">
                            {nation.relations.map((rel, idx) => (
                                <div key={idx} className={`relative p-6 rounded-xl border ${themeColors.border} bg-gradient-to-br from-white/5 to-transparent`}>
                                    <div className="flex justify-between items-start mb-4 border-b border-white/10 pb-4">
                                        <h5 className="text-xl font-serif font-bold text-white">{rel.target}</h5>
                                        <span className={`px-3 py-1 text-xs uppercase tracking-widest border rounded-full ${themeColors.border} ${themeColors.title}`}>{rel.relationship}</span>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {rel.description.map((desc, dIdx) => (
                                            <li key={dIdx} className="text-sm text-white/70 flex items-start gap-2"><span className="opacity-50">•</span> {desc}</li>
                                        ))}
                                    </ul>
                                    <div className="bg-black/30 p-4 rounded-lg">
                                        <p className="font-serif italic text-white/80">
                                            <span className={`${themeColors.sub} not-italic font-sans text-xs uppercase tracking-wider mr-2 block mb-1 opacity-70`}>Perspective</span> 
                                            "{rel.view}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {nation.history && (
                        <section className="pb-12 scroll-mt-24" id="history-archives">
                             <h3 className="text-3xl font-serif text-white mb-6 flex items-baseline gap-4">
                                <span className={`${themeColors.title} font-cursive text-4xl`}>05.</span> Historical Archives
                             </h3>
                             
                             {!isHistoryOpen ? (
                               renderHistoryBanner()
                             ) : (
                               <div className="relative group animate-fadeIn">
                                  <button onClick={() => setIsHistoryOpen(false)} className="absolute -top-4 right-4 z-20 px-4 py-1 bg-amber-900/80 text-amber-100 text-xs rounded-full border border-amber-600/50 hover:bg-amber-800 transition-colors shadow-lg">← Back to Cover</button>
                                  <div className="relative overflow-hidden parchment-bg p-10 sm:p-16 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-t-[30px] border-b-[30px] border-amber-950/20">
                                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/paper-fibers.png')] opacity-40 pointer-events-none"></div>
                                      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/10 via-transparent to-amber-900/10 pointer-events-none"></div>
                                      <div className="absolute top-4 left-4 text-amber-900/30 text-4xl font-serif opacity-50">❧</div>
                                      <div className="absolute top-4 right-4 text-amber-900/30 text-4xl font-serif opacity-50 rotate-90">❧</div>
                                      <div className="absolute bottom-4 left-4 text-amber-900/30 text-4xl font-serif opacity-50 -rotate-90">❧</div>
                                      <div className="absolute bottom-4 right-4 text-amber-900/30 text-4xl font-serif opacity-50 rotate-180">❧</div>

                                      <div className="relative z-10 font-serif text-amber-950/90 selection:bg-amber-900/20">
                                          <div className="whitespace-pre-wrap leading-relaxed text-lg sm:text-xl tracking-tight">
                                              {nation.history.split('\n\n').map((paragraph, pIdx) => {
                                                  // Identify if this is the initial title block (starting with ***)
                                                  if (paragraph.startsWith('***')) {
                                                      const titleLines = paragraph.replace('***', '').trim().split('\n');
                                                      return (
                                                          <div key={pIdx} className="text-center mb-16 space-y-2">
                                                              {titleLines.map((line, lIdx) => (
                                                                  <p key={lIdx} className={`${lIdx === 0 ? 'text-2xl sm:text-3xl font-black text-amber-900 mb-4' : 'text-lg sm:text-xl font-bold opacity-80 text-amber-950'}`}>
                                                                      {line}
                                                                  </p>
                                                              ))}
                                                              <div className="w-24 h-px bg-amber-900/20 mx-auto mt-6"></div>
                                                          </div>
                                                      );
                                                  }

                                                  // Special check for signature block
                                                  const isSignature = paragraph.includes('— 마도왕국 기록관') || 
                                                                    paragraph.includes('세레니아 벨로트') || 
                                                                    paragraph.includes('여신 루미엘의 이름으로');
                                                  
                                                  if (isSignature) {
                                                      const lines = paragraph.split('\n');
                                                      return (
                                                          <div key={pIdx} className="mt-24 pt-12 border-t border-amber-900/10 flex flex-col items-center justify-center text-center">
                                                              {nation.id === 'elgrain' ? (
                                                                <>
                                                                    <p className="text-base italic text-amber-900 opacity-60 mb-2">{lines[0]}</p>
                                                                    <div className="flex items-center gap-6">
                                                                        <p className="text-[0.7em] font-serif font-bold text-amber-950">{lines[1] || paragraph}</p>
                                                                        <p className="text-4xl font-cursive text-amber-900 leading-none">Serenia Bellot</p>
                                                                    </div>
                                                                </>
                                                              ) : (
                                                                <p className="text-2xl font-serif italic text-amber-900/80 drop-shadow-sm">
                                                                    {paragraph}
                                                                </p>
                                                              )}
                                                          </div>
                                                      );
                                                  }

                                                  // Identifiers for specific Roman numeral or Chapter bold headings
                                                  const boldHeadings = [
                                                    "Ⅰ.", "Ⅱ.", "Ⅲ.", "Ⅳ.", "Ⅴ.", "Ⅵ.", "Ⅶ.", "Ⅷ.",
                                                    "제1장", "제2장", "제3장", "제4장", "제5장", "제6장", "제7장", "제8장", "종장",
                                                    "서문", "맺음말"
                                                  ];
                                                  const isBoldHeading = boldHeadings.some(h => paragraph.startsWith(h));

                                                  if (isBoldHeading) {
                                                      return (
                                                          <h4 key={pIdx} className="text-2xl font-bold text-amber-900 mt-12 mb-6 border-b border-amber-900/10 pb-2">
                                                              {paragraph}
                                                          </h4>
                                                      );
                                                  }

                                                  // Handle bullet points/lists in parchment
                                                  if (paragraph.includes('— ')) {
                                                      const bulletPoints = paragraph.split('\n');
                                                      return (
                                                        <div key={pIdx} className="mb-8 space-y-3">
                                                            {bulletPoints.map((bp, bpIdx) => (
                                                                <p key={bpIdx} className={`${bp.startsWith('—') ? 'pl-8 italic text-amber-900/90 leading-relaxed' : 'font-normal mb-2'}`}>
                                                                    {bp}
                                                                </p>
                                                            ))}
                                                        </div>
                                                      );
                                                  }
                                                  
                                                  // Regular paragraph
                                                  return (
                                                      <p key={pIdx} className="mb-8 first-letter:text-4xl first-letter:font-fancy first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:text-amber-900 font-normal leading-relaxed text-amber-950/90">
                                                          {paragraph}
                                                      </p>
                                                  );
                                              })}
                                          </div>
                                          <div className="mt-16 text-center text-3xl text-amber-900/40">❦</div>
                                      </div>
                                  </div>
                                  <div className="absolute top-0 bottom-0 -left-4 w-4 bg-gradient-to-r from-black/60 to-transparent"></div>
                                  <div className="absolute top-0 bottom-0 -right-4 w-4 bg-gradient-to-l from-black/60 to-transparent"></div>
                               </div>
                             )}

                             <style>{`
                                .parchment-bg { background-color: #f4e4bc; background-image: radial-gradient(circle at center, #f4e4bc 0%, #e8d1a0 100%); color: #2c1e1e; }
                                .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
                                @keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                             `}</style>
                        </section>
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NationDetailModal;