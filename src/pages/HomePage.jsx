import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mediaItems, getImageUrl } from '../data/mediaData';
import './HomePage.css';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  const scrollToIndex = (index) => {
    const container = document.querySelector('.media-container');
    if (container) {
      const scrollLeft = index * container.clientWidth;
      container.scrollTo({
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="home-page">
      <div 
        className="media-container" 
        onScroll={handleScroll}
      >
        {mediaItems.map((item) => (
          <div key={item.id} className="media-card">
            <div className="image-wrapper">
              <img 
                src={getImageUrl(item.thumbnail)} 
                alt={item.title}
                className="media-image"
                onError={(e) => {
                  console.error('Failed to load image:', item.thumbnail);
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <div className="media-info">
              <h2 className="media-title">{item.title}</h2>
              <Link to={`/gallery/${item.id}`}>
                <button className="view-gallery-btn">View Gallery</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        {mediaItems.map((_, index) => (
          <div 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
