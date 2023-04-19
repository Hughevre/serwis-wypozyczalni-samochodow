import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import employee_n1 from "../../assets/images/employees/ava-1.jpg";
import employee_n2 from "../../assets/images/employees/ava-2.jpg";
import employee_n3 from "../../assets/images/employees/ava-3.jpg";
import employee_n4 from "../../assets/images/employees/ava-4.jpg";

const OUR__MEMBERS = [
  {
    name: "Anna Bykowska",
    experience: "Od 5 lat z nami",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: employee_n1,
  },

  {
    name: "Marek Siarczyński",
    experience: "Od 7 lat z nami",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: employee_n2,
  },

  {
    name: "Henryk Walczak",
    experience: "Od 15 lat z nami",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: employee_n3,
  },

  {
    name: "Magdalena Ziąb",
    experience: "Od 3 lat z nami",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: employee_n4,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="Zdjęcie przedstawiające pracownika firmy" className="w-100" />

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;