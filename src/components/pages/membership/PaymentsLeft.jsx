"use client";
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { VisaIcon } from "@/components/ui/Icons";
import { useRouter } from "next/navigation";
import { UserService } from "@/services/Storage.service";
import Button from "@/components/ui/Button";
import MembershipService from "@/services/Membership.Service";
import { useToast } from "@/components/ui/ToastProvider";
import { useSelector } from "react-redux";
import moment from "moment";

const PaymentsLeft = () => {
  const membershipData = useSelector(
    (state) => state.membership.selectedMembership
  );
  const showToast = useToast();
  const router = useRouter();
  const userInfo = UserService.getUserInfo();
  const saveMembership = () => {
    const payload = {
      pet_id: membershipData.pet_id,
      membership_id: membershipData.id,
      membership_expires_at: moment()
        .add(
          membershipData.membership_plans.filter(
            (item) => item.selected == true
          )[0].plan_duration_in_year,
          "years"
        )
        .format("YYYY-MM-DD"),
    };

    MembershipService.saveMembership(payload)
      .then((response) => {
        showToast(
          response.data.message,
          response.data.status ? "success" : "warning"
        );

        if (response.data.status)
          return router.push("/membership/order_success");
      })
      .catch((error) => {
        return showToast(error.message, "error");
      });
  };

  return (
    <>
      <div className="w-full px-44 py-10  flex flex-col">
        <div className="p-2 h-auto  mt-10">
          <div className="flex items-center">
            <IoChevronBackOutline className="text-2xl" color="#33495F" />
            <button className="text-primary font-custom-open-sans text-sm ml-1">
              Back
            </button>
          </div>
          <h1 className="text-primary text-[40px] font-custom-roca font-bold tracking-tighter mt-2  max-w-full">
            Enter payment details
          </h1>
          <div className="w-full mt-4">
            <h4 className="text-primary text-md ">Sign in as</h4>
            <h4 className="text-primary text-md  ">{userInfo?.email}</h4>
          </div>
          <div>
            <h2 className="text-primary text-xl  font-custom-open-sans font-bold mt-8 max-md:max-w-full">
              Your payment details
            </h2>
            <div className="flex justify-between mt-5">
              <div className="w-[48%] flex flex-col ">
                <label className="text-primary text-sm font-custom-open-sans">
                  First name
                </label>
                <input
                  className="text-primary text-base border h-11 bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                  type="text"
                  id="first-name"
                  aria-label="First name"
                />
              </div>
              <div className=" w-[48%]   flex flex-col">
                <label className="text-primary text-sm font-sans">
                  Last name
                </label>
                <input
                  className="text-primary text-base border h-11 bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                  type="text"
                  id="last-name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className=" w-full   flex flex-col mt-5 ">
              <label className="text-primary text-sm font-custom-open-sans">
                Card Details
              </label>
              <div className="flex h-11 justify-between mt-2 items-center px-2 border  bg-white">
                <input
                  placeholder="1234 1234 1234 1234"
                  className="text-primary text-base  focus:border-transparent focus:outline-none bg-white justify-center h-10 w-full pl-1 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                  type="text"
                  id="last-name"
                  aria-label="Last name"
                />
                <VisaIcon />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="w-[48%] flex flex-col ">
                <input
                  placeholder="MM/YY"
                  className="text-slate-700 text-base border h-11 bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                  type="text"
                  id="first-name"
                  aria-label="First name"
                />
              </div>
              <div className=" w-[48%]   flex flex-col">
                <input
                  placeholder="CVV"
                  className="text-slate-700 text-base border h-11 bg-white justify-center mt-2 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                  type="text"
                  id="last-name"
                  aria-label="Last name"
                />
              </div>
            </div>
            <div className=" w-full   flex flex-col mt-5 ">
              <label className="text-primary text-sm font-custom-open-sans">
                Name on Card
              </label>
              <input
                className="text-primary text-base border focus:border-transparent focus:outline-none bg-white justify-center h-10 w-full pl-1 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                type="text"
                id="last-name"
                aria-label="Last name"
              />
            </div>
            <div className=" w-full   flex flex-col mt-5 ">
              <label className="text-primary text-sm font-custom-open-sans">
                country or region
              </label>
              <input
                className="text-primary text-base border focus:border-transparent focus:outline-none bg-white justify-center h-10 w-full pl-1 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5"
                type="text"
                id="last-name"
                aria-label="Last name"
              />
            </div>
          </div>
        </div>
        <div className=" p-2 h-auto ">
          <div className="flex items-start gap-2">
            <input type="checkbox" id="subscribe" />
            <label
              for="subscribe"
              className="text-xs font-custom-open-sans text-primary"
            >
              By clicking on &aposSubscribe&apos you accept Dr. Paws&apos;s
              Terms & Conditions. We will process your personal data in
              accordance with Design anything&apos;s Privacy Notice.
            </label>
          </div>
          <div className="w-full flex justify-start m-4">
            <Button
              label="Subscribe"
              color="secondary"
              onClick={saveMembership}
              className="w-[210px] h-[50px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsLeft;
