'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Digital Printing', href: '#services' },
      { name: 'Outdoor Advertising', href: '#services' },
      { name: 'Merchandise', href: '#services' },
      { name: 'Large Format', href: '#services' }
    ],
    company: [
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Portofolio', href: '#gallery' },
      { name: 'Kontak', href: '#contact' },
      { name: 'Karir', href: '#' }
    ],
    support: [
      { name: 'FAQ', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'Bantuan', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/percetakanfazzy', label: 'Instagram' }
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-gray-900 to-orange-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg sm:text-xl font-bold text-gradient mb-4" style={{ fontFamily: 'Cocogoose, sans-serif' }}>
                "Mutu Kecepatan Utama Kami."
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Mitra terpercaya untuk semua kebutuhan digital printing dan advertising di berbagai sektor. 
                
              </p>
              
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start text-gray-300">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    Jl. Pangeran Natadirja Depan RB TV No.5 KM 6, Jl. Gedang, Kec. Gading Cempaka, Kota Bengkulu, Bengkulu [38225]
                  </span>
                </div>
                <div className="flex items-start text-gray-300">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-orange-400 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm leading-relaxed">
                    <div>+62 811-73-5865 (Admin 1)</div>
                    <div>+62 811-73-4962 (Admin 2)</div>
                  </div>
                </div>
                <div className="flex items-start text-gray-300">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-orange-400 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm break-all">arjanggi.bkt@gmail.com</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-6">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Media & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 mt-12 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <span className="text-gray-400 text-xs sm:text-sm">Ikuti Kami:</span>
              <div className="flex items-center space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-gray-400 text-xs sm:text-sm text-center">
              <p>&copy; {currentYear} Percetakan Fazzy. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>  

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>Made with ❤️ in Indonesia | v2.0 | Updated: Jan 2025</p>
            <div className="flex items-center space-x-4 mt-2 md:mt-0">
              <span>Powered by Next.js</span>
              <span>•</span>
              <span>Hosted on Vercel</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
