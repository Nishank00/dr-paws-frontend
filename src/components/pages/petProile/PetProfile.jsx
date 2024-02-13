"use client"
import React, { useState, useEffect } from 'react'
import UserService from '@/services/User.Service';
import PetService from '@/services/Pet.Service';
import PetForm from '../profile/PetForm';
import DocumentForm from './DocumentForm';

const PetProfile = ({ pet_id }) => {
  const [petData, setPetData] = useState({});

  const getPetData = () => {
    console.log('getUserData running');
    PetService.getPetById(pet_id)
      .then((response) => {
        if (!response.data.status) {
          console.log('error');
          return;
        }
        setPetData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  useEffect(() => {
    if (pet_id) {
      getPetData();
    }
  }, [])

  return (
    <div className='w-full pt-[101px]'>

      <div className='w-full flex flex-col lg:flex-row justify-between items-center   bg-primary3 px-4 py-4'>
        <div className='hover:cursor-pointer'>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-square object-contain object-center w-full max-w-[150px] rounded-full"
          />
        </div>
        <div className=' w-full mt-5 lg:mt-0 lg:w-[80%] lg:ml-5'>
          <div className="text-slate-700 text-xl w-full flex justify-center lg:justify-start h-10 italic font-semibold grow shrink basis-auto">
            {petData.name}
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
              <div className="text-slate-500 text-center lg:text-left text-sm leading-9 tracking-normal ">
                Type of Pet
              </div>
              <div className="text-slate-700 text-center lg:text-left text-md font-semibold leading-9 tracking-normal ">
                {petData.type}
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
              <div className="text-slate-500 text-sm text-center lg:text-left leading-9 tracking-normal ">
                Breed
              </div>
              <div className="text-slate-700 text-md text-center lg:text-left font-semibold leading-9 tracking-normal ">
                {petData.pet_breed}
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
              <div className="text-slate-500 text-sm text-center lg:text-left leading-9 tracking-normal ">
                Gender
              </div>
              <div className="text-slate-700 text-md text-center lg:text-left font-semibold leading-9 tracking-normal ">
                {petData.gender}
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
              <div className="text-slate-500 text-sm text-center lg:text-left leading-9 tracking-normal">
                Age
              </div>
              <div className="text-slate-700 text-md text-center lg:text-left font-semibold leading-9 tracking-normal ">
                {petData.age}
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
              <div className="text-slate-500 text-sm text-center lg:text-left leading-9 tracking-normal ">
                Birthday
              </div>
              <div className="text-slate-700 text-md text-center lg:text-left font-semibold leading-9 tracking-normal ">
                {petData.date_of_birth}
              </div>
            </div>
            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
              <div className="text-slate-500 text-sm text-center lg:text-left leading-9 tracking-normal ">
                Weight
              </div>
              <div className="text-slate-700 text-md text-center lg:text-left font-semibold leading-9 tracking-normal ">
                {petData.weight} Kg
              </div>
            </div>
          </div>
        </div>
        <div className='lg:h-[14rem] flex flex-col justify-start '>

          <div className="text-slate-500 h-full text-base font-bold leading-5 tracking-normal grow whitespace-nowrap">
            <PetForm user_id={petData.user_id} petData={...petData} />
          </div>
        </div>
      </div>
      <div className="justify-end items-stretch flex flex-col p-8 rounded-md max-md:px-5">
        <div className="flex w-full items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-2.5">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f24b0496dc1d470705bcba23c6855075643de0a5e63c2a6d315dfbf516e3d5bc?apiKey=22a36eade5734692978208fb0d2f5c62&"
              className="aspect-square object-contain object-center w-[50px] shrink-0"
            />
            <div className="text-slate-500 text-2xl leading-[50px] capitalize grow whitespace-nowrap">
              Buddy’s Medical History
            </div>
          </div>
          <div>

            <DocumentForm />
          </div>
        </div>
        <div className="text-slate-700 text-lg font-bold leading-6 tracking-normal mt-8 max-md:max-w-full">
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
        </div>
      </div>
    </div>
  )
}

export default PetProfile