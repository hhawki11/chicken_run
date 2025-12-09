import { useState } from 'react';
import { Link } from 'react-router-dom';
import { mediaItems } from '../data/mediaData';
import './HomePage.css';

function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (e) => {
    const scrollLeft = e.target.scrollLeft;
    const cardWidth = e.target.clientWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Media Viewer</h1>
        <p>Scroll through our collection</p>
      </header>
      
      <div 
        className="media-container" 
        onScroll={handleScroll}
      >
        {mediaItems.map((item) => (
          <div key={item.id} className="media-card">
            <div className="image-wrapper">
              <img 
                src={item.thumbnail} 
                alt={item.title}
                className="media-image"
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
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
