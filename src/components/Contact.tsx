'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const phoneNumber = "62811735865";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    // Optimized state update - prevent unnecessary re-renders
    setFormData(prev => {
      if (prev[name as keyof typeof prev] === value) return prev;
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const whatsappMessage = encodeURIComponent(
      `📋 *PESAN BARU DARI WEBSITE*\n\n` +
      `👤 *Nama:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Telepon:* ${formData.phone}\n` +
      `🛠️ *Layanan:* ${formData.service || 'Tidak dipilih'}\n` +
      `💬 *Pesan:* ${formData.message}\n\n` +
      `---\n` +
      `📅 Dikirim: ${new Date().toLocaleString('id-ID')}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // For the quick WhatsApp CTA
  const quickWhatsAppMessage = encodeURIComponent("Halo, saya ingin berkonsultasi tentang layanan percetakan Anda.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${quickWhatsAppMessage}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat",
      content: "Jl. Pangeran Natadirja Depan RB TV No.5 KM 6, Jl. Gedang, Kec. Gading Cemp., Kota Bengkulu, Bengkulu 38225",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 811-735-865 (Admin 1)\n+62 811-734-965 (Admin 2)",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Mail,
      title: "Email",
      content: "arjanggi.bkt@gmail.com",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      content: "Senin - Jumat: 08:00 - 17:30\nSabtu: 08:00 - 17:00\nMinggu: Tutup",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Hubungi <span className="text-gradient">Kami</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            Siap membantu kebutuhan cetak dan advertising Anda.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Kirim Pesan</h3>
              
              <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-150 text-gray-900 placeholder-gray-500"
                      placeholder="Ketik Disini"
                      onChange={handleInputChange}
                      value={formData.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-150 text-gray-900 placeholder-gray-500"
                      placeholder="Ketik Disini"
                      onChange={handleInputChange}
                      value={formData.email}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor Telepon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-150 text-gray-900 placeholder-gray-500"
                    placeholder="+62 812-3456-7890 (Contoh)"
                    onChange={handleInputChange}
                    value={formData.phone}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Layanan yang Dibutuhkan
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-150 text-gray-900"
                    onChange={handleInputChange}
                    value={formData.service}
                  >
                    <option value="">Pilih Layanan</option>
                    <option value="digital-printing">Digital Printing</option>
                    <option value="outdoor-advertising">Outdoor Advertising</option>
                    <option value="merchandise">Merchandise</option>
                    <option value="large-format">Large Format</option>
                    <option value="offset-printing">Offset Printing</option>
                    <option value="branding">Branding & Identity</option>
                    <option value="packaging">Packaging Design</option>
                    <option value="signage">Signage & Neon Box</option>
                    <option value="vehicle-branding">Vehicle Branding</option>
                    <option value="other">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-150 text-gray-900 placeholder-gray-500"
                    placeholder="Jelaskan kebutuhan cetak Anda..."
                    onChange={handleInputChange}
                    value={formData.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary inline-flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${info.color} flex items-center justify-center flex-shrink-0`}>
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                      <p className="text-gray-600 text-sm whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.9548127622293!2d102.29264487475633!3d-3.819832443643628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e36ba817ed0a057%3A0xcd051bb85a959638!2sPercetakan%20Fazzy!5e0!3m2!1sid!2sus!4v1769312187714!5m2!1sid!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Lokasi Percetakan Fazzy"
                />
              </div>
            </motion.div>

            {/* Quick WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white rounded-xl p-6 flex items-center justify-between group transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center">
                  <MessageCircle className="w-8 h-8 mr-4" />
                  <div>
                    <h4 className="font-bold text-lg">Chat WhatsApp Langsung</h4>
                    <p className="text-green-100">Respon cepat, konsultasi gratis</p>
                  </div>
                </div>
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
