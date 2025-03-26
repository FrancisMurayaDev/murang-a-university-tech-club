import "./Testimonials.css";
import Testimonial1 from "../../assets/testimonial1.jpg";
import Testimonial2 from "../../assets/testimonial2.jpg";
import Testimonial3 from "../../assets/testimonial3.jpg";
import Testimonial4 from "../../assets/testimonial4.jpg";
import Testimonial5 from "../../assets/testimonial5.jpg";

const testimonials = [
  {
    image: Testimonial1,
    name: "John Doe",
    detail: "MUTC has helped me grow as a developer and meet amazing mentors!",
  },
  {
    image: Testimonial2,
    name: "Smith Duke",
    detail:
      "Joining MUTC has been a game-changer for my career. The mentorship and resources are top-notch!",
  },
  {
    image: Testimonial3,
    name: "Pascal Seth",
    detail:
      "The Tech Club provided me with hands-on projects that improved my coding skills significantly!",
  },
  {
    image: Testimonial4,
    name: "Jane Elizabeth",
    detail:
      "I met amazing developers and learned so much about teamwork and real-world development!",
  },
  {
    image: Testimonial5,
    name: "Rebecca Sarah",
    detail:
      "MUTC's community is supportive and inspiring. I’ve grown both technically and professionally!",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonial-title">What Students Say About Us</h2>
      <p className="testimonial-subtitle">
        Hear from students who have experienced the impact of MUTC first-hand.
      </p>

      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>

      <div className="why-join">
        <h2>Why You Need MUTC</h2>
        <p>
          Whether you're just starting out or looking to advance in tech, MUTC
          provides mentorship, hands-on projects, and industry exposure to
          supercharge your learning.
        </p>
      </div>
    </section>
  );
}

type TestimonialProps = {
  image: string;
  name: string;
  detail: string;
};

function TestimonialCard({ image, name, detail }: TestimonialProps) {
  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="testimonial-image" />
      <h3 className="testimonial-name">{name}</h3>
      <p className="testimonial-detail">{detail}</p>
    </div>
  );
}

export default Testimonials;
