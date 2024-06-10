import React, { useState, useEffect } from "react";
import Image from "next/image";

const Module = ({ title, children, service_id }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [itemList, setItemList] = useState([]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="w-full  mx-auto  border-gray-300  px-4 md:px-10 rounded-lg ">
            <div className="">
                <div className="flex justify-between items-center  cursor-pointer">
                    <button
                        onClick={toggleDropdown}
                        className={`w-full tab-button border-b border-gray-300 flex justify-between  text-md font-bold capitalize whitespace-nowrap ${isOpen
                                ? "text-white bg-[#5281a2]"
                                : "text-primary bg-white font-semibold"
                            }  pl-7 pr-16 py-5 items-center max-md:px-5`}
                    >
                        <div className="font-custom-open-sans">{title}</div>
                        <Image
                            className={`w-4 h-2   ml-1`}
                            src={isOpen ? "/home/up_white_arrow.png" : "dropdown.svg"}
                            alt=""
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
                {
                    isOpen && <div className="bg-[#ffedd5] px-4 md:px-0">
                        {children}
                    </div>
                }

            </div>
        </div>
    );
};

export default Module;

