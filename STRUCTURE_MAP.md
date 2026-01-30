// 🗂️ STRUKTUR LENGKAP WEBSITE DIGITAL PRINTING
// =============================================

// 📁 ROOT: src/app/page.tsx (Halaman Utama)
export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />          {/* 📍 1. Header - Navigasi & Kontak */}
      <main>
        <Hero />          {/* 📍 2. Hero - Section Utama */}
        <Services />      {/* 📍 3. Services - Layanan Kami */}
        <Gallery />       {/* 📍 4. Gallery - Portofolio */}
        <About />         {/* 📍 5. About - Tentang Kami */}
        <Contact />       {/* 📍 6. Contact - Form Kontak */}
      </main>
      <Footer />          {/* 📍 7. Footer - Info & Links */}
      <WhatsAppButton /> {/* 📍 8. WhatsApp Button - Floating */}
    </div>
  );
}

// 📍 1. HEADER (src/components/Header.tsx)
// ========================================
// Elements:
// - Logo: "Percetakan Digital"
// - Navigation Menu: Beranda, Layanan, Galeri, Tentang, Kontak
// - Contact Info: +62 811-73-4962, arjanggi.bkt@gmail.com
// - Mobile Menu Button (hamburger)

// 📍 2. HERO (src/components/Hero.tsx)
// ===================================
// Elements:
// - Main Title: "Solusi Digital Printing Terpercaya"
// - Description: Paragraf penjelasan
// - CTA Buttons: "Konsultasi Gratis", "Lihat Layanan"
// - Features: Kualitas Premium, Cepat & Tepat, Bergaransi
// - Illustration: Printer dengan animasi floating elements

// 📍 3. SERVICES (src/components/Services.tsx)
// =========================================
// Elements:
// - Section Header: "Layanan Kami"
// - 4 Service Cards:
//   • Digital Printing (Kartu Nama, Brosur, Poster)
//   • Outdoor Advertising (Banner, Spanduk, Neon Box, Billboard)
//   • Merchandise (Custom Mug, Tumbler, T-shirt)
//   • Large Format (Sticker, Wallpaper)
// - Bottom CTA: "Butuh Layanan Custom?"

// 📍 4. GALLERY (src/components/Gallery.tsx)
// ========================================
// Elements:
// - Section Header: "Portofolio Kami"
// - Category Filter: Semua, Digital Printing, Outdoor Advertising, Merchandise, Large Format
// - 8 Portfolio Items dengan hover effects
// - Load More Button

// 📍 5. ABOUT (src/components/About.tsx)
// =====================================
// Elements:
// - Section Header: "Tentang Kami"
// - Company Description
// - Stats: 500+ Pelanggan, 10+ Tahun, 24/7 Support, 100% Kualitas
// - Values: Kualitas Terbaik, Harga Kompetitif, Pengerjaan Cepat, Pelayanan Prima

// 📍 6. CONTACT (src/components/Contact.tsx)
// =======================================
// Elements:
// - Section Header: "Hubungi Kami"
// - Contact Form:
//   • Nama Lengkap
//   • Email
//   • Nomor Telepon
//   • Layanan (dropdown)
//   • Pesan (textarea)
//   • Submit Button
// - Contact Info Cards: Alamat, Telepon, Email, Jam Operasional
// - Map Placeholder
// - WhatsApp CTA

// 📍 7. FOOTER (src/components/Footer.tsx)
// =======================================
// Elements:
// - Company Info: Logo, Description, Contact Details
// - Footer Links: Services, Company, Support
// - Social Media: Facebook, Instagram, Twitter
// - Copyright & Credits

// 📍 8. WHATSAPP BUTTON (src/components/WhatsAppButton.tsx)
// ====================================================
// Elements:
// - Floating WhatsApp Button (desktop)
// - Mobile Bottom Bar (mobile)
// - Phone: +62 811-735-865

// 🎨 STYLING UTILITIES (src/app/globals.css)
// ========================================
// - .text-gradient: Blue to Orange gradient
// - .btn-primary: Primary button style
// - Custom colors and animations

// ⚙️ CONFIGURATION
// =================
// - layout.tsx: Metadata & body setup
// - next.config.js: Next.js configuration
