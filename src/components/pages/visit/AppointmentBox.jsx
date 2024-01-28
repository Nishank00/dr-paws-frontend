import React from 'react'

const AppointmentBox = () => {
    return (
        <div className='w-full '>
            <div className="text-slate-700 m-auto text-center text-4xl leading-9 capitalize ">
                Your Booking
            </div>
            <div className="items-center shadow-2xl m-auto mt-7  bg-orange-50 flex max-w-[651px] flex-col px-20 py-12 rounded-2xl max-md:px-5">

                <div className="text-slate-700 text-center text-2xl font-semibold leading-6 tracking-tight max-md:max-w-full">
                    Buddy is scheduled with Dr. Gargi Nene
                </div>
                <div className="text-slate-700 text-center text-lg leading-5 tracking-normal whitespace-nowrap mt-5">
                    for General Consultation
                </div>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2bf70580aa3fe881c8beb6b7c529134889b5b08b56bdf0313bf1b088afbbbd40?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-[1.79] object-contain object-center w-[223px] items-start max-w-full mt-11 max-md:mt-10"
                />
                <div className="items-stretch flex gap-1.5 mt-11 max-md:mt-10">
                    <div className="items-center flex basis-0 flex-col">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/549d72d3363b39009904e3c544de452be79e76e787b2faedc43f622c8699a7e6?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-square object-contain object-center w-6"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/13979055bc84330b6dc85718a9adfd3d38cefe8fa4ecaa1fa51f1e4ad60a70dd?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-square object-contain object-center w-6 mt-7"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9433e34476e9fff7edb9d85e5ec43a47455ba41bab5b6d171d7e04b203c7cb1a?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-[1.33] object-contain object-center w-6 stroke-[2px] stroke-slate-500 mt-7"
                        />
                    </div>
                    <div className="items-stretch flex flex-col text-xl text-slate-700 text-center tracking-normal mt-1 flex-1 self-start">
                        <div className="leading-[100%]">Andheri West Clinic</div>
                        <div className="leading-[100%] whitespace-nowrap mt-7">
                            Wednesday, Jan 9, 2023
                        </div>
                        <div className="leading-[100%] mt-7">4:00 PM - 4:30 PM</div>
                    </div>
                </div>
                <div className="text-slate-700 text-center text-sm leading-4 tracking-normal underline whitespace-nowrap mt-11 max-md:mt-10">
                    + Add to Calendar
                </div>
                <div className="justify-center items-stretch flex w-full max-w-[451px] gap-2.5 mt-5 max-md:max-w-full max-md:flex-wrap">
                    <button className="text-slate-500 shadow-md hover:bg-primary hover:text-white text-base font-bold leading-5 tracking-normal justify-center items-center border-[color:var(--Secondary-1,#5281A2)] grow px-16 py-4 rounded-[86px] border-2 border-solid max-md:px-5">
                        Cancel
                    </button>
                    <button className="text-slate-500 shadow-md text-base hover:bg-primary hover:text-white  font-bold leading-5 tracking-normal justify-center items-stretch border-[color:var(--Secondary-1,#5281A2)] grow px-16 py-4 rounded-[86px] border-2 border-solid max-md:px-5">
                        Reschedule
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AppointmentBox