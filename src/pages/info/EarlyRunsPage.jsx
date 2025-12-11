import { Link } from 'react-router-dom';
import './InfoDetailPage.css';

function EarlyRunsPage() {
  return (
    <div className="info-detail-page">
      <header className="detail-header">
        <Link to="/gallery/0" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Information
        </Link>
      </header>

      <div className="detail-content">
        <h1>Trip Types</h1>
        
        <div className="content-section">
          <p>
            Our motorcycle adventures span various types of trips, each offering unique experiences 
            and memorable moments. Here's what you'll find in our gallery collection:
          </p>
          
          <div className="trip-types">
            <div className="trip-type">
              <h3>🍂 Fall Foliage Weekends</h3>
              <p>
                Annual autumn rides through scenic mountain routes during peak foliage season. 
                These trips typically feature winding roads through New England's most beautiful 
                landscapes, capturing the stunning colors of fall and the crisp mountain air.
              </p>
            </div>
            
            <div className="trip-type">
              <h3>🏁 Memorial & Labor Day Weekends</h3>
              <p>
                Holiday weekend adventures exploring new destinations and classic routes. 
                These extended weekends allow for longer journeys and exploration of destinations 
                that require more time to reach and fully appreciate.
              </p>
            </div>
            
            <div className="trip-type">
              <h3>🎉 Anniversary Celebrations</h3>
              <p>
                Special milestone rides commemorating years of Chicken Run adventures. 
                These celebrations mark important anniversaries with memorable routes and 
                gatherings that honor the history and tradition of our riding community.
              </p>
            </div>
            
            <div className="trip-type">
              <h3>🏔️ Cross-Country Adventures</h3>
              <p>
                Epic long-distance journeys across multiple states and diverse landscapes. 
                These ambitious trips showcase the variety of American scenery and the 
                endurance and spirit of adventure that defines serious motorcycle touring.
              </p>
            </div>
            
            <div className="trip-type">
              <h3>🌄 Scenic Day Rides</h3>
              <p>
                Shorter excursions focusing on particularly beautiful or interesting routes. 
                These rides might explore local gems, historical sites, or simply enjoy 
                perfect riding weather on favorite roads.
              </p>
            </div>
            
            <div className="trip-type">
              <h3>🏕️ Camping Adventures</h3>
              <p>
                Multi-day trips combining motorcycle touring with camping experiences. 
                These adventures add an element of outdoor living to the riding experience, 
                creating deeper connections with nature and each other.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EarlyRunsPage;
