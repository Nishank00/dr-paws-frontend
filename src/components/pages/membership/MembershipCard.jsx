"use client";
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import DialogBox from '@/components/Common/DialogBox';
import PlanPopUp from './PlanPopUp';

const MembershipCard = ({image, title, description, includes }) => {
    const [showDialog, setShowDialog] = useState(false);

    const handleSelectClick = () => {
        setShowDialog(true);
    }

    const handleClosePopup = () => {
        setShowDialog(false);
    }
  return (
    <div className="bg-white rounded-2xl flex flex-col justify-between p-5 space-y-5 h-full">
    <Image
        src={"/Membership/" + image + ".svg"}
        width={600}
        height={600}
        className="rounded-full mx-auto w-auto h-100%"
    />
      <header 
        className="text-slate-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl capitalize whitespace-nowrap mt-5"
        style={{ 
            width: '100%',  
            fontSize: '1.5rem', 
            fontFamily: 'Roca', 
            fontWeight: '400', 
            wordWrap: 'break-word', 
            textTransform: 'capitalize'
        }}
      > 
        {title} 
      </header>
      <div className="text-slate-700 mt-2"> {description} </div>
      <div className="text-slate-700 leading-6 mt-5">
        <span className="font-bold text-slate-700">Includes:</span>
        <ul className='list-disc pl-5'>
            {includes && includes.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
      {/* <button onClick={handleSelectClick} className="w-full px-3 py-2 bg-secondary rounded-full overflow-hidden flex items-center justify-center gap-2 inline-flex text-white text-base font-semibold break-words mb-5">
    Select
  </button> */}
  <button onClick={handleSelectClick} className="text-white text-base font-bold justify-center items-center bg-slate-400 mt-3 px-16 py-3.5 rounded-[86px]">
          Select
        </button>
    {showDialog && 
    <DialogBox isOpen={showDialog} onClosePopup={handleClosePopup}>
        <PlanPopUp onClose={handleClosePopup} />
    </DialogBox>}
    </div>
  )
}

export default MembershipCard