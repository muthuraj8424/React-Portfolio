import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import "../styles/Service.css";
function Services() {
  const logo1 = <MdDesignServices />;
  const logo2 = <FaCode />;

  const MyServices = [
    {
      id: "1",
      img: logo1,
      name: "web Design",
      content:
        "I do UI/UX design for the website that helps the website to put the unique look",
    },
    {
      id: "2",
      img: logo2,
      name: "web development",
      content:
        "I also develop the website . I create the website with fast and simple",
    },
    {
      id: "3",
      img: logo2,
      name: "Responsive web development",
      content:
        "I create the website with responsive that includes mobile,tabs PC and laptops",
    },
  ];
  // console.log(MyServices[1].name);
  return (
    <>
      <div className="service-container-heading">
        <h3>Services</h3>
        <h5>Some of my recent srvices by using the react js</h5>
      </div>
      <div className="service-container">
        {MyServices.map((item) => (
          <div className="service-header">
            <div className="icons-heading">
              <p className="service-img">{item.img}</p>
              <p>{item.name}</p>
            </div>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Services;
