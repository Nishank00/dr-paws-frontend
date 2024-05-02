import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Image from 'next/image';

const DocCard = ({ url,baseurl, created_at,pet_image }) => {
  const [fileType, setFileType] = useState("")
  const handleClick = () => {
    window.open(baseurl, '_blank');
  };
  useEffect(() => {
    if (url) {
      setFileType(baseurl.endsWith('.pdf') ? 'pdf' : 'image')
    }
  }, [url])
  return (
    <div className="items-stretch cursor-pointer flex flex-col flex-1 box-shadow" onClick={handleClick}>
      <div className="bg-primary3  flex shrink-0 h-[86px] flex-col rounded-md" />

      {/* {
        fileType !== "pdf" && <Image src={url} alt='' width={100} height={70} />
      } */}
      <div className="text-slate-500 text-xs truncate font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
        {moment(created_at).format('ll')} {url}
      </div>
    </div>
  )
}

export default DocCard