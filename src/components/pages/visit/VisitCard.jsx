import React from 'react'

const VisitCard = () => {
  return (
    <div className="items-stretch border-l-[color:var(--Secondary-1,#5281A2)] shadow-2xl bg-white flex max-w-[333px] flex-col p-5 rounded-md border-l-[3px] border-solid">
    <div className="flex items-stretch justify-between gap-5">
      <div className="flex flex-col items-stretch text-sm text-slate-700 tracking-normal flex-1">
        <div className="text-slate-500 leading-[114%]">Upcoming</div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f1b3d52ffb98b63f662381b68195ba6337248ab8405825918e31329bf9d844d6?apiKey=22a36eade5734692978208fb0d2f5c62&"
          className="aspect-[1.75] object-contain object-center w-[69px] mt-5"
        />
        <div className="font-semibold leading-[114%] whitespace-nowrap mt-5">
          Buddy and Dr. Gargi Nene
        </div>
        <div className="leading-[114%] mt-3.5">Monday, Jan 20, 2024</div>
        <div className="leading-[114%] mt-3.5">10:00am - 10:30am</div>
      </div>
      <div className="text-slate-700 text-right text-xs leading-4 tracking-normal justify-center items-stretch bg-orange-300 px-2.5 py-1.5 rounded-md self-start">
        Grooming
      </div>
    </div>
    <button className="text-slate-500 text-xs hover:bg-primary hover:text-white  font-bold whitespace-nowrap justify-center items-stretch border border-[color:var(--Secondary-1,#5281A2)] mt-5 px-5 py-2 rounded-3xl border-solid self-end">
      View Details
    </button>
  </div>
  )
}

export default VisitCard