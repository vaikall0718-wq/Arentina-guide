import React from 'react';
import { Nation } from '../types';

interface NationCardProps {
  nation: Nation;
  onClick: (nation: Nation) => void;
}

const NationCard: React.FC<NationCardProps> = ({ nation, onClick }) => {
  // Theme configurations for "Royal Classy" style
  const getThemeConfig = (theme: string) => {
    switch (theme) {
      case 'astea':
        return {
          frameColor: 'border-astea-accent', // Gold
          bgColor: 'bg-[#2a0a0a]', // Dark Red/Black
          textColor: 'text-astea-accent',
          subTextColor: 'text-red-200/70',
          overlayGradient: 'from-black/60 via-transparent to-black/80',
          hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]',
        };
      case 'lanoer':
        return {
          frameColor: 'border-lanoer-accent', // Silver
          bgColor: 'bg-[#0f172a]', // Dark Navy
          textColor: 'text-lanoer-accent',
          subTextColor: 'text-blue-200/70',
          overlayGradient: 'from-black/50 via-transparent to-black/80',
          hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(226,232,240,0.3)]',
        };
      case 'elgrain':
        return {
          frameColor: 'border-elgrain-accent', // Lavender/Crystal
          bgColor: 'bg-[#1a0b2e]', // Dark Purple
          textColor: 'text-elgrain-accent',
          subTextColor: 'text-purple-200/70',
          overlayGradient: 'from-black/60 via-transparent to-black/80',
          hoverGlow: 'group-hover:shadow-[0_0_40px_rgba(192,132,252,0.3)]',
        };
      default:
        return {
          frameColor: 'border-slate-500',
          bgColor: 'bg-slate-900',
          textColor: 'text-slate-300',
          subTextColor: 'text-slate-400',
          overlayGradient: 'from-black/50 via-transparent to-black/80',
          hoverGlow: '',
        };
    }
  };

  const theme = getThemeConfig(nation.colorTheme);

  return (
    <div 
      onClick={() => onClick(nation)}
      className={`
        relative group cursor-pointer 
        w-full h-[500px] 
        transition-all duration-700 hover:-translate-y-2
        ${theme.hoverGlow}
      `}
    >
      {/* Outer Gold Frame */}
      <div className={`
        absolute inset-0 z-20 
        border-[3px] double ${theme.frameColor}
        pointer-events-none
        rounded-t-full rounded-b-lg
        shadow-2xl
      `}></div>
      
      {/* Inner Thin Border for detail */}
      <div className="absolute inset-2 z-20 border border-white/10 rounded-t-full rounded-b-lg pointer-events-none"></div>

      {/* Main Container */}
      <div className={`
        absolute inset-0 overflow-hidden rounded-t-full rounded-b-lg 
        ${theme.bgColor} flex flex-col
      `}>
        
        {/* Top: Image Section (Card Banner) */}
        <div className="relative h-[65%] w-full overflow-hidden">
             {/* Image - ensured visible with minimal overlay */}
             <img 
                src={nation.image} 
                alt={nation.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
             />
             
             {/* Subtle vignette for readability, not blocking image */}
             <div className={`absolute inset-0 bg-gradient-to-b ${theme.overlayGradient} opacity-60 group-hover:opacity-40 transition-opacity duration-700`}></div>
        </div>

        {/* Bottom: Content Section */}
        <div className="relative h-[35%] flex flex-col items-center justify-start pt-6 px-6 text-center z-10 bg-texture">
            {/* Divider Line */}
            <div className={`w-12 h-0.5 ${theme.textColor} mb-4 opacity-50`}></div>

            {/* Title */}
            <h3 className={`text-3xl font-fancy font-bold mb-2 ${theme.textColor} drop-shadow-md`}>
                {nation.name}
            </h3>

            {/* Description */}
            <p className={`text-sm font-serif italic ${theme.subTextColor} line-clamp-3 leading-relaxed opacity-90`}>
                "{nation.shortDescription}"
            </p>

            {/* Decorative bottom element */}
            <div className={`mt-auto mb-4 text-2xl ${theme.textColor} opacity-80 group-hover:animate-pulse`}>
                ❖
            </div>
        </div>
      </div>
    </div>
  );
};

export default NationCard;