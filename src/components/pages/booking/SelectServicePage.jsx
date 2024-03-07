import SelectServiceItem from "@/components/pages/booking/SelectServiceItem";

const SelectServicePage = ({
  services = [],
  setServices,
  className = "",
  openPopup,
  closePopup,
}) => {
  // Methods
  const toggleService = (service) =>
    setServices(
      services.map((s) => {
        if (s.id === service.id) {
          s.is_checked = !s.is_checked;
          if (!s.is_checked) {
            s.pets.map((pet) => {
              pet.isSelected = false;
              return pet;
            });
          }
        }
        return s;
      })
    );

  return (
    <>
      <div className={"pt-10 " + className}>
        <h2 className="text-primary font-medium text-5xl mb-1">
          Select Services
        </h2>
        <p className="text-primary mb-6 font-roca-thin-italic">
          Choose from the our services
        </p>

        <div
          className={
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start gap-5 mt-10"
          }
        >
          {services &&
            services.length > 0 &&
            services.map((service) => (
              <SelectServiceItem
                key={"service" + service.id}
                service={service}
                services={services}
                setServices={setServices}
                onChange={toggleService}
                openPetPopup={openPopup}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default SelectServicePage;
