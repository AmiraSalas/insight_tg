# 🚀 EXPORT & DEPLOY INSIGHT FOR FREE

## Step 1: Download Your Code

In the Replit Shell, run:
```bash
zip -r insight-export.zip . -x "node_modules/*" ".git/*" "dist/*" ".cache/*"
```

Then download the `insight-export.zip` file.

---

## Step 2: Host for FREE on Vercel

### Why Vercel?
- ✅ **100% FREE forever**
- ✅ **Automatic HTTPS**
- ✅ **Custom domain support**
- ✅ **Automatic deploys from GitHub**
- ✅ **Supports your full-stack app**

### Setup Steps:

1. **Create Accounts** (both free):
   - GitHub: https://github.com/signup
   - Vercel: https://vercel.com/signup

2. **Upload Code to GitHub**:
   - Extract your zip file
   - Go to GitHub → New Repository
   - Upload all your files
   - Commit and push

3. **Deploy to Vercel**:
   - Go to Vercel dashboard
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will automatically detect it's a Vite + Express app
   - Click "Deploy"

4. **Set Environment Variables**:
   In Vercel project settings:
   - Add: `ADMIN_PASSWORD` = (your secure password)
   - Add: `SESSION_SECRET` = (any random string)

5. **Done!** Your site is live at `your-project.vercel.app`

---

## Alternative FREE Hosting Options

### Option 2: Render (FREE tier)
- Good for full-stack apps
- Free tier includes database
- Slower cold starts than Vercel

### Option 3: Railway (FREE $5/month credit)
- Also supports full-stack
- Easy PostgreSQL database

### Option 4: Netlify (FREE)
- Great for static sites
- Similar to Vercel

---

## What Changes After Export?

### ✅ Everything Works the Same:
- All your pages (home, admin, login)
- Filtering system
- Ecuador section
- Admin panel for adding opportunities
- Blue/white/gold design

### ⚠️ You'll Need to Change:
- In Vercel, use their built-in **Vercel Postgres** database (free tier available)
- Or use the in-memory storage (current setup - data resets on server restart)

---

## Running Locally (On Your Computer)

After extracting the zip:

1. **Install Node.js** (if you don't have it)
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the app**:
   ```bash
   npm run dev
   ```

4. **Open**: http://localhost:5000

---

## Cost Comparison

| Platform | Cost | Notes |
|----------|------|-------|
| **Vercel** | FREE | Best option! Unlimited bandwidth |
| **Netlify** | FREE | Good alternative |
| **Render** | FREE | 750 hours/month free |
| **Railway** | FREE | $5 credit/month |
| **Replit** | $25/mo | What you want to avoid |

---

## Important Files to Keep

Make sure these are in your export:

### Core Application
- `client/` - All frontend code
- `server/` - All backend code
- `shared/` - Data types
- `package.json` - Dependencies
- `vite.config.ts` - Build config
- `tailwind.config.ts` - Your blue theme!

### Admin Panel
- `client/src/pages/AdminLogin.tsx`
- `client/src/pages/AdminDashboard.tsx`
- `client/src/components/OpportunityForm.tsx`

### Your Design
- `client/src/index.css` - ALL your colors/styles!
- `design_guidelines.md` - Design system
- `attached_assets/` - Logo and images

---

## Need Help?

If anything doesn't work after export:

1. **Check Node version**: Need Node 18 or higher
2. **Install dependencies**: `npm install`
3. **Environment variables**: Set ADMIN_PASSWORD and SESSION_SECRET
4. **Port issues**: Vercel handles this automatically

---

## Quick Deploy Checklist

- [ ] Download code zip from Replit
- [ ] Extract files
- [ ] Create GitHub account
- [ ] Upload code to GitHub
- [ ] Create Vercel account
- [ ] Import project from GitHub
- [ ] Set environment variables
- [ ] Deploy!
- [ ] Test admin panel
- [ ] Share with students!

**Your INSIGHT platform will be FREE and online forever!** 🎉
