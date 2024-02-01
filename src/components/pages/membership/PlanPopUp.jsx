// PlanPopUp.js
import React from 'react';

const PlanPopUp = ({ onClosePopup }) => {
  return (
    <div className="flex">
    {/* Left Form */}
    <form className="justify-between items-stretch self-stretch bg-white flex max-w-[249px] flex-col text-sm pt-12 pb-5 px-5 rounded-2xl">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/203598efe0aad57662374b2a714bf58c611e5057e88689988b20e81944beaf33?apiKey=392c8c276f1d4889be04ee754c529ee3&"
        className="aspect-square object-contain object-center w-[101px] self-center max-w-full"
        alt=""
      />
      <header className="text-slate-700 text-xl capitalize whitespace-nowrap mt-5">
        Care Junior
      </header>
      <div className="text-slate-700 mt-2">
        Our plan that helps prepare you and your puppy or kitten for a lifetime together{" "}
      </div>
      <div className="text-slate-700 leading-6 mt-5">
        <span className="font-bold text-slate-700">Includes:</span>
        <div>
          <div>6 free-of-cost consultations every year</div>
          <div>50% discount on additional consultations</div>
          <div>Comprehensive vaccination programme</div>
          <div>Annual deworming</div>
          <div>10 free training sessions</div>
          <div>10% discount on diagnostic tests and scans</div>
          <div>10% off retail products & medicines</div>
          <div>10% off any grooming service</div>
        </div>
      </div>
      <br />
      <button className="text-white text-base font-bold justify-center items-center bg-slate-400 mt-3 px-16 py-3.5 rounded-[86px]">
        Select
      </button>
    </form>

    {/* Right Form */}
    <form>
      <header className="header">Choose a payment plan:</header>

      <div className="payment-option">
        <div className="price">₹6,999/yr</div>
        <div className="duration">For 1 Year</div>
      </div>

      <div className="payment-option">
        <div className="price">₹6,999/yr</div>
        <div className="duration">For 2 Year</div>
      </div>

      <div className="payment-option">
        <div className="price">₹5,499/yr</div>
        <div className="duration">For 3 Year</div>
      </div>

      <div className="benefits">Total benefits worth ₹15,000</div>

      <button className="continue-button">Continue</button>
    </form>
  </div>
  );
};

export default PlanPopUp;
