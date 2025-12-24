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

  const navigatePrev = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : displayItems.length - 1;
    scrollToIndex(newIndex);
  };

  const navigateNext = () => {
    const newIndex = currentIndex < displayItems.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  // Create display order: Information first, then chronological events in reverse
  const getDisplayOrder = () => {
    const infoItem = mediaItems.find(item => item.id === 0);
    const otherItems = mediaItems.filter(item => item.id !== 0).slice().reverse();
    return infoItem ? [infoItem, ...otherItems] : otherItems;
  };

  const displayItems = getDisplayOrder();
  const currentItem = displayItems[currentIndex];

  return (
    <div className="home-page">
      {/* Blurred background */}
      <div 
        className="background-blur"
        style={{
          backgroundImage: currentItem ? `url(${getImageUrl(currentItem.thumbnail)})` : 'none'
        }}
      />
      
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

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <button 
          className="nav-arrow nav-arrow-left" 
          onClick={navigatePrev}
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
      )}
      {currentIndex < displayItems.length - 1 && (
        <button 
          className="nav-arrow nav-arrow-right" 
          onClick={navigateNext}
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      )}

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
