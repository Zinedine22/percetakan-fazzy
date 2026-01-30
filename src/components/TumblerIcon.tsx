import React from 'react';

interface TumblerIconProps {
  className?: string;
}

export default function TumblerIcon({ className }: TumblerIconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      {/* Tumbler body - tapered shape */}
      <path d="M8 4h8l-1 14H9z" />
      {/* Tumbler lid */}
      <ellipse cx="12" cy="4" rx="4" ry="1" />
      {/* Tumbler bottom */}
      <ellipse cx="12" cy="18" rx="3" ry="1" />
      {/* Handle/grip area */}
      <path d="M7 8h10" />
      {/* Straw hole indication */}
      <circle cx="12" cy="4" r="0.5" />
    </svg>
  );
}
