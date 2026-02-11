'use client';

import { useState, useEffect } from 'react';
import { AlertTriangle, Info, Zap, Wrench } from 'lucide-react';

interface SectionInfo {
  id: string;
  difficulty: 'easy' | 'medium' | 'hard';
  description: string;
  tips: string[];
}

const sections: SectionInfo[] = [
  {
    id: 'hero',
    difficulty: 'easy',
    description: 'Hero section dengan headline dan CTA',
    tips: [
      'Edit text content langsung di Hero component',
      'Ubah background gradient di globals.css',
      'Adjust responsive breakpoints untuk mobile'
    ]
  },
  {
    id: 'services',
    difficulty: 'hard',
    description: 'Services grid dengan complex layout',
    tips: [
      'Perhatikan grid responsive behavior',
      'Check image paths di public/services/',
      'Review hover animations dan transitions',
      'Test horizontal scroll pada laptop screens'
    ]
  },
  {
    id: 'gallery',
    difficulty: 'medium',
    description: 'Gallery dengan dynamic content',
    tips: [
      'Verify semua image paths exist',
      'Check framer-motion animations',
      'Review articleContent data structure',
      'Test responsive grid layout'
    ]
  },
  {
    id: 'contact',
    difficulty: 'medium',
    description: 'Contact form dengan validation',
    tips: [
      'Review form validation logic',
      'Check API integration untuk submit',
      'Test responsive form layout',
      'Verify success/error handling'
    ]
  },
  {
    id: 'header',
    difficulty: 'medium',
    description: 'Fixed header dengan scroll detection',
    tips: [
      'Check ScrollDirectionProvider logic',
      'Review CSS transitions dan animations',
      'Test mobile menu functionality',
      'Verify logo paths dan sizing'
    ]
  },
  {
    id: 'footer',
    difficulty: 'easy',
    description: 'Footer dengan links dan social',
    tips: [
      'Update contact information',
      'Add/remove social media links',
      'Adjust responsive layout',
      'Customize copyright text'
    ]
  }
];

export default function SectionHighlighter() {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [showHints, setShowHints] = useState(false);

  useEffect(() => {
    // Show hints automatically on difficult sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            const section = sections.find(s => s.id === sectionId);
            
            if (section && (section.difficulty === 'hard' || section.difficulty === 'medium')) {
              setActiveSection(sectionId);
              setShowHints(true);
              
              // Auto-hide after 5 seconds
              setTimeout(() => {
                setShowHints(false);
              }, 5000);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 border-green-300';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'hard': return 'bg-red-100 text-red-800 border-red-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <Info className="w-4 h-4" />;
      case 'medium': return <Zap className="w-4 h-4" />;
      case 'hard': return <AlertTriangle className="w-4 h-4" />;
      default: return <Wrench className="w-4 h-4" />;
    }
  };

  if (!showHints || !activeSection) return null;

  const currentSection = sections.find(s => s.id === activeSection);
  if (!currentSection) return null;

  return (
    <div className="fixed top-20 right-4 z-40 max-w-sm">
      <div className={`border rounded-lg shadow-lg p-4 ${getDifficultyColor(currentSection.difficulty)}`}>
        <div className="flex items-center space-x-2 mb-3">
          {getDifficultyIcon(currentSection.difficulty)}
          <h3 className="font-semibold">Section: {currentSection.id}</h3>
          <button
            onClick={() => setShowHints(false)}
            className="ml-auto text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
        
        <p className="text-sm mb-3">{currentSection.description}</p>
        
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide">💡 Tips:</p>
          <ul className="text-xs space-y-1">
            {currentSection.tips.map((tip, index) => (
              <li key={index} className="flex items-start space-x-1">
                <span className="mt-0.5">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 pt-3 border-t border-current border-opacity-20">
          <p className="text-xs">
            Difficulty: <span className="font-semibold">{currentSection.difficulty}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
