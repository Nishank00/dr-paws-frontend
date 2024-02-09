"use client"
import React, { useState, useEffect } from 'react'
import UserService from '@/services/User.Service'

const BillingForm = ( { user_id, closePopup } ) =>
{
    const [ account, setAccount ] = useState( {
        first_name: "",
        last_name: "",
        card_details: "",
        cvv_code: "",
        name_on_card: "",
        billing_address: "",
    } );

    const updateBillingData = () =>
    {
        let payload = { ...account, user_id }
        UserService.saveBillingDetails( payload ).then( ( r ) =>
        {
            if ( r.data.status )
            {
                closePopup();
                alert( "billing details updated!" )
            }
            else
            {
                console.log( r.data.message )
            }
        } ).catch( ( err ) =>
        {
            console.log( err );
        } )

    }


    const getBillingData = () =>
    {
        UserService.getBillingDetails( { user_id } ).then( ( r ) =>
        {
            if ( r.data.status )
            {
                setAccount( r.data.data )
            } else
            {
                alert( r.data.message )
                console.log( r.data )
            }
        } ).catch( ( err ) =>
        {

            console.log( err )
        } )
    }
    useEffect( () =>
    {
        if ( user_id )
        {
            getBillingData()
        }
    }, [ account, user_id ] )
    return (

        <div className='w-full m-auto'>
            <div className='flex justify-between w-[80%] m-auto'>
                <div className='w-[45%] flex flex-col'>
                    <label>
                        First Name
                    </label>
                    <input
                        className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
                        placeholder=''
                        onChange={( e ) => setAccount( { ...account, first_name: e.target.value } )}
                    />
                </div>
                <div className='w-[45%] flex flex-col'>
                    <label>
                        Last Name
                    </label>
                    <input
                        className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
                        placeholder=''
                        onChange={( e ) => setAccount( { ...account, last_name: e.target.value } )}

                    />
                </div>

            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Card Details</label>
                <input
                    className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
                    placeholder=''
                    onChange={( e ) => setAccount( { ...account, card_details: e.target.value } )}

                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Name on card</label>
                <input
                    className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
                    placeholder=''
                    onChange={( e ) => setAccount( { ...account, name_on_card: e.target.value } )}

                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Billing Address</label>
                <input
                    className="input rounded-lg px-4 py-2 border-2 border-secondary2 text-lg text-primary"
                    placeholder=''
                    onChange={( e ) => setAccount( { ...account, billing_address: e.target.value } )}

                />
            </div>
            <div className='flex  justify-between  w-[80%] m-auto mt-3'>
                <button className="justify-center items-stretch w-[156px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-3 rounded-[86px] border-2 border-solid">

                    <div onClick={() => closePopup()} className="text-slate-500 text-base font-bold leading-4 tracking-normal grow whitespace-nowrap">
                        Cancel
                    </div>
                </button>
                <div onClick={updateBillingData} className="text-white text-base font-bold  w-[156px] leading-4 tracking-normal justify-center items-center bg-slate-500 max-w-[160px] px-16 py-3 rounded-[86px]">
                    Save
                </div>
            </div>
        </div>
    )
}

export default BillingForm;