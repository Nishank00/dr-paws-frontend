import React from 'react'
import Button from './Button'

const ImageHeader = ({
    imageUrl,
    header,
    text,
    imagePosition,
    buttonText,
    buttonVisibility = true,
  }) => {
  return (     
        <div  className="  lg:w-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 px-5 pb-12 overflow-hidden bg-white">
      <div className={imagePosition == "left" ? "" : "lg:order-2 "}>
          <div
            style={{
              backgroundImage: "url(" + imageUrl + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={
              "min-h-[340px]  rounded-md" +
              (imagePosition == "left" ? "" : "lg:order-2 ") +
              " md:w-auto md:h-auto"
            }
          />
        </div>
        <div>
          <div className="w-full h-full flex md:justify-end md:items-center">
            <div  className=" lg:w-[85%] flex flex-col md:justify-start ">
              <div  className="lg:w-[363px] flex flex-col justify-start">
                <h2
                  style={{ fontFamily: "Roca Bold, sans-serif" }}
                  className="text-primary  font-medium text-3xl lg:w-[290px] md:text-[36px] mb-6"
                >
                  {header}
                </h2>
                <p
                  className="text-primary font-custom-open-sans text-sm mb-6"
                >
                  {text}
                </p>
              </div>
              <Button
                className={`${!buttonVisibility && "hidden"} w-[220px] md:mt-[14px] text-lg `}
                color="secondary"
                label={buttonText}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ImageHeader