import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Chcesz stać się częścią naszego zespołu?
            </h2>

            <button className="btn become__driver-btn mt-4">
              Sprawdź oferty pracy
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;