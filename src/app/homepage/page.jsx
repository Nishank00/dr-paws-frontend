import VerticalTabs from "@/components/pages/home/VerticalTabs";
import BookingButton from "@/components/ui/BookingButton";
import Link from "next/link";

export default function Homepage() {
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
            Book a visit to one of our clinics right
            <br /> now. Which friend will we meet?
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
      {/*Galart section*/}
      <div className="w-full px-10 flex  flex-col items-center justify-center">
        <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Veterinary care, redesigned to be better
        </div>
        <div className="self-center w-full max-w-[1044px] mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/669bca2fbece07c5713ebffc2c3bbaf28cc8b619507b404fcce2b83302f85e8f?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  A clinic that feels like home
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  Our modern clinics make you feel like you never left home,
                  making visits stress-free for you and your pet
                </div>
                <button className="text-white text-xs w-[210px] h-[50px] font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                  See Our Clinics
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1044px] mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  Memberships that work
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  Our memberships provide great value care and provide all the
                  services you’re likely to need. Even if you’re facing an
                  emergency, our memberships cover you.
                </div>

                <Link
                  href="/memebership"
                  className="text-white text-xs w-[210px] h-[50px] font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5"
                >
                  Become a Member
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb9685a7ae9ff4b09039b147b867f565a95daf1dd9869201de87e71ff14bc02c?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
              />
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1044px] mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/84a08263024efdba0adb90e503b741a482985692657a5fce26bb33b352afd8fa?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  Doctors that care
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  We’re in the business of looking after your best friend. We’ll
                  listen and answer all your questions and treat your pet like
                  our own
                </div>

                <button className="text-white text-xs w-[210px] h-[50px] font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                  Book a Visit
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="self-center w-[1044px] max-w-full mt-16 px-px max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  Everything in your control
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  Book appointments in a few taps, and always stay updated and
                  informed on your pet’s health with our app
                </div>

                <Link
                  href="/memebership"
                  className="text-white text-xs w-[210px] h-[50px] font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5"
                >
                  Become a Member
                </Link>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/64ff336cd5afcde7ebffdc769d3c02d4f3c1116c978c5395764475707c28eeff?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
              />
            </div>
          </div>
        </div>
        <div className="self-center w-full max-w-[1044px] mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5899b2906f2e6ef7b7632ca8f2763a6a5de94097047716ad42f5958db0d1745d?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.5] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto px-5 max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  Only the necessary care
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  We’re pet-lovers first and business-people second. No
                  over-testing, prescribing unnecessary medicines, or pushing
                  procedures that are not needed
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="self-center w-[1044px] max-w-full mt-16 px-px max-md:mt-10 max-md:pl-5">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[47%] max-md:w-full max-md:ml-0">
              <span className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-4xl leading-10 capitalize max-md:max-w-full">
                  All the services you need, under one roof
                </div>
                <div className="text-slate-700 text-sm mt-3.5 max-md:max-w-full">
                  Aside from our world-class veterinary care, our clinics offer
                  grooming, boarding, sitting, nutritionist, and training
                  services
                </div>

                <button className="text-white text-xs w-[210px] h-[50px] font-bold justify-center items-stretch bg-slate-500 mt-6 px-12 py-3.5 rounded-[86px] max-md:max-w-full max-md:px-5">
                  See Our Services
                </button>
              </span>
            </div>
            <div className="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/598efbe179cc5b3ff41b455d44bbc6ac5733b2d31bfdd4ff15dab7c0bd20f1c9?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.49] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-4"
              />
            </div>
          </div>
        </div>
      </div>
      {/*Grid Section*/}
      <div className="w-full px-10">
        <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Check out the places
          <br /> we call home
        </div>
        <div className="grid  grid-cols-2 sm:overscroll-x-auto md:grid-cols-4 gap-[20px] auto-rows-auto  mt-5">
          <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <BookingButton className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5" />
            </div>
          </div>
          <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch  max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
          <div className="flex flex-col items-stretch max-md:w-full max-md:ml-0">
            <div className="justify-between items-stretch shadow-sm bg-orange-50 flex grow flex-col w-full rounded max-md:mt-5">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.54] object-contain object-center w-full overflow-hidden"
              />
              <span className="justify-between items-stretch bg-orange-50 flex flex-col p-3.5">
                <div className="text-slate-700 text-base font-semibold leading-4 tracking-normal">
                  Indiranagar Clinic
                </div>
                <div className="text-slate-700 text-xs leading-3 tracking-normal whitespace-nowrap mt-4">
                  OPD | Surgery
                </div>
              </span>
              <span className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 px-16 py-4 max-md:px-5">
                Book a Visit
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-10">
        <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Whatever your pet needs, we’re there
        </div>
        <div className="text-slate-700 text-center text-sm leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Discover our most commonly requested services. For anything not
          listed,
          <br />
          please get in touch with your local clinic
        </div>
        <div className="hidden md:block ">
          <VerticalTabs />
        </div>
      </div>
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
      <div className="w-full px-10 flex  md:mt-20 flex-col items-center justify-center">
        <div className="text-slate-700  text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Our vets bring the magic to Dr. Paws
        </div>
        <div className="self-center w-full max-w-[1045px] mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[47%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col mt-8 max-md:max-w-full max-md:mt-10">
                <div className="flex justify-between gap-3.5 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                    <div className="text-slate-700 text-xl capitalize">
                      Animals first. Always.
                    </div>
                    <div className="text-slate-700 text-sm mt-2.5">
                      Unlike other clinics, we evaluate our vets based on
                      customer satisfaction over revenue. This ensure we never
                      over-medicate or suggest unnecessary treatments.
                    </div>
                  </span>
                </div>
                <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                    <div className="text-slate-700 text-xl capitalize">
                      Highly qualified, trained on the latest methods
                    </div>
                    <div className="text-slate-700 text-sm mt-2.5">
                      We only hire vets from the best veterinary schools, and
                      make sure they are supported to attend courses and learn
                      new techniques across the world
                    </div>
                  </span>
                </div>
                <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col px-5">
                    <div className="text-slate-700 text-xl capitalize">
                      Your best friend is our best friend
                    </div>
                    <div className="text-slate-700 text-sm mt-2.5">
                      All our vets are passionate about animals, and love being
                      around them. Rest assured your animal will feel
                      comfortable and at home with us
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-10 flex  md:mt-20 flex-col items-center justify-center">
        <div className="text-slate-700  text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          Still have questions?
        </div>
        <div className="text-slate-700 text-center text-sm leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
          If your question is still not answered, please get in touch and we’d
          be happy to help
        </div>
      </div>
    </>
  );
}
