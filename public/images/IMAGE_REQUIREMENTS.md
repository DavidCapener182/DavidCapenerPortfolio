# Image Requirements for David Capener Portfolio

This document lists all images needed for the portfolio website with their exact filenames and recommended sizes.

## 📋 Required Images

### 🏠 Homepage - Achievement Cards
These images appear in the "Key Achievements" section as cards:
- **File**: `eurovision-arena.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Achievement card for Eurovision 2023
  - **Description**: M&S Bank Arena during Eurovision 2023, preferably showing the venue or security operations

- **File**: `creamfields-festival.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Achievement card for Creamfields Festival
  - **Description**: Creamfields Festival scene showing crowd management or event operations

- **File**: `rebellion-festival.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Achievement card for Rebellion Festival
  - **Description**: Rebellion Festival venue or security operations

- **File**: `ai-platform-mockup.png`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Achievement card for AI Platform
  - **Description**: Screenshot or mockup of the AI-driven event management platform interface

### 📄 Portfolio Page Images

- **File**: `portfolio-hero.jpg`
  - **Size**: 1920x1080px (16:9 aspect ratio)
  - **Usage**: Hero banner background for Portfolio page
  - **Description**: Professional montage of event operations, security teams, or venue management

- **File**: `gallery-1.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Gallery card - "Major Event Operations"
  - **Description**: Large-scale live environment management scene

- **File**: `gallery-2.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Gallery card - "Team Leadership"
  - **Description**: Briefings, coordination, and staff welfare engagement

- **File**: `gallery-3.jpg`
  - **Size**: 1200x800px (3:2 aspect ratio)
  - **Usage**: Gallery card - "Control Room Operations"
  - **Description**: Real-time response and monitoring operations

### 👤 About Page Image

- **File**: `headshot.jpg`
  - **Size**: 800x800px (1:1 aspect ratio, square)
  - **Usage**: Professional headshot on About page
  - **Description**: Professional portrait photo of David Capener

## 📐 Image Specifications Summary

| Image Name | Dimensions | Aspect Ratio | Format | Primary Use |
|------------|-----------|--------------|--------|-------------|
| `eurovision-arena.jpg` | 1200x800px | 3:2 | JPG | Achievement Card |
| `creamfields-festival.jpg` | 1200x800px | 3:2 | JPG | Achievement Card |
| `rebellion-festival.jpg` | 1200x800px | 3:2 | JPG | Achievement Card |
| `ai-platform-mockup.png` | 1200x800px | 3:2 | PNG | Achievement Card |
| `portfolio-hero.jpg` | 1920x1080px | 16:9 | JPG | Hero Banner |
| `gallery-1.jpg` | 1200x800px | 3:2 | JPG | Gallery Card |
| `gallery-2.jpg` | 1200x800px | 3:2 | JPG | Gallery Card |
| `gallery-3.jpg` | 1200x800px | 3:2 | JPG | Gallery Card |
| `headshot.jpg` | 800x800px | 1:1 | JPG | Profile Photo |

## 🎨 Image Guidelines

### Quality Requirements
- **Resolution**: Minimum 2x the display size for retina displays
- **Compression**: Optimize for web (60-80% quality for JPGs)
- **File Size**: Aim for under 300KB per image when compressed
- **Format Priority**: 
  - Use JPG for photographs
  - Use PNG for screenshots/mockups with text or graphics
  - Consider WebP for better compression (Next.js will auto-optimize)

### Content Guidelines
- **Professional**: All images should maintain a professional, security-focused aesthetic
- **Consistent Style**: Use similar lighting and color grading across images
- **Focus**: Images should clearly relate to the described achievements/operations
- **Privacy**: Ensure no identifiable individuals without permission, or use crowd shots

### Technical Notes
- All images will be displayed with `object-fit: cover` for consistent sizing
- Images are responsive and will scale appropriately on mobile devices
- Next.js Image component automatically optimizes images
- Missing images will show gray placeholders but won't break the site

## 📁 File Structure

Place all images in: `/public/images/`

The final structure should be:
```
public/
  images/
    eurovision-arena.jpg
    creamfields-festival.jpg
    rebellion-festival.jpg
    ai-platform-mockup.png
    portfolio-hero.jpg
    gallery-1.jpg
    gallery-2.jpg
    gallery-3.jpg
    headshot.jpg
```

## ✅ Checklist

- [ ] eurovision-arena.jpg (1200x800px)
- [ ] creamfields-festival.jpg (1200x800px)
- [ ] rebellion-festival.jpg (1200x800px)
- [ ] ai-platform-mockup.png (1200x800px)
- [ ] portfolio-hero.jpg (1920x1080px)
- [ ] gallery-1.jpg (1200x800px)
- [ ] gallery-2.jpg (1200x800px)
- [ ] gallery-3.jpg (1200x800px)
- [ ] headshot.jpg (800x800px)
