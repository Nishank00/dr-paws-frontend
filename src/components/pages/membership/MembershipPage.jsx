"use client"
import React, { useState, useEffect } from 'react'
import ImageHeader from '@/components/ui/ImageHeader'
import MembershipService from '@/services/Membership.Service'
import MembershipCard from './MembershipCard'


const MembershipPage = () => {
    const [memberships, setMemberships] = useState([]);

    const getMemberships = () => {
        console.log('getUserData running');
        MembershipService.getMemberships()
            .then((response) => {
                if (!response.data.status) {
                    console.log('error');
                    return;
                }
                setMemberships(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        getMemberships();
    }, [])
    return (
        <div className='py-20'>
            <div >
                <ImageHeader
                    imageUrl={"/image139.png"}
                    buttonText={"Explore Plans"}
                    header={"Great value care, whatever your pet needs"}
                    text={
                        "Our memberships are designed to provide the convenience, security, and value pet-parents of today expect. Explore our plans to discover the one that fits your pet’s needs."
                    }
                    imagePosition={"left"}
                />
            </div>
            <div className='w-full mt-14'>
                <div className='w-full relative' >

                    <div
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%, 6% 52%)',
                            width: '70%',
                            margin: 'auto',
                            height: '73px',
                            position: 'relative'
                        }}
                        className='bg-primary3'
                    >
                    </div>
                    <div
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 93% 50%, 100% 100%, 0 100%, 6% 52%)',
                            position: 'absolute',
                            top: '-10px', // Adjust as needed for the gap between the two divs
                            width: '70%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            height: '73px'
                        }}
                        className='bg-primary2 flex justify-center items-center'
                    >
                        <h3 className='text-primary text-xl sm:text-4xl text-center font-bold font-custom-roca'>Become A Member</h3>
                    </div>
                </div>
                <div className=" py-20  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {memberships.map((membership, index) => (
                    <MembershipCard
                        key={index}
                        index={index}
                        image={"/Membership/membership_card.png"}
                        title={membership.title}
                        description={membership.description}
                        includes={membership.items.membership_description}
                    />
                ))}
            </div>

            </div>


        </div>
    )
}

export default MembershipPage