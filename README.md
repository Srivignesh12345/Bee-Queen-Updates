# Bee Queen ERP - App Update Portal

A modern web-based update management system for the Bee Queen ERP mobile application. This portal allows administrators to manage app versions, publish changelogs, and distribute APK files to end users.

## 📱 Features

- **Public Update Portal**: Clean, user-friendly interface displaying:
  - Current app version
  - Feature highlights (What's New)
  - Step-by-step update instructions
  - Direct APK download links
  
- **Admin Control Panel**: Secure admin interface for:
  - Uploading new APK versions
  - Setting version numbers
  - Publishing release dates
  - Managing changelog entries
  - User engagement tracking

- **Smart Storage**: Client-side storage using localStorage for:
  - Version management
  - Release dates
  - Changelog persistence
  - User preferences

## 🚀 Quick Start

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Web server to host the files (Apache, Nginx, or any Node.js server)
- APK file for the mobile app

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Srivignesh12345/Bee-Queen-Updates.git
   cd Bee-Queen-Updates
   ```

2. **Serve locally** (using Python)
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000`

   Or using Node.js:
   ```bash
   npx http-server
   ```

3. **Access the portal**
   - Public Portal: `http://localhost:8000/index.html`
   - Admin Panel: `http://localhost:8000/admin.html`

## 📁 Project Structure

```
bee_queen_update_portal/
├── index.html          # Public update portal page
├── admin.html          # Admin control panel
├── script.js           # Core functionality & utilities
├── style.css           # Responsive styling
├── logo.jpg            # Bee Queen branding
├── Bee Queen.apk       # Mobile app file (for download)
└── README.md           # This file
```

## 🎯 How It Works

### User Journey
1. User visits the portal (`index.html`)
2. Sees current app version and new features
3. Follows step-by-step update instructions
4. Downloads the APK file directly
5. Installs on their Android device

### Admin Workflow
1. Admin navigates to `admin.html`
2. Fills in the upload form with:
   - New version number (e.g., 1.0.3)
   - Release date
   - Changelog entries
3. Uploads the new APK file
4. Portal updates automatically for all users

## 💾 Data Management

The portal uses browser localStorage to persist data:

```javascript
// Version information
localStorage.setItem('clientVersion', '1.0.2');

// Release date
localStorage.setItem('clientDate', 'June 3, 2026');

// Changelog (newline-separated)
localStorage.setItem('changelog', '- Bug fixes\n- Performance improvements');
```

## 🎨 Customization

### Change App Details
Edit the constant in `script.js`:
```javascript
const APK_FILE = 'Bee Queen.apk';  // Change this to your APK filename
```

### Update Styling
Modify `style.css` to match your brand:
- Colors, fonts, spacing
- Responsive breakpoints
- Component styles

### Add/Remove Features
Edit `index.html` to add or remove sections in:
- What's New list
- Update instructions
- Additional information

## 🌐 Deployment Options

### Option 1: GitHub Pages (FREE)
```bash
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Bee-Queen-Updates.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

### Option 2: Vercel (FREE)
```bash
npm install -g vercel
vercel
```

### Option 3: Netlify (FREE)
1. Connect your GitHub repository
2. Set build command: (leave empty - static site)
3. Publish directory: `.` (root)
4. Deploy!

### Option 4: Self-Hosted Server
Upload files via FTP/SSH to your server:
```bash
scp -r ./* user@yourserver.com:/var/www/bee-queen-updates/
```

## 🔒 Security Considerations

⚠️ **Current Limitations:**
- No authentication on admin panel (public)
- localStorage data can be modified by users
- APK file is publicly downloadable

**Recommendations for Production:**
- Add password protection to admin panel
- Implement backend API for data management
- Use secure file storage (S3, CDN)
- Add version signing/verification
- Enable HTTPS

## 📊 Features by Version

### Version 1.0.2 (Current)
- ✏️ Admin can now edit customer details
- 🔒 Role-based access — only Admin can add, edit & delete customers
- ⚡ Faster wallet & withdrawal screen loading
- 🎨 Improved UI with shimmer loading effects
- 🐛 Bug fixes and performance improvements

### Version 1.0.1
- Initial release with core features

## 🛠️ Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome  | ✅ Full |
| Firefox | ✅ Full |
| Safari  | ✅ Full |
| Edge    | ✅ Full |
| Opera   | ✅ Full |

## 📝 Usage Guide

### For Users
1. Download the latest APK from the portal
2. Go to Settings → Apps → Uninstall old version
3. Install the new APK file
4. Launch the updated app

### For Admins
1. Open `admin.html` in your browser
2. Fill the form with:
   - **App Version**: e.g., `1.0.3`
   - **Release Date**: e.g., `June 15, 2026`
   - **Features**: Each feature on a new line, start with `-`
3. Click "Upload & Publish"
4. Changes appear immediately on the public portal

## 🐛 Troubleshooting

**Issue: Changes not showing on portal**
- Clear browser cache (Ctrl+Shift+Delete)
- Check localStorage in DevTools (F12 → Application)
- Ensure JavaScript is enabled

**Issue: Download button not working**
- Verify APK filename matches `APK_FILE` in script.js
- Check file exists in the same directory
- Confirm proper file permissions

**Issue: Styling looks broken**
- Ensure `style.css` is in the same directory
- Clear cache and hard refresh (Ctrl+F5)
- Check console for CSS errors (F12)

## 📞 Support

For issues or feature requests, please visit:
- GitHub Issues: https://github.com/Srivignesh12345/Bee-Queen-Updates/issues
- Project Repository: https://github.com/Srivignesh12345/Bee-Queen-Updates

## 📄 License

This project is provided as-is for the Bee Queen ERP system.

## 👨‍💻 Author

**Srivignesh** - Bee Queen ERP Development Team

---

**Last Updated**: June 3, 2026
**Current Version**: 1.0.2
