import React from "react";

const Banner = () => {
  return (
    <>
      <div className="flex-col overflow-hidden self-stretch relative flex  w-full items-stretch pb-12 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/c558102557f20be4d744c99cf4c9593f9d61cd452b034a7cafaa0e625d24c9d2?apiKey=22a36eade5734692978208fb0d2f5c62&"
          className="absolute md:h-full md:w-full h-[400px] lg:w-full sm:shrink-0 sm:aspect-[2.57] object-cover objecct-center inset-0 "
        />
        <div className="relative w-[250px] ml-[30px] mt-[30px] md:w-[500px] md:mt-[183.45px] md:ml-[227.27px]">
          <div className="text-orange-100 text-6xl sm:whitespace-normal leading-[64px] max-md:max-w-5/6 max-md:text-4xl max-md:leading-10">
            Veterinary Care re-imagined <br />
            <span className="text-orange-100">by pet lovers </span>
          </div>
          <div className="text-white  text-sm md:text-2xl mt-10 max-md:max-w-5/6">
            Book a visit to one of our clinics right now. Which friend will we
            meet?
          </div>
          <div className="flex gap-5 items-stretch  flex-row max-md:w-full ">
            <div className="flex flex-col items-stretch w-[30%] max-md:w-full max-md:ml-0">
              <span className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl rounded-b-2xl max-md:mt-4">
                <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                  Dog
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d9edce72d1d3dd4c8ee5e5fdcd02608242dbdd86b6d19547a8123bac93d6f8a8?apiKey=22a36eade5734692978208fb0d2f5c62&"
                  className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                />
                <span className="text-white text-xs rounded-b-2xl font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                  Book a visit
                </span>
              </span>
            </div>

            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <span className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl max-md:mt-4">
                <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                  Cat
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/294d262cdec6d05c7cc0634c8cdf3f5a0d2c0b4102b0cccb2f339ac59a36bd31?apiKey=22a36eade5734692978208fb0d2f5c62&"
                  className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                />
                <span className="text-white text-xs rounded-b-2xl font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                  Book a Visit
                </span>
              </span>
            </div>

            <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
              <span className="justify-center items-stretch bg-white flex grow flex-col w-full pt-2.5 rounded-2xl max-md:mt-4">
                <div className="text-slate-500 text-lg self-center whitespace-nowrap">
                  Bird
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bd6164ac5815a13d1b967849135f394d5c8ad9cae81f7ded108ad8a9aba6265b?apiKey=22a36eade5734692978208fb0d2f5c62&"
                  className="aspect-[1.18] object-contain object-center w-[73px] overflow-hidden self-center max-w-full mt-2"
                />
                <span className="text-white text-xs  rounded-b-2xl font-semibold leading-6 tracking-normal whitespace-nowrap justify-center items-stretch bg-slate-500 mt-2 px-6 py-1 max-md:px-5">
                  Book a Visit
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
