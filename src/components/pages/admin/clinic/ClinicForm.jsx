import Checkbox from "@/components/ui/Checkbox";
import Select from "@/components/ui/Select";
import TextInput from "@/components/ui/TextInput";
import Textarea from "@/components/ui/Textarea";
import MasterService from "@/services/Master.service";
import UserService from "@/services/User.Service";
import { useState, useEffect } from "react";
import DoctorCardCheck from "./DoctorCardCheck";
import Button from "@/components/ui/Button";
import ClinicService from "@/services/Clinic.service";
import { useSearchParams } from "next/navigation";
import TimePicker from "@/components/pages/admin/clinic/TimePicker";
import moment from "moment";

const ClinicForm = () => {
  const searchParams = useSearchParams();
  const clinic_id = searchParams.get("id");

  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [services, setServices] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [days, setDays] = useState([]);
  const [form, setForm] = useState({
    name: null,
    contact_numbers: null,
    contact_emails: null,
    address: null,
    postal_code: null,
    latitude: null,
    longitude: null,
    state_id: null,
    city_id: null,
  });

  const getDays = () => {
    MasterService.getDaysOfWeek()
      .then((response) => {
        if (response.data.status) {
          setDays(
            response.data.data.map((day) => ({
              ...day,
              opening_time: null,
              closing_time: null,
            }))
          );
        }
      })
      .catch((error) => console.log("Error: ", error));
  };

  const formValueChanged = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
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
      state_id: stateId,
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
      city_id: cityId,
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

  const serviceSelected = (selectedItem) => {
    const serviceCopy = structuredClone(services);
    serviceCopy.map((service) => {
      if (service.id === selectedItem.parent_id) {
        service.childs.map((service_item) => {
          if (service_item.id === selectedItem.id) {
            service_item.selected = !service_item.selected;
          }
        });
      }
    });
    setServices(serviceCopy);
    // selectedItem.selected = !selectedItem.selected;
    console.log("selectedItem: ", selectedItem);
  };

  const getDoctors = () => {
    UserService.getDoctors()
      .then((response) => {
        if (response.data.status) {
          setDoctors(
            response.data.data.map((doctor) => ({ ...doctor, selected: false }))
          );
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const doctorCardClicked = (doctor) => {
    setDoctors(
      doctors.map((d) =>
        d.id === doctor.id ? { ...d, selected: !d.selected } : d
      )
    );
  };

  const saveClinic = () => {
    const payload = {
      clinic_details: form,
      clinic_services: [],
      clinic_doctors: doctors.filter((doctor) => doctor.selected),
      clinic_timings: days.map((day) => ({
        day_id: day.id,
        opening_time: formatTimeForMySQL(day.opening_time),
        closing_time: formatTimeForMySQL(day.closing_time),
      })),
    };

    services.forEach((service) => {
      service.childs.forEach((service_item) => {
        if (service_item.selected) {
          payload.clinic_services.push(service_item);
        }
      });
    });

    clinic_id
      ? ClinicService.updateClinic(clinic_id, payload)
      : ClinicService.addClinic(payload)
          .then((response) => {
            if (!response.data.status) {
              return alert(response.data.message);
            }

            alert("Clinic added successfully");
            setForm({
              name: null,
              contact_numbers: null,
              contact_emails: null,
              address: null,
              postal_code: null,
              latitude: null,
              longitude: null,
              state_id: null,
              city_id: null,
            });

            getStates();
            getServices();
            getDoctors();
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
  };

  const getClinic = () => {
    ClinicService.getClinics({ id: clinic_id })
      .then((response) => {
        if (response.data.status) {
          const clinic = response.data.data[0];
          setForm({
            name: clinic.name,
            contact_numbers: clinic.contact_numbers,
            contact_emails: clinic.contact_emails,
            address: clinic.address,
            postal_code: clinic.postal_code,
            latitude: clinic.latitude,
            longitude: clinic.longitude,
            state_id: clinic.state_id,
            city_id: clinic.city_id,
          });

          getCities(clinic.state_id);

          // console.log("services: ", services);
          // const serviceCopy = structuredClone(services);
          // serviceCopy.forEach((service) => {
          //   clinic.services.forEach((clinic_service) => {
          //     if (service.id === clinic_service.service_id) {
          //       service.childs.forEach((service_item) => {
          //         if (service_item.id === clinic_service.service_item_id) {
          //           service_item.selected = true;
          //         }
          //       });
          //     }
          //   });
          // });
          // setServices(serviceCopy);

          // console.log("doctors: ", doctors);
          // const doctorCopy = structuredClone(doctors);
          // doctorCopy.forEach((doctor) => {
          //   clinic.doctors.forEach((clinic_doctor) => {
          //     if (doctor.id === clinic_doctor.doctor_id) {
          //       doctor.selected = true;
          //     }
          //   });
          // });
          // setDoctors(doctorCopy);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const timeSelected = (time, isStartTime, day_id) => {
    console.log("time, isStartTime, day_id: ", time, isStartTime, day_id);

    setDays(
      days.map((day) => {
        if (day.id === day_id) {
          return {
            ...day,
            [isStartTime ? "opening_time" : "closing_time"]: time,
          };
        } else {
          return day;
        }
      })
    );
  };

  function formatTimeForMySQL(time) {
    const [timePart, ampmPart] = time.split(" ");
    let [hour, minute] = timePart.split(":").map(Number);

    // Convert hour to 24-hour format if it's PM
    if (ampmPart === "PM" && hour !== 12) {
      hour += 12;
    } else if (ampmPart === "AM" && hour === 12) {
      hour = 0; // Midnight
    }

    // Pad single-digit hour or minute with leading zero
    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;

    return `${hour}:${minute}:00`;
  }

  useEffect(() => {
    getDays();
    getStates();
    getServices();
    getDoctors();

    if (clinic_id) {
      getClinic();
    }
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
              value={form.name}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Contact Number"}
              name="contact_numbers"
              value={form.contact_numbers}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Email"}
              name="contact_emails"
              value={form.contact_emails}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Latitude"}
              name="latitude"
              value={form.latitude}
              onChange={formValueChanged}
            />

            <TextInput
              label={"Longitude"}
              name="longitude"
              value={form.longitude}
              onChange={formValueChanged}
            />

            <Textarea
              label={"Address"}
              name={"address"}
              value={form.address}
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
              selectedValue={form.state_id}
            />

            <Select
              label={"City"}
              placeholder={"Select City"}
              options={cities}
              optionValue={"id"}
              optionLabel={"name"}
              onSelect={citySelected}
              selectedValue={form.city_id}
            />

            <TextInput
              label={"Postal Code"}
              name="postal_code"
              value={form.postal_code}
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
                    onChange={() => serviceSelected(service_item)}
                    checked={service_item.selected}
                    data={service_item}
                  />
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Clinic Doctors */}
        <section id="clinic-doctors" className="mb-6">
          <h3 className="text-2xl font-bold">Clinic Doctors</h3>
          <hr className="mb-3" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {doctors.map((doctor, i) => (
              <DoctorCardCheck
                key={"doctor" + i}
                doctor={doctor}
                doctorCardClicked={doctorCardClicked}
              />
            ))}
          </div>
        </section>

        {/* Clinic Timings */}
        <section id="clinic-timings" className="mt-10">
          <hr className="mb-3" />
          <h3 className="text-2xl font-bold">Clinic Timings</h3>
          <hr className="mb-3" />

          <table className="w-full text-right">
            <thead>
              {days.map((day, i) => (
                <tr key={"day_" + i}>
                  <td>
                    <h2 className="text-lg font-semibold">{day.name}</h2>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <TimePicker
                        value={day.opening_time}
                        day={day}
                        isStartTime
                        onChange={timeSelected}
                      />
                    </div>
                  </td>
                  <td>
                    <div className="flex items-center justify-center">
                      <TimePicker
                        value={day.closing_time}
                        day={day}
                        onChange={timeSelected}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </thead>
          </table>
        </section>

        <div className="flex items-center justify-end">
          <div className="">
            <Button label="Submit" onClick={saveClinic} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicForm;
