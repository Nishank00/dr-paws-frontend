import Button from "../../ui/Button";

const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonVisibility=true
}) => {
  return (
    <div
      className={"grid grid-cols-1 sm:grid-cols-2 gap-10 body-padding-x pb-12"}
    >
      <div
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={
          "min-h-[340px] w-full rounded-xl" +
          (imagePosition == "left" ? "" : " sm:order-2")
        }
      ></div>
      <div className="w-full flex flex-col justify-center">
        <h2 className="text-primary font-medium text-4xl mb-6">{header}</h2>
        <p className="text-primary mb-6">{text}</p>
        <Button label={buttonText}  style={{display:!buttonVisibility?"none":""}}/>
      </div>
    </div>
  );
};

export default ImageTextHeader;
