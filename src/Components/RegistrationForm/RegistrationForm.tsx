import { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    course: "",
    yearOfStudy: "",
    track: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    setFormData({
      fullName: "",
      email: "",
      course: "",
      yearOfStudy: "",
      track: "",
    });
  };

  return (
    <div className="form-container">
      <h2>Join MUTC Today!</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="course"
          placeholder="Current Course"
          value={formData.course}
          onChange={handleChange}
          required
          className="form-input"
        />
        <input
          type="text"
          name="yearOfStudy"
          placeholder="Year of Study"
          value={formData.yearOfStudy}
          onChange={handleChange}
          required
          className="form-input"
        />
        <select
          name="track"
          value={formData.track}
          onChange={handleChange}
          required
          className="form-input"
        >
          <option value="">Select a Track</option>
          <option value="Cyber Security">Cyber Security</option>
          <option value="UI/UX Design">UI/UX Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Apps Development">
            Mobile Apps Development
          </option>
          <option value="Cloud Engineering">Cloud Engineering</option>
          <option value="Power Platform">Power Platform</option>
        </select>

        <button type="submit" className="submit-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
