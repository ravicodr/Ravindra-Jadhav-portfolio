# 🚀 QUICK START GUIDE

## Get Running in 3 Steps!

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Configure Database (Choose one)

**Option A - Local MongoDB (Easiest for testing)**
```bash
# Make sure MongoDB is installed and running
mongod
```
`.env.local` already configured for local MongoDB

**Option B - MongoDB Atlas (Cloud)**
1. Create free cluster at https://mongodb.com/cloud/atlas
2. Get connection string
3. Update `MONGODB_URI` in `.env.local`

### Step 3: Start Development
```bash
npm run dev
```

Open http://localhost:3000 🎉

## 🔥 Quick Tips

### Setup Admin Access (First Time)
```bash
# Create admin user using curl:
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@cosmicportfolio.com","password":"admin123","name":"Admin"}'
```

Then login at: http://localhost:3000/login

### Configure Email (Optional)
1. Get free API key from https://resend.com
2. Update `RESEND_API_KEY` in `.env.local`

### Production Build
```bash
npm run build
npm start
```

## 📞 Need Help?

Check `README.md` for detailed documentation!

---

**Default Admin Credentials:**
- Email: admin@cosmicportfolio.com
- Password: admin123

**Remember to change these in production!**
