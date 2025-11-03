# Hero and Section Images Guide

This document lists all hero banner images and section images used throughout the website, their placeholders, and recommended sizes.

## 🎨 Hero Banner Images

### Hero Banner Component Behavior
The `HeroBanner` component uses a **full-screen background image** that:
- Fills the entire viewport height (`h-screen`)
- Uses `object-cover` to maintain aspect ratio
- Has a dark overlay for text readability
- Supports parallax scrolling effect

### Placeholder Behavior
When no `imageSrc` is provided, the hero banner shows:
- **Gradient background**: `from-navy via-blue-900 to-gray-900`
- **Pattern overlay**: Radial gradient dots pattern (white dots, 40px spacing, 10% opacity)
- **Dark gradient overlay**: `from-black/60 via-transparent to-black/40`

---

## 📸 Hero Banner Images Required

### 1. Homepage Hero Banner
- **File**: None (uses gradient placeholder)
- **Location**: `app/page.tsx`
- **Current Status**: No image provided (shows gradient placeholder)
- **Recommended Size**: If you want to add one: **1920x1080px** (16:9 aspect ratio)
- **Recommended Filename**: `home-hero.jpg` (if you decide to add it)
- **Placeholder**: Dark blue gradient with dot pattern

### 2. Portfolio Page Hero Banner
- **File**: `portfolio-hero.jpg`
- **Location**: `app/portfolio/page.tsx`
- **Size**: **1920x1080px** (16:9 aspect ratio)
- **Format**: JPG
- **Usage**: Hero banner background for Portfolio/Case Studies page
- **Placeholder**: If missing, shows gradient with dot pattern

### 3. Testimonials Page Hero Banner
- **File**: None (uses gradient placeholder)
- **Location**: `app/testimonials/page.tsx`
- **Current Status**: No image provided (shows gradient placeholder)
- **Recommended Size**: If you want to add one: **1920x1080px** (16:9 aspect ratio)
- **Recommended Filename**: `testimonials-hero.jpg` (if you decide to add it)
- **Placeholder**: Dark blue gradient with dot pattern

---

## 📄 Section Images (Case Studies)

### Case Study Images
These appear in the Portfolio page case studies and are also used in Achievement Cards on the homepage.

1. **eurovision-arena.jpg**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: JPG
   - **Usage**: Case study image + Homepage achievement card
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with icon if missing

2. **liverpool-parade.jpg**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: JPG
   - **Usage**: Case study image + Homepage achievement card
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with trophy icon if missing

3. **creamfields-festival.jpg**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: JPG
   - **Usage**: Case study image + Homepage achievement card
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with musical note icon if missing

4. **rebellion-festival.jpg**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: JPG
   - **Usage**: Case study image + Homepage achievement card
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with shield icon if missing

5. **ai-platform-mockup.png**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: PNG
   - **Usage**: Case study image + Homepage achievement card
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with CPU chip icon if missing

6. **bgt-blackpool.jpg**
   - **Size**: 1200x800px (3:2 aspect ratio)
   - **Format**: JPG
   - **Usage**: Homepage achievement card only
   - **Placeholder**: Gray gradient (`from-navy to-gray-800`) with TV icon if missing

---

## 👤 About Page Section Image

### Headshot Image
- **File**: `headshot.jpg`
- **Location**: `app/about/page.tsx`
- **Size**: **800x800px** (1:1 square aspect ratio)
- **Format**: JPG
- **Usage**: Professional headshot photo on About page
- **Placeholder**: If missing, shows a gray placeholder box

---

## 📋 Summary Table

| Image | Type | Size | Aspect Ratio | Placeholder | Location |
|-------|------|------|--------------|-------------|----------|
| `portfolio-hero.jpg` | Hero Banner | 1920x1080px | 16:9 | Gradient + dots | Portfolio page |
| `eurovision-arena.jpg` | Case Study | 1200x800px | 3:2 | Gray gradient + icon | Portfolio + Homepage |
| `liverpool-parade.jpg` | Case Study | 1200x800px | 3:2 | Gray gradient + icon | Portfolio + Homepage |
| `creamfields-festival.jpg` | Case Study | 1200x800px | 3:2 | Gray gradient + icon | Portfolio + Homepage |
| `rebellion-festival.jpg` | Case Study | 1200x800px | 3:2 | Gray gradient + icon | Portfolio + Homepage |
| `ai-platform-mockup.png` | Case Study | 1200x800px | 3:2 | Gray gradient + icon | Portfolio + Homepage |
| `bgt-blackpool.jpg` | Achievement | 1200x800px | 3:2 | Gray gradient + icon | Homepage only |
| `headshot.jpg` | Profile Photo | 800x800px | 1:1 | Gray box | About page |

---

## 🎨 Placeholder Details

### Hero Banner Placeholder (No Image)
- **Background**: `bg-gradient-to-br from-navy via-blue-900 to-gray-900`
- **Pattern**: White radial dots (40px spacing, 10% opacity)
- **Overlay**: Dark gradient from top to bottom

### Case Study/Achievement Card Placeholder (No Image)
- **Background**: `bg-gradient-to-br from-navy/90 to-red/20`
- **Pattern**: SVG pattern overlay (subtle grid)
- **Icon**: Shows relevant icon (trophy, shield, musical note, etc.) centered

### Headshot Placeholder (No Image)
- **Background**: Gray solid color
- **Display**: Empty box with gray background

---

## 💡 Notes

- **Hero images** should be high quality and optimized (aim for under 500KB)
- **Case study images** should be optimized (aim for under 300KB each)
- All images use `object-cover` to maintain aspect ratio while filling the container
- Next.js automatically optimizes images for different screen sizes
- The website will work without images but will show placeholders as described above

