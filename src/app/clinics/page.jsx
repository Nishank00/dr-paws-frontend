
import React from 'react'
import ImageTextHeader from '@/components/pages/home/ImageTextHeader'
import ClinicCard from '@/components/pages/clinic/ClinicCard'




const Clinics = () => {
    const imageurl = "https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d6afbbf6cb563d8b2e9f32794e7ce4a947d3298bf7a66dd2483fe69ffde8831?apiKey=22a36eade5734692978208fb0d2f5c62&"
    const gridData = [0, 1, 2, 3, 4, 5, 7, 8]


    return (
        <div>
            <div
                className={"grid grid-cols-1 sm:grid-cols-2 gap-10 body-padding-x pb-12"}
            >
                <div
                    style={{
                        backgroundImage: "url(" + imageurl + ")",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className={
                        "min-h-[340px] w-full rounded-xl"
                    }
                >
                </div>
                <div className="w-full flex flex-col justify-center">
                    <h2 className="text-primary font-medium text-4xl mb-6"> Come and visit<br /> us at our place!</h2>
                    <p className="text-primary mb-6">
                        We are opening our homely Dr. Paws clinics across neighbourhoods
                        all over the country. If we’re not near you right now, we hope to
                        be very soon!
                    </p>
                    <button style={{ display: "none" }}> check</button>
                </div>
            </div>
            {/* grid section */}
            <div className="text-slate-700 text-center text-3xl leading-7 tracking-tight self-center mt-14 max-md:max-w-full max-md:mt-10">
                Our Clinics
            </div>
           
            <div  style={{marginTop:"25px"}} className="w-[70%] m-auto   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {gridData.map((item, index) => (
                    <ClinicCard
                        imageUrl={imageurl}

                    />
                ))}
                <span className="justify-center items-center shadow-sm bg-orange-100 flex max-w-[331px] flex-col px-9 py-12 rounded-lg">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c86bbb0d478f3d8bde31d329a0619c24df3bcebaa6c25902d2bc986a973a6de?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-[0.79] object-contain object-center w-[45px] overflow-hidden max-w-full mt-9"
                    />
                    <div className="text-slate-700 text-center text-3xl leading-9 capitalize self-stretch mt-10 mb-9">
                        Where should the next Dr. Paws Clinic be?
                    </div>
                </span>
            </div>

        </div>
    )
}

export default Clinics