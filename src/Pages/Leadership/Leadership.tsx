import LeaderCard from "../../Components/LeaderCard/LeaderCard";
import "./Leadership.css";
import leader1 from "../../assets/leader1.jpg"

const leaders = [
  {
    name: "Dr. John Ndia",
    role: "Patron",
    bio: "Dr. Ndia has been instrumental in guiding MUTC towards technological excellence.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#" },
  },
  {
    name: "Victory Njeri",
    role: "Chairperson",
    bio: "Passionate about tech and leadership, Victory drives MUTC’s vision.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Allan Muhari",
    role: "Vice Chairperson",
    bio: "Dedicated to empowering students through tech and innovation.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Bridget Gitonga",
    role: "Secretary",
    bio: "Ensuring smooth communication and documentation within MUTC.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    name: "Ruth Mutisya",
    role: "Treasurer",
    bio: "Manages club finances efficiently to ensure smooth operations.",
    image: leader1,
    socials: { linkedin: "#", instagram: "#" },
  },
  {
    name: "Webster Ifedha",
    role: "Cyber Security Lead",
    bio: "Passionate about cybersecurity and ethical hacking.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Manase Gunga",
    role: "UI/UX Lead",
    bio: "Advocates for user-friendly and visually appealing designs.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Carolyne Githenduka",
    role: "Web Development Lead",
    bio: "Helping students become proficient in full-stack web development.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Stanley Amunze",
    role: "Mobile Apps Development Lead",
    bio: "Building innovative mobile applications for Android and iOS.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Paul Karanja",
    role: "Cloud Engineering Lead",
    bio: "Teaching students how to deploy and scale applications in the cloud.",
    image: leader1,
    socials: { linkedin: "#", twitter: "#", facebook: "#", instagram: "#" },
  },
  {
    name: "Evyonn Mbithe",
    role: "Power Platform Lead",
    bio: "Empowering students with Microsoft’s Power Platform technologies.",
    image: leader1,
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
