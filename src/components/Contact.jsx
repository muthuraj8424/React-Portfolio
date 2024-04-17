import React from "react";
import "../styles/Contact.css";
import { Link, useNavigate } from "react-router-dom";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Contact() {
  const navigate = useNavigate();
  const handlesubmit=(e)=>{
      e.preventDefault()
      alert("warning")
      navigate("/")
  }
  return (
    <>
  
      <h4>Contact Me....</h4>
      <div className="container">
        <div className="container-2">
          <div className="react-icons">
            <Link to="https://github.com/muthuraj8424">
              <p>
                <FaGithub size={24} color="white" className="icons" /> github
              </p>
            </Link>
            <Link to="https://www.linkedin.com/in/muthurajkandasamy/">
              <p>
                <FaLinkedin size={24} color="white" className="icons" />{" "}
                linkedin
              </p>
            </Link>
            <Link to="">
              <p>
                <FaTwitter size={24} color="white" className="icons" /> Twitter
              </p>
            </Link>
          </div>
        </div>
        <div className="line-contact"></div>
        <div className="container-1">
          <form onSubmit={handlesubmit}>
            <label htmlFor="">Name</label>
            <input type="text" />

            <label htmlFor="">Email</label>
            <input type="text" />

            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="23" rows="5"></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
