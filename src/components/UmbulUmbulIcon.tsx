'use client';

import React from 'react';

export default function UmbulUmbulIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Tiang utama */}
      <rect 
        x="2" 
        y="2" 
        width="2" 
        height="20" 
        fill="currentColor"
      />
      
      {/* Bendera utama - bentuk umbul-umbul */}
      <path 
        d="M4 4C4 3.44772 4.44772 3 5 3H18C18.5523 3 19 3.44772 19 4V10C19 10.5523 18.5523 11 18 11H5C4.44772 11 4 10.5523 4 10V4Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="1"
      />
      
      {/* Bentuk segitiga khas umbul-umbul */}
      <path 
        d="M19 7L22 9L19 11V7Z" 
        fill="currentColor"
      />
      
      {/* Lipatan bawah umbul-umbul */}
      <path 
        d="M4 10L6 12L8 10L10 12L12 10L14 12L16 10L18 12L19 11V10H4Z" 
        fill="currentColor" 
        opacity="0.8"
      />
      
      {/* Teks di umbul-umbul */}
      <path 
        d="M7 6H16M8 8H15" 
        stroke="white" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Detail wave di samping */}
      <path 
        d="M19 4L19 11" 
        stroke="currentColor" 
        strokeWidth="1.5"
        opacity="0.6"
      />
      
      {/* Ujung tiang */}
      <circle 
        cx="3" 
        cy="2" 
        r="1" 
        fill="currentColor"
      />
      
      {/* Base/tiang penyangga bawah */}
      <rect 
        x="1" 
        y="20" 
        width="4" 
        height="2" 
        rx="1" 
        fill="currentColor"
      />
      
      {/* Tali pengikat */}
      <path 
        d="M4 4L12 2L19 4" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
        opacity="0.7"
      />
      
      {/* Detail dekoratif */}
      <circle 
        cx="16" 
        cy="7" 
        r="1" 
        fill="white" 
        opacity="0.6"
      />
    </svg>
  );
}
