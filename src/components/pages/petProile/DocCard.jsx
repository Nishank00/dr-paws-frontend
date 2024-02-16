import React, { useEffect, useState } from 'react'
import moment from 'moment'
import Image from 'next/image';

const DocCard = ({ url, created_at }) => {
  const [fileType, setFileType] = useState("")
  const handleClick = () => {
    window.open(url, '_blank');
  };
  useEffect(() => {
    if (url) {
      setFileType(url.endsWith('.pdf') ? 'pdf' : 'image')
    }
  }, [url])
  return (
    <div className="items-stretch flex flex-col flex-1" onClick={handleClick}>
      <div className="bg-orange-100 flex shrink-0 h-[86px] flex-col rounded-md" />

      {/* {
        fileType !== "pdf" && <Image src={url} alt='' width={100} height={70} />
      } */}
      <div className="text-slate-500 text-xs font-semibold leading-3 tracking-normal whitespace-nowrap justify-center items-stretch bg-orange-100 bg-opacity-30 p-2.5 rounded-none">
        {moment(created_at).format('ll')}
      </div>
    </div>
  )
}

export default DocCard