"use client"
import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { VisaIcon } from "@/components/ui/Icons";
import { useRouter } from "next/navigation";

const PaymentsLeft = () => {
  const router=useRouter();
  return (
    <>
      {/* <div className='flex'>
                <div className="flex-1">
                    <div className=' bg-primary4  '>
                        <form className="self-stretch flex max-w-[842px] flex-col justify-center px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-11 mx-auto">
                            <div className="flex items-center">
                                <IoChevronBackOutline className="text-3xl" color='#33495F' />
                                <button className="text-slate-700 text-sm ml-1">Back</button>
                            </div>
                            <h1 className="text-slate-700 text-4xl font-bold tracking-tighter mt-5 sm:mt-8 max-w-full">Enter payment details</h1>
                            <div className="text-slate-700 text-base leading-6 mt-4 self-start">Sign in as</div>
                            <div className="text-slate-700 text-xs mt-1 self-start">unicorn2023@gmail.com</div>
                            <h2 className="text-slate-700 text-xl font-bold mt-8 max-md:max-w-full">Your payment details</h2>
                            <div className="items-stretch flex justify-between gap-4 mt-6 max-md:max-w-full max-md:flex-wrap">
                                <div className="items-stretch flex flex-col flex-1">
                                    <div className="text-slate-700 text-sm">First name</div>
                                    <input className="text-slate-700 text-base leading-6 whitespace-nowrap border border-[color:var(--Accent,#74A7B3)] bg-white justify-center mt-4 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5" type="text" id="first-name" aria-label="First name" />
                                    <label htmlFor="first-name" className="sr-only">First name</label>
                                </div>
                                <div className="items-stretch flex flex-col flex-1">
                                    <div className="text-slate-700 text-sm">Last name</div>
                                    <input className="text-slate-700 text-base leading-6 whitespace-nowrap border border-[color:var(--Accent,#74A7B3)] bg-white justify-center mt-4 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5" type="text" id="last-name" aria-label="Last name" />
                                    <label htmlFor="last-name" className="sr-only">Last name</label>
                                </div>
                            </div>
                            <div className="text-slate-700 text-sm mt-6 max-md:max-w-full">Card details</div>
                            <div className="items-stretch border border-[color:var(--Accent,#74A7B3)] bg-white flex justify-between gap-5 mt-4 px-4 py-px rounded-md border-solid max-md:max-w-full max-md:flex-wrap">
                                <div className="text-slate-700 text-base leading-6 grow shrink basis-auto my-auto">1234 1234 1234 1234</div>
                                <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff5ffc9ba3399dc87c7daf6066246b79c47fa2d3f2a7a952ad7615dcea4a954a?apiKey=392c8c276f1d4889be04ee754c529ee3&"
                                    className="aspect-[2.38] object-contain object-center w-[104px] justify-end items-center shrink-0 max-w-full" />
                            </div>
                            <div className="items-stretch flex justify-between gap-4 mt-4 max-md:max-w-full max-md:flex-wrap">
                                <div className="text-slate-700 text-base leading-6 whitespace-nowrap border border-[color:var(--Accent,#74A7B3)] bg-white grow justify-center pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5">
                                    MM/ YY
                                </div>
                                <div className="text-slate-700 text-base leading-6 border border-[color:var(--Accent,#74A7B3)] bg-white grow justify-center pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:pr-5">
                                    CVV
                                </div>
                            </div>
                            <div className="text-slate-700 text-sm mt-6 max-md:max-w-full">Name on card</div>
                            <div className="items-center border border-[color:var(--Accent,#74A7B3)] bg-white flex shrink-0 h-[45px] flex-col mt-4 rounded-md border-solid max-md:max-w-full" />
                            <div className="text-slate-700 text-sm mt-6 max-md:max-w-full">Country or region</div>
                            <div className="text-slate-700 text-base leading-6 border border-[color:var(--Accent,#74A7B3)] bg-white justify-center mt-4 pl-4 pr-16 py-3 rounded-md border-solid items-start max-md:max-w-full max-md:pr-5">India</div>
                            <div className="items-stretch flex justify-between gap-2.5 mt-10 max-md:max-w-full max-md:flex-wrap">
                                <div className="items-center border border-[color:var(--Accent,#74A7B3)] bg-white flex w-[19px] shrink-0 h-[19px] flex-col rounded-md border-solid self-start" />
                                <div className="text-slate-700 text-xs grow shrink basis-auto max-md:max-w-full">By clicking on ‘Subscribe’ you accept Dr. Pawss Terms & Conditions. We will process your personal data in accordance with Design anything’s Privacy Notice.</div>
                            </div>
                            <button className="text-white text-base font-bold justify-center items-center bg-slate-400 w-[211px] max-w-full mt-5 px-8 py-3 rounded-[86px] sm:px-10">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div> */}
      <div className="w-full flex flex-col justify-center items-center bg-primary4">
        <div className="w-[70%] p-2 h-auto  mt-10">
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
            <h4 className="text-primary text-md  ">unicorn2023@gmail.com</h4>
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
        <div className="w-[70%]  p-2 h-auto ">
          <div className="flex">
            <div>
              <input type="checkbox" />
            </div>
            <div className="pl-2">
              <h4 className="text-xs font-custom-open-sans text-primary">
                By clicking on &aposSubscribe&apos you accept Dr. Paws&pos;s
                Terms & Conditions. We will process your personal data in
                accordance with Design anything&pos;s Privacy Notice.
              </h4>
            </div>
          </div>
          <div className="w-full flex justify-start m-4">
            <button onClick={()=>router.push("/membership/order_success")} className="w-[210px] h-[50px] bg-secondary text-white rounded-full ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentsLeft;
