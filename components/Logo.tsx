import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      aria-label="MAAGA LTD Logo"
    >
      <defs>
        <linearGradient id="logoGradientDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#021226" />
          <stop offset="100%" stopColor="#004080" />
        </linearGradient>
        
        <linearGradient id="logoGradientLight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2E8CE0" /> {/* Brighter Electric Blue */}
          <stop offset="100%" stopColor="#005EB8" />
        </linearGradient>

        <filter id="logoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      
      <g filter="url(#logoShadow)">
        {/* Left Vertical Pillar - Full Height */}
        <path d="M0 100 L0 0 L22 0 L22 100 Z" fill="url(#logoGradientDark)" />
        
        {/* Right Vertical Pillar - Full Height */}
        <path d="M100 100 L100 0 L78 0 L78 100 Z" fill="url(#logoGradientDark)" />
        
        {/* Center Folded Ribbon - Maximized Impact */}
        {/* Coordinates extended to touch edges (0,0 and 100,0) and dip deeper */}
        <path 
            d="M0 0 L 50 65 L 100 0 L 78 0 L 50 35 L 22 0 Z" 
            fill="url(#logoGradientLight)" 
        />
      </g>
    </svg>
  );
};

export default Logo;