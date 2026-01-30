'use client';

import React from 'react';

export default function SpandukIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Tiang spanduk */}
      <rect 
        x="3" 
        y="2" 
        width="2" 
        height="20" 
        fill="currentColor"
      />
      
      {/* Bendera/spanduk utama */}
      <path 
        d="M5 4C5 3.44772 5.44772 3 6 3H19C19.5523 3 20 3.44772 20 4V10C20 10.5523 19.5523 11 19 11H6C5.44772 11 5 10.5523 5 10V4Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Lipatan bawah spanduk */}
      <path 
        d="M5 10L7 12L9 10L11 12L13 10L15 12L17 10L19 12L20 11V10H5Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Teks di spanduk */}
      <path 
        d="M8 6H16M9 8H15" 
        stroke="white" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Detail wave di spanduk */}
      <path 
        d="M7 11V12M9 11V12M11 11V12M13 11V12M15 11V12M17 11V12" 
        stroke="currentColor" 
        strokeWidth="0.5" 
        opacity="0.3"
      />
      
      {/* Ujung tiang */}
      <circle 
        cx="4" 
        cy="2" 
        r="1" 
        fill="currentColor"
      />
    </svg>
  );
}
