'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Palette, 
  Scissors, 
  Package, 
  Zap, 
  Shield, 
  Clock, 
  Award,
  Layers,
  Printer,
  Ruler,
  Image,
  ChevronRight,
  CheckCircle,
  Info,
  Settings,
  Download
} from 'lucide-react';

export default function Gallery() {
  const articleContent = [
    {
      id: 1,
      title: "Teknologi Digital Printing Modern",
      category: "Teknologi",
      image: "/images/digital-printing-tech.jpg", // Custom image path
      description: "Percetakan digital adalah revolusi dalam industri cetak modern. Teknologi ini memungkinkan pencetakan langsung dari file digital tanpa memerlukan plat cetak tradisional.",
      content: [
        "Kecepatan produksi yang jauh lebih cepat dibandingkan metode offset",
        "Kualitas warna yang konsisten dan akurat",
        "Biaya lebih efisien untuk cetak jumlah sedang hingga banyak",
        "Fleksibilitas dalam personalisasi dan variabel data printing"
      ],
      services: [
        { name: "Ukuran Kertas", options: ["A6 (105x148mm)", "A5 (148x210mm)", "A4 (210x297mm)", "A3 (297x420mm)", "Custom"] },
        { name: "Resolusi Cetak", options: ["300 DPI (Standar)", "600 DPI (High)", "1200 DPI (Premium)"] },
        { name: "Jenis Kertas", options: ["Art Paper 150gsm", "Art Paper 260gsm", "Matte Paper", "Glossy Paper"] }
      ],
      featured: true
    },
    {
      id: 2,
      title: "Material & Bahan Cetak Premium",
      category: "Material",
      image: "/images/printing-materials.jpg", // Custom image path
      description: "Pemilihan material yang tepat adalah kunci untuk hasil cetak yang berkualitas. Kami menyediakan berbagai pilihan bahan premium untuk setiap kebutuhan.",
      content: [
        "Art Paper dengan berbagai gramatur untuk hasil yang tajam",
        "Sticker Vinyl untuk indoor dan outdoor advertising",
        "Backlit Film untuk display yang membutuhkan pencahayaan dari belakang",
        "Canvas untuk hasil artistik dan tahan lama"
      ],
      services: [
        { name: "Gramatur Kertas", options: ["80gsm", "120gsm", "150gsm", "260gsm", "310gsm", "350gsm"] },
        { name: "Finishing", options: ["Laminating Doff", "Laminating Glossy", "UV Coating", "Emboss"] },
        { name: "Tekstur", options: ["Smooth", "Textured", "Metallic", "Recycled"] }
      ],
      featured: false
    },
    {
      id: 3,
      title: "Mesin Cetak Industrial Grade",
      category: "Mesin",
      image: "/images/industrial-printer.jpg", // Custom image path
      description: "Kami menggunakan mesin cetak industrial grade terbaru untuk memastikan kualitas dan konsistensi hasil cetak yang optimal.",
      content: [
        "Mesin HP Indigo untuk warna yang akurat dan konsisten",
        "Large format printer untuk banner dan billboard",
        "Cutting machine precision untuk hasil potongan yang presisi",
        "Finishing equipment untuk proses laminating dan binding"
      ],
      services: [
        { name: "Tipe Mesin", options: ["HP Indigo 7900", "Canon VarioPrint", "Epson SureColor", "Roland Large Format"] },
        { name: "Kapasitas Cetak", options: ["500 lembar/jam", "1000 lembar/jam", "2000 lembar/jam", "Custom"] },
        { name: "Color Management", options: ["Pantone Matching", "CMYK Standard", "RGB Conversion", "Custom Profile"] }
      ],
      featured: false
    },
    {
      id: 4,
      title: "Finishing & Post-Processing",
      category: "Finishing",
      image: "/images/finishing-process.jpg", // Custom image path
      description: "Proses finishing adalah sentuhan akhir yang membuat produk cetak Anda terlihat profesional dan tahan lama.",
      content: [
        "Laminating untuk melindungi dan meningkatkan daya tahan",
        "Hotspot dan emboss untuk efek tekstur yang menarik",
        "Cutting precision untuk hasil yang rapi dan konsisten",
        "Binding dan folding untuk produk jadi yang siap digunakan"
      ],
      services: [
        { name: "Laminating", options: ["Doff 12mic", "Glossy 12mic", "Doff 25mic", "Glossy 25mic"] },
        { name: "Cutting", options: ["Standard Cut", "Die Cut", "Kiss Cut", "Laser Cut"] },
        { name: "Binding", options: ["Spiral", "Perfect Binding", "Saddle Stitch", "Hard Cover"] }
      ],
      featured: false
    }
  ];

  const quickInfo = [
    {
      icon: Ruler,
      title: "Ukuran Standar",
      items: ["A6 (105x148mm)", "A5 (148x210mm)", "A4 (210x297mm)", "A3 (297x420mm)", "Custom Size"]
    },
    {
      icon: Settings,
      title: "Spesifikasi Teknis",
      items: ["Resolusi: 300-1200 DPI", "Color Mode: CMYK", "File Format: PDF, AI, PSD", "Bleed: 3mm"]
    },
    {
      icon: Clock,
      title: "Waktu Pengerjaan",
      items: ["Regular: 3-5 hari", "Express: 1-2 hari", "Same Day: 6 jam", "Emergency: 3 jam"]
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-orange-600 to-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Cocogoose, sans-serif' }}>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">Fazzy</span>{" "}
            <span className="text-white">Knowledge Base</span>
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Pusat data spesifikasi, wawasan material, dan standar teknis produksi.
          </p>
        </motion.div>

        {/* Quick Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {quickInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
              whileHover={{ y: -5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{info.title}</h3>
              </div>
              <ul className="space-y-2">
                {info.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2 text-gray-300 text-sm">
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Article Cards - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articleContent.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${article.featured ? 'bg-gradient-to-r from-orange-600/20 to-yellow-600/20 border-orange-400/30' : 'bg-white/5 border-white/10'} backdrop-blur-md rounded-xl border overflow-hidden hover:shadow-xl transition-all duration-300`}
            >
              {/* Compact Header */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-400 text-xs font-medium uppercase tracking-wide">
                      {article.category}
                    </span>
                    {article.featured && (
                      <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="text-gray-500 text-xs">5 min read</span>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Compact Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.05 }}
                  className="mb-4"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                    <div className="text-center p-4">
                      <Image className="w-8 h-8 text-gray-500 mx-auto mb-2" />
                      <p className="text-gray-400 text-xs">{article.image.split('/').pop()}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Key Points - Compact */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <Info className="w-4 h-4 mr-1 text-orange-400" />
                    Key Points
                  </h4>
                  <div className="space-y-1">
                    {article.content.slice(0, 2).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start space-x-2">
                        <ChevronRight className="w-3 h-3 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-xs leading-relaxed line-clamp-1">
                          {point}
                        </span>
                      </div>
                    ))}
                    {article.content.length > 2 && (
                      <span className="text-orange-400 text-xs hover:text-orange-300 cursor-pointer">
                        +{article.content.length - 2} more points
                      </span>
                    )}
                  </div>
                </div>

                {/* Service Options - Minimal */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <Settings className="w-4 h-4 mr-1 text-orange-400" />
                    Layanan
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {article.services.slice(0, 2).map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-white/5 backdrop-blur-sm rounded px-3 py-1 border border-white/10">
                        <span className="text-white text-xs font-medium">{service.name}</span>
                      </div>
                    ))}
                    {article.services.length > 2 && (
                      <div className="bg-white/5 backdrop-blur-sm rounded px-3 py-1 border border-white/10">
                        <span className="text-orange-400 text-xs">+{article.services.length - 2}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Buttons - Compact */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Spesifikasi</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-1 text-white hover:text-orange-400 text-sm font-medium transition-colors"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Detail</span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-600 to-yellow-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Butuh Konsultasi Teknis?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Tim ahli kami siap membantu Anda memilih spesifikasi dan material yang tepat untuk proyek percetakan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100 inline-flex items-center justify-center"
                suppressHydrationWarning={true}
              >
                <Printer className="mr-2 w-5 h-5" />
                Konsultasi Teknis
              </a>
              <a
                href="#services"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-orange-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
                suppressHydrationWarning={true}
              >
                <Layers className="mr-2 w-5 h-5" />
                Lihat Layanan
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
