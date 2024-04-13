import React from "react";
import Input from "@/components/ui/Input";
import TextInput from "@/components/ui/TextInput";

const SuggestionForm = () => {
  return (
    <div className="w-full bg-primary3 ">
      <div className="w-[80%] pt-[50px] m-auto">
        <header className="text-center md:text-left text-xl md:text-2xl text-primary font-custom-roca mb-4">
          Tell us where you’d like a new clinic so we know where to prioritize
        </header>
      </div>
      <form className=" w-[80%] items-center m-auto bg-primary3 pb-[50px] flex flex-col justify-center rounded-md ">
        <div className=" w-full form-group  md:mb-[4px] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
          <TextInput type="text" placeholder={"Fist Name"} />
          <TextInput type="text" placeholder={"Last Name"} />
        </div>
        <div className="w-full form-group mb-[6px]  grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
          <TextInput type="number" name="age" placeholder={"Contact Number"} />
          <TextInput type="number" name="age" placeholder={"PinCode"} />{" "}
        </div>
        {/* <div className="form-group mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              id="first-name"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="First name"
              aria-label="First Name"
            />
          </div>
          <div>
            <input
              type="text"
              id="last-name"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Last name"
              aria-label="Last Name"
            />
          </div>
          <div>
            <input
              type="tel"
              id="contact-number"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Contact Number"
              aria-label="Contact Number"
            />
          </div>
          <div> */}
        {/* <input
              type="text"
              id="pincode"
              className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
              placeholder="Pincode"
              aria-label="Pincode"
            />
          </div>
        </div> */}
        <div className=" w-full flex items-center mb-4 pl-2">
          <div
            className="checkbox"
            aria-role="checkbox"
            aria-label="Whatsapp Consent Checkbox"
          >
            <input
              type="checkbox"
              id="whatsapp-consent"
              className="h-[15px] w-[15px] md:h-[22px] md:w-[22px]"
            />
          </div>
          <label
            htmlFor="whatsapp-consent"
            className="checkbox-label ml-2 text-[10px] md:text-[12px] text-primary"
          >
            Ticking this box means we have your consent to chat on Whatsapp
          </label>
        </div>
        <div className="w-full mt-5 flex justify-center md:justify-start ">
          <button className="text-white font-custom-open-sans   w-[210px] h-[50px] text-base font-bold  justify-center  bg-secondary2  rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SuggestionForm;
