import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
function Footer() {
  return (
    <div className="footer-section">
     <div className="footer-section"> <h3>let us connect through...</h3></div>
      <div className="react-icons-footer">
        
        <Link to="https://github.com/muthuraj8424">
          <FaGithub size={20} color="black" className="icons1" />
        </Link>
        {/* <Link to="+91 8667793019">
          <IoMdContact size={30} color="black" className="icons" />
        </Link> */}
        <Link to="https://www.linkedin.com/in/muthurajkandasamy/">
          <FaLinkedin size={20} color="black" className="icons2" />
        </Link>
        {/* <Link>
          <FaInstagram size={30} color="black" className="icons" />
        </Link> */}
        <Link to="">
          <FaTwitter size={20} color="black" className="icons3" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
