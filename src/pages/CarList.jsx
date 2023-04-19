import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet";
import CommonSection from "../components/UI/CommonSection";
import CarItem from "../components/UI/CarItem";
import CarData from "../assets/text/carDataSet";

const CarListing = () => {
  return (
    <Helmet title="Flota">
      <CommonSection title="Flota" />

      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className=" d-flex align-items-center gap-3 mb-5">
                <span className=" d-flex align-items-center gap-2">
                  <i className="ri-sort-desc"></i> Sortowanie
                </span>

                <select>
                  <option>Opcje</option>
                  <option value="low">Cena od najniższej</option>
                  <option value="high">Cena od</option>
                </select>
              </div>
            </Col>

            {CarData.map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;