"use client"
import React ,{useState,useEffect} from 'react'
import UserService from '@/services/User.Service';
import PetService from '@/services/Pet.Service';

const PetProfile = () => {
  const [petData, setPetData] = useState({});

  const getPetData = () => {
    console.log('getUserData running');
    PetService.getPetById(id)
        .then((response) => {
            if(!response.data.status){
                console.log('error');
                return;
            }
            setUserData(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })
      }

      useEffect(() => {
          getPetData();
      }, [])
    return (
        <div className='w-full pt-[101px]'>
            <div className='w-full flex justify-between bg-primary3 px-4 py-4 '>
                <div  className=' w-[80%] flex justify-between items-center'>
                    <div className='hover:cursor-pointer'>
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/bdcf1eb8375a36b26f4fbc2da18d633df3d2102b98004f64ce792ed7ce22b5f9?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-square object-contain object-center w-full max-w-[150px] rounded-full"
                        />
                    </div>
                    <div className=' w-[75%] grid grid-cols-3 gap-1 '>
                        <div  >
                            <div className="text-slate-700 text-xl  h-10 italic font-semibold grow shrink basis-auto">
                              {petData.name}
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal ">
                                    Type of Pet
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    Dog
                                </div>
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal max-w-[71px]">
                                    Age
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    2.5 years
                                </div>
                            </div>

                        </div>
                        <div  >
                            <div className="text-slate-700 text-xl  h-10 italic font-semibold grow shrink basis-auto">
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal ">
                                    Breed
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    Golden Retriever
                                </div>
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal max-w-[71px]">
                                    Birthday
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    25 April 2022
                                </div>
                            </div>

                        </div>
                        <div  >
                            <div className="text-slate-700 text-xl  h-10 italic font-semibold grow shrink basis-auto">
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-1">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal ">
                                    Gender
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    Male
                                </div>
                            </div>
                            <div className="text-slate-500 text-sm leading-9 tracking-normal mt-5">
                                <div className="text-slate-500 text-sm leading-9 tracking-normal max-w-[71px]">
                                    Weight
                                </div>
                                <div className="text-slate-700 text-md font-semibold leading-9 tracking-normal ">
                                    20kg
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <button className="justify-center items-stretch w-[166px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-4 rounded-[86px] border-2 border-solid">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4de235d9b77455aa5f7570010e4b94c0b4e21c41aa50f4e54f6bc6467e5db216?apiKey=22a36eade5734692978208fb0d2f5c62&"
                            className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 my-auto"
                        />
                        <div className="text-slate-500 text-base font-bold leading-5 tracking-normal grow whitespace-nowrap">
                            Edit Profile
                        </div>
                    </button>
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
        <div className="items-stretch border border-[color:var(--Secondary-1,#5281A2)] flex gap-1.5 my-auto px-5 py-3 rounded-[40px] border-solid">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/061674e38d127e94ee655e16dc9d2cb44d0e8e238000003a0ccb965ad5a24b1a?apiKey=22a36eade5734692978208fb0d2f5c62&"
            className="aspect-[1.08] object-contain object-center w-[15px] shrink-0 self-start"
          />
          <div className="text-slate-500 text-base font-bold leading-4 capitalize grow whitespace-nowrap">
            Edit Medical History
          </div>
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