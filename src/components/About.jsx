import React from "react";
import "../styles//About.css";
import {Link} from "react-router-dom"
function About() {
  return (
    <div>
      <div>
        <h3  className="about">
          About me..
        </h3>
        <p className="about-page" style={{ textIndent: "50px" }}>
             I'm Muthuraj K, a pre-final year student studying Computer Science&Engineering, deeply passionate about web development. Currently
          pursuing my Bachelor of Engineering from Government College of Engineering-Bodinayakanur(GCE-Bodi), I've gained
          a  foundation front-end web development Through  projects, I've developed skills in
          HTML, CSS, JavaScript, and React. Despite being
          new to professional experience, I've worked on projects independently
          and collaboratively, enhancing my problem-solving abilities and
          teamwork skills. I'm particularly interested in Full Stack Web Development. As I
          prepare to transition into the professional world, I'm committed to
          continuous learning and contributing meaningfully to innovative
          projects. 
        </p>
      </div>
      <div className="button-about">
        <button>Resume</button>
        <Link to="/contact"><button>Contact</button></Link>
      </div>
    </div>
  );
}

export default About;
