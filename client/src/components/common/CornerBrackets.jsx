import React from 'react';

/**
 * Editorial L-bracket corner frames conforming to approved design specifications
 * Desktop: 40px length, Tablet: 24px, Mobile: 16px
 */
export default function CornerBrackets({ className = "inset-4 sm:inset-6 md:inset-8" }) {
  return (
    <div className={`pointer-events-none absolute ${className} z-20`}>
      {/* Top Left */}
      <div className="absolute top-0 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 border-t border-l border-cream-light/60" />
      {/* Top Right */}
      <div className="absolute top-0 right-0 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 border-t border-r border-cream-light/60" />
      {/* Bottom Left */}
      <div className="absolute bottom-0 left-0 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 border-b border-l border-cream-light/60" />
      {/* Bottom Right */}
      <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-6 sm:h-6 md:w-10 md:h-10 border-b border-r border-cream-light/60" />
    </div>
  );
}
