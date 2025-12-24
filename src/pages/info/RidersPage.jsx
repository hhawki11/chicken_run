import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../../data/mediaData';
import './InfoDetailPage.css';
import '../GalleryPage.css';

function RidersPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  
  // Generate array of rider images (rider1thumbnail.jpg to rider25thumbnail.jpg)
  const riderImages = [];
  for (let i = 1; i <= 25; i++) {
    riderImages.push({
      thumbnail: `/src/img/riders/rider${i}thumbnail.jpg`,
      full: `/src/img/riders/rider${i}.jpg`,
      id: i
    });
  }

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction) => {
    const currentIndex = riderImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % riderImages.length;
    } else {
      newIndex = (currentIndex - 1 + riderImages.length) % riderImages.length;
    }
    
    setSelectedImage(riderImages[newIndex]);
  };

  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = getImageUrl(selectedImage.full);
    link.download = `rider${selectedImage.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="gallery-page">
      {/* Blurred background */}
      <div 
        className="gallery-background-blur"
        style={{
          backgroundImage: `url(${getImageUrl('/src/img/Information/cover.JPG')})`
        }}
      />
      
      <header className="gallery-header">
        <div className="gallery-title-section">
          <h1>Riders of the Chicken Run</h1>
          <p className="gallery-count">{riderImages.length} riders</p>
        </div>
        <Link to="/gallery/0" className="gallery-back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Information
        </Link>
      </header>

      <div className="gallery-grid">
        {riderImages.map((image) => (
          <div
            key={image.id}
            className="gallery-item"
            onClick={() => openLightbox(image)}
          >
            <img
              src={getImageUrl(image.thumbnail)}
              alt={`Rider ${image.id}`}
              className="gallery-image"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button 
              className="lightbox-download" 
              onClick={downloadImage}
              title="Download image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </button>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <button 
              className="lightbox-nav lightbox-prev" 
              onClick={() => navigateImage('prev')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
            </button>
            <div className="lightbox-image-container">
              <img
                src={getImageUrl(selectedImage.full)}
                alt={`Rider ${selectedImage.id}`}
                className="lightbox-image"
              />
            </div>
            <button 
              className="lightbox-nav lightbox-next" 
              onClick={() => navigateImage('next')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default RidersPage;