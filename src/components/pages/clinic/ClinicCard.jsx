import { useRouter } from "next/navigation";

const ClinicCard = ({ imageUrl, clinic }) => {
  const router = useRouter();
  const {
    id,
    name,
    services,
    contact_numbers,
    contact_emails,
    address,
    city_id,
    state_id,
    postal_code,
    latitude,
    longitude,
    created_by,
    updated_by,
    created_at,
    updated_at,
  } = clinic;

  const serviceString = [
    ...new Set(services.map((service) => service.service_name)),
  ].join(" | ");
  return (
    <div
      className="bg-primary3 rounded-md cursor-pointer shadow-md flex flex-col transition ease-in-out delay-150 hover:scale-105"
      onClick={() => router.push(`/clinics/overview/${id}`)}
    >
      <div
        className="rounded-t-md"
        style={{
          backgroundImage: "url(" + imageUrl + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "158px",
        }}
      />
      <div className="p-4 text-primary grow">
        <h4 className="font-bold text-xl">Dr. Paw | {name}</h4>
        <p className="text-sm">{serviceString || "OPD | Surgery"}</p>
      </div>
      <div
        className="text-center font-semibold bg-secondary hover:bg-primary py-2 rounded-b-md"
        onClick={(e) => {
          e.stopPropagation();
          router.push("/booking");
        }}
      >
        Book a Visit
      </div>
    </div>
  );
};

export default ClinicCard;
