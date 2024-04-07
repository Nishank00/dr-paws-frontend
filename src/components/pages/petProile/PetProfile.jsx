"use client"
import React, { useState, useEffect } from 'react'
import UserService from '@/services/User.Service';
import PetService from '@/services/Pet.Service';
import PetForm from '../profile/PetForm';
import DocumentForm from './DocumentForm';
import PetDocumentList from './PetDocumentList';
import moment from 'moment';
import Image from 'next/image';

const PetProfile = ({ pet_id }) => {
  const [petData, setPetData] = useState({});
  const [documentlist, setDocumenetList] = useState([]);

  const getPetData = () => {
    console.log('getUserData running');
    PetService.getPetById(pet_id)
      .then((response) => {
        if (!response.data.status) {
          console.log('error');
          return;
        }
        setPetData(response.data.data);
        console.log(process.env.NEXT_PUBLIC_API_UPLOAD_URL,
          "/", petData.pet_image)
        console.log("image=>", response.data.data.pet_image)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const getDoccumnetTypes = () => {
    PetService.getDocumentType().then((r) => {
      if (r.data.status) {
        setDocumenetList(r.data.data)
        showToast(r.data.message, "success");
      }
      else {
        showToast(r.data.message, "error");
      }
    }).catch((err) => {
      console.log(err)
    })
  }

  useEffect(() => {
    if (pet_id) {
      getPetData();
      getDoccumnetTypes();
    }
  }, [])

  return (
    <div className='w-full pt-[101px]'>

      <div className='w-full flex flex-col lg:flex-row  lg:h-[251px] justify-between items-center   bg-primary3 p-[30px]'>
        <div className='w-full h-full grid grid-cols-1 lg:grid-cols-5 gap-3'>
          <div className='hover:cursor-pointer col-span-1 flex  justify-center items-center'>
            {/* <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&"
              className="aspect-square object-contain object-center w-full max-w-[150px] rounded-full"
            /> */}
            {/* <Image
            src={ petData.pet_image?  process.env.NEXT_PUBLIC_API_UPLOAD_URL +
              "/" +
              petData.pet_image:"/defaultUserProfileImage.png"}
            width={100}
            height={100}
            alt="err"
            className="aspect-square object-contain object-center w-[160px] h-[160px] rounded-full"

            /> */}
            <div
              className="w-[160px] h-[160px] rounded-full bg-accent relative"
              style={{
                backgroundImage: `url(${petData.pet_image
                  ? `${process.env.NEXT_PUBLIC_API_UPLOAD_URL}/${petData.pet_image}` : "/defaultUserProfileImage.png"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div
            className='col-span-1 lg:col-span-3 flex flex-col  '>
            <div className='w-full   lg:h-[22%] flex justify-center lg:justify-start items-center '>
              <h2 className="font-semibold font-custom-roca text-secondary lg:text-left text-2xl">
                {petData.name || "Not Available"}
              </h2>
            </div>
            <div className='w-full grid grid-cols-1  md:grid-cols-3  mt-5 lg:mt-3'>
              <div className='w-full h-full   flex flex-col justify-between'>
                <div className='w-full  mt-2 md:mt-0'>
                  <h4 className="text-sm mb-2 text-secondary font-custom-open-sans text-center lg:text-left">Type of Pet</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {petData.type || "NA"}
                  </h3>
                </div>
                <div className='w-full lg:mt-2 mt-5 md:mt-0'>
                  <h4 className="text-sm mb-2  text-secondary font-custom-open-sans text-center lg:text-left">Age</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {petData.age || "NA"}
                  </h3>
                </div>
              </div>
              <div className='w-full flex flex-col'>
                <div className='w-full mt-2 md:mt-0'>
                  <h4 className="text-sm mb-2 text-secondary font-custom-open-sans text-center lg:text-left">Breed</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {petData.breed || "NA"}
                  </h3>
                </div>
                <div className='w-full lg:mt-2 mt-5 md:mt-0'>
                  <h4 className="text-sm mb-2  text-secondary font-custom-open-sans text-center lg:text-left">Birthday</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {moment(petData.date_of_birth).format("ll") || "NA"}
                  </h3>
                </div>
              </div>
              <div className='w-full flex flex-col'>
                <div className='w-full mt-5 md:mt-0'>
                  <h4 className="text-sm mb-2 text-secondary font-custom-open-sans text-center lg:text-left">Gender</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {petData.gender || "NA"}
                  </h3>
                </div>
                <div className='w-full lg:mt-2 mt-5 md:mt-0'>
                  <h4 className="text-sm mb-2  text-secondary font-custom-open-sans text-center lg:text-left">Weight</h4>
                  <h3 className="text-lg font-custom-open-sans font-semibold text-primary text-center lg:text-left">
                    {petData.weight || "NA"}
                  </h3>
                </div>
              </div>
            </div>

          </div>
          <div className='flex  justify-center lg:justify-end'>
            <PetForm user_id={petData.user_id} petData={petData} getPetData={getPetData} />
          </div>
        </div>

      </div>
      <div className="justify-end items-stretch flex flex-col p-8 rounded-md max-md:px-5">
        <div className="flex  flex-col lg:flex-row w-full   justify-between  items-center gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex flex-row justify-between gap-2.5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&"
              className="aspect-square object-contain object-center w-[50px] shrink-0"
            />
            <div className="text-secondary font-custom-roca  text-2xl leading-[50px] capitalize grow whitespace-nowrap">
              Buddy’s Medical History
            </div>
          </div>
          <div>

            <DocumentForm pet_id={petData.id} />
          </div>
        </div>
        <div class="w-full">
          {
           documentlist && documentlist.map((doc, index) => (
            <PetDocumentList pet_id={petData.id} {...doc} />
            ))

          }
        </div>
        {/* <PetDocumentList pet_id={petData.id} doc_type_name={"Scans and X-rays"} />
        <PetDocumentList pet_id={petData.id} doc_type_name={"Dog Training"} /> */}

        {/* <PetDocumentList pet_id={petData.id} doc_type_name={"Dog and Cat Slitting"} /> */}

        {/* <div className="text-slate-700 text-lg font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
          Past Diagnostic Reports
        </div>
        <div className="items-stretch flex gap-4 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
        </div>
        <div className="text-slate-700 text-lg font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
          Past Scans and X-rays
        </div>
        <div className="items-stretch flex gap-4 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
              October 2022 Tick Fever.pdf
            </div>
          </div>
        </div>
        <div className="text-slate-700 text-lg font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
          Vaccines
        </div>
        <div className="items-stretch flex gap-4 mt-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="justify-end items-stretch bg-orange-100 bg-opacity-30 flex flex-col text-slate-500 whitespace-nowrap p-2.5 rounded-none">
              <div className="text-xs font-semibold leading-3 tracking-normal">
                Vaccine-1.pdf
              </div>
              <div className="text-xs leading-loose tracking-normal mt-2">
                Exp: 20 July 2024
              </div>
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="justify-end items-stretch bg-orange-100 bg-opacity-30 flex flex-col text-slate-500 whitespace-nowrap p-2.5 rounded-none">
              <div className="text-xs font-semibold leading-3 tracking-normal">
                Vaccine-1.pdf
              </div>
              <div className="text-xs leading-loose tracking-normal mt-2">
                Exp: 20 July 2024
              </div>
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="justify-end items-stretch bg-orange-100 bg-opacity-30 flex flex-col text-slate-500 whitespace-nowrap p-2.5 rounded-none">
              <div className="text-xs font-semibold leading-3 tracking-normal">
                Vaccine-1.pdf
              </div>
              <div className="text-xs leading-loose tracking-normal mt-2">
                Exp: 20 July 2024
              </div>
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="justify-end items-stretch bg-orange-100 bg-opacity-30 flex flex-col text-slate-500 whitespace-nowrap p-2.5 rounded-none">
              <div className="text-xs font-semibold leading-3 tracking-normal">
                Vaccine-1.pdf
              </div>
              <div className="text-xs leading-loose tracking-normal mt-2">
                Exp: 20 July 2024
              </div>
            </div>
          </div>
          <div className="items-stretch flex flex-col flex-1">
            <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />
            <div className="justify-end items-stretch bg-orange-100 bg-opacity-30 flex flex-col text-slate-500 whitespace-nowrap p-2.5 rounded-none">
              <div className="text-xs font-semibold leading-3 tracking-normal">
                Vaccine-1.pdf
              </div>
              <div className="text-xs leading-loose tracking-normal mt-2">
                Exp: 20 July 2024
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default PetProfile