# Percetakan Fazzy - Website Digital Printing

Website modern untuk Percetakan Fazzy yang menampilkan layanan digital printing, outdoor advertising, dan merchandise.

## 🚀 Features

- **Responsive Design**: Optimal di desktop, tablet, dan mobile
- **Modern UI**: Menggunakan Tailwind CSS dan glass morphism effects
- **Custom Fonts**: Stylotype, Cocogoose, dan Avigea
- **Smooth Animations**: Scroll-triggered animations dengan Framer Motion
- **Knowledge Base**: Artikel informatif seputar percetakan
- **Contact Form**: Form kontak yang mudah digunakan

## 🛠️ Tech Stack

- **Frontend**: Next.js 16.1.4 dengan TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Custom fonts (Stylotype, Cocogoose, Avigea)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Zinedine22/percetakan-fazzy.git
cd percetakan-fazzy

# Install dependencies
npm install

# Run development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

## 🌐 Deployment

### Vercel (Recommended)

1. **Login ke Vercel**:
   ```bash
   npm install -g vercel
   vercel login
   ```

2. **Deploy ke production**:
   ```bash
   vercel --prod
   ```

3. **Setup custom domain**:
   - Buka Vercel Dashboard
   - Go to Settings → Domains
   - Add custom domain: `percetakanfazzy.id`

### Static HTML Version

Website juga tersedia dalam versi static HTML di `index.html` untuk deployment di hosting manapun.

## 📁 Project Structure

```
percetakan-fazzy/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── globals.css      # Global styles dan font definitions
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Homepage
│   └── components/          # React components
│       ├── Header.tsx       # Navigation header
│       ├── Hero.tsx         # Hero section
│       ├── About.tsx        # About section
│       ├── Services.tsx     # Services section
│       ├── Gallery.tsx      # Knowledge Base section
│       ├── Contact.tsx      # Contact section
│       └── Footer.tsx       # Footer
├── public/
│   ├── fonts/               # Custom fonts
│   │   ├── Stylotype.ttf
│   │   ├── Cocogoose.ttf
│   │   ├── Avigea.otf
│   │   └── Coolvetica.otf
│   ├── images/              # Image assets
│   └── videos/              # Video assets
├── index.html              # Static HTML version
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

## 🎨 Custom Fonts

Website menggunakan custom fonts:

- **Stylotype**: Untuk header "Percetakan Fazzy"
- **Cocogoose**: Untuk footer "Mutu Kecepatan Utama Kami"
- **Avigea**: Font utama untuk header

## 📱 Mobile Optimization

Website dioptimalkan untuk mobile dengan:

- Responsive breakpoints
- Touch-friendly buttons
- Smooth scrolling
- Optimized font sizes
- Mobile navigation menu

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📞 Contact

- **Alamat**: Jl. Pangeran Natadirja, Bengkulu
- **Telepon**: +62 811-735-865 (Admin 1), +62 811-734-965 (Admin 2)
- **Email**: arjanggi.bkt@gmail.com

## 📄 License

© 2024 Percetakan Fazzy. All rights reserved.
