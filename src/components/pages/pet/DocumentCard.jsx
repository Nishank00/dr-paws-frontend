import React from "react";

const DocumentCard = () => {
  return (
    <div className="">
      <div className="bg-primary3 h-20"></div>
      <div className="flex items-center justify-between gap-2 p-3 bg-primary3 bg-opacity-30">
        <p className="text-secondary text-xs font-custom-open-sans">
          October 2022 Tick Fever.pdf
        </p>
        <span>
          <img src="/icons/dots-vertical.svg" alt=" " loading="lazy" />
        </span>
      </div>
    </div>
  );
};

export default DocumentCard;
