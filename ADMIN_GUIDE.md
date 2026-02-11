# 🛠️ Admin Panel & Section Highlighter Guide

## 🚀 Cara Menggunakan Fitur Editing

### 📋 **Aktivasi Admin Panel**

#### **Method 1: Keyboard Shortcut**
- Tekan **Ctrl + Shift + A** untuk toggle admin mode
- Panel akan muncul dari sisi kiri

#### **Method 2: Settings Button**
- Klik tombol ⚙️ di pojok kiri bawah
- Admin panel akan terbuka

---

## 🎯 **Section Highlighter (Auto)**

Section highlighter akan **otomatis muncul** saat Anda scroll ke bagian yang sulit:

### 🟢 **Easy Sections** (Hijau)
- **Hero**: Text editing sederhana
- **Footer**: Update links dan info

### 🟡 **Medium Sections** (Kuning) 
- **Gallery**: Image paths & animations
- **Contact**: Form validation & API
- **Header**: Scroll detection & menu

### 🔴 **Hard Sections** (Merah)
- **Services**: Complex grid layout & responsive

---

## 📝 **Cara Edit Section**

### **1. Buka Admin Panel**
```
Ctrl + Shift + A
```

### **2. Pilih Section**
- Klik pada section yang ingin diedit
- Lihat difficulty level dan tips

### **3. Edit Content**
- **Text/Heading**: Edit langsung di textarea
- **Component**: Link ke file source untuk edit manual

### **4. Save Changes**
- Klik **Save** untuk menyimpan
- Klik **Cancel** untuk batal

---

## 💡 **Tips per Section**

### 🔥 **Services (Hard)**
```bash
# File yang perlu diedit:
src/components/Services.tsx
public/services/ (image folder)

# Yang perlu diperhatikan:
- Grid responsive behavior
- Image paths harus exist
- Hover animations
- Horizontal scroll pada laptop
```

### ⚡ **Gallery (Medium)**
```bash
# File yang perlu diedit:
src/components/Gallery.tsx
public/images/ (image folder)

# Yang perlu diperhatikan:
- Verify semua image paths
- Framer-motion animations
- ArticleContent data structure
```

### 📧 **Contact (Medium)**
```bash
# File yang perlu diedit:
src/components/Contact.tsx

# Yang perlu diperhatikan:
- Form validation logic
- API integration
- Responsive layout
```

### 🎨 **Hero (Easy)**
```bash
# File yang perlu diedit:
src/components/Hero.tsx

# Yang perlu diperhatikan:
- Edit text content langsung
- Background gradient di globals.css
- Responsive breakpoints
```

---

## 🔧 **Debugging Tools**

### **Browser DevTools**
- **F12**: Buka developer tools
- **Console**: Cek JavaScript errors
- **Network**: Monitor API calls
- **Elements**: Inspect CSS & HTML

### **Common Issues**
```bash
# Image not found
Error: 404 /images/filename.jpg
Solution: Check file exists di public/images/

# Build error
Error: Module not found
Solution: Check import paths

# CSS not applying
Error: Styles not working
Solution: Check globals.css dan Tailwind classes
```

---

## 🚨 **Emergency Fixes**

### **Quick Rollback**
```bash
# Kembali ke versi sebelumnya
git log --oneline -10
git checkout <commit-hash>

# Force revert changes
git reset --hard HEAD~1
```

### **Build Issues**
```bash
# Clean build
rm -rf .next
npm run build

# Clear cache
npm run dev -- --reset-cache
```

---

## 📱 **Mobile Testing**

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

### **Test di Browser**
- **Chrome DevTools**: Ctrl + Shift + I
- **Device Mode**: Toggle device toolbar
- **Test sizes**: iPhone, iPad, Desktop

---

## 🌐 **Deploy Process**

### **Auto Deploy**
```bash
# Push ke GitHub = Auto deploy ke Vercel
git add .
git commit -m "Fix: description"
git push origin main
```

### **Manual Deploy**
```bash
# Deploy manual ke Vercel
npx vercel --prod
```

---

## 📞 **Bantuan**

### **Keyboard Shortcuts**
- **Ctrl + Shift + A**: Toggle admin mode
- **F5**: Refresh browser
- **Ctrl + R**: Hard refresh
- **F12**: Developer tools

### **Useful Links**
- **GitHub**: https://github.com/Zinedine22/percetakan-fazzy
- **Vercel**: https://vercel.com/dashboard
- **Production**: https://www.percetakanfazzy.id

---

## ⚠️ **Important Notes**

1. **Save frequently** - Admin panel tidak auto-save
2. **Test changes** di development sebelum deploy
3. **Backup important files** sebelum major changes
4. **Check mobile view** untuk semua edits
5. **Verify images** exist sebelum deploy

---

**🎉 Selamat mengedit! Dengan tools ini, editing jadi lebih mudah dan terstruktur.**
