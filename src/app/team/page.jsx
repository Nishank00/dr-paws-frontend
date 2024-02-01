import ImageTextHeader from '@/components/pages/home/ImageTextHeader'
import React from 'react'

const page = () => {
  return (
        <div className="body-padding-x pt-20">
    <ImageTextHeader 
        imageUrl={"/image139.png"}
        imagePosition={"left"}
        header={"Meet our very own Superheroes"}
        text={"Our clinical team is comprised of experienced vets, with a broad range of specialisations, with additional special training to create a new kind of veterinary experience. We love animals and find joy everyday helping our four legged friends stay happy & healthy."}
        buttonVisibility={false}
    />
<div class="text-center text-blue-800 text-3xl font-roca font-medium uppercase leading-10 break-words">Our Team</div>
    </div>
  )
}

export default page