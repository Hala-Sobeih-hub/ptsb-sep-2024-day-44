import React from "react";

import "./HomePage.css";

function HeroSection() {
  return (
    <div className="hero-section">
      <h1>Hello, my name is Hala.</h1>
      <p>I am a full stack web developer.</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
    </div>
  );
}
