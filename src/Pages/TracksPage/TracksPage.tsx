import "./TracksPage.css";
import {
  AiOutlineCode,
  AiOutlineCloud,
  AiOutlineSecurityScan,
} from "react-icons/ai";
import { FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import RegistrationForm from "../../Components/RegistrationForm/RegistrationForm";


const tracks = [
  {
    title: "Cyber Security",
    icon: <AiOutlineSecurityScan />,
    description: "Learn ethical hacking, encryption, and security analysis.",
  },
  {
    title: "UI/UX Design",
    icon: <FaPaintBrush />,
    description: "Master user research, wireframing, and usability testing.",
  },
  {
    title: "Web Development",
    icon: <AiOutlineCode />,
    description: "Learn front-end and back-end web development.",
  },
  {
    title: "Mobile Apps",
    icon: <FaMobileAlt />,
    description: "Develop apps for Android and iOS using modern frameworks.",
  },
  {
    title: "Cloud Engineering",
    icon: <AiOutlineCloud />,
    description: "Build scalable cloud solutions with AWS, Azure, and GCP.",
  },
  {
    title: "Power Platform",
    icon: <FaChartBar />,
    description:
      "Automate workflows and analyze data with Microsoft Power Platform.",
  },
];

function TracksPage() {
  return (
    <div className="tracks">
      <section className="hero">
        <h1 className="track-title">Explore Our Tracks</h1>
        <p className="track-description">
          Join a specialized track and advance your skills with MUTC.
        </p>
      </section>

      <div className="tracks-grid">
        {tracks.map((track, index) => (
          <div className="track-card" key={index}>
            <div className="icon">{track.icon}</div>
            <div className="track-detail">
            <h3>{track.title}</h3>
            <p>{track.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <RegistrationForm />
    </div>
  );
}

export default TracksPage;
