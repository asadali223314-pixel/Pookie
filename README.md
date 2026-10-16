# Pookie Shoe Brand Website

A premium shoe brand website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🎨 Features
- Brand: **POOKIE** (white theme + blue accents)
- Apple Glass NUI design
- Framer Motion scroll animations
- Floating 3D shoe effect
- Responsive design
- Your shoe photo as the hero image

## 📁 File Structure
```
shoe-brand/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── netlify.toml          # Netlify deployment config
├── vercel.json           # Vercel deployment config
├── .gitignore
├── src/
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
│   ├── assets/
│   │   └── shoe.jpg      # Your shoe photo (already placed)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── Features.jsx
│       ├── Showcase.jsx
│       ├── Story.jsx
│       └── Footer.jsx
```

## 🚀 Free Deployment Options

### Option 1: Netlify (Recommended - Easiest)

1. **Create a GitHub repository**
   - Go to [github.com](https://github.com) and create a new repository called `shoe-brand`
   - Upload all files from this folder to the repository

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up (free)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select the `shoe-brand` repository
   - Build settings will auto-detect from `netlify.toml`
   - Click "Deploy site"

3. **Your site will be live at** `https://your-site-name.netlify.app`

---

### Option 2: Vercel

1. **Create a GitHub repository** (same as above)

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up (free)
   - Click "Add New" → "Project"
   - Import your `shoe-brand` GitHub repository
   - Build settings will auto-detect from `vercel.json`
   - Click "Deploy"

3. **Your site will be live at** `https://your-site-name.vercel.app`

---

### Option 3: GitHub Pages (Completely Free)

1. Push all files to a GitHub repository
2. Go to repository **Settings** → **Pages**
3. Set source to "Deploy from a branch" → `main` branch
4. Click "Save"
5. Your site will be at `https://yourusername.github.io/shoe-brand/`

> Note: GitHub Pages doesn't run npm build automatically, so you'd need to build locally first. Options 1 or 2 are easier.

---

## 📝 How to Upload Files to GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `shoe-brand`
3. Set to Public
4. Click "Create repository"
5. Click "uploading an existing file"
6. Drag and drop all files from the `shoe-brand` folder
7. Click "Commit changes"

---

## 🎯 What's Already Done

✅ All Framer Motion animations in every component  
✅ Pookie branding (white + blue theme)  
✅ Apple Glass NUI design  
✅ Your shoe.jpg placed in `src/assets/`  
✅ Netlify + Vercel configs created  
✅ .gitignore created  

---

## 🔧 If You Want to Test Locally Later

```bash
cd "C:\Users\asaali\Downloads\preview\shoe-brand"
npm install
npm run dev
# Then open http://localhost:5173
```

But you don't need this — Netlify/Vercel will build it for free!