# 🚀 Deployment Guide - Percetakan Fazzy

## 📋 Cara Deploy ke (.com)

### **Opsi 1: Vercel (Gratis & Recommended)**

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/percetakan-fazzy.git
   git push -u origin main
   ```

2. **Deploy ke Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Sign up dengan GitHub
   - Import repository
   - Deploy otomatis

3. **Custom Domain**
   - Di Vercel dashboard → Settings → Domains
   - Add custom domain: `percetakanfazzy.com`
   - Follow DNS instructions

### **Opsi 2: Netlify (Gratis)**

1. **Build Project**
   ```bash
   npm run build
   ```

2. **Deploy ke Netlify**
   - Buka [netlify.com](https://netlify.com)
   - Drag & drop folder `out`
   - Add custom domain

### **Opsi 3: Shared Hosting (CPanel)**

1. **Build untuk Production**
   ```bash
   npm run build
   ```

2. **Upload ke Hosting**
   - Upload folder `out` ke `public_html`
   - Add domain di CPanel

## 🔧 SEO Optimization

### **Meta Tags (sudah ada)**
- Title tags
- Meta descriptions
- Open Graph tags

### **Sitemap**
```bash
npm install next-sitemap
```

### **Google Search Console**
1. Buka [search.google.com](https://search.google.com)
2. Add property
3. Upload sitemap.xml

## 📱 Mobile Optimization (sudah done)
- Responsive design
- Touch-friendly
- Fast loading

## 🔄 Cara Edit Setelah Deploy

### **Cara 1: GitHub Flow (Recommended)**
1. Edit code di VS Code
2. Commit changes:
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
3. Auto-deploy ke Vercel

### **Cara 2: Direct Edit**
1. Edit di VS Code
2. Build:
   ```bash
   npm run build
   ```
3. Upload folder `out`

### **Cara 3: Vercel CLI**
```bash
npm i -g vercel
vercel --prod
```

## 📊 Monitoring

### **Analytics**
- Google Analytics
- Vercel Analytics

### **Performance**
- Google PageSpeed Insights
- GTmetrix

## 🛡️ Security

### **SSL Certificate**
- Otomatis di Vercel/Netlify
- Gratis Let's Encrypt di hosting

### **Backup**
- Git version control
- Hosting backup

## 💰 Biaya Estimasi

### **Gratis (Vercel/Netlify)**
- Domain: Rp 150.000/tahun
- Hosting: Rp 0
- SSL: Gratis

### **Paid Hosting**
- Domain: Rp 150.000/tahun
- Hosting: Rp 300.000/tahun
- SSL: Gratis

## 🎯 Next Steps

1. **Backup project** yang sudah ada
2. **Beli domain** yang diinginkan
3. **Deploy ke Vercel** (paling mudah)
4. **Setup custom domain**
5. **Submit ke Google Search Console**
6. **Monitor performance**

## 📞 Support

Jika butuh bantuan:
- Vercel docs
- Next.js docs
- Google Search Console help
