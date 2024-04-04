import Button from "../../ui/Button";
import "../../../../src/app/font.css";
const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonVisibility = true,
}) => {
  return (
    <>
      {/* <div className=" w-[350px] md:w-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 px-5 pb-12 overflow-hidden bg-white">
        <div
          style={{
            backgroundImage: "url(" + imageUrl + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className={
            "min-h-[340px]  rounded-md" +
            (imagePosition == "left" ? "" : " sm:order-2  mt-2") +
            "w-[250px] h-[250px] md:w-auto md:h-auto"
          }
        />
        <div style={{ border: "1px solid red" }} className=" w-[287px] md:w-auto flex flex-col justify-center md:pl-5">
          <div style={{ border: "1px solid blue" }} className="w-full md:w-[100%] ">
            <div style={{ border: "1px solid blue" }} className="md:w-[363px] flex flex-col justify-start">
              <h2
                style={{ fontFamily: "Roca Bold, sans-serif" }}
                className="text-primary  font-medium text-3xl md:w-[290px] md:text-[36px] mb-6"
              >
                {header}
              </h2>
              <p
                className="text-primary font-custome-open-sans text-sm mb-6"
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
      </div> */}
      <div className=" w-[320px] lg:w-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 px-5  overflow-hidden bg-white">
      <div className={imagePosition == "left" ? "" : "lg:order-2 "}>
          <div
            style={{
              backgroundImage: "url(" + imageUrl + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={
              "w-full h-[280px] lg:min-h-[300px] lg:max-w-[600px] rounded-md" +
              (imagePosition == "left" ? "" : "lg:order-2 ") +
              " "
            }
          />
        </div>
        <div>
          <div  className="w-full  h-[240px] lg:h-full flex md:justify-end md:items-center">
            <div  className="  h-full lg:h-fit lg:w-[85%] flex flex-col justify-between py-2 pb-5 lg:justify-start ">
              <div  className="  lg:w-[70%] flex flex-col justify-start">
                <h2
                  style={{ fontFamily: "Roca Bold, sans-serif" }}
                  className="text-primary  font-medium   lg:text-3xl lg:w-[80%] text-2xl  mb-2 lg:mb-6"
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
    </>

  );
};

export default ImageTextHeader;
