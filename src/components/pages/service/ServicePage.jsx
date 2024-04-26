"use client";
import React, { useState } from "react";
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import PageTabs from "@/components/pages/service/PageTabs";
import Image from "next/image";
import ImageHeader from "@/components/ui/ImageHeader";
import ServiceTabs from "./ServiceTabs";

const ServicePage = () => {
  const [selectedTab, setSelectedTab] = useState("Tab 1");

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

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
      <div className="">
        <ServiceTabs
          tabs={["Tab 1", "Tab 2", "Tab 3"]}
          defaultTab="Tab 1"
          onSelect={handleTabSelect}
        >
          <div className="p-4">
            {/* Content for the selected tab */}
            {selectedTab === "Tab 1" && <div>Tab 1 Content</div>}
            {selectedTab === "Tab 2" && <div>Tab 2 Content</div>}
            {selectedTab === "Tab 3" && <div>Tab 3 Content</div>}
          </div>
        </ServiceTabs>
      </div>
      <div className="w-full ">
        <PageTabs />
      </div>
    </div>
  );
};

export default ServicePage;
