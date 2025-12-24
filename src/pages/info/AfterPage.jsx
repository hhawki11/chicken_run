import { Link } from 'react-router-dom';
import { getImageUrl } from '../../data/mediaData';
import './InfoDetailPage.css';

function AfterPage() {
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
        <h1>After the Ride</h1>
        
        <div className="content-section">
          <h2>The Social Tradition</h2>
          <p>
            The Chicken Run experience doesn't end when the motorcycles are parked. 
            The post-ride gatherings are an integral part of the tradition, where 
            friendships are strengthened and memories are shared.
          </p>
          
          <h2>Gathering Spots</h2>
          
          <h3>Historic Inns and Lodges</h3>
          <p>
            Many of our rides end at historic inns, mountain lodges, or scenic 
            restaurants that have become traditional gathering spots. These locations 
            are chosen for their atmosphere, hospitality, and ability to accommodate 
            groups of motorcyclists.
          </p>
          
          <h3>Local Favorites</h3>
          <p>
            Over the years, we've discovered local restaurants and establishments 
            that welcome motorcycle groups and provide excellent food and service. 
            These relationships have become part of the Chicken Run tradition.
          </p>
          
          <h2>Post-Ride Activities</h2>
          
          <h3>Story Sharing</h3>
          <p>
            The best part of any ride is sharing the experience. Post-ride gatherings 
            are filled with stories about scenic vistas, interesting encounters, 
            mechanical adventures, and the day's highlights.
          </p>
          
          <h3>Route Planning</h3>
          <p>
            These informal sessions often become impromptu planning meetings for 
            future rides, with riders sharing their favorite roads and suggesting 
            new destinations to explore.
          </p>
          
          <h3>Technical Discussions</h3>
          <p>
            Motorcycle enthusiasts love to discuss their bikes, modifications, 
            and riding gear. Post-ride gatherings provide the perfect opportunity 
            for these technical conversations and advice sharing.
          </p>
          
          <h2>Multi-Day Events</h2>
          
          <h3>Weekend Gatherings</h3>
          <p>
            Special event weekends often include multiple days of activities, 
            with evening gatherings featuring group dinners, presentations about 
            motorcycle history or travel, and planning sessions for future adventures.
          </p>
          
          <h3>Anniversary Celebrations</h3>
          <p>
            Milestone anniversary years include special celebrations with formal 
            dinners, presentations about Chicken Run history, and recognition of 
            long-time participants and organizers.
          </p>
          
          <h2>Lasting Connections</h2>
          
          <h3>Friendships Beyond Riding</h3>
          <p>
            Many participants have formed lasting friendships through the Chicken Run, 
            leading to riding partnerships, travel companions, and support networks 
            that extend far beyond the organized events.
          </p>
          
          <h3>Mentorship</h3>
          <p>
            Experienced riders often take newer participants under their wing, 
            sharing knowledge about motorcycle maintenance, riding techniques, 
            and route recommendations for solo adventures.
          </p>
          
          <div className="highlight-box">
            <h3>🍽️ Culinary Adventures</h3>
            <p>
              Part of the Chicken Run tradition includes discovering great local 
              cuisine. From mountain barbecue to historic taverns, the food 
              experiences are as memorable as the roads themselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AfterPage;
