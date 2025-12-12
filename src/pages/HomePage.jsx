import { useState, useEffect } from 'react';
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

  // Create display order: Information first, then chronological events in reverse
  const getDisplayOrder = () => {
    const infoItem = mediaItems.find(item => item.id === 0);
    const otherItems = mediaItems.filter(item => item.id !== 0).slice().reverse();
    return infoItem ? [infoItem, ...otherItems] : otherItems;
  };

  const displayItems = getDisplayOrder();

  // Handle wheel events for horizontal scrolling
  useEffect(() => {
    const handleWheel = (e) => {
      // Only handle wheel events on the home page
      if (!document.querySelector('.home-page')) return;
      
      e.preventDefault();
      
      const container = document.querySelector('.media-container');
      if (!container) return;
      
      // Translate vertical scroll to horizontal
      const scrollAmount = e.deltaY * 0.8; // Adjust sensitivity
      container.scrollLeft += scrollAmount;
    };

    // Add wheel event listener to the document
    document.addEventListener('wheel', handleWheel, { passive: false });
    
    // Cleanup on component unmount
    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div className="home-page">
      <div 
        className="media-container" 
        onScroll={handleScroll}
      >
        {displayItems.map((item) => (
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
                <button className="view-gallery-btn">
                  {item.buttonText || "View Gallery"}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="scroll-indicator">
        {displayItems.map((_, index) => (
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
