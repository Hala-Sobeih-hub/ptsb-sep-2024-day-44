import React from "react";

import "./AboutPage.css";

function AboutMeSection() {
  return (
    <div className="about-me-section">
      <h2>About Me</h2>
      <p>I am a full stack web developer. I am starting my journey.</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="about-page">
      <AboutMeSection />
    </div>
  );
}
