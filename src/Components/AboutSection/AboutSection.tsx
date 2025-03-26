import "./AboutSection.css";


function AboutSection() {
  return (
    <section className="about">
      <div className="overlay">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Murang'a University Tech Club (MUTC) is a vibrant community for tech
            enthusiasts, dedicated to empowering students with hands-on skills
            in programming, UI/UX design, machine learning, cybersecurity, and
            more.
          </p>
          <h3>Why Join MUTC?</h3>
          <ul>
            <li>🔥 Gain real-world tech skills through hands-on projects</li>
            <li>🤝 Network with industry professionals and fellow students</li>
            <li>🚀 Get mentorship and career growth opportunities</li>
            <li>🏆 Participate in hackathons, workshops, and tech events</li>
          </ul>
          <h3>What You Will Gain</h3>
          <p>
            By joining MUTC, you'll enhance your knowledge, build amazing
            projects, and prepare yourself for a successful tech career.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

