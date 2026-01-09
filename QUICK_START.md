# 🚀 QUICK START - Deploy in 5 Minutes

## Method 1: Vercel (Easiest - Recommended)

1. **Create account**: Go to vercel.com → Sign up with GitHub (free)

2. **Upload project**: 
   - Click "Add New..." → "Project"
   - Drag and drop the entire `restaurant-website` folder
   
3. **Deploy**: 
   - Vercel detects it's React automatically
   - Click "Deploy"
   - Wait 2 minutes
   
4. **Done!** Your site is live at `your-project.vercel.app`

## Method 2: Netlify

1. Go to netlify.com → Sign up (free)
2. Drag the `restaurant-website` folder onto Netlify
3. Site deploys automatically
4. Done! Live at `your-project.netlify.app`

## ✏️ Before You Deploy - Quick Customization

Open `src/App.js` and change:

```javascript
// Line 12-17: Your restaurant info
const RESTAURANT_INFO = {
  name: "YOUR RESTAURANT NAME",
  tagline: "YOUR TAGLINE",
  address: "YOUR ADDRESS",
  phone: "YOUR PHONE",
  hours: "YOUR HOURS"
};
```

That's it! Everything else can be customized after deployment.

## 🌐 Getting a Custom Domain (yourrestaurant.com)

### After deploying:

1. **Buy domain** (~$12/year):
   - Go to namecheap.com
   - Search for `yourrestaurant.com`
   - Purchase it

2. **Connect to Vercel**:
   - Vercel Dashboard → Your Project → Settings → Domains
   - Enter your domain
   - Copy the DNS records Vercel gives you

3. **Update DNS**:
   - Log into Namecheap
   - Go to Domain → Manage → Advanced DNS
   - Add the records from Vercel
   - Wait 10-30 minutes

4. **Done!** Your site is now at `yourrestaurant.com`

## 🎯 What You Get

- ✅ Professional restaurant website
- ✅ Mobile & desktop responsive
- ✅ Interactive menu with DoorDash-style customization
- ✅ Clickable map & phone links
- ✅ Easy to edit (all customizable values have `// MODIFY:` comments)
- ✅ FREE hosting forever (on Vercel/Netlify free tier)

## 💰 Total Cost

- Domain name: ~$12/year
- Hosting: $0 (free tier)
- **Total: $12/year!**

## 📝 Next Steps

1. Deploy with sample menu first
2. Test it on your phone
3. Customize menu items in `src/App.js`
4. Upload logo to `public/` folder
5. Set up custom domain
6. Later: Add Square for online ordering

Need help? Read the full `README.md` for detailed instructions!
