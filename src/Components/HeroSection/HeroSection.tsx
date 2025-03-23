import "./HeroSection.css"
import backgroundimage from "../../assets/hero.bg.jpg"


function HeroSection({title, subtitle, backgroundimage}: HeroProps) {

  type HeroProps = {
    title: string;
    subtitle: string;
    backgroundimage: string
  }
  return ( 

    
    <section
      className="hero"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>


  )
}

export default HeroSection
