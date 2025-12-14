import { Link } from 'react-router-dom';
import { nextEventData } from '../../data/eventData';
import { getImageUrl } from '../../data/mediaData';
import './InfoDetailPage.css';

function NextRunPage() {
  // Function to determine event status based on date
  const getEventStatus = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1; // 0-based, so add 1
    const currentDay = today.getDate();
    
    // Parse the event date (format: "January 15-17, 2025")
    const eventDateStr = nextEventData.date;
    const monthNames = {
      "January": 1, "February": 2, "March": 3, "April": 4, "May": 5, "June": 6,
      "July": 7, "August": 8, "September": 9, "October": 10, "November": 11, "December": 12
    };
    
    // Extract month, start day, and year from the event date
    const parts = eventDateStr.split(' ');
    const eventMonth = monthNames[parts[0]];
    const dayRange = parts[1].split('-');
    const eventStartDay = parseInt(dayRange[0]);
    const eventEndDay = parseInt(dayRange[1]);
    const eventYear = parseInt(parts[2].replace(',', ''));
    
    const eventStartDate = new Date(eventYear, eventMonth - 1, eventStartDay);
    const eventEndDate = new Date(eventYear, eventMonth - 1, eventEndDay);
    
    // Check if event is in the past (end date has passed)
    if (today > eventEndDate) {
      return null; // Don't show anything for past events
    }
    
    // Check if event is happening now (today is between start and end dates)
    if (today >= eventStartDate && today <= eventEndDate) {
      return {
        status: 'happening',
        color: 'green',
        icon: '🎉',
        title: 'The Chicken Run is happening now!',
        message: 'Check back soon for photos and updates from this adventure.'
      };
    }
    
    // Check if event is within the next month
    const nextMonthDate = new Date(today);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    
    if (eventStartDate <= nextMonthDate && eventStartDate >= today) {
      return {
        status: 'soon',
        color: 'orange',
        icon: '⏰',
        title: 'The Next Chicken Run is Coming Soon!',
        message: 'Get your gear ready and mark your calendar.'
      };
    }
    
    // Event is not soon
    return {
      status: 'distant',
      color: 'red',
      icon: '📅',
      title: 'Next Chicken Run Scheduled',
      message: 'Save the date and start planning your adventure.'
    };
  };

  const eventStatus = getEventStatus();
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
        <h1>When is the Next Chicken Run</h1>
        
        {eventStatus ? (
          <>
            {/* Event Announcement */}
            <div className="event-announcement">
              <h2 className="event-title">{nextEventData.theme}</h2>
              <p className="event-date">{nextEventData.date} at {nextEventData.departure}</p>
            </div>

            {/* Live Event Status */}
            <div className={`live-status status-${eventStatus.color}`}>
              <div className="status-icon">{eventStatus.icon}</div>
              <h3>{eventStatus.title}</h3>
              <p>{eventStatus.message}</p>
            </div>

            {/* Event Details Table */}
            <div className="event-details">
              <h3>Event Details</h3>
              <div className="details-table">
                <div className="detail-row">
                  <span className="detail-icon">📅</span>
                  <span className="detail-label">Date:</span>
                  <span className="detail-value">{nextEventData.date}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-icon">🕘</span>
                  <span className="detail-label">Departure:</span>
                  <span className="detail-value">{nextEventData.departure}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-icon">🍂</span>
                  <span className="detail-label">Theme:</span>
                  <span className="detail-value">{nextEventData.theme}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-icon">🗺️</span>
                  <span className="detail-label">Route:</span>
                  <span className="detail-value">{nextEventData.route}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-icon">📍</span>
                  <span className="detail-label">Accommodation:</span>
                  <span className="detail-value">{nextEventData.accommodation}</span>
                </div>
              </div>
            </div>

            {/* Dynamic Get Ready Section */}
            <div className="preparation-section">
              <h3>{nextEventData.themePreparation[nextEventData.theme]?.title}</h3>
              <ul className="preparation-list">
                {nextEventData.themePreparation[nextEventData.theme]?.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <div className="no-event">
            <p>No upcoming Chicken Run events scheduled at this time.</p>
            <p>Check back later for updates on future adventures!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NextRunPage;
