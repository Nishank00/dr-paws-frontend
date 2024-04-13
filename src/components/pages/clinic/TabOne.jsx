import React from "react";
import DoctorSlider from "./DoctorSlider";
const TabOne = ({ contact_numbers, address }) => {
  return (
    <div className="py-4">
      <div className="w-full flex flex-col md:flex-row justify-between items-center">
        <div className="w-full  h-full md:w-[48%] ">
          <div className="items-stretch flex max-w-[326px] flex-col">
            <div className="text-primary font-custom-roca text-2xl leading-6 capitalize w-full">
              Contact Number
            </div>
            <div className="items-stretch flex justify-start  mt-4  ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bd10fe728b1b143a4863d64692eac177ba4fb47d62e8d4e0d6e176108255229b?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[0.9] mr-4 object-contain object-center w-[18px] stroke-[2px] stroke-slate-600 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-primary font-custom-open-sans text-xl leading-4 tracking-tight my-auto">
                {contact_numbers}
              </div>
            </div>
          </div>
          <div className="items-stretch flex max-w-[504px] mt-10 flex-col">
            <div className="text-primary text-2xl font-custom-roca leading-6 capitalize w-full max-md:max-w-full">
              Timings
            </div>
            <div className="w-full mt-4  max-md:max-w-full">
              <div className="gap-5 flex  max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    Monday to Friday
                  </div>
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    Saturday
                  </div>
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    Sunday
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    09:00 - 19:00
                  </div>
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    10:00 - 17:00
                    <br />
                  </div>
                  <div className="text-primary  font-custom-open-sans text-xl  mt-2 leading-4 tracking-tight max-md:mt-8">
                    10:00 - 15:00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-[48%] ">
          <div className="items-stretch flex max-w-[369px] flex-col p-4 border-2 border-accent  rounded-xl pt-6  pb-9">
            <div className="text-primary text-2xl font-custom-roca font-semibold leading-4 tracking-tight w-full">
              Location
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/00a57684c3bae2c303be8ca367a857e1e7ea342520372204dbd805d46dd95e9a?apiKey=22a36eade5734692978208fb0d2f5c62&"
              className="aspect-[1.54] border-2 object-contain object-center w-full overflow-hidden self-center max-w-[333px] mt-5"
            />
            <div className="text-secondary font-custom-open-sans text-base leading-5 tracking-normal w-full mt-5">
              {address}
            </div>
            <button className="text-white font-custom-open-sans  text-[16px] w-[175px] h-[40px] text-center font-bold justify-center  bg-secondary mt-5  rounded-full">
              Get Directions
            </button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium  pt-10  text-2xl md:text-[26px] pb-6 text-center"
        >
          Meet the superheroes
        </h2>
        <DoctorSlider />
      </div>
    </div>
  );
};

export default TabOne;
