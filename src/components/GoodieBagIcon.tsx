'use client';

import React from 'react';

export default function GoodieBagIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      className={className}
    >
      {/* Badan tas */}
      <path 
        d="M6 8C6 6.89543 6.89543 6 8 6H16C17.1046 6 18 6.89543 18 8V20C18 21.1046 17.1046 22 16 22H8C6.89543 22 6 21.1046 6 20V8Z" 
        fill="currentColor" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      
      {/* Handle tas */}
      <path 
        d="M9 6C9 3.79086 10.7909 2 13 2C15.2091 2 17 3.79086 17 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Detail lipatan tas */}
      <path 
        d="M6 10H18" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        opacity="0.3"
      />
      
      {/* Logo/detail di depan tas */}
      <circle 
        cx="12" 
        cy="14" 
        r="2" 
        fill="white" 
        opacity="0.2"
      />
    </svg>
  );
}
