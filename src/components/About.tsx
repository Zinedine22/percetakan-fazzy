'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, CheckCircle, Play, X } from 'lucide-react';
import { useState } from 'react';

export default function About() {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const mediaGallery = [
    { type: 'image', src: '/images/workshop-1.jpg', alt: 'Workshop Area 1' },
    { type: 'image', src: '/images/workshop-2.jpg', alt: 'Workshop Area 2' },
    { type: 'video', src: '/videos/production-1.MP4', alt: 'Production Process 1', thumbnail: '/images/video-thumb-1.jpg' },
    { type: 'image', src: '/images/machine-1.jpg', alt: 'Printing Machine 1' },
    { type: 'video', src: '/videos/production-2.mp4', alt: 'Production Process 2', thumbnail: '/images/video-thumb-2.jpg' },
    { type: 'image', src: '/images/team-1.jpg', alt: 'Team Working 1' },
    { type: 'image', src: '/images/finished-product-1.jpg', alt: 'Finished Product 1' },
    { type: 'video', src: '/videos/production-3.mp4', alt: 'Production Process 3', thumbnail: '/images/video-thumb-3.jpg' },
    { type: 'image', src: '/images/office-1.jpg', alt: 'Office Area 1' },
    { type: 'image', src: '/images/machine-2.jpg', alt: 'Printing Machine 2' },
    { type: 'video', src: '/videos/production-4.mp4', alt: 'Production Process 4', thumbnail: '/images/video-thumb-4.jpg' },
    { type: 'image', src: '/images/team-2.jpg', alt: 'Team Working 2' },
    { type: 'image', src: '/images/finished-product-2.jpg', alt: 'Finished Product 2' },
    { type: 'video', src: '/videos/production-5.mp4', alt: 'Production Process 5', thumbnail: '/images/video-thumb-5.jpg' },
    { type: 'image', src: '/images/workshop-3.jpg', alt: 'Workshop Area 3' },
    { type: 'image', src: '/images/machine-3.jpg', alt: 'Printing Machine 3' },
    { type: 'video', src: '/videos/production-6.mp4', alt: 'Production Process 6', thumbnail: '/images/video-thumb-6.jpg' },
    { type: 'image', src: '/images/office-2.jpg', alt: 'Office Area 2' },
    { type: 'image', src: '/images/finished-product-3.jpg', alt: 'Finished Product 3' },
    { type: 'video', src: '/videos/production-7.mp4', alt: 'Production Process 7', thumbnail: '/images/video-thumb-7.jpg' },
  ];

  const openMediaModal = (media: any) => {
    setSelectedMedia(media);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Pelanggan Puas"
    },
    {
      icon: Award,
      value: "20+",
      label: "Tahun Pengalaman"
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Layanan Support"
    },
    {
      icon: CheckCircle,
      value: "100%",
      label: "Kualitas Terjamin"
    }
  ];

  const values = [
    {
      title: "Kualitas Terbaik",
      description: "Menggunakan bahan dan teknologi terkini untuk hasil cetak yang sempurna",
      icon: "🎯"
    },
    {
      title: "Harga Kompetitif",
      description: "Memberikan harga terbaik tanpa mengorbankan kualitas",
      icon: "💰"
    },
    {
      title: "Pengerjaan Cepat",
      description: "Proses produksi efisien dengan waktu pengerjaan yang tepat",
      icon: "⚡"
    },
    {
      title: "Pelayanan Prima",
      description: "Tim profesional siap membantu kebutuhan percetakan Anda",
      icon: "🤝"
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Tentang <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Mitra terpercaya untuk kebutuhan digital printing & advertising <br />bagi korporasi, instansi, dan personal.
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid grid-cols-2 gap-3 lg:gap-8 mb-6 sm:mb-8 md:mb-12 about-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Solusi Percetakan Digital Terintegrasi
            </h3>
            <div className="space-y-4 text-gray-300 text-justify">
              <p>
                Sejak berdiri, kami berkomitmen menghadirkan layanan percetakan digital berkualitas 
                tinggi yang dapat diandalkan oleh berbagai kalangan. Mulai dari kebutuhan personal, 
                organisasi, instansi pemerintah, hingga korporasi besar, kami siap menjadi mitra strategis 
                dalam mewujudkan setiap ide visual dan kebutuhan cetak Anda.
              </p>
              <p>
                Didukung oleh teknologi mesin cetak modern dan tim yang berpengalaman, 
                kami mampu menangani proyek dengan berbagai skala dan kompleksitas. 
                Kami memastikan setiap produk—baik untuk keperluan administrasi, promosi, 
                maupun event—diproduksi dengan standar kualitas terbaik dan presisi waktu yang ketat.
              </p>
              <p>
                Kepuasan mitra adalah prioritas utama kami. 
                Oleh karena itu, Percetakan Fazzy terus berinovasi mengikuti 
                perkembangan teknologi printing terkini untuk memberikan solusi 
                yang efektif, efisien, dan hasil akhir yang memukau bagi setiap pelanggan.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <div className="grid grid-cols-4 gap-1 h-full">
                {mediaGallery.slice(0, 16).map((media, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="relative overflow-hidden cursor-pointer group"
                    onClick={() => openMediaModal(media)}
                  >
                    {media.type === 'image' ? (
                      <img
                        src={media.src}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                      />
                    ) : media.type === 'video' ? (
                      <video
                        src={media.src}
                        className="w-full h-full object-cover"
                        muted
                        loop
                        playsInline
                      />
                    ) : null}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* View All Button */}
            <div className="absolute bottom-4 right-4">
              <button
                onClick={() => openMediaModal({ type: 'gallery', src: null, alt: 'Full Gallery' })}
                className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg hover:bg-white transition-all duration-300 text-sm font-medium"
              >
                Lihat Semua (20)
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.15), 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                y: -5, 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="text-center"
            >
              <motion.div 
                className="w-16 h-16 bg-orange-900/50 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border border-orange-500"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.6, ease: "easeInOut" }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 10, -10, 0] 
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    repeatDelay: index * 0.5,
                    ease: "easeInOut"
                  }}
                >
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </motion.div>
              </motion.div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-1"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5 + (index * 0.2),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {stat.value}
              </motion.h3>
              <motion.p 
                className="text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.7 + (index * 0.2),
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
              >
                {stat.label}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">Nilai-Nilai Kami</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-300 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Media Gallery Modal */}
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <X className="w-8 h-8" />
              </button>

              {selectedMedia.type === 'gallery' ? (
                // Full Gallery Grid
                <div className="bg-white rounded-2xl p-6 max-h-[90vh] overflow-y-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Galeri Lengkap</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {mediaGallery.map((media, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-lg cursor-pointer group"
                        onClick={() => setSelectedMedia(media)}
                      >
                        {media.type === 'image' ? (
                          <img
                            src={media.src}
                            alt={media.alt}
                            className="w-full h-40 object-cover"
                          />
                        ) : (
                          <div className="relative">
                            <img
                              src={media.thumbnail}
                              alt={media.alt}
                              className="w-full h-40 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedMedia.type === 'image' ? (
                // Single Image View
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.alt}
                  className="w-full h-full max-w-4xl max-h-[70vh] rounded-2xl object-contain"
                />
              ) : selectedMedia.type === 'video' ? (
                // Single Video View
                <video
                  src={selectedMedia.src}
                  controls
                  className="w-full h-full max-w-4xl max-h-[70vh] rounded-2xl object-contain"
                />
              ) : null}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
