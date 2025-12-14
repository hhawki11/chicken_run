import { Link } from 'react-router-dom';
import { getImageUrl } from '../../data/mediaData';
import './InfoDetailPage.css';

function RidersPage() {
  return (
    <div className="info-detail-page">
      {/* Blurred background */}
      <div 
        className="info-detail-background-blur"
        style={{
          backgroundImage: `url(${getImageUrl('/src/img/Information/cover.JPG')})`
        }}
      />
      
      <header className="detail-header">
        <Link to="/gallery/0" className="back-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Information
        </Link>
      </header>

      <div className="detail-content">
        <div className="detail-icon">📅</div>
        <h1>Riders of the Chicken Run</h1>
        
        <div className="content-section">
          <h2>The Community</h2>
          <p>
            The heart of the Chicken Run has always been its riders - a diverse group 
            of motorcycle enthusiasts united by their love of scenic touring and 
            shared adventure. From beginners to veterans, all skill levels are 
            welcome and supported.
          </p>
          
          <h2>Founding Members</h2>
          <p>
            The original group that started the Chicken Run in 1979 laid the foundation 
            for the traditions we continue today. Their vision of inclusive, safe, 
            and enjoyable group riding established the principles that guide us still.
          </p>
          
          <h3>The Organizers</h3>
          <p>
            Over the years, different riders have stepped up to organize routes, 
            coordinate logistics, and ensure safety protocols. These volunteer leaders 
            keep the tradition alive and growing.
          </p>
          
          <h2>Regular Participants</h2>
          <p>
            Many riders have been participating for decades, creating a core group 
            that provides continuity and mentorship for newer riders. These veterans 
            share their knowledge of routes, riding techniques, and local history.
          </p>
          
          <h3>Multi-Generational Riding</h3>
          <p>
            Some families have multiple generations participating in Chicken Runs, 
            with parents introducing their adult children to the tradition, creating 
            lasting family bonds through shared motorcycle adventures.
          </p>
          
          <h2>Riding Styles and Bikes</h2>
          
          <h3>Touring Enthusiasts</h3>
          <p>
            Many participants prefer touring bikes and sport-touring motorcycles, 
            designed for comfort on long rides with luggage capacity for multi-day 
            adventures.
          </p>
          
          <h3>Adventure Riders</h3>
          <p>
            The growth of adventure touring has brought riders on dual-sport and 
            adventure bikes, opening up new possibilities for exploring unpaved 
            roads and more remote destinations.
          </p>
          
          <h3>Classic Enthusiasts</h3>
          <p>
            Vintage and classic motorcycle owners add character to our rides, 
            often sparking interesting conversations about motorcycle history 
            and evolution during rest stops.
          </p>
          
          <h2>Safety Culture</h2>
          <p>
            The Chicken Run community prioritizes safety through:
          </p>
          
          <ul>
            <li>Experienced ride leaders and sweep riders</li>
            <li>Pre-ride briefings covering route and safety protocols</li>
            <li>Group riding techniques and communication systems</li>
            <li>Emphasis on riding within personal skill levels</li>
            <li>Support for riders who need assistance</li>
          </ul>
          
          <div className="highlight-box">
            <h3>🤝 Welcoming Community</h3>
            <p>
              New riders are always welcome at Chicken Run events. The community 
              is known for its mentorship, support, and willingness to help 
              newcomers learn group riding skills and discover great roads.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RidersPage;
