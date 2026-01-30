'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Printer, Zap, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/5.jpg',
    '/images/6.jpg',
    '/images/7.jpg',
    '/images/8.jpg',
    '/images/9.jpg',
    '/images/10.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-black to-orange-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              Solusi <span className="text-gradient">Digital Printing</span> Terpercaya
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Mitra strategis pengadaan cetak untuk sektor publik maupun komersial. 
              Wujudkan materi promosi, kebutuhan event, dan administrasi Anda dengan 
              standar kualitas terbaik.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12">
              <a
                href="#contact"
                className="btn-primary inline-flex items-center justify-center"
                suppressHydrationWarning={true}
              >
                Konsultasi Gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#services"
                className="px-6 py-3 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-900/20 transition-all duration-300"
              >
                Lihat Layanan
              </a>
            </div>

            {/* Features */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-900/50 rounded-lg flex items-center justify-center">
                  <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Kualitas Premium</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Hasil cetak terbaik</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-900/50 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Cepat & Tepat</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Pengerjaan tepat waktu</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center space-x-3"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black/50 rounded-lg flex items-center justify-center border border-orange-500">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm sm:text-base">Bergaransi</h3>
                  <p className="text-xs sm:text-sm text-gray-300">Jaminan kepuasan</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              {images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Digital Printing Services ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 1.1
                  }}
                  transition={{ 
                    opacity: { duration: 1, ease: "easeInOut" },
                    scale: { duration: 3, ease: "easeInOut" }
                  }}
                />
              ))}
              
              {/* Progress indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
