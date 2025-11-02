# Quick Start Guide

## Running the Development Server

1. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## For Your Interview Presentation

1. **Start the server** before your interview:
   ```bash
   npm run dev
   ```

2. **Keep the terminal open** during your presentation

3. **Navigate through pages**:
   - Home: http://localhost:3000
   - About: http://localhost:3000/about
   - Portfolio: http://localhost:3000/portfolio
   - Experience: http://localhost:3000/experience
   - Testimonials: http://localhost:3000/testimonials
   - Contact: http://localhost:3000/contact

## Adding Your Images

1. **Place images in** `public/images/` directory
2. **See** `public/images/IMAGE_REQUIREMENTS.md` for a complete list
3. **Recommended**: Use compressed JPG/PNG files for faster loading

## Next Steps

- ✅ Project structure created
- ✅ All pages implemented
- ✅ Components built
- ✅ Responsive design configured
- ⏳ Add your images (see IMAGE_REQUIREMENTS.md)
- ⏳ Configure EmailJS for contact form (optional, see README.md)

## Troubleshooting

**Port already in use?**
- Change port: `PORT=3001 npm run dev`

**Build errors?**
- Delete `.next` folder: `rm -rf .next`
- Reinstall: `rm -rf node_modules && npm install`

**Images not showing?**
- Ensure images are in `public/images/` directory
- Check file names match exactly (case-sensitive)

---

**Ready to present!** 🚀

