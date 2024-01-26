import React from 'react'

const ReviewCard = () => {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
    <div className="bg-primary3 flex w-full grow flex-col items-center mx-auto pb-12 rounded-md max-md:mt-6">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/12d84569063efdf8a25ffb971c8773d2eba7b8e23ccb0b9549571711c12adceb?apiKey=22a36eade5734692978208fb0d2f5c62&"
        className="aspect-[1.32] object-contain object-center w-full overflow-hidden self-stretch"
      />
      <div className="justify-center items-stretch flex w-[268px] max-w-full gap-3 mt-8">
        <div className="flex w-10 h-10 bg-primary shrink-0  flex-col rounded-full" >
        </div>

        <div className="text-slate-700 text-lg italic font-semibold grow shrink basis-auto">
          Rahul Shah
        </div>
      </div>
      <div className="text-slate-700 text-base italic leading-7 tracking-normal w-[268px] mt-3.5">
        {" "}
        The veterinarians were knowledgeable and showed genuine love
        for animals.
        <br />
        Highly recommended!
      </div>
    </div>
  </div>
  )
}

export default ReviewCard