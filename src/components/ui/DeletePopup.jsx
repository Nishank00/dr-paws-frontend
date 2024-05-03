"use client";
import React from "react";
import Popup from "./Popup";
import { Cross } from "./SharePopup";
import Button from "./Button";

const DeletePopup = ({ isOpen, onClose }) => {
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
            <div onClick={onClose}>
              <Cross />
            </div>
          </div>
          <div className="my-8">
            <span>Are you sure you want to delete?</span>
            <div className="flex gap-4 my-6">
              <Button
                className="bg-primary3 hover:border hover:border-primary3 hover:text-primary3 text-primary"
                label="No"
              />
              <Button
                className="bg-primary3 hover:border hover:border-primary3 hover:text-primary3 text-primary"
                label="Yes"
              />
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default DeletePopup;
