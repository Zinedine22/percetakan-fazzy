'use client';

import React from 'react';

export default function NotaIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Kertas nota utama */}
      <path 
        d="M6 3C5.44772 3 5 3.44772 5 4V20C5 20.5523 5.44772 21 6 21H18C18.5523 21 19 20.5523 19 20V4C19 3.44772 18.5523 3 18 3H6Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Header nota - bagian atas */}
      <rect 
        x="7" 
        y="5" 
        width="10" 
        height="3" 
        fill="white" 
        opacity="0.8"
      />
      
      {/* Garis-garis nota */}
      <path 
        d="M7 10H17M7 12H17M7 14H14M7 16H15M7 18H13" 
        stroke="white" 
        strokeWidth="1" 
        strokeLinecap="round"
        opacity="0.6"
      />
      
      {/* Sisi bergerigi khas nota */}
      <path 
        d="M19 7L21 9L19 11L21 13L19 15L21 17L19 19" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.7"
      />
      
      {/* Nomor/nomor urut */}
      <rect 
        x="7" 
        y="5" 
        width="2" 
        height="1" 
        fill="currentColor"
        opacity="0.8"
      />
      <rect 
        x="10" 
        y="5" 
        width="2" 
        height="1" 
        fill="currentColor"
        opacity="0.8"
      />
      <rect 
        x="13" 
        y="5" 
        width="2" 
        height="1" 
        fill="currentColor"
        opacity="0.8"
      />
      
      {/* Total/amount di bawah */}
      <path 
        d="M12 19H17" 
        stroke="white" 
        strokeWidth="1.5" 
        strokeLinecap="round"
        opacity="0.9"
      />
      
      {/* Cap/stempel logo */}
      <circle 
        cx="15" 
        cy="7.5" 
        r="1.5" 
        fill="none" 
        stroke="white" 
        strokeWidth="0.5"
        opacity="0.5"
      />
    </svg>
  );
}
