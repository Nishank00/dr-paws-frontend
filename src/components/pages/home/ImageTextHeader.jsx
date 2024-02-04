import Button from "../../ui/Button";

const ImageTextHeader = ({
  imageUrl,
  header,
  text,
  imagePosition,
  buttonText,
  buttonVisibility = true,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pb-12 overflow-hidden">
      <div
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className={
          "min-h-[340px] w-full rounded-sm" +
          (imagePosition == "left" ? "" : " sm:order-2")
        }
      />
      <div className="w-full flex flex-col justify-center p-10">
        <h2 className="text-primary font-medium text-5xl mb-6">{header}</h2>
        <p className="text-primary mb-6">{text}</p>
        <Button
          className={!buttonVisibility && "hidden"}
          color="secondary"
          label={buttonText}
        />
      </div>
    </div>
  );
};

export default ImageTextHeader;
