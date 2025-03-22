import "./Home.css"
import HeroSection from "../../Components/HeroSection/HeroSection"
import AboutSection from "../../Components/AboutSection/AboutSection"
import Testimonials from "../../Components/Testimonials/Testimonials"

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <HeroSection />
      <AboutSection />
      <Testimonials />
      
    </div>
  )
}

export default Home
