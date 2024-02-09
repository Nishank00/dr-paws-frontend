import Checkbox from "@/components/ui/Checkbox";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";
import MasterService from "@/services/Master.service";
import { useState, useEffect } from "react";

const ClinicForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    clinic_details: {
      name: null,
      contact_numbers: null,
      contact_emails: null,
      address: null,
      postal_code: null,
      latitude: null,
      longitude: null,
      state_id: null,
      city_id: null,
    },

    clinic_services: [],
    clinic_doctors: [],
  });

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      clinic_details: { ...form.clinic_details, [name]: value },
    });
  };

  const getStates = () => {
    MasterService.getMastersByCode({ code: "STATE" })
      .then((response) => {
        if (response.data.status) {
          setStates(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const stateSelected = (stateId) => {
    setForm({
      ...form,
      clinic_details: { ...form.clinic_details, state_id: stateId },
    });

    getCities(stateId);
  };

  const getCities = (stateId) => {
    MasterService.getChildsByParentId({ parent_id: stateId })
      .then((response) => {
        if (response.data.status) {
          setCities(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const citySelected = (cityId) => {
    setForm({
      ...form,
      clinic_details: { ...form.clinic_details, city_id: cityId },
    });
  };

  const getServices = () => {
    MasterService.getMastersWithChildsByCode({ code: "SERVICE" })
      .then((response) => {
        if (response.data.status) {
          response.data.data.map((service) => {
            service.childs.map((service_item) => {
              service_item.selected = false;
            });
          });
          setServices(response.data.data);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const serviceSelected = (e) => {};

  useEffect(() => {
    getStates();
    getServices();
  }, []);

  return (
    <div>
      <div id="form">
        {/* Clinic Details */}
        <section id="clinic-details" className="mb-6">
          <h3 className="text-2xl font-bold">Clinic Details</h3>
          <hr className="mb-3" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            <TextInput
              label={"Name"}
              name={"name"}
              value={form.clinic_details.name}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Contact Number"}
              name="contact_numbers"
              value={form.clinic_details.contact_numbers}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Email"}
              name="contact_emails"
              value={form.clinic_details.contact_emails}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Latitude"}
              name="latitude"
              value={form.clinic_details.latitude}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Longitude"}
              name="longitude"
              value={form.clinic_details.longitude}
              onChange={formValueChanged}
            />

            <Textarea
              label={"Address"}
              name={"address"}
              value={form.clinic_details.address}
              onChange={formValueChanged}
              rows={1}
            />

            <Select
              label={"State"}
              placeholder={"Select State"}
              options={states}
              optionValue={"id"}
              optionLabel={"name"}
              onSelect={stateSelected}
            />

            <Select
              label={"City"}
              placeholder={"Select City"}
              options={cities}
              optionValue={"id"}
              optionLabel={"name"}
              onSelect={citySelected}
            />

            <TextInput
              label={"Postal Code"}
              name="postal_code"
              value={form.clinic_details.postal_code}
              onChange={formValueChanged}
            />
          </div>
        </section>

        {/* Clinic services */}
        <section id="clinic-services" className="mb-6">
          <h3 className="text-2xl font-bold">Clinic Services</h3>
          <hr className="mb-3" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <div key={"service" + i} className="flex flex-col">
                <h2 className="text-xl font-semibold">{service.name}</h2>
                {service.childs.map((service_item, j) => (
                  <Checkbox
                    key={`service_item-${service_item.name}-${j}`}
                    label={service_item.name}
                    onChange={serviceSelected}
                    checked={service_item.selected}
                    data={service_item}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Clinic Doctors */}
        <section id="clinic-doctors">
          <h3 className="text-2xl font-bold">Clinic Doctors</h3>
          <hr className="mb-3" />
        </section>
      </div>
    </div>
  );
};

export default ClinicForm;
