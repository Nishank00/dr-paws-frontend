import React from "react";
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import PageTabs from "@/components/pages/service/PageTabs";
import Image from "next/image";
import ImageHeader from "@/components/ui/ImageHeader";

const ServicePage = () => {
  return (
    <div className="w-full pb-8">
      <div className=" pt-20">
        <ImageTextHeader
          imageUrl={"/image139.png"}
          buttonText={"Book a Visit"}
          buttonColor={"secondary"}
          buttonUrl={"/booking"}
          header={"We're here, whatever your friend needs"}
          text={
            "Our modern friendly clinics offer all the services you’ll need to keep your animal happy and healthy."
          }
          imagePosition={"left"}
          headingClass="text-5xl"
          paragraphClass="text-sm"
        />
      </div>
      <div className="w-full ">
        <PageTabs />
      </div>
    </div>
  );
};

export default ServicePage;
