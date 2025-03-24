import "./LeaderCard.css";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

interface LeaderProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
  };
}

const LeaderCard = ({ name, role, bio, image, socials }: LeaderProps) => {
  return (
    <div className="leader-card">
      <img src={image} alt={name} className="leader-image" />
      <h3>{name}</h3>
      <p className="leader-role">{role}</p>
      <p className="leader-bio">{bio}</p>
      <div className="leader-socials">
        {socials.linkedin && (
          <a href={socials.linkedin}>
            <FaLinkedin />
          </a>
        )}
        {socials.twitter && (
          <a href={socials.twitter}>
            <FaTwitter />
          </a>
        )}
        {socials.facebook && (
          <a href={socials.facebook}>
            <FaFacebook />
          </a>
        )}
        {socials.instagram && (
          <a href={socials.instagram}>
            <FaInstagram />
          </a>
        )}
      </div>
    </div>
  );
};

export default LeaderCard;
