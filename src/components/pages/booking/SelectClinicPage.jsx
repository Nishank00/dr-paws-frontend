import UserService from "@/services/User.Service";
import ClinicSelect from "./ClinicSelect";


const SelectClinicPage = ({
  className = "",
  clinics,
  setClinics,
  setSelectedClinic,
  setDoctors,
}) => {




  return (
    <div className={"w-full pt-1 sm:pt-10 " + className}>
      <h2 className="text-primary text-xl sm:text-4xl font-custom-roca font-medium mb-1">
        Select Clinic
      </h2>
      <p className="text-primary text-xs sm:text-sm mb-4 font-custom-open-sans">
        Book an appointment at our clinic
      </p>

      <div className="md:grid flex overflow-x-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-1 gap-x-3 gap-y-10"> 
        {clinics.map((clinic, i) => (
          <ClinicSelect
            key={"clinic" + i}
            clinic={clinic}
            selected={clinic.selected}
            hideVisitButton
            className="min-w-[315px] md:min-w-max"
            onClick={() =>
              setClinics(
                clinics.map((clinic, index) => {
                  if (index === i) {
                    clinic.selected = !clinic.selected;
                    if (clinic.selected) setSelectedClinic(clinic);
                    setDoctors(
                      clinic.selected
                        ? clinic.clinic_doctors.map((doctor) => ({
                            ...doctor,
                            selected: false,
                          }))
                        : []
                    );
                  } else {
                    clinic.selected = false;
                  }
                  return clinic;
                })
              )
            }
          />
        ))}
      </div>
    </div>
  );
};

export default SelectClinicPage;
