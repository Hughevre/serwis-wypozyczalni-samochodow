import React from "react";
import visa from "../../assets/images/visa.jpg";
import blik from "../../assets/images/blik.jpg";
import "../../styles/payment-method.css";

const PaymentMethod = () => {
  return (
    <>
      <div className="payment">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment"/> Przelew tradycyjny
        </label>
      </div>

      <div className="payment mt-3">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment"/> Przelew elektroniczny
        </label>
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment"/> Visa
        </label>

        <img src={visa} className="w-25" alt="Grafika przedstawiajaca logo kart Visa" />
      </div>

      <div className="payment mt-3 d-flex align-items-center justify-content-between">
        <label htmlFor="" className="d-flex align-items-center gap-2">
          <input type="radio" name="payment"/> Blik
        </label>

        <img src={blik} alt="Grafika przedstawiająca logo systemu BLIK" />
      </div>
      <div className="payment text-end mt-5">
        <button>Rezerwuj</button>
      </div>
    </>
  );
};

export default PaymentMethod;