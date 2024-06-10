import React from "react";

const FriendlyDoctor = () => {
  return (
    <>
      <div className="w-full md:px-10 px-[10px] flex  md:mt-20 flex-col items-center justify-center">
        <div
          style={{ fontFamily: "Roca Bold, sans-serif" }}
          className="text-primary  text-center text-2xl md:text-4xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10"
        >
          Our vets bring the magic to Dr. Paws
        </div>
        <div className="self-center w-full max-w-[1045px] mt-14 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[53%] max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ff06deb7d2921253c100721457f6ae6438bf620b1a8b72130d7db09096b34331?apiKey=22a36eade5734692978208fb0d2f5c62&"
                className="aspect-[1.27] object-contain object-center w-full overflow-hidden grow max-md:max-w-full md:mt-10 mt-0"
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
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-700 font-custom-roca text-xl capitalize">
                      Highly qualified & always up-to-date
                    </div>
                    <div className="text-slate-700 font-custom-open-sans text-sm mt-2.5">
                      We only hire from the best veterinary colleges, and ensure
                      our staff are supported to upskill themselves on the
                      latest techniques
                    </div>
                  </span>
                </div>
                <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col ">
                    <div className="text-slate-700 font-custom-roca text-xl capitalize">
                      Trained on the best machinery
                    </div>
                    <div className="text-slate-700 font-custom-open-sans text-sm mt-2.5">
                      Our vets are trained to use the latest cutting-edge
                      machinery on all procedures
                    </div>
                  </span>
                </div>
                <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                    <div className="text-slate-700 font-custom-roca text-xl capitalize">
                      Animal-first approach. Always
                    </div>
                    <div className="text-slate-700 font-custom-open-sans text-sm mt-2.5">
                      Unlike other clinics, we evaluate our vets based on
                      customer satisfaction ahead of revenue. This ensures we
                      never suggest unnecessary treatments
                    </div>
                  </span>
                </div>
                <div className="flex justify-between gap-3.5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/608e48060f45e85f7afeeb68228e4b04a71cb1221d9a8a3e95bb3e1780bf1c47?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[0.98] object-contain object-center w-[43px] overflow-hidden shrink-0 max-w-full"
                  />
                  <span className="items-stretch self-stretch flex grow basis-[0%] flex-col ">
                    <div className="text-slate-700 font-custom-roca text-xl capitalize">
                      Animal lovers first. Vets second
                    </div>
                    <div className="text-slate-700 font-custom-open-sans text-sm mt-2.5">
                      Our staff are passionate about animals and will ensure
                      your pet is cared for with love and compassion{" "}
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendlyDoctor;
