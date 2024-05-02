import Button from "@/components/ui/Button";
import MultipleSelect from "@/components/ui/MultipleSelect";
import TextInput from "@/components/ui/TextInput";
import MasterService from "@/services/Master.service";
import { useEffect, useState } from "react";

const MasterForm = ({ masterType, closeFormPopup }) => {
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
          setParents(response.data.data);
        }
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  };

  const parentSelected = (selectedValue) => {
    setForm({ ...form, parent_id: selectedValue });
    console.log("selectedValue => ", selectedValue);
  };

  const submitForm = (e) => {
    e.preventDefault();
    MasterService.addMaster(form)
      .then((response) => {
        if (response.data.status) {
          alert(response.data.message);
          setForm({
            name: "",
            master_type_id: masterType.id,
            parent_id: null,
          });
          closeFormPopup();
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
    <div className="p-5">
      <div id="form-header">
        <h2>{masterType.name} Form</h2>
      </div>

      <div id="form" className="text-primary">
        <form>
          <TextInput
            name="name"
            label={"Name"}
            value={form.name}
            onChange={formValueChanged}
          />

          {masterType.is_child_of && (
            <MultipleSelect
              label={"Master"}
              options={parents}
              optionLabel={"name"}
              optionValue={"id"}
              onSelect={parentSelected}
              selectedValue={form.parent_id}
            />
          )}

          <Button label="Save" onClick={submitForm} />
          {/* <button
            className="bg-primary text-primary3 p-1 block"
            type="submit"
            onClick={submitForm}
          >
            Save
          </button> */}
        </form>
      </div>
    </div>
  );
};

export default MasterForm;
