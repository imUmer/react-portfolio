import React from 'react';

export default function GlassBadge({ text, icon }) {
  return (
    <div className="relative flex items-center gap-2 p-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl w-fit px-5 shadow-lg hover:bg-white/20">
      {/* Light reflection on the top-left border */}
      <div className="absolute -top-1 -left-1 w-16 h-16 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-md opacity-50 pointer-events-none"></div>

      {/* Icon */}
      {icon && (
        <img
          src={icon}
          alt="icon"
          width="24px"
          height="24px"
          className="z-10"
        />
      )}

      {/* Text */}

    </div>
  );
}