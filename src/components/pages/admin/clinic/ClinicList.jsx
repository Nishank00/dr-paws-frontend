import ClinicCard from "./ClinicCard";
import Link from "next/link";

const ClinicList = ({ clinics }) => {
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h2 className="text-2xl font-bold">Clinic List</h2>
        <Link href={"/admin/clinic/form"}>Add Clinic</Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {clinics.map((clinic, i) => (
          <ClinicCard key={"clinic" + i} clinic={clinic} />
        ))}
      </div>
    </div>
  );
};

export default ClinicList;
