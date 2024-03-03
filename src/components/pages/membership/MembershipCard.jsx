"use client";
import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import DialogBox from '@/components/Common/DialogBox';
import PlanPopUp from './PlanPopUp';
import Popup from '@/components/ui/Popup';

const MembershipCard = ({ index, image, title, description, includes }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [icon, setIcon] = useState();
  const [bgColor, setbgColor] = useState("")

  const handleSelectClick = () => {
    setShowDialog(true);
  }

  const handleClosePopup = () => {
    setShowDialog(false);
  }
  useEffect(() => {
    let url = `/Membership/${index == 0 ? "point_green_icon" : index == 1 ? "point_primary2_icon" : index == 2 ? "point_primary1_icon" : "point_accent_icon"}.svg`;
    let color = index == 0 ? "bg-[#e2e5da]" : index == 1 ? "bg-primary3" : index == 2 ? "bg-accent" : "bg-[#e8fbff]"
    setIcon(url);
    setbgColor(color);
  }, [index])
  return (
    <div className={`${bgColor} rounded-2xl p-4`}>

      <Image
        src={"/Membership/membership_card.png"}
        alt="err"
        width={100}
        height={100}
        className='w-[100px] h-[100px] m-auto'
      />

      <h3 className='text-primary font-custom-roca text-xl'>{title}</h3>
      <div className="text-primary text-sm font-custom-open-sans  mt-2"> {description} </div>
      <div className="text-slate-700 leading-6 mt-5">
        <h4 className="font-bold  text-sm font-custom-open-sans text-primary">Includes:</h4>
        {/* <ul className='list-disc pl-5'>
          {includes && includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul> */}
        <div className='flex mt-2'>
          <div>
            <Image src={icon} alt="err" width={100} height={100} className='w-6 h-6' />
          </div>
          <div className='pl-2'>
            <h4 className='text-primary text-sm font-custom-open-sans'>6 free-of-cost consultations every year</h4>
          </div>
        </div>
        <div className='flex mt-2'>
          <div>
            <Image src={icon} alt="err" width={100} height={100} className='w-6 h-6' />
          </div>
          <div className='pl-2'>
            <h4 className='text-primary text-sm font-custom-open-sans'>50% discount on additional consultations</h4>
          </div>
        </div>
      </div>
      <div >
        <button onClick={handleSelectClick} className="w-[80%] m-auto text-white  font-bold  flex justify-center items-center bg-secondary mt-3  h-[50px] rounded-full">
          Select
        </button>
      </div>

{/*       
        <Popup isOpen={showDialog} onClose={handleClosePopup} hideClose={true}>
          <PlanPopUp onClose={handleClosePopup} />
        </Popup> */}
        <Popup isOpen={showDialog} onClose={handleClosePopup} hideClose={true}>
        <PlanPopUp onClose={handleClosePopup} />
      </Popup>
    </div>
  )
}

export default MembershipCard