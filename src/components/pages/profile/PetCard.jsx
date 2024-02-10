import PetService from '@/services/Pet.Service';
import React from 'react'

const PetCard = ({name,age,weight,date_of_birh}) => {
    return (
        <div>
            <div className="items-stretch border-[color:var(--Primary-1,#33495F)] bg-slate-700 flex flex-col rounded-2xl border-[3px] border-solid flex-1">
                <div className="items-center bg-slate-400 flex flex-col px-10 py-8 rounded-2xl max-md:px-5">
                    <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a7b5fcdda56bfcbc21d41bf921ab6efd67beba05b2f893e92c596bb337e2f3f4?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-square object-contain object-center w-28 rounded-full"
                    />
                    <div className="text-white text-2xl leading-6 capitalize mt-5">
                        {name}
                    </div>
                </div>
                <div className="justify-center flex gap-1.5 px-8 py-2.5 items-start max-md:px-5">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/593c8c80f6738bde368d2c136a69d13f72067482a5533bc9adb5ff01566e2c7e?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-[0.93] object-contain object-center w-3.5 fill-orange-300 shrink-0"
                    />
                    <div className="text-white text-sm leading-4 capitalize self-stretch">
                        Star Member
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/593c8c80f6738bde368d2c136a69d13f72067482a5533bc9adb5ff01566e2c7e?apiKey=22a36eade5734692978208fb0d2f5c62&"
                        className="aspect-[0.93] object-contain object-center w-3.5 fill-orange-300 shrink-0"
                    />
                </div>
            </div>
        </div>
    )
}

export default PetCard