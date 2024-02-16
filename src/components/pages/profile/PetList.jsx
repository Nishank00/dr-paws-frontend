"use client";
import PetService from '@/services/Pet.Service'
import React, { useEffect, useState } from 'react'
import PetForm from './PetForm';
import PetCard from './PetCard';

const PetList = ( { user_id } ) =>
{
    const [ petlist, setPetList ] = useState( [] )
    const getPets = () =>
    {
        PetService.getPetsByUserId( user_id ).then( ( r ) =>
        {
            if ( r.data.status )
            {
                setPetList( r.data.data )
                console.log( "pets=>", r.data.data )
            }
            else
            {
                alert( r.data.message )
            }
        } )
            .catch( ( err ) =>
            {
                console.log( err )
            } )
    }
    useEffect( () =>
    {
        getPets()
    }, [ user_id ] )
    return (
        <div className='w-full'>
            <div className='flex justify-between items-center w-full mt-5'>
                <div className="text-primary flex items-center  text-center lg:text-left text-xl leading-9 tracking-normal ">
                    Your Pets
                </div>

                <PetForm user_id={user_id} getPets={getPets} />
            </div>
            {petlist.length > 0 && <div className='w-full mt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {
                    petlist.map( ( pet, index ) => <PetCard key={index} {...pet} />
                    )
                }
            </div>
            }
            {petlist.length == 0 && <div className='w-full h-[200px] flex flex-col  justify-center items-center'>
                <div className='text-xl w-[250px] text-center text-primary font-bold'>
                    You havn&apos;t added any pets yet
                </div>
                <div className='mt-2'>
                    <PetForm user_id={user_id} getPets={getPets} />
                </div>
            </div>}

        </div>
    )
}

export default PetList