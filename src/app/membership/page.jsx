import ImageTextHeader from '@/components/pages/home/ImageTextHeader'
import MembershipCard from '@/components/pages/membership/MembershipCard'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='bg-white'>
        <div className="body-padding-x pt-20">
          <ImageTextHeader
            imageUrl={"/image139.png"}
            buttonText={"Explore Plans"}
            header={"Great value care, whatever your pet needs"}
            text={"Our memberships are designed to provide the convenience, security, and value pet-parents of today expect. Explore our plans to discover the one that fits your pet’s needs."}
            imagePosition={"left"} 
            />
        </div>
        <div className="body-padding-x py-20 bg-primary3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
          <MembershipCard
          image={"junior"}
          title={"Care Junior"}
          description={"Our plan that helps prepare you and your puppy or kitten for a lifetime together "}
          includes={["Annual vaccinations", "Flea, tick, and worming treatments", "Microchip", "10% off all other services"]}
          />
          <MembershipCard 
          image={"senior"}
          title={"Care Senior"}
          description={"Our plan that helps prepare you and your puppy or kitten for a lifetime together "}
          includes={["Annual vaccinations", "Flea, tick, and worming treatments", "Microchip", "10% off all other services"]}
          />
          <MembershipCard
          image={"grooming"}
          title={"Grooming"}
          description={"Our plan that helps prepare you and your puppy or kitten for a lifetime together "}
          includes={["Annual vaccinations", "Flea, tick, and worming treatments", "Microchip", "10% off all other services"]}
          />
          <MembershipCard
          image={"starcare"}
          title={"Star Care & Grooming"}
          description={"Our plan that helps prepare you and your puppy or kitten for a lifetime together "} 
          includes={["Annual vaccinations", "Flea, tick, and worming treatments", "Microchip", "10% off all other services"]}
          />
        </div>
      </div>
    </>
  )
}

export default page