# 🎨 CUSTOMIZATION GUIDE

## Quick Update Your Personal Information

### 1. Update LinkedIn & GitHub Links

**File: `components/Hero.tsx`**
```typescript
// Around line 95-100
{[
  { icon: Github, href: 'https://github.com/YOUR-USERNAME' },  // Update this
  { icon: Linkedin, href: 'https://linkedin.com/in/YOUR-PROFILE' },  // Update this
  { icon: Mail, href: 'mailto:your-email@example.com' },
].map((social, index) => (
```

**File: `components/Contact.tsx`**
```typescript
// Around line 40-60
const contactLinks = [
  {
    icon: Phone,
    label: '+91-9980924267',
    href: 'tel:+919980924267',
    color: 'from-cosmic-purple to-galaxy-blue',
  },
  {
    icon: Mail,
    label: 'Email Me',
    href: 'mailto:your-email@example.com',  // Update this
    color: 'from-galaxy-blue to-nebula-pink',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn Profile',
    href: 'https://linkedin.com/in/YOUR-PROFILE',  // Update this
    color: 'from-nebula-pink to-moon-glow',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/YOUR-USERNAME',  // Update this
    color: 'from-moon-glow to-cosmic-purple',
  },
];
```

### 2. Update Email in Contact Form API

**File: `.env.local`**
```env
# Update this with your actual email where you want to receive contact form submissions
CONTACT_EMAIL=your-actual-email@example.com

# Get a free API key from https://resend.com
RESEND_API_KEY=re_your_actual_api_key_here
```

**File: `app/api/contact/route.ts`**
```typescript
// Around line 41 (fallback email)
to: process.env.CONTACT_EMAIL || 'your-email@example.com',  // Update fallback
```

### 3. Update Profile Information

**File: `components/Hero.tsx`**
- Line ~35: Update name if needed
- Line ~45: Update professional title if needed
- Line ~55: Update bio/description

**File: `components/Contact.tsx`**
- Update education information (already from resume)
- Update location information if needed

### 4. Update Resume File

**Current:** Resume is already uploaded as `public/resume.pdf`

To update:
1. Replace `public/resume.pdf` with your latest resume
2. Keep the same filename, or update the link in:
   - `components/Hero.tsx` (line ~75): `href="/resume.pdf"`

### 5. Update Profile Image

**Current:** Profile image is already uploaded as `public/profile.jpg`

To update:
1. Replace `public/profile.jpg` with new image
2. Keep the same filename
3. Image should be square (recommended: 400x400px)

## 🔗 Files to Update for Social Links

| File | Line Range | What to Update |
|------|-----------|----------------|
| `components/Hero.tsx` | ~95-100 | Social media icon links |
| `components/Contact.tsx` | ~40-60 | Contact card links |
| `.env.local` | 12-13 | Email for receiving messages |

## 📝 Quick Checklist

- [ ] Update GitHub URL in Hero component
- [ ] Update LinkedIn URL in Hero component
- [ ] Update email in Hero component
- [ ] Update GitHub URL in Contact component
- [ ] Update LinkedIn URL in Contact component
- [ ] Update email in Contact component
- [ ] Update CONTACT_EMAIL in .env.local
- [ ] Get Resend API key and update RESEND_API_KEY
- [ ] Verify resume file (public/resume.pdf)
- [ ] Verify profile image (public/profile.jpg)

## 🚀 After Updates

```bash
# Save all files
# Restart the development server
npm run dev
```

## 💡 Tips

1. **Email Setup**: Get a free Resend API key from https://resend.com
2. **Profile Image**: Use a professional photo, square format works best
3. **Links**: Always use `https://` for external links
4. **Testing**: Click all social links after updating to verify they work

## 🔍 Finding Your Links

**GitHub:**
- Go to your GitHub profile
- Copy URL from browser (e.g., `https://github.com/yourusername`)

**LinkedIn:**
- Go to your LinkedIn profile
- Click "Edit public profile & URL"
- Copy your custom URL or the default one

**Email:**
- Use the email you check regularly
- This is where contact form submissions will be sent
