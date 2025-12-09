import { useParams, Link, Navigate } from 'react-router-dom';
import { mediaItems } from '../data/mediaData';
import './GalleryPage.css';

function GalleryPage() {
  const { id } = useParams();
  const mediaItem = mediaItems.find(item => item.id === parseInt(id));

  if (!mediaItem) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="gallery-page">
      <header className="gallery-header">
        <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
        <h1>{mediaItem.title}</h1>
        <p className="gallery-count">{mediaItem.galleryImages.length} images</p>
      </header>

      <div className="gallery-grid">
        {mediaItem.galleryImages.map((imageUrl, index) => (
          <div key={index} className="gallery-item">
            <img 
              src={imageUrl} 
              alt={`${mediaItem.title} - Image ${index + 1}`}
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryPage;
