# Deployment Instructions for Chicken Run Gallery

## Issue: Cover Images Not Loading in Production

The problem occurs because Vite handles assets differently in development vs production. Here are multiple solutions:

## 🎯 **Solution 1: Move Images to Public Folder (Recommended)**

1. **Move images to public folder:**
   ```bash
   mkdir -p public/img
   cp -r src/img/* public/img/
   ```

2. **Update image paths in mediaData.js:**
   ```javascript
   // Change from:
   thumbnail: "/src/img/Fall Foliage Weekend 1998/cover.JPG"
   
   // To:
   thumbnail: "/img/Fall Foliage Weekend 1998/cover.JPG"
   ```

3. **Update getImageUrl function:**
   ```javascript
   export const getImageUrl = (imagePath) => {
     // Handle absolute URLs
     if (imagePath.startsWith('http')) {
       return imagePath;
     }
     
     // For local assets, ensure they start with /
     if (!imagePath.startsWith('/')) {
       return '/' + imagePath;
     }
     
     return imagePath;
   };
   ```

## 🔧 **Solution 2: Use Vite's Asset Import (Current Approach)**

Keep images in `src/img/` and use import.meta.glob (already implemented):

```javascript
// This should work for cover images
const coverImages = import.meta.glob('/src/img/**/cover.{jpg,JPG,jpeg,JPEG}', { eager: true });
```

## 🚀 **Solution 3: Cloudinary Migration (Best Long-term)**

Follow the `CLOUDINARY_SETUP.md` guide to move all images to Cloudinary.

## 📋 **Deployment Checklist**

### **Before Deploying:**

1. **Test locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Check for image loading errors in browser console**

3. **Verify all cover images exist:**
   ```bash
   find src/img -name "cover.JPG" | wc -l
   # Should match the number of galleries
   ```

### **For Vercel Deployment:**

1. **Build command:** `npm run build`
2. **Output directory:** `dist`
3. **Install command:** `npm install`

### **For Netlify Deployment:**

1. **Build command:** `npm run build`
2. **Publish directory:** `dist`
3. **Install command:** `npm install`

### **For GitHub Pages:**

1. Update `vite.config.js`:
   ```javascript
   export default {
     base: '/chicken_run/', // Your repo name
   }
   ```

2. Use GitHub Actions for deployment

## 🐛 **Debugging Image Issues**

### **Check Browser Console:**
- Look for 404 errors for image files
- Check if image URLs are correct

### **Add Debug Logging:**
```javascript
import { debugImageLoading } from './src/utils/imageUtils.js';

// Add this in your main component
useEffect(() => {
  debugImageLoading();
}, []);
```

### **Test Image Paths:**
```javascript
// In browser console:
console.log('Test image:', getImageUrl('/src/img/Fall Foliage Weekend 1998/cover.JPG'));
```

## 📈 **Performance Tips for Production**

1. **Optimize images before deployment:**
   ```bash
   # Install imagemin if needed
   npm install imagemin imagemin-mozjpeg
   ```

2. **Use lazy loading** (already implemented in galleries)

3. **Consider WebP format** for better compression

4. **Enable gzip compression** on your hosting platform

## 🔄 **If Images Still Don't Load**

1. **Check file case sensitivity** - some servers are case-sensitive
2. **Verify file extensions** match exactly (JPG vs jpg)
3. **Check file permissions** on your hosting platform
4. **Use absolute URLs temporarily** to test
5. **Consider moving to Cloudinary** for reliable image delivery

The current implementation should work with the Vite asset importing approach. If issues persist, moving images to the public folder or migrating to Cloudinary are the most reliable solutions.
