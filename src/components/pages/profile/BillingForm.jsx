import React from 'react'

const BillingForm = () => {
    return (

        <div className='w-full m-auto'>
            <div className='flex justify-between w-[80%] m-auto'>
                <div className='w-[45%] flex flex-col'>
                    <label>
                        First Name
                    </label>
                    <input
                        className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                        placeholder=''
                    />
                </div>
                <div className='w-[45%] flex flex-col'>
                    <label>
                        First Name
                    </label>
                    <input
                        className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                        placeholder=''
                    />
                </div>

            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Card Details</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    placeholder=''
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Name on card</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    placeholder=''
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Billing Address</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    placeholder=''
                />
            </div>
            <div className='flex  justify-between  w-[80%] m-auto mt-3'>
                <button className="justify-center items-stretch w-[156px] border-[color:var(--Secondary-1,#5281A2)] flex gap-2 px-8 py-3 rounded-[86px] border-2 border-solid">

                    <div className="text-slate-500 text-base font-bold leading-4 tracking-normal grow whitespace-nowrap">
                        Cancel
                    </div>
                </button>
                <div className="text-white text-base font-bold  w-[156px] leading-4 tracking-normal justify-center items-center bg-slate-500 max-w-[160px] px-16 py-3 rounded-[86px]">
                    Save
                </div>
            </div>
        </div>
    )
}

export default BillingForm