'use client';

import React from 'react';

export default function BannerIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Tiang kiri */}
      <rect 
        x="2" 
        y="2" 
        width="2" 
        height="20" 
        fill="currentColor"
      />
      
      {/* Tiang kanan */}
      <rect 
        x="20" 
        y="2" 
        width="2" 
        height="20" 
        fill="currentColor"
      />
      
      {/* Banner utama - bentuk X */}
      <path 
        d="M4 6L20 6V14L4 14Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Lipatan/banner detail */}
      <path 
        d="M4 6L6 8L8 6L10 8L12 6L14 8L16 6L18 8L20 6" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        opacity="0.5"
      />
      
      {/* Teks di banner */}
      <path 
        d="M8 9H16M10 11H14" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.8"
      />
      
      {/* Tali pengikat */}
      <path 
        d="M4 6L12 2L20 6" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* Detail gantungan */}
      <circle 
        cx="4" 
        cy="6" 
        r="1" 
        fill="currentColor"
      />
      <circle 
        cx="20" 
        cy="6" 
        r="1" 
        fill="currentColor"
      />
      
      {/* Base platform */}
      <rect 
        x="1" 
        y="20" 
        width="22" 
        height="2" 
        rx="1" 
        fill="currentColor"
      />
    </svg>
  );
}
