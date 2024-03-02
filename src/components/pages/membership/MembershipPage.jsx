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
            <div className="body-padding-x py-20 bg-primary3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
                {memberships.map((membership, index) => (
                    <MembershipCard
                        key={index}
                        image={membership.image}
                        title={membership.title}
                        description={membership.description}
                        includes={membership.items.membership_description}
                    />
                ))}
            </div>
        </div>
    )
}

export default MembershipPage