import React from "react";

const Reviews = () => {
  return (
    <>
      <div className="w-full px-10 flex  md:mt-20 flex-col items-center justify-center">
        <div className="text-slate-700  text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Reviews
        </div>
        <div className="hidden md:block ">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/279d7ce5-284a-4e14-8876-96ada79ec21e?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[2.28] object-contain object-center w-full fill-stone-400 overflow-hidden self-center max-w-[1078px] mt-14 max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className=" md:hidden flex flex-col items-center">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/66d067a49dd87ecb2c1ee2b4b956dfed4d70fad12f6084ffc5c96a608f3eeaaf?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[0.9] object-contain object-center w-[238px] overflow-hidden self-center max-w-full mt-7"
          />
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-slate-700 text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-[21px] flex-col rounded-[50%]" />
              <div className="text-slate-700 text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </span>
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-slate-700 text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-[21px] flex-col rounded-[50%]" />
              <div className="text-slate-700 text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
                Rahul Shah
              </div>
            </span>
          </span>
          <span className="items-stretch shadow-sm bg-orange-100 self-stretch flex w-full flex-col mt-5 p-4 rounded-2xl">
            <div className="text-slate-700 text-xs italic leading-4 tracking-normal">
              Dr. Paws is fantastic! Exceptional care, friendly staff, and a
              welcoming atmosphere. Highly recommend for pet owners!
            </div>
            <span className="justify-between items-stretch flex gap-3 mt-2.5">
              <div className="flex w-[21px] shrink-0 h-5 flex-col rounded-[50%]" />
              <div className="text-slate-700 text-xs italic font-semibold self-center grow whitespace-nowrap my-auto">
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
