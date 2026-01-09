# Restaurant Website - Complete Setup Guide

## ✅ What's Included

This is a complete, ready-to-deploy React restaurant website with:
- 🎨 Modern, responsive design (works on mobile & desktop)
- 🍜 Interactive menu with customization modal (DoorDash-style)
- 🗺️ Clickable map address (opens in user's map app)
- 📱 Phone link for direct calling
- 💬 Extensive comments for easy customization

## 📝 How to Edit Your Menu (No Coding Needed!)

### Step 1: Open `src/App.js`

At the very top of the file, you'll see two sections you can easily edit:

```javascript
// SECTION 1: RESTAURANT INFORMATION
const RESTAURANT_INFO = {
  name: "Noodle Haven",          // Change this
  tagline: "...",                // Change this
  address: "...",                // Change this
  phone: "...",                  // Change this
  hours: "..."                   // Change this
};

// SECTION 2: MENU DATA
const MENU_DATA = {
  categories: [
    {
      name: "Signature Noodles",  // Category name
      items: [
        {
          name: "Classic Pho",     // Item name
          description: "...",      // Description
          basePrice: 12.99,       // Price
          image: "🍜",            // Emoji (or image URL later)
          customizations: {
            noodleType: [...],    // Options
            protein: [...],       // Options
            veggies: [...]        // Options
          }
        }
      ]
    }
  ]
};
```

### Example: Changing "Dumplings" to "Fries"

Find this block in the file:
```javascript
{
  id: 6,
  name: "Dumplings",           // CHANGE TO: "French Fries"
  description: "...",          // CHANGE TO: "Crispy golden fries"
  basePrice: 8.99,            // CHANGE TO: 5.99
  image: "🥟",                // CHANGE TO: "🍟"
  customizations: {
    protein: [...],           // REMOVE this line (fries don't have protein)
    style: ["Pan-Fried", "Steamed"]  // CHANGE TO: size: ["Small", "Medium", "Large"]
  }
}
```

**Every line that can be modified has a `// MODIFY:` comment!**

## 🚀 Deploying to Vercel (Free & Easy)

### Prerequisites
- A GitHub account (free at github.com)
- A Vercel account (free at vercel.com - sign up with GitHub)

### Option 1: Deploy via Vercel Website (Easiest)

1. **Go to vercel.com and log in** with your GitHub account

2. **Click "Add New..." → "Project"**

3. **Upload your folder**:
   - You can drag and drop the entire `restaurant-website` folder
   - Or connect your GitHub repository if you uploaded it there

4. **Vercel auto-detects it's a React app** - just click "Deploy"

5. **Done!** Your site is live at `your-project.vercel.app`

### Option 2: Deploy via Command Line

```bash
# Install Vercel CLI globally
npm install -g vercel

# Navigate to your project folder
cd restaurant-website

# Login to Vercel
vercel login

# Deploy!
vercel

# Follow the prompts:
# - Set up and deploy? [Y]
# - Which scope? [Your account]
# - Link to existing project? [N]
# - What's your project's name? [restaurant-website]
# - In which directory is your code? [./]
# - Want to override settings? [N]

# Your site is now live!
```

## 🌐 Adding Your Custom Domain (yourrestaurant.com)

### Step 1: Buy a Domain

Choose a registrar:
- **Namecheap** (recommended): namecheap.com - ~$10-15/year
- **Google Domains**: domains.google
- **GoDaddy**: godaddy.com

Search for and purchase your desired domain name (e.g., `noodlehaven.com`)

### Step 2: Connect Domain to Vercel

1. **In Vercel dashboard**, go to your project

2. **Click "Settings" → "Domains"**

3. **Enter your domain** (e.g., `noodlehaven.com`)

4. **Vercel will show you DNS records to add**. You'll see something like:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

5. **Go to your domain registrar** (Namecheap, GoDaddy, etc.)

6. **Find DNS settings** (usually called "DNS Management" or "Nameservers")

7. **Add the records** Vercel gave you

8. **Wait 5-30 minutes** for DNS to propagate

9. **Done!** Your site is now live at `yourrestaurant.com`

### Visual Guide for Popular Registrars

**Namecheap:**
- Dashboard → Manage → Advanced DNS → Add New Record

**GoDaddy:**
- My Products → DNS → Manage Zones → Add Record

**Google Domains:**
- My Domains → Manage → DNS → Custom Records

## 🧪 Testing Locally (Optional)

If you want to see your changes before deploying:

```bash
# Make sure you have Node.js installed (nodejs.org)

# Navigate to project folder
cd restaurant-website

# Install dependencies (first time only)
npm install

# Start development server
npm start

# Your site opens at http://localhost:3000
# Any changes you make will update automatically
```

## 🎨 Customization Guide

### Changing Colors

All color values are marked with `// MODIFY:` comments. Common colors to change:

```javascript
// Main accent color (red/orange gradients)
background: 'linear-gradient(135deg, #ff6b6b 0%, #ffd93d 100%)'
// Change #ff6b6b and #ffd93d to your brand colors

// Examples:
// Blue theme: #4a90e2 and #67b8e3
// Green theme: #4caf50 and #8bc34a
// Purple theme: #9c27b0 and #e91e63
```

### Changing Fonts

Find this line in the `<style>` section:
```javascript
@import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap');
```

Visit [Google Fonts](https://fonts.google.com/) to choose new fonts, then replace the URL.

### Adding Real Images Instead of Emojis

Replace:
```javascript
image: "🍜",
```

With:
```javascript
image: "https://yourwebsite.com/images/pho.jpg",
```

Then update the image display section to show real images instead of emojis.

### Adding Your Logo

Find the logo emoji section (search for `{/* Logo emoji */}`) and replace:
```javascript
<div style={{ fontSize: '4rem' }}>🍜</div>
```

With:
```javascript
<img 
  src="/logo.png" 
  alt="Restaurant Logo" 
  style={{ width: '100px', height: '100px' }} 
/>
```

Place your `logo.png` file in the `public/` folder.

## ❓ Do You Need React?

**Short answer: Yes, for the interactive features you want.**

React is necessary because:
- ✅ Interactive customization modal (DoorDash-style popup)
- ✅ Dynamic menu categories and filtering
- ✅ State management for user selections
- ✅ Future Square integration (easier with React)

However, React is **already set up** in this project. You don't need to learn React to use or customize this website - just edit the clearly marked sections!

## 📦 What Each File Does

```
restaurant-website/
├── public/
│   └── index.html          # Basic HTML wrapper (rarely need to edit)
├── src/
│   ├── App.js              # ⭐ MAIN FILE - Edit restaurant info & menu here
│   └── index.js            # React setup (don't edit)
├── package.json            # Dependencies list (don't edit)
└── README.md               # This file
```

**You only need to edit `src/App.js`** for all your customization needs!

## 🎯 Next Steps (After Deployment)

Once your site is live, you can:

1. **Set up Square Online** for actual order processing
2. **Add real food photography**
3. **Set up email notifications** for new orders
4. **Add social media links** to footer
5. **Connect Google Analytics** to track visitors

## 🆘 Troubleshooting

### "npm: command not found"
- Install Node.js from [nodejs.org](https://nodejs.org/)

### Changes not showing on deployed site?
- Make sure you've committed and pushed changes
- Vercel auto-deploys on push (if connected to GitHub)
- Or run `vercel --prod` to manually deploy

### DNS not working after 30 minutes?
- Double-check DNS records match exactly what Vercel provided
- Try different DNS checker: [dnschecker.org](https://dnschecker.org/)
- Contact your domain registrar support

### Site looks broken on mobile?
- Clear your browser cache
- The CSS is responsive - test on actual device, not just browser resize

## 💡 Tips for Success

1. **Start simple** - Deploy with the sample menu first, then customize
2. **Test locally** before deploying changes
3. **Keep backups** of your `App.js` file
4. **Use version control** (GitHub) to track changes
5. **Ask for help** in Vercel Discord or GitHub if stuck

## 📞 Support Resources

- **Vercel Docs**: vercel.com/docs
- **React Docs**: react.dev
- **Square API**: developer.squareup.com
- **CSS Help**: developer.mozilla.org/en-US/docs/Web/CSS

---

**Total Cost:**
- Domain: $10-15/year
- Hosting: $0 (Vercel free tier)
- **Total: ~$12/year for a professional website!** 🎉

Good luck with your restaurant website!
