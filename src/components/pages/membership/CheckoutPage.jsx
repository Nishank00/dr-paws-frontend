"use client";

import Button from "@/components/ui/Button";
import Checkbox from "@/components/ui/Checkbox";
import MultipleSelect from "@/components/ui/MultipleSelect";
import TextInput from "@/components/ui/TextInput";
import React, { useState } from "react";
import { useToast } from "@/components/ui/ToastProvider";
import { useSelector } from "react-redux";
import moment from "moment";
import { useRouter } from "next/navigation";
import MembershipService from "@/services/Membership.Service";
import { useLoader } from "@/components/ui/LoaderContext";

const CheckoutPage = () => {
  const membershipData = useSelector((state) => state.membership);
  const membershipPlan =
    membershipData?.selectedMembership?.membership_plans?.filter(
      (item) => item.selected === true
    )[0];

  const userSessionData = useSelector((state) => state.userSession);
  const showToast = useToast();
  const { startLoading, stopLoading } = useLoader();
  const router = useRouter();
  // const userInfo = JSON.parse(localStorage.getItem("user_info"));

  const [paymentDetails, setPaymentDetails] = useState({
    first_name: null,
    last_name: null,
    card_number: null,
    card_expiry: null,
    card_cvv: null,
    name_on_card: null,
    country: null,
    subscribed: false,
  });

  const updateFormData = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const countrySelected = (value) =>
    setPaymentDetails({ ...paymentDetails, country: value });

  const toggleSubscribed = (value) =>
    setPaymentDetails({ ...paymentDetails, subscribed: value });

  const saveMembership = () => {
    startLoading();
    const payload = {
      pet_id: membershipData?.pet_id,
      membership_id: membershipData?.id,
      membership_expires_at: moment()
        .add(
          membershipData?.membership_plans?.filter(
            (item) => item.selected == true
          )[0].plan_duration_in_year,
          "years"
        )
        .format("YYYY-MM-DD"),
    };

    MembershipService.saveMembership(payload)
      .then((response) => {
        stopLoading();
        showToast(
          response.data.message,
          response.data.status ? "success" : "warning"
        );

        if (response.data.status)
          return router.push("/membership/order_success");
      })
      .catch((error) => {
        stopLoading();
        return showToast(error.message, "error");
      });
  };

  return (
    <div className="flex flex-col sm:flex-row bg-primary3 text-primary font-custom-open-sans md:px-28">
      <div className="w-full sm:w-7/12 p-5 sm:py-10  sm:pr-[95px] md:pr-[120px] ">
        <div className="flex flex-col gap-9">
          <div className="pt-1 sm:pt-4">
            <button
              type="button"
              onClick={() => {}}
              className={"flex items-center"}
            >
              <span className="text-2xl mr-1">
                <svg
                  width="11"
                  height="18"
                  viewBox="0 0 11 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.06077 8.99999L10.0608 1.99999L9.00011 0.939331L0.939453 8.99999L9.00011 17.0607L10.0608 16L3.06077 8.99999Z"
                    fill="#33495F"
                  />
                </svg>
              </span>
              <span className="text-lg sm:text-xl ml-2 font-open-sans">
                {"Back"}
              </span>
            </button>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl sm:text-4xl font-custom-roca">
                Enter payment details
              </h2>
              <div className="flexflex-col gap-1">
                <p className="text-sm">Sign in as</p>
                <p className="text-sm">unicorn2023@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-lg sm:text-xl font-bold">
                Your payment details
              </h4>

              <div className="flex gap-4">
                <TextInput
                  label={"First name"}
                  placeholder={"First name"}
                  name={"first_name"}
                  value={paymentDetails.first_name}
                  onChange={updateFormData}
                />
                <TextInput
                  label={"Last name"}
                  placeholder={"Last name"}
                  name={"last_name"}
                  value={paymentDetails.last_name}
                  onChange={updateFormData}
                />
              </div>

              <div className="flex flex-col gap-4">
                <TextInput
                  label={"Card details"}
                  placeholder={"1234 1234 1234 1234"}
                  type="number"
                  name={"card_number"}
                  value={paymentDetails.card_number}
                  onChange={updateFormData}
                />

                <div className="flex gap-4">
                  <TextInput
                    placeholder={"MM/YY"}
                    name={"card_expiry"}
                    value={paymentDetails.card_expiry}
                    onChange={updateFormData}
                  />
                  <TextInput
                    placeholder={"CVV"}
                    name={"card_cvv"}
                    value={paymentDetails.card_cvv}
                    onChange={updateFormData}
                  />
                </div>
              </div>

              <TextInput
                label={"Name on card"}
                name={"name_on_card"}
                value={paymentDetails.name_on_card}
                onChange={updateFormData}
              />

              <MultipleSelect
                label={"Country or region"}
                placeholder={"India"}
                options={[]}
                optionLabel={"name"}
                optionValue={"id"}
                onChange={countrySelected}
              />

              <Checkbox
                label={
                  "By clicking on ‘Subscribe’ you accept Dr. Paws's Terms & Conditions. We will process your personal data in accordance with Design anything’s Privacy Notice."
                }
                value={paymentDetails.subscribed}
                onChange={toggleSubscribed}
              />

              <Button
                label="Subscribe"
                color="accent"
                className="w-full sm:w-1/3"
                onClick={saveMembership}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-5/12 bg-white p-5 sm:px-8 md:px-12 sm:pt-[90px] md:pt-[106px] sm:pb-12">
        <div className="flex flex-col gap-10 sm:ga-20 justify-between min-h-full">
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl sm:text-3xl font-custom-roca">Summary</h3>

            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-xs">Membership</p>
                <p className="text-sm">
                  For {membershipPlan?.plan_duration_in_year} years
                </p>
              </div>

              <p className="text-2xl sm:text-3xl font-semibold">
                ₹{membershipPlan?.price_yearly?.toLocaleString()}
                <span className="text-sm font-normal">/yr</span>
              </p>
            </div>

            <hr className="border border-primary3" />

            <div className="flex justify-between">
              <p className="text-sm">Subtotal</p>
              <p className="text-sm">
                ₹{membershipPlan?.price?.toLocaleString()}
              </p>
            </div>

            <div className="flex justify-between">
              <p className="text-sm font-bold">TOTAL</p>
              <p className="text-sm font-bold">
                ₹{membershipPlan?.price?.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h6 className="text-xl">Renewal Terms</h6>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <p className="text-xs">
                  Billing will be automatically renewed every month.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <p className="text-xs">You can cancel renewal anytime.</p>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-primary"></span>
                <p className="text-xs">
                  Cancel before Feb 09 to avoid getting billed for the next
                  month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
