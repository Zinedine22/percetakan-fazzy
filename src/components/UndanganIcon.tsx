'use client';

import React from 'react';

export default function UndanganIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Amplop utama */}
      <path 
        d="M3 8L12 13L21 8V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V8Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Flap amplop - bagian atas */}
      <path 
        d="M3 8L12 3L21 8" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* Segitiga flap amplop */}
      <path 
        d="M3 8L12 13L21 8" 
        fill="currentColor" 
        opacity="0.3"
      />
      
      {/* Kartu undangan di dalam */}
      <rect 
        x="7" 
        y="10" 
        width="10" 
        height="8" 
        rx="1" 
        fill="white" 
        opacity="0.9"
      />
      
      {/* Header kartu undangan */}
      <rect 
        x="8" 
        y="11" 
        width="8" 
        height="2" 
        fill="currentColor" 
        opacity="0.7"
      />
      
      {/* Teks di kartu */}
      <path 
        d="M9 14.5H15M10 16H14" 
        stroke="currentColor" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Decorative element */}
      <circle 
        cx="16" 
        cy="12" 
        r="1" 
        fill="currentColor" 
        opacity="0.5"
      />
      
      {/* Stamp/seal di amplop */}
      <circle 
        cx="18" 
        cy="6" 
        r="1.5" 
        fill="none" 
        stroke="white" 
        strokeWidth="1"
        opacity="0.7"
      />
      
      {/* Heart di dalam seal */}
      <path 
        d="M17.5 5.5C17.5 5.2 17.7 5 18 5C18.3 5 18.5 5.2 18.5 5.5C18.5 5.8 18.3 6 18 6C17.7 6 17.5 5.8 17.5 5.5Z" 
        fill="white" 
        opacity="0.8"
      />
    </svg>
  );
}
