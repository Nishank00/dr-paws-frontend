"use client";
import { useState } from "react";
import MasterSidebar from "./MasterSidebar";
import MasterList from "./MasterList";
import Popup from "@/components/ui/Popup";
import MasterForm from "./MasterForm";

const MasterPage = () => {
  const [selectedMasterType, setSelectedMasterType] = useState({});
  const [isFormPopupOpen, setFormPopup] = useState(false);
  const [refreshList, setRefreshList] = useState(false);

  const openFormPopup = () => {
    setFormPopup(true);
  };

  const closeFormPopup = () => {
    setFormPopup(false);
    setRefreshList(true);
  };

  return (
    <>
      <div className="p-6 flex flex-col md:flex-row gap-4">
        <MasterSidebar
          selectedMasterType={selectedMasterType}
          setSelectedMasterType={setSelectedMasterType}
        />
        <MasterList
          masterType={selectedMasterType}
          openFormPopup={openFormPopup}
          refreshList={refreshList}
          setRefreshList={setRefreshList}
        />
      </div>
      <Popup isOpen={isFormPopupOpen} onClose={closeFormPopup}>
        <MasterForm
          masterType={selectedMasterType}
          closeFormPopup={closeFormPopup}
        />
      </Popup>
    </>
  );
};

export default MasterPage;
