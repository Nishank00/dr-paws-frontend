import Button from "@/components/ui/Button";
import TextInput from "@/components/ui/TextInput";
import MasterService from "@/services/Master.service";
import { useEffect, useState } from "react";

const MasterForm = ({ masterType }) => {
  const [form, setForm] = useState({
    name: "",
    master_type_id: masterType.id,
    parent_id: null,
  });

  const [parents, setParents] = useState([]);

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const getParents = () => {
    MasterService.getMastersByTypeId({ is_child_of: masterType.is_child_of })
      .then((response) => {
        if (response.data.status) {
          setMasters(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const submitForm = (e) => {
    e.preventDefault();
    MasterService.addMaster(form)
      .then((response) => {
        if (response.data.status) {
          setMasters(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  useEffect(() => {
    if (masterType.is_child_of) {
      getParents();
    }
  }, [masterType]);
  return (
    <div>
      <div id="form-header">
        <h2>{masterType.name} Form</h2>
      </div>

      <div id="form">
        <form>
          <TextInput
            name="name"
            label={"Name"}
            value={form.name}
            onChange={formValueChanged}
          />

          {masterType.is_child_of && (
            <select name="parent_id" className="w-full">
              {parents.map((parent, i) => (
                <option
                  className="text-primary w-full z-10"
                  key={"parent" + i}
                  value={parent.id}
                >
                  {parent.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-primary text-primary3 p-1 block"
            type="submit"
            onClick={submitForm}
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MasterForm;
