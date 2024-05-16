"use client";
import React from "react";
import Popup from "./Popup";
import { Cross } from "./SharePopup";
import Button from "./Button";

const DeletePopup = ({ isOpen, onClose }) => {
  const handleDeletePopUp = (type = false) => {
    onClose(type);
  };
  return (
    <>
      <Popup hideClose isOpen={isOpen}>
        <div className="w-full max-w-md bg-[#33495F] shadow-lg rounded-md p-6 relative">
          <div className="flex items-center">
            <h3
              style={{ fontFamily: "Roca Bold, sans-serif" }}
              className="text-2xl font-bold flex-1 text-white"
            >
              Delete
            </h3>
            <div onClick={() => handleDeletePopUp(false)}>
              <Cross />
            </div>
          </div>
          <div className="my-8 text-primary3 font-custom-roca">
            <span>Are you sure you want to delete?</span>
            <div className="flex gap-4 my-6">
              <Button
                className="bg-primary3 hover:border hover:border-primary3 hover:text-primary3 text-primary"
                label="No"
                onClick={() => handleDeletePopUp(false)}
              />
              <Button
                className="bg-primary3 hover:border hover:border-primary3 hover:text-primary3 text-primary"
                label="Yes"
                onClick={() => handleDeletePopUp(true)}
              />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default DeletePopup;
