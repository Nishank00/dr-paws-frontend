"use client";
import { useState } from "react";
import MasterSidebar from "./MasterSidebar";
import MasterList from "./MasterList";
import Popup from "@/components/ui/Popup";
import MasterForm from "./MasterForm";

const MasterPage = () => {
  const [selectedMasterType, setSelectedMasterType] = useState({});
  const [isFormPopupOpen, setFormPopup] = useState(false);

  const openFormPopup = () => {
    setFormPopup(true);
  };

  const closeFormPopup = () => {
    setFormPopup(false);
  };

  return (
    <div className="p-6">
      <MasterSidebar
        selectedMasterType={selectedMasterType}
        setSelectedMasterType={setSelectedMasterType}
      />
      <MasterList
        masterType={selectedMasterType}
        openFormPopup={openFormPopup}
      />

      <Popup isOpen={isFormPopupOpen} onClose={closeFormPopup}>
        <MasterForm masterType={selectedMasterType} />
      </Popup>
    </div>
  );
};

export default MasterPage;
