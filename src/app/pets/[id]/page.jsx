"use client"
import React from 'react'
import PetProfile from '@/components/pages/petProile/PetProfile'
import { useParams } from 'next/navigation'



const Page = () =>
{

    const { id } = useParams();


    return (
        <div className='body-padding-x'>
            <PetProfile pet_id={id} />
        </div>
    )
}

export default Page;