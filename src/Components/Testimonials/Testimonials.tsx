import "./Testimonials.css"
import Testimonial1 from "../../assets/testimonial1.jpg"
import Testimonial2 from "../../assets/testimonial2.jpg"
import Testimonial3 from "../../assets/testimonial3.jpg"
import Testimonial4 from "../../assets/testimonial4.jpg"
import Testimonial5 from "../../assets/testimonial5.jpg"
function Testimonials() {
  return (
    <div>
      <h2 className="testimonial-title">Testimonials</h2>

      <Testimonial image={Testimonial1} text="John Doe" detail="MUTECH has helped me grow as a developer and meet amazing mentors!" />

      <Testimonial image={Testimonial2} text="Smith Duke" detail="Joining MUTC has been a game-changer for my career. The mentorship and resources are top-notch!" />
      

      <Testimonial image={Testimonial3} text="Pascal Seth" detail="The Tech Club provided me with hands-on projects that improved my coding skills significantly!" />
      

      <Testimonial image={Testimonial4} text="Jane Elizabeth" detail="I met amazing developers and learned so much about teamwork and real-world development!" />
      

      <Testimonial image={Testimonial5} text="Rebecca Sarah" detail="MUTC's community is supportive and inspiring. I’ve grown both technically and professionally!" />
      
      
    </div>
  )
}

type TestimonialProp = {
  image: string;
  text: string,
  detail: string
};


function Testimonial ({image, text, detail}: TestimonialProp) {
  return (
    <div className="testimonial">
      <div className="upper-testimonial">
      <p className="testimonial-name">{text}</p>
      <img className="testimonial-image" src={image} alt="testimonial image" />
      </div>      
      <p className="testimonial-detail">{detail}</p>
    </div>
  )
}

export default Testimonials
