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
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 backdrop-blur-sm shadow-lg z-50 rounded-b-[30px] max-w-[1280px] w-[95%]">
      <div className="px-6">
        <div className="flex items-center justify-between h-16 gap-8">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Logo Container - Tempat untuk logo */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
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
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'Avigea, sans-serif' }}>
              Percetakan Fazzy
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="https://wa.me/62811734962"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-orange-600 px-5 py-2 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-yellow-50"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
                className="flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Konsultasi Gratis!</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-white hover:text-yellow-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            suppressHydrationWarning={true}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 bg-black/95 backdrop-blur-sm border border-orange-900 rounded-b-[30px]">
            <div className="px-4 pt-4 pb-4 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-yellow-300 hover:bg-orange-900/20 rounded-md font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-orange-900">
                <a
                  href="https://wa.me/62811734962"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white text-orange-600 px-4 py-2 rounded-full text-sm font-bold hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-yellow-50 w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="flex-shrink-0"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>Konsultasi Gratis!</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
