"use client"
import React,{useState,useEffect} from "react";
import BannerPetCard from "./BannerPetCard";
import "@/app/globals.css"
const NewBanner = () => {
  // const [backgroundUrl, setBackgroundUrl] = useState('');
  const[isMobile,setIsMobile]=useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 426) { // Small screen size
        setIsMobile(true)
      } else { // Medium screen size and larger
        setIsMobile(false)
      }
    };

    handleResize(); // Set background image initially

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div
      className="h-auto md:h-[85vh] text-white body-padding-x py-20"
      style={{
        backgroundImage: `url(${isMobile?"/home/small_screen_background.jpg":"/home/banner.jpg"})`,
        // backgroundImage: `url("https://s3-alpha-sig.figma.com/img/2835/fa23/27f43a52362e2d085aa3e5ab4f5259ca?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZwZT~F8R~dMySAVksa-IPB8suM4kwH5xV-P5cVIBiYqoSbI7n5BLkYOokS7wmq~rC3TjS5cazXzBwRRKvEkKcXBmxQn9Oobk0TMFNsymLCoELJ9MIq90oRY1JQCn-ZfN840OVxWujSo5QPT~~tjvdIGIewfTUMz-Zr7HkMTDy8WRa5Rze-h793G9w3ZEbi6dtET46smmI0Fq2ikhrKLKZzD69JCvWVypDr5AaFWhBeR1GUECihxG4zsIHa09ksoEQbOBbLtoqeEb-OoLit6fy1KMNLf8Y3cLm-i7CK51zA7RISEdZbRUITyu1AMIlDM7OT7bf~pew-29uTXW3XRbPQ__")`,
        backgroundSize: "cover",
        backgroundPosition: `${isMobile?"right":"center"}`,
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="w-full lg:w-1/2 h-full flex-col flex justify-center gap-5">
        <h2 style={{ fontFamily: 'Roca Bold, sans-serif' }} className=" text-3xl md:text-6xl custom-open-sans font-bold">
          Veterinary Care <br />
          re-imagined <br />
          by pet lovers
        </h2>
        <p  className="text-sm font-custom-open-sans  md:text-xl font-light custom-open-sans">
          Book a visit to one of our clinics <br />right now. Which friend will we
          meet?
        </p>

        <div className="flex gap-4 w-full">
          <BannerPetCard pet_type="Dog" pet_image="/home/dog.png" />
          <BannerPetCard pet_type="Cat" pet_image="/home/cat.png" />
          <BannerPetCard pet_type="Bird" pet_image="/home/bird.png" />
        </div>
      </div>
    </div>
  );
};

export default NewBanner;
