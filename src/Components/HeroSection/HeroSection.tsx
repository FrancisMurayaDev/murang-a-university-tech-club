import "./HeroSection.css";
import HeroVideo from "../../../public/hero-background.mp4";

function HeroSection() {
  return (
    <section className="hero-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={HeroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h2 className="hero-mut">Welcome to MUTC</h2>
        <h3 className="hero-sub">Murang'a University Tech Club</h3>
        <p className="text-mut">
          Empowering Students in Technology and Innovation
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
