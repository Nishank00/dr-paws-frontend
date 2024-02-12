import ClinicSelect from "./ClinicSelect";

const SelectClinicPage = ({
  className = "",
  clinics,
  setClinics,
  setDoctors,
}) => {
  return (
    <div className={"w-full " + className}>
      <h2 className="text-primary font-medium text-5xl mb-1">Select Clinic</h2>
      <p className="text-primary mb-6">Book an appointment at our clinic</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {clinics.map((clinic, i) => (
          <ClinicSelect
            key={"clinic" + i}
            clinic={clinic}
            selected={clinic.selected}
            hideVisitButton
            onClick={() =>
              setClinics(
                clinics.map((c, index) => {
                  if (index === i) {
                    c.selected = !c.selected;
                    setDoctors(
                      c.selected
                        ? c.doctors.map((doctor) => ({
                            ...doctor,
                            selected: false,
                          }))
                        : []
                    );
                  } else {
                    c.selected = false;
                  }
                  return c;
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
