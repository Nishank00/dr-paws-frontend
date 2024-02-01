"use client"
import { useRouter } from "next/navigation";
import React from "react";

const ClinicCard = ( { imageUrl, name, id } ) =>
{

  const router = useRouter();
  return (
    // <div className="bg-primary3 rounded-lg">
    //   <div
    //     style={{
    //       backgroundImage:
    //         "url(" +
    //         "https://cdn.builder.io/api/v1/image/assets/TEMP/bc03f712edd079ab8fb0ab420cf52601f4bd93043f273e2eb179548e7deb4138?apiKey=22a36eade5734692978208fb0d2f5c62&" +
    //         ")",
    //       backgroundPosition: "center",
    //       backgroundSize: "cover",
    //       backgroundRepeat: "no-repeat",
    //       height: "158px",
    //     }}
    //   />
    //   <div className="p-4 text-primary">
    //     <h4 className="font-bold">Indiranagar Clinic</h4>
    //     <p className="text-sm">OPD | Surgery</p>
    //   </div>
    //   <div className="text-center font-semibold bg-secondary hover:bg-primary py-2">
    //     Book a Visit
    //   </div>
    // </div>
    <div onClick={() => router.push( `/clinics/overview/${ id }` )} className="justify-between items-stretch shadow-sm bg-orange-50 flex max-w-[330px] flex-col rounded overflow-hidden group hover:cursor-pointer">
      <img
        onClick={() => router.push( `/clinics/overview/${ id }` )}
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3eee728a04ec723267d97cb874360dd881bd0e4eaf04fbd0d6e5b24362709013?apiKey=22a36eade5734692978208fb0d2f5c62&"
        className="aspect-[1.38] object-contain object-center w-full overflow-hidden transform transition-transform group-hover:scale-110"
      />
      <span className="items-stretch bg-orange-50 flex flex-col px-5 py-6">
        <div className="text-slate-700 text-xl font-semibold leading-5 tracking-normal">
          {name}
        </div>
        <div className="text-slate-700 text-sm leading-4 tracking-normal whitespace-nowrap mt-3">
          OPD | Surgery
        </div>
      </span>
      <button className="text-white text-base font-bold leading-5 tracking-normal whitespace-nowrap justify-center items-center bg-slate-500 w-full px-16 py-4">
        Book a Visit
      </button>
    </div>
  );
};

export default ClinicCard;
