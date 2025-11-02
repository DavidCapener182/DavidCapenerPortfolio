# David Capener Portfolio Website

A professional portfolio website showcasing Security Operations & Crowd Safety leadership, built with Next.js, React, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm installed
- Basic knowledge of React/Next.js (optional, for customization)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
DavidCapenerPortfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with navigation & footer
│   ├── page.tsx            # Home page
│   ├── about/              # About page
│   ├── portfolio/          # Portfolio/Case Studies page
│   ├── experience/         # Experience timeline page
│   ├── testimonials/       # Testimonials page
│   └── contact/            # Contact page with form
├── components/             # Reusable React components
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Footer.tsx          # Site footer
│   ├── HeroBanner.tsx       # Hero banner component
│   ├── AchievementCard.tsx # Achievement card component
│   ├── Button.tsx          # Button component
│   ├── CaseStudy.tsx       # Case study component
│   └── ContactForm.tsx     # Contact form with EmailJS
├── public/                 # Static assets
│   ├── images/            # Image files (see Images section below)
│   └── videos/            # Video files (optional)
├── styles/
│   └── globals.css        # Global styles and Tailwind imports
└── package.json           # Dependencies and scripts
```

## 🖼️ Adding Images

Replace placeholder image references with your actual images. Place images in the `public/images/` directory:

### Required Images:

- **Hero Images:**
  - `/public/images/eurovision-arena.jpg` - Eurovision case study
  - `/public/images/creamfields-festival.jpg` - Creamfields case study
  - `/public/images/rebellion-festival.jpg` - Rebellion Festival case study
  - `/public/images/ai-platform-mockup.png` - AI Platform mockup
  - `/public/images/portfolio-hero.jpg` - Portfolio page hero
  - `/public/images/headshot.jpg` - Professional headshot for About page

- **Gallery Images (Optional):**
  - `/public/images/gallery-1.jpg`
  - `/public/images/gallery-2.jpg`
  - `/public/images/gallery-3.jpg`

- **Organization Logos (Optional):**
  - `/public/images/logos/liverpool-fc.png`
  - `/public/images/logos/g4s.png`
  - `/public/images/logos/bbc.png`
  - `/public/images/logos/ha-protection.png`
  - `/public/images/logos/compact-security.png`

**Note:** If images are missing, the site will still function but display gray placeholders. Ensure images are optimized for web (recommended: WebP format, compressed JPG/PNG).

## 📧 EmailJS Configuration

The contact form uses EmailJS to send emails without a backend server.

### Setup Steps:

1. **Create an EmailJS account:**
   - Go to [https://www.emailjs.com/](https://www.emailjs.com/)
   - Sign up for a free account

2. **Create an email service:**
   - In EmailJS dashboard, go to "Email Services"
   - Add a service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create an email template:**
   - Go to "Email Templates"
   - Create a new template with variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
   - Note your Template ID

4. **Get your Public Key:**
   - Go to "Account" → "General"
   - Copy your Public Key

5. **Configure environment variables:**
   - Copy `.env.example` to `.env.local`
   - Fill in your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Restart your development server:**
   ```bash
   npm run dev
   ```

**Note:** The contact form will work without EmailJS configuration, but submissions won't be sent. For production, ensure environment variables are set in your hosting platform.

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  navy: '#1e3a8a',    // Primary navy blue
  red: '#dc2626',     // Accent red
  lightgrey: '#f3f4f6', // Light grey background
}
```

### Typography

Fonts are configured in `app/layout.tsx`. To change fonts:

1. Import new fonts from Google Fonts
2. Update the `fontFamily` variables in `tailwind.config.js`

### Content

Edit page content directly in the `app/` directory:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/portfolio/page.tsx` - Portfolio case studies
- `app/experience/page.tsx` - Experience timeline
- `app/testimonials/page.tsx` - Testimonials
- `app/contact/page.tsx` - Contact page

## 🚢 Deployment

### Vercel (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [https://vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (EmailJS credentials)
   - Deploy

3. **Configure custom domain (optional):**
   - In Vercel dashboard, go to Settings → Domains
   - Add your custom domain

### Other Platforms

This Next.js app can be deployed to:
- **Netlify** - Similar to Vercel, supports Next.js
- **AWS Amplify** - Full AWS integration
- **Self-hosted** - Requires Node.js server setup

## 📝 Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Technologies Used

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **Google Fonts** - Montserrat & Open Sans

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Security

- Contact form submissions are handled securely through EmailJS
- No user data is stored on the server
- Environment variables are kept private (never commit `.env.local`)

## 📄 License

This project is for personal/professional use.

## 🤝 Support

For questions or issues:
- Email: Capener182@googlemail.com
- Check Next.js documentation: [https://nextjs.org/docs](https://nextjs.org/docs)

---

**Built with ❤️ for professional portfolio presentation**
