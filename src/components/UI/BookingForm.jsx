import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Imię" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Nazwisko" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="E-mail" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Nr telefonu" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Adres odbioru" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Adres docelowy" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">5 osobowy</option>
          <option value="2 person">6 osobowy</option>
          <option value="3 person">7 osobowy</option>
          <option value="4 person">7+ osobowy</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">Mała przestrzeń bagażowa</option>
          <option value="2 luggage">Duża przestrzeń bagażowa</option>
          <option value="3 luggage">Dodatkowy bagażnik na dachu</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Data podróży" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Godzina wyjazdu"
          className="time__picker"
        />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Komentarz"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;