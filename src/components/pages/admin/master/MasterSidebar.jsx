import MasterService from "@/services/Master.service";
import React, { useEffect, useState } from "react";

const MasterSidebar = ({ selectedMasterType, setSelectedMasterType }) => {
  const [masterTypes, setMasterTypes] = useState([]);

  const getMasterTypes = () => {
    MasterService.getMasterTypes()
      .then((response) => {
        if (response.data.status) {
          setMasterTypes(response.data.data);
          setSelectedMasterType(response.data.data[0]);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const selectMasterType = (master_type) => {
    if (master_type.id !== selectedMasterType.id) {
      setSelectedMasterType(master_type);
    }
  };

  useEffect(() => {
    getMasterTypes();
  }, []);

  return (
    <div className="flex items-center gap-4 md:gap-1 bg-primary3 text-primary md:w-48 md:flex-col md:items-start h-12 md:h-[81vh]">
      {masterTypes.map((master_type, i) => {
        return (
          <div
            onClick={() => selectMasterType(master_type)}
            className={`min-w-28 w-full p-2 cursor-pointer rounded font-bold ${
              master_type.id == selectedMasterType.id
                ? "bg-primary text-primary3"
                : ""
            }`}
            key={"master_type" + i}
          >
            {master_type.name}
          </div>
        );
      })}
    </div>
  );
};

export default MasterSidebar;