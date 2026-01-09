# 🥷 Ninja Design Studio

Your Web3 design studio website, ready to deploy to Cloudflare Pages.

---

## 🚀 Quick Deploy (5 minutes)

### Step 1: Set Up Contact Form (2 minutes)

Before deploying, get your free Web3Forms access key:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter your email address
3. Check your inbox and copy the **Access Key**
4. Open `index.html` and find this line (around line 2540):
   ```html
   <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">
   ```
5. Replace `YOUR_ACCESS_KEY_HERE` with your actual access key

### Step 2: Deploy to Cloudflare Pages (3 minutes)

**Option A: Direct Upload (Easiest)**

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Workers & Pages** in the sidebar
3. Click **Create** → **Pages** tab → **Upload assets**
4. Name your project (e.g., `ninja-design-studio`)
5. Drag and drop the entire `ninja-design-studio` folder
6. Click **Deploy**

✅ Done! You'll get a URL like `ninja-design-studio.pages.dev`

**Option B: Connect to GitHub (Better for ongoing updates)**

1. Create a new GitHub repository
2. Upload these files to the repo
3. In Cloudflare Dashboard → **Workers & Pages** → **Create**
4. Click **Pages** → **Connect to Git**
5. Select your repository
6. Build settings: Leave everything blank (it's just static HTML)
7. Click **Save and Deploy**

---

## 📁 File Structure

```
ninja-design-studio/
├── index.html      # Your website (HTML, CSS, JS all-in-one)
├── _headers        # Security headers for Cloudflare
└── README.md       # This file
```

---

## 🔗 Adding Your Custom Domain

Once your site is live on `*.pages.dev`:

1. In Cloudflare Dashboard, go to your Pages project
2. Click **Custom domains** tab
3. Click **Set up a custom domain**
4. Enter your domain (e.g., `ninjadesignstudio.com`)
5. Follow the DNS instructions

If your domain is already on Cloudflare, it auto-configures. Otherwise, you'll need to update DNS at your registrar.

---

## ✏️ Making Updates

**If using Direct Upload:**
- Make changes to `index.html`
- Go to your Pages project → **Deployments** → **Upload new version**

**If using GitHub:**
- Push changes to your repo
- Cloudflare auto-deploys within seconds

---

## 📧 Contact Form Details

The form uses [Web3Forms](https://web3forms.com) which:
- ✅ Free (250 submissions/month)
- ✅ No backend required
- ✅ Spam protection included
- ✅ Sends emails to your inbox

Form submissions will be emailed to whatever address you used to create your Web3Forms access key.

---

## 🎨 Customization Tips

### Change Colors
Find the CSS variables at the top of `index.html` (around line 40):
```css
--neon-pink: #ff006e;
--neon-cyan: #00f5ff;
--neon-purple: #bf00ff;
```

### Change Content
All text content is in the HTML. Search for sections like:
- `<!-- Hero -->` - Main headline
- `<!-- Services -->` - Your service offerings
- `<!-- Work -->` - Portfolio items
- `<!-- Footer -->` - Contact info and links

### Add Images
1. Create an `images` folder
2. Add your images
3. Reference them in HTML: `<img src="images/your-image.jpg">`

---

## 🆘 Troubleshooting

**Form not working?**
- Make sure you replaced `YOUR_ACCESS_KEY_HERE` with your actual key
- Check your spam folder for the confirmation email from Web3Forms

**Site not loading?**
- Clear your browser cache
- Check Cloudflare Pages dashboard for deployment errors

**Custom domain not working?**
- DNS changes can take up to 48 hours (usually 5-30 minutes)
- Verify DNS records are correctly set

---

## 📊 Free Features You Get

With Cloudflare Pages free tier:
- ✅ Unlimited bandwidth
- ✅ Global CDN (330+ locations)
- ✅ Free SSL certificate
- ✅ DDoS protection
- ✅ 500 builds/month
- ✅ Unlimited preview deployments

---

Made with 🖤 for Web3 builders
