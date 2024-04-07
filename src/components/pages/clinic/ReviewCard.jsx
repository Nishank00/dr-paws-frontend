import React from 'react'
import Image from 'next/image'

const ReviewCard = ({index}) => {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
    <div className="bg-primary3 flex w-full grow flex-col items-center mx-auto pb-12 rounded-md max-md:mt-6">
      <Image
       src={index==0? "/clinics/teen-spending-day-with-her-dog0.svg":index==1?"/clinics/teen-spending-day-with-her-dog1.svg":"/clinics/teen-spending-day-with-her-dog2.svg"}
      width={100}
      height={100}
      alt="err"
       class="aspect-[1.32] object-contain object-center w-full overflow-hidden self-stretch"
      />
      <div className="  justify-center items-center flex w-[268px] max-w-full gap-3 mt-8">
        <div className={`flex w-10 h-10 ${index==0?"bg-accent":index==1?"bg-primary2":"bg-secondary2"} shrink-0  flex-col rounded-full`} >
        </div>

        <div className="text-slate-700 text-lg italic font-semibold grow shrink basis-auto">
          Rahul Shah
        </div>
      </div>
      <div className="text-primary text-[14px] italic  py-2 px-3 tracking-normal w-full mt-3.5">
        The veterinarians were knowledgeable and showed genuine love
        for animals.
        
      </div>
      <div className="text-primary text-[14px] italic leading-7  px-3 tracking-normal w-full mt-1">
      
        Highly recommended!
      </div>
    </div>
  </div>
  )
}

export default ReviewCard