import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" id="aboutMe">
      <h1 className="aboutHeader">About me</h1>
      <p class="aboutParagraph" style={{ paddingTop: "10px" }}>
        Full stack developer. Based in Clarksville, Tennessee.
      </p>
      <div class="experience-grid">
        <h2 class="experienceHeader">Experience</h2>
        <p class="aboutParagraph">United States Army Infantry</p>
        <a class="aboutParagraph">July 2019 - April 2022</a>
        <p class="aboutParagraph">
          Fullstack Software Developer at Joint Special Operations Command
        </p>
        <a>April 2022 - October 2022</a>
        <p class="aboutParagraph">Fullstack Software Developer at VKIS</p>
        <a>January 2023 - Current</a>
      </div>
      <h2 className="educationHeader" style={{ paddingTop: "50px" }}>
        Education
      </h2>
      <p class="aboutParagraph" style={{ paddingTop: "10px" }}>
        Galvanize Software Development Immersive Course
      </p>
      <p class="aboutParagraph" style={{ paddingTop: "10px" }}>
        Universty of Penn State 2022-Current
      </p>
    </div>
  );
}

export default About;
