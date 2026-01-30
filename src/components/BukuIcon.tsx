'use client';

import React from 'react';

export default function BukuIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Cover belakang - 3D effect */}
      <path 
        d="M4 6C4 5.44772 4.44772 5 5 5H19C19.5523 5 20 5.44772 20 6V18C20 18.5523 19.5523 19 19 19H5C4.44772 19 4 18.5523 4 18V6Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1.5"
      />
      
      {/* Spine buku - 3D effect */}
      <path 
        d="M19 5L20 4V20L19 19" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Halaman buku - terlihat dari samping */}
      <path 
        d="M5 7L18 7V17L5 17Z" 
        fill="white" 
        opacity="0.95"
      />
      
      {/* Garis halaman individual */}
      <path 
        d="M6 8L17 8M6 10L16 10M6 12L15 12M6 14L16 14M6 16L14 16" 
        stroke="currentColor" 
        strokeWidth="0.6" 
        strokeLinecap="round"
        opacity="0.5"
      />
      
      {/* Cover depan - 3D effect */}
      <path 
        d="M18 7L20 5V17L18 17" 
        fill="currentColor" 
        opacity="0.9"
      />
      
      {/* Judul di cover depan */}
      <rect 
        x="18.5" 
        y="9" 
        width="1" 
        height="4" 
        fill="white" 
        opacity="0.7"
      />
      
      {/* Detail di cover depan */}
      <circle 
        cx="19" 
        cy="15" 
        r="0.3" 
        fill="white" 
        opacity="0.6"
      />
      
      {/* Bookmark yang keluar */}
      <path 
        d="M19 5L17 7L19 9V5Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Bayangan 3D */}
      <path 
        d="M4 19L20 19" 
        stroke="currentColor" 
        strokeWidth="1" 
        opacity="0.3"
      />
      
      {/* Edge highlight untuk 3D effect */}
      <path 
        d="M5 7L5 17" 
        stroke="white" 
        strokeWidth="0.5" 
        opacity="0.4"
      />
      
      {/* Top edge untuk depth */}
      <path 
        d="M4 6L20 4" 
        stroke="currentColor" 
        strokeWidth="0.8" 
        opacity="0.5"
      />
    </svg>
  );
}
