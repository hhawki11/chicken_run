// Deployment Helper for Image Loading
// This file contains utilities to help debug image loading issues

export const debugImageLoading = () => {
  console.log('=== Image Loading Debug Info ===');
  console.log('Environment:', import.meta.env.MODE);
  console.log('Base URL:', import.meta.env.BASE_URL);
  
  // Test loading a cover image
  const testPath = '/src/img/Fall Foliage Weekend 1998/cover.JPG';
  try {
    const testUrl = new URL(testPath, import.meta.url).href;
    console.log('Test image URL:', testUrl);
  } catch (error) {
    console.error('Error creating test URL:', error);
  }
};

export const listAvailableImages = () => {
  const images = import.meta.glob('/src/img/**/cover.{jpg,JPG,jpeg,JPEG}', { eager: true });
  console.log('Available cover images:', Object.keys(images));
  return images;
};

// Alternative getImageUrl that works in production
export const getProductionImageUrl = (imagePath) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // For production builds, we need to handle images differently
  if (import.meta.env.PROD) {
    // In production, convert src paths to public paths
    let publicPath = imagePath.replace('/src/img/', '/img/');
    if (!publicPath.startsWith('/')) {
      publicPath = '/' + publicPath;
    }
    return publicPath;
  } else {
    // In development, use the current approach
    try {
      return new URL(imagePath, import.meta.url).href;
    } catch (error) {
      console.warn('Error loading image:', imagePath, error);
      return imagePath;
    }
  }
};
