"use client";
import React, { useState, useEffect } from "react";
import UserService from "@/services/User.Service";

const BillingForm = ({ user_id, closePopup }) => {
  const [account, setAccount] = useState({
    first_name: "",
    last_name: "",
    card_details: "",
    cvv_code: "",
    name_on_card: "",
    billing_address: "",
  });

  const updateBillingData = () => {
    let payload = { ...account, user_id };
    UserService.saveBillingDetails(payload)
      .then((r) => {
        if (r.data.status) {
          closePopup();
          alert("billing details updated!");
        } else {
          console.log(r.data.message);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const getBillingData = () => {
    UserService.getBillingDetails({ user_id })
      .then((r) => {
        if (r.data.status) {
          setAccount(r.data.data);
        } else {
          alert(r.data.message);
          console.log(r.data);
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  useEffect(() => {
    if (user_id) {
      getBillingData();
    }
  }, [user_id]);
  return (
    <div className="w-full m-auto">
      <div className="flex justify-between w-[80%] m-auto">
        <div className="w-[45%] flex flex-col">
          <label className="text-sm font-custom-open-sans">First Name</label>
          <input
            className="input  font-custom-open-sans rounded-lg px-4 py-2 border-2  text-md text-primary"
            placeholder=""
            onChange={(e) =>
              setAccount({ ...account, first_name: e.target.value })
            }
            value={account.first_name}
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label className="text-sm font-custom-open-sans">Last Name</label>
          <input
            className="input font-custom-open-sans rounded-lg px-4 py-2 border-2  text-md text-primary"
            placeholder=""
            onChange={(e) =>
              setAccount({ ...account, last_name: e.target.value })
            }
            value={account.last_name}
          />
        </div>
      </div>
      <div className="flex justify-between w-[80%] m-auto mt-5">
        <div className="w-[20%] flex flex-col">
          <label className="text-sm font-custom-open-sans">CVV</label>
          <input
            className="input rounded-lg px-4 py-2 border-2  text-md text-primary text-md"
            placeholder=""
            onChange={(e) =>
              setAccount({ ...account, cvv_code: e.target.value })
            }
            value={account.cvv_code}
          />
        </div>
        <div className="w-[78%] flex flex-col">
          <label className="text-sm font-custom-open-sans">Card Details</label>
          <input
            className="input rounded-lg px-4 py-2 border-2  text-md text-primary"
            placeholder=""
            onChange={(e) =>
              setAccount({ ...account, card_details: e.target.value })
            }
            value={account.card_details}
          />
        </div>
      </div>

      <div className="flex flex-col w-[80%] m-auto mt-5">
        <label className="text-sm font-custom-open-sans">Name on card</label>
        <input
          className="input font-custom-open-sans rounded-lg px-4 py-2 border-2  text-md text-primary"
          placeholder=""
          onChange={(e) =>
            setAccount({ ...account, name_on_card: e.target.value })
          }
          value={account.name_on_card}
        />
      </div>
      <div className="flex flex-col w-[80%] m-auto mt-5">
        <label className="text-sm font-custom-open-sans text-primary">
          Billing Address
        </label>
        <input
          className="input font-custom-open-sans  rounded-lg px-4 py-2 border-2  text-md text-primary"
          placeholder=""
          onChange={(e) =>
            setAccount({ ...account, billing_address: e.target.value })
          }
          value={account.billing_address}
        />
      </div>
      <div className="flex  justify-between  w-[80%] m-auto mt-5 h-[50px]">
        <button
          onClick={() => closePopup()}
          className=" w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary"
        >
          Cancel
        </button>
        <button
          onClick={updateBillingData}
          className=" w-[150px] border-2 border-solid border-[color:var(--Secondary-1,#5281A2)]  rounded-full text-sm font-bold font-custom-open-sans text-primary hover:text-white hover:bg-secondary"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default BillingForm;
