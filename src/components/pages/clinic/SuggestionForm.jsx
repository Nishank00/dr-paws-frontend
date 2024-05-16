import React from "react";
import Input from "@/components/ui/Input";
import TextInput from "@/components/ui/TextInput";
import PhoneNumberInput from "@/components/ui/PhoneNumberInput";

const SuggestionForm = () => {
  return (
    <div className="w-full rounded-lg bg-primary3 ">
      <div className="justify-center w-full items-center bg-primary3 flex rounded-lg flex-col">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c86bbb0d478f3d8bde31d329a0619c24df3bcebaa6c25902d2bc986a973a6de?apiKey=22a36eade5734692978208fb0d2f5c62&"
          className="aspect-[0.79] object-contain object-center w-[15px] md:w-[45px] overflow-hidden max-w-full mt-1 md:mt-9"
        />
        <div className="text-primary text-center  font-custom-roca text-sm md:text-2xl  capitalize self-stretch mt-1 mb-1 md:mt-10 md:mb-9">
          Where should the next Dr. Paws Clinic be?
        </div>
      </div>
      <div className="w-[80%] pt-[20px] m-auto">
        <header className="text-center md:text-left text-xl md:text-2xl text-primary font-custom-roca mb-4">
          Tell us where you’d like a new clinic so we know where to prioritize
        </header>
      </div>
      <form className=" w-[80%] items-center m-auto bg-primary3 pb-[50px] flex flex-col justify-center rounded-md ">
        <div className=" w-full form-group  md:mb-[4px] grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
          <TextInput type="text" placeholder={"First Name"} />
          <TextInput type="text" placeholder={"Last Name"} />
        </div>
        <div className="w-full form-group mb-[6px]  grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-5">
          <PhoneNumberInput placeholder={"Contact Number"} />
          <TextInput
            type="number"
            name="pin_code"
            placeholder={"Pin Code"}
          />{" "}
        </div>

        <div className=" w-full flex items-center my-5 pl-2">
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
            Alert me when a clinic opens near me on Whatsapp
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
