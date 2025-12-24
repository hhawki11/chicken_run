import { Link } from 'react-router-dom';
import { getImageUrl } from '../data/mediaData';
import './InformationPage.css';

function InformationPage() {
  const informationSections = [
    {
      id: 'next-run',
      title: 'When is the Next Chicken Run',
      emoji: '🏍️',
      path: '/info/next-run'
    },
    {
      id: 'history',
      title: 'The History of the Chicken Run',
      emoji: '🕐',
      path: '/info/history'
    },
    {
      id: 'roads',
      title: 'Favorite Roads of the Chicken Run',
      emoji: '📸',
      path: '/info/roads'
    },
    {
      id: 'riders',
      title: 'Riders of the Chicken Run',
      emoji: '📅',
      path: '/info/riders'
    }
  ];

  return (
    <div className="information-page">
      {/* Blurred background */}
      <div 
        className="info-background-blur"
        style={{
          backgroundImage: `url(${getImageUrl('/src/img/Information/cover.JPG')})`
        }}
      />
      
      <Link to="/" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </Link>
        <header className="info-header">
          <h1>Welcome to Chicken Run</h1>
          <p>Explore decades of motorcycle adventures through our comprehensive information sections.</p>
        </header>

      <div className="info-grid">
        {informationSections.map((section) => (
          <Link 
            key={section.id} 
            to={section.path} 
            className="info-card"
          >
            <div className="info-icon">
              {section.emoji}
            </div>
            <h3 className="info-title">{section.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default InformationPage;
