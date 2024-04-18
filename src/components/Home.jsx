import React from "react";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import mying from "../assets/-u1md2.jpg";
import addimg from "../assets/man.png";
import "../styles/Home.css";

function Home() {
  const [randomText, setRandomText] = useState("");

  useEffect(() => {
    const texts = ["Frontend", "React", "JavaScript"];
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * texts.length);
      setRandomText(texts[randomIndex]);
    }, 1000);
    console.log(randomText);
  }, []);

  return (
    <div>
      <div className="home-container">
        {/* {randomText} */}
        <div className="display-content">
          <div className="image">
            <img
              src={mying}
              alt=""
              width="300px"
              height="300px"
              className="myimg"
            />
          </div>
          <div className="homepage-content">
            <span className="span">
              Hi There...👋
              <br />
              Welcome to Muthuraj's Web Development Studio!
            </span>
            <h3 style={{ textIndent: "3.5rem" }} className="content-home">
              As a passionate Full Stack Web Developer, I specialize in creating{" "}
              dynamic and user-friendly websites tailored to your needs. With a
              keen eye for design and a commitment to excellence, I transform
              ideas into reality, delivering solutions that not only meet but
              exceed expectations.{" "}
            </h3>
          </div>
        </div>
        <div className="add-main">
          <div className="additional-info">
            <h2>Why Work with me..</h2>
            <p>
              I am a great communicator and love to interest the necessary time
              to understand the customer's problem very well
            </p>
            <h5>DEVELOPMENT TOOLS:</h5>
            <p>
              I am familiar and work on a daily basis with
              HTML,CSS,javascript,bootstarp,and the framework React{" "}
            </p>
            <h5>DELIEVERED PROJECTS:</h5>
            <p>
              Listed below are some of the projects , that i have made using
              javascript.. Click the below links to view the project...
            </p>
            <div className="options-div">
              {" "}
              <li>
                <a href="https://muthuraj8424.github.io/colorpicker/">
                  ColorFliper{" "}
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://muthuraj8424.github.io/WeatherAPI/">
                  WeatherAPI{" "}
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://muthuraj8424.github.io/numberchallenge/">
                  Guessthenum{" "}
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://muthuraj8424.github.io/todoliist/">
                  ToDo-List{" "}
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="https://muthuraj8424.github.io/form-validation/">
                  Form-Validation{" "}
                  <i class="fa fa-external-link" aria-hidden="true"></i>
                </a>
              </li>
            </div>
          </div>
          <div className="additional-image">
            <img src={addimg} alt="add-img" className="additional-img" />
          </div>
        </div>
        <Footer />
        {/* <div style={{ borderTop: "1px solid white", margin: "40px" }}>
          <About />
        </div>
        <div style={{ borderTop: "1px solid white", margin: "40px" }}>
          <Services />
        </div>
        <div style={{ borderTop: "1px solid white", margin: "40px" }}>
          <Allprojects />
        </div>
        <div >
          <Contact />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
