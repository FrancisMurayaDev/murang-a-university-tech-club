import LeaderCard from "../../Components/LeaderCard/LeaderCard";
import "./Leadership.css";

import Ndia from "../../assets/ndia.jpg";
import Victory from "../../assets/victory.jpg";
import Allan from "../../assets/allan.jpg";
import Bridget from "../../assets/bridget.jpg";
import Ruth from "../../assets/ruth.jpg";
import Webster from "../../assets/webster.jpg";
import Manase from "../../assets/manase.jpg";
import Carol from "../../assets/carol.jpg";
import Stan from "../../assets/stan.jpg";
import Paul from "../../assets/paul.jpg";
import Evy from "../../assets/evy.jpg";

const leaders = [
  {
    name: "Dr. John Ndia",
    role: "Patron",
    bio: "Dr. Ndia has been instrumental in guiding MUTC towards technological excellence.",
    image: Ndia,
    socials: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Victory Njeri",
    role: "Chairperson",
    bio: "Passionate about tech and leadership, Victory drives MUTC’s vision.",
    image: Victory,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Allan Muhari",
    role: "Vice Chairperson",
    bio: "Dedicated to empowering students through tech and innovation.",
    image: Allan,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Bridget Gitonga",
    role: "Secretary",
    bio: "Ensuring smooth communication and documentation within MUTC.",
    image: Bridget,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ruth Mutisya",
    role: "Treasurer",
    bio: "Manages club finances efficiently to ensure smooth operations.",
    image: Ruth,
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Webster Ifedha",
    role: "Cyber Security Lead",
    bio: "Passionate about cybersecurity and ethical hacking.",
    image: Webster,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Manase Gunga",
    role: "UI/UX Lead",
    bio: "Advocates for user-friendly and visually appealing designs.",
    image: Manase,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Carolyne Githenduka",
    role: "Web Development Lead",
    bio: "Helping students become proficient in full-stack web development.",
    image: Carol,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Stanley Amunze",
    role: "Mobile Apps Development Lead",
    bio: "Building innovative mobile applications for Android and iOS.",
    image: Stan,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Paul Karanja",
    role: "Cloud Engineering Lead",
    bio: "Teaching students how to deploy and scale applications in the cloud.",
    image: Paul,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Evyonn Mbithe",
    role: "Power Platform Lead",
    bio: "Empowering students with Microsoft’s Power Platform technologies.",
    image: Evy,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
];

const Leadership = () => {
  return (
    <section className="leadership">
      <h2 className="leadership-title">Meet Our Leadership</h2>
      <div className="leader-grid">
        {leaders.map((leader, index) => (
          <LeaderCard key={index} {...leader} />
        ))}
      </div>
    </section>
  );
};

export default Leadership;
