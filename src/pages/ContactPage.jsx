import React from "react";

function ContactSection() {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: timmy@gmail.com</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      {/* <ContactSection /> */}
      <div className="contact-section">
        <h2>Contact Me</h2>
        <p>Email: timmy@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
    </div>
  );
}
