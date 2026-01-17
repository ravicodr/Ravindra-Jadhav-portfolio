# 🌌 Cosmic Portfolio - Full Stack Next.js Portfolio

A stunning, production-ready portfolio website built with Next.js 14, featuring a cosmic/universe theme with advanced animations, database integration, and admin dashboard.

## ✨ Features

### 🎨 **Visual Excellence**
- **Starfield Background**: Animated canvas with twinkling stars
- **Galaxy Orbs**: Floating gradient nebula effects
- **Shooting Stars**: Periodic meteor animations
- **Glassmorphism UI**: Modern glass-effect cards
- **3D Card Effects**: Interactive hover animations using Framer Motion
- **Responsive Design**: Perfect on all devices

### 🚀 **Functional Features**
- **Dynamic Stats**: Real-time stats fetched from MongoDB
- **Contact Form**: Email notifications via Resend API
- **Experience Timeline**: Database-driven career history
- **Admin Dashboard**: Protected route to update stats
- **NextAuth.js**: Secure authentication system
- **SEO Optimized**: Meta tags and Open Graph support

### 🛠️ **Tech Stack**
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB with Mongoose
- **Authentication**: NextAuth.js
- **Email**: Resend API
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Notifications**: React Hot Toast

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- MongoDB running locally or MongoDB Atlas account

### Steps

1. **Extract the zip file**
```bash
unzip cosmic-portfolio.zip
cd cosmic-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
Edit `.env.local` with your settings:
```env
# MongoDB - Use local or Atlas
MONGODB_URI=mongodb://localhost:27017/cosmic-portfolio
# OR
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/cosmic-portfolio

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here

# Admin Login (for initial setup)
ADMIN_EMAIL=admin@cosmicportfolio.com
ADMIN_PASSWORD=admin123

# Resend API (Get free key at resend.com)
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

4. **Run development server**
```bash
npm run dev
```

5. **Open browser**
Navigate to `http://localhost:3000`

## 🔐 Admin Dashboard

### First Time Setup

1. Create admin user (one-time only):
```bash
# Option 1: Using the API
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@cosmicportfolio.com","password":"admin123","name":"Admin"}'

# Option 2: Create directly in MongoDB
# Use MongoDB Compass or CLI to insert a user document
```

2. Access admin panel:
- Go to `http://localhost:3000/login`
- Use credentials: `admin@cosmicportfolio.com` / `admin123`
- Update stats in real-time!

### Admin Features
- Update Years of Experience
- Modify DAU (Daily Active Users)
- Change API Requests count
- Update Projects Completed
- All changes reflect immediately on the public portfolio

## 📧 Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Get your API key
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Verify your domain (or use test mode)

Contact form submissions will:
- Save to MongoDB
- Send formatted email to `CONTACT_EMAIL`
- Show success/error toast notifications

## 🗄️ Database Schema

### Stats Collection
```javascript
{
  experience: Number,
  dau: Number,
  apiRequests: Number,
  projectsCompleted: Number,
  updatedAt: Date
}
```

### Contact Collection
```javascript
{
  name: String,
  email: String,
  subject: String,
  message: String,
  read: Boolean,
  createdAt: Date
}
```

### Experience Collection
```javascript
{
  company: String,
  role: String,
  location: String,
  startDate: String,
  endDate: String,
  achievements: [String],
  order: Number,
  isActive: Boolean
}
```

## 🎨 Customization

### Update Personal Info
Edit these files:
- `components/Hero.tsx` - Name, title, description
- `components/Contact.tsx` - Contact links, education
- `components/Footer.tsx` - Footer text

### Modify Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'space-black': '#0a0e27',
  'cosmic-purple': '#6366f1',
  'nebula-pink': '#ec4899',
  'moon-glow': '#fbbf24',
  // Add your colors here
}
```

### Add/Remove Skills
Edit `components/Skills.tsx` - Modify the `skillCategories` array

### Update Experience
Two options:
1. **Via Admin Dashboard**: Login and manage via UI (future feature)
2. **Direct Database**: Add documents to the `experiences` collection
3. **Fallback Data**: Edit `components/Experience.tsx`

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard
```

### Environment Variables to Set:
- `MONGODB_URI`
- `NEXTAUTH_URL` (your production URL)
- `NEXTAUTH_SECRET`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

### Other Platforms
- **Netlify**: Use `npm run build` and deploy `/dist`
- **Railway**: Connect GitHub and auto-deploy
- **AWS/DigitalOcean**: Build and deploy with Docker

## 📁 Project Structure

```
cosmic-portfolio/
├── app/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/route.ts
│   │   │   └── login/route.ts
│   │   ├── contact/route.ts
│   │   ├── experience/route.ts
│   │   └── stats/route.ts
│   ├── admin/
│   │   └── page.tsx
│   ├── login/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Galaxies.tsx
│   ├── Hero.tsx
│   ├── Navigation.tsx
│   ├── Providers.tsx
│   ├── ShootingStars.tsx
│   ├── Skills.tsx
│   ├── Starfield.tsx
│   └── Stats.tsx
├── lib/
│   └── mongodb.ts
├── models/
│   ├── Contact.ts
│   ├── Experience.ts
│   ├── Stats.ts
│   └── User.ts
├── types/
│   └── next-auth.d.ts
├── .env.local
├── .env.example
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running: `mongod` or check Atlas connection
- Verify `MONGODB_URI` in `.env.local`
- Check firewall/network settings

### NextAuth Errors
- Ensure `NEXTAUTH_SECRET` is set
- For production, update `NEXTAUTH_URL` to your domain

### Email Not Sending
- Verify Resend API key is valid
- Check domain verification in Resend dashboard
- Monitor console for error messages

### Build Errors
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run dev
```

## 📝 License

MIT License - Feel free to use for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize!

## 💡 Tips

- **Images**: Add to `/public` folder and reference with `/image.png`
- **Fonts**: Orbitron and Rajdhani are loaded from Google Fonts
- **Performance**: Starfield uses Canvas API for optimal performance
- **SEO**: Update metadata in `app/layout.tsx`

## 🌟 Credits

Built with love by Ravindra Jadhav
Inspired by the cosmos 🌌

---

**Need help?** Open an issue or contact via the portfolio contact form!

Happy Coding! 🚀✨
