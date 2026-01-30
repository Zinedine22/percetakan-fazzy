'use client';

import React from 'react';

export default function PlakatIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Papan plakat utama */}
      <path 
        d="M6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8V16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16V8Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Frame/border dalam */}
      <path 
        d="M8 9H16V15H8V9Z" 
        fill="none" 
        stroke="white" 
        strokeWidth="1"
        opacity="0.6"
      />
      
      {/* Teks di plakat - baris atas */}
      <path 
        d="M10 11H14" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Teks di plakat - baris bawah */}
      <path 
        d="M11 13H13" 
        stroke="white" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Stand/tiang penyangga */}
      <rect 
        x="11" 
        y="17" 
        width="2" 
        height="4" 
        fill="currentColor"
      />
      
      {/* Alas/base */}
      <ellipse 
        cx="12" 
        cy="21.5" 
        rx="3" 
        ry="1" 
        fill="currentColor"
      />
      
      {/* Badge/circle achievement */}
      <circle 
        cx="12" 
        cy="5" 
        r="2" 
        fill="currentColor"
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Bintang kecil di badge */}
      <path 
        d="M12 3.5L12.3 4.4L13.2 4.4L12.5 4.9L12.8 5.8L12 5.3L11.2 5.8L11.5 4.9L10.8 4.4L11.7 4.4L12 3.5Z" 
        fill="white"
        opacity="0.9"
      />
    </svg>
  );
}
