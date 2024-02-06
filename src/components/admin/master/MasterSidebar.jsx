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
    <div className="flex items-center gap-4 bg-primary3 text-primary">
      {masterTypes.map((master_type, i) => {
        return (
          <div
            onClick={() => selectMasterType(master_type)}
            className={`inline-block w-auto p-2 cursor-pointer font-bold ${
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
