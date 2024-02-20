"use client";
import React from "react";
import VerticalTabs from "@/components/pages/home/VerticalTabs";
import ClinicCard from "@/components/pages/clinic/ClinicCard";
import ImageTextHeader from "@/components/pages/home/ImageTextHeader";
import Reviews from "@/components/pages/home/Reviews";
import FriendlyDoctor from "@/components/pages/home/FriendlyDoctor";
import Banner from "@/components/pages/home/Banner";
import NewBanner from "@/components/pages/home/NewBanner";
import ClinicService from "@/services/Clinic.service";
import { useEffect, useState } from "react";
import Dropdown from "@/components/ui/Dropdown";

const Homepage = () => {
  const [clinics, setClinics] = useState([]);

  const getClinics = () => {
    ClinicService.getData()
      .then((response) => {
        setClinics([]);
        if (response.data.status) {
          setClinics(response.data.data);
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  useEffect(() => {
    getClinics();
  }, []);

  return (
    <>
      <NewBanner />
      {/* <Banner /> */}
      <div className="body-padding-x mt-5 sm:mt-10">
        <h2 style={{ fontFamily: 'Roca Bold, sans-serif' }} className="text-primary font-medium text-3xl md:text-4xl mb-5 md:mb-10 text-center">
          Veterinary care, redesigned to be better
        </h2>

        <div className=" flex flex-row md:flex-col overflow-hidden overflow-x-auto">
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_one.png"}

              header={"A Clinic That Feels Like Home"}
              text={
                "Our modern clinics make you feel like you never left home, making visits stress-free for you and your pet"
              }
              imagePosition="left"
              buttonText="See Our Clinics"
            />
          </div>
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_two.png"}
              header={"Memberships that work"}
              text={
                "Our memberships provide great value care and provide all the services you’re likely to need. Even if you’re facing an emergency, our memberships cover you."
              }
              imagePosition="right"
              buttonText="Become a Member"
            />
          </div>
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_three.png"}

              header={"Doctors that care"}
              text={
                "We’re in the business of looking after your best friend. We’ll listen and answer all your questions and treat your pet like our own"
              }
              imagePosition="left"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_four.png"}

              header={"Everything in your control"}
              text={
                "Book appointments in a few taps, and always stay updated and informed on your pet’s health with our app"
              }
              imagePosition="right"
              buttonText="Become a Member"
            />
          </div>
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_five.png"}

              header={"Only the necessary care"}
              text={
                "We’re pet-lovers first and business-people second. No over-testing, prescribing unnecessary medicines, or pushing procedures that are not needed"
              }
              imagePosition="left"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_six.png"}
              header={"All the services you need, under one roof"}
              text={
                "Aside from our world-class veterinary care, our clinics offer grooming, boarding, sitting, nutritionist, and training services"
              }
              imagePosition="right"
              buttonText="See Our Services"
            />
          </div>

        </div>

      </div>

      <h2 style={{ fontFamily: 'Roca Bold, sans-serif' }} className="text-primary font-medium  mt-10 text-3xl md:text-4xl mb-6 text-center">
        Check out the places
        <br /> we call home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 body-padding-x">
        {
          Array.from({ length: 8 }).map((clinic, i) => (
            <ClinicCard clinic={{ imageUrl: "/home/clinic_image.png" }} key={"clinic" + i} />
          ))}
      </div>

      <div className="body-padding-x hidden lg:flex lg:flex-col">
        <h2 style={{ fontFamily: 'Roca Bold, sans-serif' }} className="text-primary font-medium  mt-10 text-4xl mb-6 text-center">
          Whatever your pet needs,<br /> we&apos;re there
        </h2>
        <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-primary text-center   text-md mb-6">
          Discover our most commonly requested services. For anything not listed,please <br />  get in touch with your local clinic
        </p>
        <VerticalTabs />
      </div>

      <div className="body-padding-x">
        <Reviews />
      </div>

      <div className="body-padding-x">
        <FriendlyDoctor />
      </div>

      <div className="w-full flex  md:mt-20 flex-col items-center justify-center body-padding-x">
        <div style={{ fontFamily: 'Roca Bold, sans-serif' }} className="text-slate-700  text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Still have questions?
        </div>
        <div style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-slate-700 text-center text-lg leading-7 tracking-tight self-center mt-7  mb-4 max-md:max-w-full max-md:mt-10">
          If your question is still not answered, please get in touch and we’d
          be happy to help
        </div>
        <div className="w-full border-b border-solid border-grey px-5 py-4">
          <p className="text-left text-primary">About Bearhug</p>
        </div>
        <Dropdown title="What animals does BearHug treat?">
          <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-slate-700 text-left text-sm leading-7 tracking-tight self-center  max-md:max-w-full ">
            Dr. Paws is a versatile veterinarian, offering expert care to a variety of animals, including cats, dogs, hamsters, unicorns (just kidding, we wish!), and many more. Whether your pet has fur, feathers, or scales, Dr. Paws is here to provide top-notch veterinary services.
          </p>
        </Dropdown >
        <Dropdown title="What animals does BearHug treat?">
          <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-slate-700 text-left text-sm leading-7 tracking-tight self-center  max-md:max-w-full ">
            Dr. Paws is a versatile veterinarian, offering expert care to a variety of animals, including cats, dogs, hamsters, unicorns (just kidding, we wish!), and many more. Whether your pet has fur, feathers, or scales, Dr. Paws is here to provide top-notch veterinary services.
          </p>
        </Dropdown >
        <Dropdown title="What animals does BearHug treat?">
          <p style={{ fontFamily: 'Open Sans, sans-serif' }} className="text-slate-700 text-left text-sm leading-7 tracking-tight self-center  max-md:max-w-full ">
            Dr. Paws is a versatile veterinarian, offering expert care to a variety of animals, including cats, dogs, hamsters, unicorns (just kidding, we wish!), and many more. Whether your pet has fur, feathers, or scales, Dr. Paws is here to provide top-notch veterinary services.
          </p>
        </Dropdown >
      </div>
    </>
  );
};

export default Homepage;
