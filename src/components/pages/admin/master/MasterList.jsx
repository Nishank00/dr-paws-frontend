import MasterService from "@/services/Master.service";
import { useEffect, useState } from "react";

const MasterList = ({
  masterType,
  openFormPopup,
  refreshList,
  setRefreshList,
}) => {
  const [masters, setMasters] = useState([]);

  const getMasters = () => {
    console.log("Master fetched");
    MasterService.getMastersByCode({ code: masterType.code })
      .then((response) => {
        if (response.data.status) {
          setMasters(response.data.data);
          setRefreshList(false);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    getMasters();
  }, [masterType, refreshList]);
  return (
    <div className="bg-white shadow-xl text-primary w-full md:h-[81vh] overflow-x-hidden overflow-y-scroll">
      <div id="list-header" className="p-2">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">{masterType.name} List</h2>

          <button
            onClick={openFormPopup}
            className="bg-primary text-white p-1 text-lg rounded"
          >
            Add {masterType.name}
          </button>
        </div>
      </div>

      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {masterType.is_child_of && <th>Parent</th>}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {masters.map((master, i) => (
            <tr key={"master" + i}>
              <td>{master.id}</td>
              <td>{master.name}</td>
              {masterType.is_child_of && <td>{master.parent_name}</td>}
              <td>
                <button className="p-2 bg-primary hover:bg-secondary text-white rounded-md">
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MasterList;
