import React from "react";
import "../styles/Project.css";
import { Link } from "react-router-dom";
function Project() {
  return (
    <>
      <div className="container-project">
        <div className="internships">
          <div className="intern1">
            <h2
              style={{ fontSize: "28px", textDecoration: "UnderLine" }}
              className="colorpicker"
            >
              Interships:
            </h2>
            <h2 className="intership-heading">Codsoft Intership</h2>

            <li>
              Designed three web applications, including a portfolio,
              calculator, and food clone app, during internship.
            </li>

            <li>
              Explored ways to visualize results to team members using HTML, CSS
              and Javascript .optimizing the result page and implementing
              user-friendly navigation.
            </li>
            <li>
              Initiated a visually appealing and user-friendly UI for a food
              ordering app, replicating the target design with 90% of the
              functionality.
            </li>
          </div>
          <br />
          <div className="intern2">
            <h2 className="intership-heading"> Nullclass Intership</h2>

            <li>
              Actively undergoing comprehensive full-stack web development
              training at NullClass, enhancing skills for my future
            </li>

            <li>
              Successfully built 70% fully functional web applications during
              the training.
            </li>
          </div>
          <br />
        </div>
        <div className="projects">
          <h2
            style={{ fontSize: "20px", textDecoration: "UnderLine" }}
            className="colorpicker"
          >
            Projects: 
           
           
          </h2> <p style={{margin:'10px'}}>"These websites are not designed to be responsive."</p>
          <div className="project">
            <h2 className="project-heading">
              <a href="https://tictactoe-project-mu.vercel.app/">
                {" "}
                Tic-Tac-Toe
              </a> <i class="fa fa-external-link" aria-hidden="true"></i>
            </h2>

            <li>
              Developed a Tic Tac Toe game application using HTML, CSS, and
              JavaScript, contributing to 100% of the project's development.
            </li>
            <li>
              Implemented game logic to allow two players to take turns,
              ensuring seamless user interaction, covering 100% of gameplay
              functionality.
            </li>
            <li>
              Acesigned and styled the user interface for optimal user
              experience, focusing on clarity and simplicity, achieving 90%
              adherence to design principles.
            </li>
          </div>
          <br />
          <div className="project">
            <h2 className="project-heading">
              <a href="https://e-commerce-ten-iota-37.vercel.app/">
                E-commerce
              </a> <i class="fa fa-external-link" aria-hidden="true"></i>
            </h2>

            <li>
              Developed an e-commerce platform using HTML, CSS, JavaScript, and
              backend technologies, overseeing 100% of the project's
              development.
            </li>
            <li>
              Increased user engagement by 25% through interactive e-commerce
              functionalities including product browsing, search, and checkout,
              covering all critical features.filters.
            </li>
            <li>
              Designed and executed a user-friendly interface for seamless
              shopping experiences, meeting 100% of design specifications
            </li>
          </div>
          <br />
          <div className="project">
            <h2 className="project-heading">
              <a href="https://quizapp-eight-snowy.vercel.app/">Quiz App</a><i class="fa fa-external-link" aria-hidden="true"></i>
            </h2>
            <li>
              Developed a quiz app using HTML, CSS, and JavaScript, contributing
              to 100% of the project's creation.
            </li>
            <li>
              Implemented quiz logic to deliver questions and record user
              responses, ensuring smooth interaction, covering 100% of quiz
              functionality.
            </li>
            <li>
              Conducted comprehensive testing and debugging to validate
              functionality and resolve issues, achieving 100% resolution of
              bugs and functionality validation.
            </li>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default Project;
