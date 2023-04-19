import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import goalsImg from "../assets/images/mountains.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="O nas">
      <CommonSection title="O nas" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={goalsImg} alt="Zdjęcie przedstawiające mężczyznę stojącego na szczycie góry" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Pomagamy innym w osiąganiu swoich celów
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Skontaktuj się z nami</h6>
                    <h4>+48 22 999-99-99</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h2 className="section__title">Nasz zespół</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;