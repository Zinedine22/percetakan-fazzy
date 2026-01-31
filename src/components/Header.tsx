'use client';

import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '#home' },
    { name: 'Layanan', href: '#services' },
    { name: 'Galeri', href: '#gallery' },
    { name: 'Tentang', href: '#about' },
    { name: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Logo Container - Tempat untuk logo */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center">
              <img 
                src="/logo.png" 
                alt="Percetakan Fazzy Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback jika logo tidak ada
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gradient" style={{ fontFamily: 'Avigea, sans-serif' }}>
              Percetakan Fazzy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-orange-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center text-white">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">+62 811734962 (Admin 2)</span>
            </div>
            <div className="flex items-center text-white">
              <Mail className="w-4 h-4 mr-2" />
              <span className="text-sm">arjanggi.bkt@gmail.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-300 hover:text-orange-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            suppressHydrationWarning={true}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-orange-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-orange-400 hover:bg-orange-900/20 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t">
                <div className="flex items-center text-white px-3 py-2">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="text-sm">+62 811734962 (Admin 2)</span>
                </div>
                <div className="flex items-center text-white px-3 py-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <span className="text-sm">arjanggi.bkt@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
