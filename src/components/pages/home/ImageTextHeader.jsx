import Button from "../../ui/Button";
import "../../../../src/app/font.css"
const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonVisibility = true,
}) => {
  return (
    <div className=" w-[350px] md:w-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 px-5 pb-12 overflow-hidden bg-white">
      <div
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={
          "min-h-[340px]  rounded-md" +
          (imagePosition == "left" ? "" : " sm:order-2 mt-2") + "w-[250px] h-[250px] md:w-auto md:h-auto"
        }
      />
      <div className=" w-[287px] md:w-auto flex flex-col justify-center md:pl-16">
        <div className="w-full md:w-[55%] ">
          <h2 style={{ fontFamily: 'Roca Bold, sans-serif' }} className="text-primary  font-medium text-3xl  md:text-4xl mb-6">{header}</h2>
          <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-primary  text-sm mb-6">{text}</p>

        </div>

        <Button
          className={`${!buttonVisibility && "hidden"} w-[220px] text-lg `}
          color="secondary"
          label={buttonText}
        />
      </div>
    </div>
  );
};

export default ImageTextHeader;
