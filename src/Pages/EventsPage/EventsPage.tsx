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

type EventProps = {
  track: string;
  day: string;
  time: string;
  location: string;
  lead: string;
  // backgroundImage: string;
};

const EventCard = ({ track, day, time, location, lead }: EventProps) => {
  return (
    <div className="event-card">
      <h3 className="event-track">{track}</h3>
      <p className="event-day">Day: {day}</p>
      <p className="event-time">Time: {time}</p>
      <p className="event-location">Location: {location}</p>
      <p className="event-lead">Lead: {lead}</p>
      
    </div>
  );
};

const EventsPage = () => {
  return (
    <div className="events-container">
      <h2 className="events-title">Upcoming Events</h2>
      <div className="event-card-container">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
