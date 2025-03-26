import "./EventsPage.css";

const events = [
  {
    track: "Cyber Security",
    day: "Monday",
    time: "4PM - 7PM",
    location: "Computer Lab F04",
    lead: "Webster Ifedha",
  },
  {
    track: "UI/UX",
    day: "Tuesday",
    time: "5PM - 8PM",
    location: "Computer Lab F04",
    lead: "Manase Gunga",
  },
  {
    track: "Web Development",
    day: "Wednesday",
    time: "6PM - 9PM",
    location: "Computer Lab F04",
    lead: "Carolyne Githenduka",
  },
  {
    track: "Mobile Apps Development",
    day: "Thursday",
    time: "4PM - 7PM",
    location: "Computer Lab F04",
    lead: "Stanley Amunze",
  },
  {
    track: "Cloud Engineering",
    day: "Friday",
    time: "3PM - 6PM",
    location: "Computer Lab F04",
    lead: "Paul Karanja",
  },
  {
    track: "Power Platform",
    day: "Saturday",
    time: "1PM - 4PM",
    location: "Computer Lab F04",
    lead: "Evyonn Mbithe",
  },
];

const EventsPage = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-item" key={index}>
            <div className="event-header">
              <h3 className="event-track">{event.track}</h3>
              <span className="event-day">{event.day}</span>
            </div>
            <div className="event-details">
              <p>
                <strong>Time:</strong> {event.time}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Lead:</strong> {event.lead}
              </p>
            </div>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
