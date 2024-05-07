import Image from "next/image";
import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="w-full px-10 flex  md:mt-20 flex-col items-center justify-center">
        <div className="text-primary mb-12 text-center text-2xl md:text-4xl leading-7 tracking-tight self-center font-custom-roca mt-14 max-md:max-w-full max-md:mt-10">
          Tail wags and purrs are our favourite feedback, but here&apos;s what
          pet-parents are saying
        </div>
        <div className="hidden relative max-w-[1024px] dlex justify-center w-full md:block">
          <div className="items-stretch shadow-sm bg-orange-100 xl:left-0 self-stretch lg:left-[-3rem] flex w-[350px] leading-none top-[25%] absolute flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-lg italic tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[31px] shrink-0 h-[31px] flex-col bg-[#9FA983] rounded-[50%]" />
              <div className="text-primary italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </div>
          <Image
            src={"/d.png"}
            height={400}
            className="mx-auto"
            width={400}
            alt="Reviews"
          />
          <div className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-[400px] leading-none xl:right-[3rem] right-[-1rem] bottom-[-10%] absolute flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-lg italic tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[31px] shrink-0 h-[31px] flex-col bg-[#74A7B3] rounded-[50%]" />
              <div className="text-primary italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </div>
          <div className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-[400px] leading-none xl:right-[-3rem] right-[-5rem] top-[-10%] absolute flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-lg italic tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[31px] shrink-0 h-[31px] flex-col bg-[#74A7B3] rounded-[50%]" />
              <div className="text-primary italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </div>
        </div>
        <div className=" md:hidden flex flex-col items-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[0.9] object-contain object-center w-[238px] overflow-hidden self-center max-w-full mt-7"
          />
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-[21px] flex-col rounded-[50%]" />
              <div className="text-primary text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah, pet-parent to Choco
              </div>
            </span>
          </span>
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-[21px] flex-col rounded-[50%]" />
              <div className="text-primary text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </span>
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-primary text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-5 flex-col rounded-[50%]" />
              <div className="text-primary text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Reviews;
