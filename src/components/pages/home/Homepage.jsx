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
      .catch((error) => console.error("Error:", error.message));
  };

  useEffect(() => {
    getClinics();
  }, []);

  return (
    <>
      <NewBanner />
      {/* <Banner /> */}
      <div className="body-padding-x pt-5 bg-[#cbd9e3] lg:bg-white sm:mt-10">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium text-2xl md:text-[26px] mb-5 md:mb-10 text-center"
        >
          Veterinary care, redesigned to be better
        </h2>

        <div className=" flex flex-row lg:flex-col overflow-hidden overflow-x-auto">
          <div className="py-4  m-4 lg:m-0 rounded-lg bg-white">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_one.png"}
              header={"A Clinic That Feels Like Home"}
              text={
                "Our warmly designed clinics take the stress out of visits to the vet"
              }
              imagePosition="left"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white m-4">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_two.png"}
              header={"Doctors that truly care"}
              text={
                "The bond you have with your pets is special, and we’ll treat them like our own"
              }
              imagePosition="right"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white m-4">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_three.png"}
              header={"Tech that makes things simple"}
              text={
                "Book appointments, view your pet’s health records, or consult a doctor in a few taps on our app"
              }
              imagePosition="left"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white m-4 ">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_four.png"}
              header={"Everything under one roof"}
              text={
                "Our clinics offer all the services you’ll need including grooming, behavioural counselling, nutritional consultations &  pet-boarding"}
              imagePosition="right"
              buttonText="Book a Visit"
            />
          </div>
          <div className="py-4 rounded-lg bg-white m-4 ">
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
          <div className="py-4 rounded-lg bg-white m-4 ">
            <ImageTextHeader
              imageUrl={"/home/grid_pic_six.png"}
              header={"Memberships designed for modern pet-parents"}
              text={
                "Our great-value memberships include all the services your pet is likely to need, all under one roof"}
              imagePosition="right"
              buttonText="Become a Member"
            />
          </div>
        </div>
      </div>

      <h2
        style={{ fontFamily: "Roca Bold, sans-serif" }}
        className="text-primary font-medium bg-[#cbd9e3] md:bg-white pt-10  text-2xl md:text-[26px] pb-6 text-center"
      >
        Check out the places we call home
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2  bg-[#cbd9e3] md:bg-white pb-10 lg:grid-cols-3 gap-10 md:gap-10 body-padding-x">
        {clinics.map((clinic, i) => (
          <ClinicCard
            key={"clinic" + i}
            clinic={clinic}
          />
        ))}
      </div>

      <div className=" lg:body-padding-x bg-[#e2e5da] pb-10 md:bg-white flex flex-col">
        <h2
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary font-medium  mt-10 text-2xl md:text-[26px] mb-6 text-center"
        >
          Whatever your pet needs,
          <br /> we&apos;re there
        </h2>
        <p
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="text-primary text-center font-custom-open-sans  text-sm mb-6"
        >
          Discover our most commonly requested services. For anything not
          listed,please <br /> get in touch with your local clinic
        </p>
        <VerticalTabs />
      </div>

      <div className="body-padding-x">
        <Reviews />
      </div>

      <div className="body-padding-x bg-[#cbd9e3] md:bg-white mt-4">
        <FriendlyDoctor />
      </div>

      <div className="w-full flex  md:mt-20 flex-col items-center justify-center body-padding-x">
        <div
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-slate-700  text-center text-2xl md:text-[26px] leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10"
        >
          Still have questions?
        </div>
        <div
          style={{ fontFamily: "Open Sans, sans-serif" }}
          className="text-slate-700 text-center font-custom-open-sans text-sm leading-7 tracking-tight self-center mt-7  mb-4 max-md:max-w-full max-md:mt-10"
        >
          If your question is still not answered, please get in touch and we’d
          be happy to help
        </div>
        <div className="w-full border-b border-solid border-grey px-5 py-4">
          <p className="text-left font-custome-inter font-bold text-sm text-primary">
            About Dr. Paws
          </p>
        </div>
        <Dropdown title="Which animals does Dr. Paws treat?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left font-custome-inter   text-sm leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            We treat all small animals that can be considered as household pets. These include dogs, cats, small mammals (e.g. rabbits, guinea pigs), birds, and reptiles.
          </p>
        </Dropdown>
        <Dropdown title="Do you take walk-in appointments?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left font-custome-inter   text-sm leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, walk-in appointments are accepted. You will be seen by a veterinarian as soon as there is a slot available. For the best choice of appointments and no waiting times, we encourage you to pre-book appointments via our app or website.
          </p>
        </Dropdown>
        <Dropdown title="If I have a regular Dr. Paws branch, can I also visit other branches?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left text-sm font-custome-inter leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, of course! Our technology ensures your pets medical records are instantly accessible from any clinic so that you have the same Dr. Paws experience wherever in the country you are.
          </p>
        </Dropdown>
        <Dropdown title="Does Dr. Paws treat stray animals?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left text-sm font-custome-inter leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Stray animals need all the love, and we are committed to doing right by them. Any stray animal in need of trauma care can be brought to a Dr. Paws clinic and treated at minimal cost.          </p>
        </Dropdown>
        <Dropdown title="How many clinics does Dr. Paws have?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left text-sm font-custome-inter leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Currently, we have just started with our first clinics in Bengaluru, but plan to expend across other major cities in the very near future.          </p>
        </Dropdown>

        <div className="w-full border-b border-solid border-grey  md:mt-10 px-5 py-4">
          <p className="text-left font-custome-inter font-bold text-sm text-primary">
            At a Dr. Paws Clinic
          </p>
        </div>
        <Dropdown title="Does Dr. Paws offer emergency care?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left font-custome-inter   text-sm leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, Dr. Paws clinics are equipped to perform trauma care after accidents, and treat critically ill animals. For any case that we cannot treat, we will  refer you to a facility that can.
          </p>
        </Dropdown>
        <Dropdown title="Does Dr. Paws offer grooming?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left font-custome-inter   text-sm leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, every Dr. Paws clinic has a grooming area, with separate spaces for dogs & cats. We believe grooming is an essential part of keeping your pet healthy and happy.
          </p>
        </Dropdown>
        <Dropdown title=" Do you have overnight care?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left text-sm font-custome-inter leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, we offer overnight care for pets that have been operated on by us, and need close monitoring. At this moment in time, we do not offer emergency out-of-hours OPD veterinary consultations.
          </p>
        </Dropdown>
        <Dropdown title=" Can I buy food, accessories and medicines for my pet at Dr. Paws?">
          <p
            style={{ fontFamily: "Open Sans, sans-serif" }}
            className="text-slate-700 text-left text-sm font-custome-inter leading-7 tracking-tight self-center  max-md:max-w-full "
          >
            Yes, every Dr. Paws store has a retail section stocked with doctor approved food, treats, accessories, and medicines.          </p>
        </Dropdown>
      </div>
    </>
  );
};

export default Homepage;
