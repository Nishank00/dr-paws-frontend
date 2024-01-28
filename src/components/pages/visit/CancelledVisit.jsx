import React from 'react'

const CancelledVisit = () => {
    return (
        <div className='w-full'>
             <div className="text-slate-700 m-auto text-center text-4xl leading-9 capitalize ">
                Cancel Booking
            </div>
            <div className="items-center shadow-lg mt-5 m-auto bg-orange-50 flex max-w-[651px] flex-col px-20 py-12 rounded-2xl max-md:px-5">
                <div className="text-slate-700 text-center text-2xl font-semibold leading-6 tracking-tight max-md:max-w-full">
                    Are you sure you want to cancel this booking?
                </div>
                <div className="text-slate-700 text-center text-lg leading-5 tracking-normal mt-5 max-md:max-w-full">
                    You will receive a cancellation email for the booking
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 mt-11 px-4 py-2 max-md:mt-10">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/88c98f772c38e7e494c83f3896d8dd0228147f1e0f1d39c5e0349a4a00cb9bfa?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-square object-contain object-center w-4 shrink-0 my-auto"
                    />
                    <div className="text-neutral-700 text-base leading-7 grow shrink basis-auto">
                        Another commitment has come up
                    </div>
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 px-4 py-2">
                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                        <div className="border border-[color:var(--Secondary-1,#5281A2)] bg-white flex shrink-0 h-4 flex-col rounded-2xl border-solid" />
                    </div>
                    <div className="text-slate-700 text-base leading-7 grow shrink basis-auto">
                        I’m sick / unwell
                    </div>
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 px-4 py-2">
                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                        <div className="border border-[color:var(--Secondary-1,#5281A2)] bg-white flex shrink-0 h-4 flex-col rounded-2xl border-solid" />
                    </div>
                    <div className="text-slate-700 text-base leading-7 grow shrink basis-auto">
                        I have to travel out of the city
                    </div>
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 px-4 py-2">
                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                        <div className="border border-[color:var(--Secondary-1,#5281A2)] bg-white flex shrink-0 h-4 flex-col rounded-2xl border-solid" />
                    </div>
                    <div className="text-slate-700 text-base leading-7 grow whitespace-nowrap">
                        My pet doesn’t need the treatment anymore
                    </div>
                </div>
                <div className="items-stretch flex w-[390px] max-w-full gap-2 px-4 py-2">
                    <div className="flex aspect-square flex-col justify-center items-stretch my-auto">
                        <div className="border border-[color:var(--Secondary-1,#5281A2)] bg-white flex shrink-0 h-4 flex-col rounded-2xl border-solid" />
                    </div>
                    <div className="text-slate-700 text-base leading-7 grow shrink basis-auto">
                        I’ve visited / will visit another clinic
                    </div>
                </div>
                <div className="justify-center items-stretch flex w-full max-w-[451px] gap-2.5 mt-11 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
                    <button  className="text-white text-base shadow-lg hover:bg-primary hover:text-white font-bold leading-5 tracking-normal justify-center items-center bg-slate-500 grow px-16 py-4 rounded-[86px] max-md:px-5">
                        No
                    </button >
                    <button  className="text-slate-500 text-base shadow-lg hover:bg-primary hover:text-white font-bold leading-5 tracking-normal justify-center items-center border-[color:var(--Secondary-1,#5281A2)] grow px-16 py-4 rounded-[86px] border-2 border-solid max-md:px-5">
                        Yes
                    </button >
                </div>
            </div>
        </div>
    )
}

export default CancelledVisit