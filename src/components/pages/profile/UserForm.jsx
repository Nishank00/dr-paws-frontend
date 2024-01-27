import React from 'react'

const UserForm = () => {
    return (
        <div className='w-full m-auto'>
            <div className='w-fit m-auto'>
                <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d0bd915a160bb4063a969c2d12bfc7f7cb6608b6cb929adecdc924449e864c42?apiKey=22a36eade5734692978208fb0d2f5c62&"
                    className="aspect-square object-contain object-center w-full max-w-[125px] rounded-full"
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto'>
                <label className='text-sm'>Name</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2  whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    placeholder=''
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Contact No</label>
                <div className='flex justify-between mt-2 '>
                    <input
                        className="text-slate-700 w-[15%] text-base leading-5 whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                        placeholder=''
                    />
                    <input
                        className="text-slate-700  w-[80%] text-base leading-5 whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                        placeholder=''
                    />
                </div>
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Email</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2 whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
                    placeholder=''
                />
            </div>
            <div className='flex flex-col w-[80%] m-auto mt-3'>
                <label className='text-sm'>Address</label>
                <input
                    className="text-slate-700  text-base leading-5 mt-2 whitespace-nowrap self-stretch border border-[color:var(--Accent,#74A7B3)] bg-white  justify-center py-1 rounded-md border-solid items-start" type="text"
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

export default UserForm