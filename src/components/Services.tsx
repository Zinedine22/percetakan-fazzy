'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Megaphone, 
  ShoppingBag, 
  Image,
  CreditCard,
  Mail,
  Flag,
  Lightbulb,
  Coffee,
  Shirt,
  Sticker,
  Wallpaper,
  Package
} from 'lucide-react';
import TumblerIcon from './TumblerIcon';
import GoodieBagIcon from './GoodieBagIcon';
import PlakatIcon from './PlakatIcon';
import SpandukIcon from './SpandukIcon';
import BannerIcon from './BannerIcon';
import NotaIcon from './NotaIcon';
import UndanganIcon from './UndanganIcon';
import BukuIcon from './BukuIcon';
import UmbulUmbulIcon from './UmbulUmbulIcon';

export default function Services() {
  const serviceCategories = [
    {
      title: "Digital Printing",
      description: "Cetak digital berkualitas tinggi untuk kebutuhan bisnis Anda",
      icon: FileText,
      color: "from-orange-600 to-yellow-600",
      services: [
        { name: "Kartu Nama", icon: CreditCard },
        { name: "Brosur", icon: Mail },
        { name: "Poster", icon: Image },
        { name: "Plakat", icon: PlakatIcon }
      ]
    },
    {
      title: "Outdoor Advertising",
      description: "Media promosi outdoor yang menarik perhatian",
      icon: Megaphone,
      color: "from-yellow-600 to-orange-600",
      services: [
        { name: "Banner", icon: BannerIcon },
        { name: "Spanduk", icon: SpandukIcon },
        { name: "Neon Box", icon: Lightbulb },
        { name: "Umbul-Umbul", icon: UmbulUmbulIcon }
      ]
    },
    {
      title: "Merchandise",
      description: "Produk merchandise custom untuk branding bisnis Anda",
      icon: ShoppingBag,
      color: "from-orange-500 to-yellow-500",
      services: [
        { name: "Custom Mug", icon: Coffee },
        { name: "Tumbler", icon: TumblerIcon },
        { name: "T-shirt", icon: Shirt },
        { name: "Goodie Bag", icon: GoodieBagIcon }
      ]
    },
    {
      title: "Large Format",
      description: "Cetak large format untuk berbagai keperluan",
      icon: Image,
      color: "from-yellow-600 to-orange-600",
      services: [
        { name: "Sticker", icon: Sticker },
        { name: "Undangan", icon: UndanganIcon },
        { name: "Nota", icon: NotaIcon },
        { name: "Buku", icon: BukuIcon }
      ]
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Layanan <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Solusi lengkap untuk kebutuhan digital printing dan advertising di berbagai sektor.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                {/* Card Header */}
                <div className={`bg-gradient-to-br ${category.color} p-6 text-white relative overflow-hidden`}>
                  {/* Background Image Container */}
                  <div className="absolute inset-0 opacity-20">
                    <img 
                      src={`/services/${category.title.toLowerCase().replace(/\s+/g, '-')}-bg.jpg`}
                      alt={`${category.title} background`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback jika gambar tidak ada - hide image
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <category.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-white/90 text-sm">{category.description}</p>
                  </div>
                </div>

                {/* Service List */}
                <div className="p-6">
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors duration-200"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0`}>
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium text-gray-300">{service.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6">
                    <a 
                      href="#contact"
                      className={`w-full inline-block py-3 px-4 bg-gradient-to-r ${category.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-center`}
                    >
                      Pesan Sekarang
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Butuh Layanan Custom?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Kami siap membantu mewujudkan kebutuhan cetak di segala bidang.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-black text-white font-semibold py-3 px-6 rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
