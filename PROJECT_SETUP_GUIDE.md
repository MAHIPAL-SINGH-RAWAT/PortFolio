# React Portfolio Project - Step by Step Setup Guide

## 📋 Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Code editor (VS Code recommended)

## 🚀 Step 1: Create New React Project with Vite

```bash
# Create new Vite React project
npm create vite@latest my-portfolio -- --template react

# Navigate to project directory
cd my-portfolio

# Install dependencies
npm install
```

## 📦 Step 2: Install Required Dependencies

```bash
# Install React Icons for UI icons
npm install react-icons

# Install Tailwind CSS for styling (optional - this project uses custom CSS)
npm install -D tailwindcss postcss autoprefixer @tailwindcss/vite

# Install additional dev dependencies for better development experience
npm install -D @types/react @types/react-dom
```

## 🗂️ Step 3: Create Project Structure

```bash
# Create components directory
mkdir src/components

# Create assets directory (if needed)
mkdir src/assets

# Create public directory files (if not exists)
mkdir public
```

## 📝 Step 4: Create Component Files

```bash
# Create all component files
touch src/components/Navigation.jsx
touch src/components/ProfileSection.jsx
touch src/components/RecentPosts.jsx
touch src/components/PostCard.jsx
touch src/components/Resume.jsx
touch src/components/Projects.jsx
touch src/components/Footer.jsx
touch src/components/SkeletonLoader.jsx
```

## 🎨 Step 5: Setup Styling

```bash
# The main CSS file (src/index.css) will contain all styles
# No additional CSS files needed as this project uses a single CSS file approach
```

## 📄 Step 6: Add Resume PDF (Optional)

```bash
# Add your resume PDF to public directory
# Place your resume file as: public/Resume - Your_Name.pdf
```

## ⚙️ Step 7: Configure Vite (if needed)

```bash
# vite.config.js is already configured
# No additional configuration needed for basic setup
```

## 🔧 Step 8: Update Package.json Scripts

The scripts should already be configured:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  }
}
```

## 🏃‍♂️ Step 9: Start Development Server

```bash
# Start the development server
npm run dev

# Your app will be available at http://localhost:5173
```

## 🏗️ Step 10: Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📋 Complete File Structure

After following all steps, your project structure should look like:

```
my-portfolio/
├── public/
│   ├── vite.svg
│   └── Resume - Your_Name.pdf (optional)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── ProfileSection.jsx
│   │   ├── RecentPosts.jsx
│   │   ├── PostCard.jsx
│   │   ├── Resume.jsx
│   │   ├── Projects.jsx
│   │   ├── Footer.jsx
│   │   └── SkeletonLoader.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🎯 Step 11: Customize Content

1. **Update Personal Information**:
   - Edit `ProfileSection.jsx` with your details
   - Update social media links
   - Add your profile image URL

2. **Add Your Projects**:
   - Edit `Projects.jsx` with your project details
   - Update project links and descriptions

3. **Update Resume**:
   - Edit `Resume.jsx` with your experience
   - Add your resume PDF to public folder

4. **Customize Styling**:
   - Modify `index.css` for color schemes
   - Adjust responsive breakpoints
   - Update animations and transitions

## 🚀 Step 12: Deploy (Optional)

### Deploy to Netlify:
```bash
# Build the project
npm run build

# Deploy dist folder to Netlify
# Or connect your GitHub repo to Netlify for automatic deployments
```

### Deploy to Vercel:
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow the prompts
```

## 🔍 Troubleshooting

### Common Issues:

1. **Port already in use**:
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   # Or use different port
   npm run dev -- --port 3000
   ```

2. **Module not found errors**:
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build errors**:
   ```bash
   # Check for unused imports
   npm run lint
   # Fix linting issues
   ```

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## 🎉 You're Done!

Your React portfolio project is now ready! You can start customizing it with your personal information, projects, and styling preferences.

Remember to:
- ✅ Test on different screen sizes
- ✅ Optimize images and assets
- ✅ Add proper meta tags for SEO
- ✅ Test all links and functionality
- ✅ Deploy to your preferred hosting platform