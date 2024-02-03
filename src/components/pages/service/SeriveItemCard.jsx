import React from 'react'

const SeriveItemCard = ({name}) => {
  return (
    <div  className=" flex justify-center items-center flex-col text-center">
    {/* <Image
      src="/petting-dog.png"
      width={600} // Adjusted width
      height={600} // Adjusted height
      alt={`Profile Image `}
      className="rounded-full mx-auto w-auto h-100%"
    /> */}
    <div>
    <img className=' w-[180px] h-[180px] rounded-full' src="/petting-dog.png" alt="Profile Image" />

    </div>
    <p className="text-primary text-center">{name}</p>
  </div>
  )
}

export default SeriveItemCard;