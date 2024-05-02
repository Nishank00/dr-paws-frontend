import PetService from '@/services/Pet.Service';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const PetCard = ({ index, pet_image, name, age, weight, date_of_birh, id }) => {
    const [colorData, setColorData] = useState({
        cardColor: "", borderColor: ""
    })
    const router = useRouter();
    useEffect(() => {
        setColorData({
            cardColor: index == 0 ? "bg-secondary text-white" : "bg-primary3 text-secondary",
            borderColor: index == 0 ? "primary" : index == 1 ? "secondary" : index == 2 ? "accent" : index == 3 ? "secondary2" : index == 4 ? "primary2" : "primary3"
        })
    }, [])
    return (
        <div onClick={() => router.push(`/pets/${id}`)} className='hover:cursor-pointer'>
            <div className={`items-stretch  border-${colorData.borderColor} bg-${colorData.borderColor} flex flex-col rounded-2xl border-[3px] border-solid flex-1`}>
                <div className={`items-center ${colorData.cardColor} flex flex-col px-5 py-4 md:px-10 md:py-8 rounded-2xl max-md:px-5`}>
                    {/* <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-square object-contain object-center w-28 rounded-full"
                    /> */}
                    <div
                        className="aspect-square relative object-contain object-center w-full max-w-[125px] rounded-full"
                        style={{
                            backgroundImage: `url(${pet_image
                                ? `${process.env.NEXT_PUBLIC_API_UPLOAD_URL}/${pet_image}` : "dummyDog.svg"})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                        }}
                    ></div>
                    <div className={`text-${index == 0 ? "white" : "secondary"} font-bold text-sm md:text-xl leading-6 capitalize mt-2 md:mt-5`}>
                        {name || "NA"}
                    </div>
                </div>
                <div className="justify-center flex gap-1.5 px-4 py-2.5 items-center max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/593c8c80f6738bde368d2c136a69d13f72067482a5533bc9adb5ff01566e2c7e?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-[0.93] object-contain object-center w-2 md:w-3.5 fill-orange-300 shrink-0"
                    />
                    <div className="text-white  text-[10px] md:text-md  lg:text-[15px] leading-4 capitalize self-stretch">
                        Star Member
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/593c8c80f6738bde368d2c136a69d13f72067482a5533bc9adb5ff01566e2c7e?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-[0.93] object-contain object-center w-2 md:w-3.5 fill-orange-300 shrink-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default PetCard