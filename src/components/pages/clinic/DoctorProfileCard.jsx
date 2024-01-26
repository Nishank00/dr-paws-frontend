import React from 'react'

const DoctorProfileCard = () => {
  return (
    <div className="justify-center bg-primary3 py-2 items-stretch self-stretch flex max-w-[292px] flex-col px-10">
    <img
      loading="lazy"
      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/09d549f00f04a2e96834bdcb531b5cde36ef68afad46cc3a86dcc772c7d406ea?apiKey=22a36eade5734692978208fb0d2f5c62&"
      className="aspect-square object-contain object-center w-[115px] overflow-hidden self-center max-w-full"
    />
    <div className="text-slate-700 text-center text-lg font-semibold whitespace-nowrap mt-5">
      Dr. Emily Thompson
    </div>
    <div className="text-slate-700 text-center text-sm whitespace-nowrap mt-5">
      DMV - Animal Welfare
    </div>
    <div className="text-slate-700 text-center text-sm whitespace-nowrap mt-1">
      10 Years of Experience
    </div>
    <div className="justify-between items-stretch flex gap-2.5 mt-5">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ebc633ef590e8fcc6f3eef7a4cbdbf1064451644305b35e0535b9e0714a043e0?apiKey=22a36eade5734692978208fb0d2f5c62&"
        className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
      />
      <div className="text-slate-700 text-sm leading-3 tracking-normal grow whitespace-nowrap">
        Andheri West, Indiranagar
      </div>
    </div>
    <div className="text-white text-base font-bold whitespace-nowrap justify-center items-stretch bg-slate-500 self-center mt-8 px-8 py-2.5 rounded-3xl">
      View Profile
    </div>
  </div>  )
}

export default DoctorProfileCard