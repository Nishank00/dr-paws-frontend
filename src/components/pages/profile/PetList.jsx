"use client";
import PetService from '@/services/Pet.Service'
import React, { useEffect, useState } from 'react'
import PetForm from './PetForm';
import PetCard from './PetCard';

const PetList = ({ user_id }) => {
    const [pets, setPets] = useState([]);

    const getPets = () => {
        PetService.getPetsByUserId(user_id).then((r) => {
            if (r.data.status) {
                setPets(r.data.data)
            }
            else {
                alert(r.data.message)
            }
        })
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        getPets()
        console.log(pets.length)
    }, [user_id])
    return (
        <div className='w-full'>
            {pets.length > 0 ? <div className='w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                {
                    pets.length > 0 && pets.map((pet) => {
                        // <PetCard {...pet} />
                        <div>
                            <h1>{pet.name}</h1>
                        </div>
                    })
                }
            </div> : <div className='w-full h-[200px] flex flex-col  justify-center items-center'>
                <div className='text-xl w-[250px] text-center text-primary font-bold'>
                    You havn't added any pets yet
                </div>
                <div className='mt-2'>
                    <PetForm user_id={user_id} />
                </div>
            </div>
            }

        </div>
    )
}

export default PetList