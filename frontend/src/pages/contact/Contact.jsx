// // src/pages/Contact.js
// import React from "react";

// const Contact = () => {
//   return (
//     <section id="contact">
//       <h2>Contact</h2>
//       <p>You can contact us at contact@bloodprediction.com</p>
//     </section>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally here you'd make a POST request to an API to submit the form
    console.log("Form Submitted", formData);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-us">
      <div className="contact-container">
        <h1 className="heading">Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn" disabled={submitted}>
            {submitted ? "Thank you for contacting us!" : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
