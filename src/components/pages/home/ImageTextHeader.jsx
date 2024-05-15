"use client";
import Button from "../../ui/Button";
import "../../../../src/app/font.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonUrl,
  buttonColor,
  Imageheight,
  buttonVisibility = true,
  headingClass = "",
  paragraphClass = "",
  buttonClass = "",
}) => {
  const router = useRouter();
  const handleClick = () => {
    if (buttonUrl) {
      router.push(buttonUrl);
    }
  };
  return (
    <>
      <div className=" w-[320px] lg:w-auto grid grid-cols-1 lg:grid-cols-2 gap-3 overflow-hidden bg-white">
        <div className={imagePosition == "left" ? "" : "lg:order-2 "}>
          <div
            style={{
              backgroundImage: "url(" + imageUrl + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className={
              "w-full h-[280px] lg:min-h-[300px]  lg:max-w-[600px] lg:h-full rounded-md" +
              (imagePosition == " left" ? "" : " lg:order-2 ") +
              " "
            }
          />
        </div>
        <div>
          <div className="w-full  h-[240px] lg:h-full flex md:justify-end md:items-center">
            <div className="h-full lg:h-fit lg:w-[85%] flex flex-col justify-between py-2 pb-5 lg:justify-start ">
              <div className="lg:h-fit flex flex-col justify-start">
                <h2
                  style={{ fontFamily: "Roca Bold, sans-serif" }}
                  className={
                    "text-primary font-medium w-[80%] lg:text-[33px] text-2xl mb-2 lg:mb-6 " +
                    headingClass
                  }
                >
                  {header}
                </h2>
                <p
                  className={
                    "text-primary w-[80%] font-custom-open-sans text-sm mb-6 " +
                    paragraphClass
                  }
                >
                  {text}
                </p>
              </div>
              {buttonText !== "Download App" ? (
                <Button
                  className={
                    `${
                      !buttonVisibility && "hidden"
                    } w-[220px] md:mt-[14px] transition lg:mt-1 text-lg ` + buttonClass
                  }
                  color={buttonColor}
                  label={buttonText}
                  onClick={handleClick}
                />
              ) : (
                <div className="flex items-center  gap-6">
                  <Image src="/appStore.png" height={150} width={150} alt="" />
                  <Image src="/playStore.png" height={160} width={165} alt="" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageTextHeader;
