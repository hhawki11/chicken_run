import { useParams, Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { mediaItems, getImageUrl } from '../data/mediaData';
import './GalleryPage.css';

function GalleryPage() {
  const { id } = useParams();
  const mediaItem = mediaItems.find(item => item.id === parseInt(id));
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    const loadGalleryImages = async () => {
      if (!mediaItem) return;
      
      try {
        // Use Vite's import.meta.glob to load all images from the folder
        const modules = import.meta.glob('/src/img/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', { eager: true });
        
        // Filter images that belong to this specific folder
        const folderImages = Object.entries(modules)
          .filter(([path]) => path.includes(`/src/img/${mediaItem.folderName}/`))
          .filter(([path]) => !path.endsWith('cover.JPG') && !path.endsWith('cover.jpg')) // Exclude cover image
          .map(([path, module]) => ({
            path,
            url: module.default || path
          }))
          .sort((a, b) => a.path.localeCompare(b.path)); // Sort alphabetically
        
        setGalleryImages(folderImages);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setLoading(false);
      }
    };

    loadGalleryImages();
  }, [mediaItem]);

  // Lightbox functions
  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setShowLightbox(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setShowLightbox(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  const downloadImage = () => {
    if (selectedImageIndex === null || !galleryImages[selectedImageIndex]) return;
    
    const image = galleryImages[selectedImageIndex];
    const link = document.createElement('a');
    link.href = image.url;
    link.download = `${mediaItem.title.replace(/\s+/g, '_')}_${selectedImageIndex + 1}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navigateImage = (direction) => {
    if (galleryImages.length === 0) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = selectedImageIndex === galleryImages.length - 1 ? 0 : selectedImageIndex + 1;
    } else {
      newIndex = selectedImageIndex === 0 ? galleryImages.length - 1 : selectedImageIndex - 1;
    }
    setSelectedImageIndex(newIndex);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!showLightbox) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev');
      } else if (e.key === 'ArrowRight') {
        navigateImage('next');
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [showLightbox, selectedImageIndex, galleryImages.length]);

  if (!mediaItem) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="gallery-page">
      {/* Blurred background */}
      <div 
        className="gallery-background-blur"
        style={{
          backgroundImage: mediaItem ? `url(${getImageUrl(mediaItem.thumbnail)})` : 'none'
        }}
      />
      
      <header className="gallery-header">
        <div className="gallery-title-section">
          <h1>{mediaItem.title}</h1>
          <p className="gallery-count">{loading ? 'Loading...' : `${galleryImages.length} images`}</p>
        </div>
        <Link to="/" className="gallery-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
      </header>

      <div className="gallery-grid">
        {loading ? (
          <div className="loading-message">
            <p>Loading gallery images...</p>
          </div>
        ) : galleryImages.length > 0 ? (
          galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image.url}
                alt={`${mediaItem.title} - Image ${index + 1}`}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))
        ) : (
          <div className="no-images-message">
            <p>No images found in {mediaItem.folderName} folder</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {showLightbox && selectedImageIndex !== null && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-download" onClick={downloadImage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
            
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            

            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={() => navigateImage('prev')}
              disabled={galleryImages.length <= 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <div className="lightbox-image-container">
              <img 
                src={galleryImages[selectedImageIndex]?.url}
                alt={`${mediaItem.title} - Image ${selectedImageIndex + 1}`}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <p>{selectedImageIndex + 1} of {galleryImages.length}</p>
              </div>
            </div>

            <button 
              className="lightbox-nav lightbox-next" 
              onClick={() => navigateImage('next')}
              disabled={galleryImages.length <= 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GalleryPage;
