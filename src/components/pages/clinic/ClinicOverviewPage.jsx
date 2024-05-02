"use client";
import Button from "@/components/ui/Button";
import { useToast } from "@/components/ui/ToastProvider";
import ClinicService from "@/services/Clinic.service";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const ClinicOverviewPage = () => {
  // variables
  const { id } = useParams();
  const router = useRouter();
  const showToast = useToast();
  const [clinic, setClinic] = useState({});
  const [serviceString, setServiceString] = useState();

  // Methods
  const getClinic = () => {
    ClinicService.getClinics({ id })
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        setClinic(response.data.data[0]);
      })
      .catch((error) => console.error("Error:", error.message));
  };

  // Lifecycle hooks
  useEffect(() => {
    if (id) {
      getClinic();
    }
  }, []);

  useEffect(() => {
    setServiceString(
      [
        ...new Set(
          clinic?.clinic_services?.map((service) => service.service_name)
        ),
      ].join(" | ")
    );
  }, [clinic]);

  return (
    <div className="body-padding-x pt-10 text-primary">
      {/* TODO Top gallery */}

      <div className="flex items-center justify-between flex-col sm:flex-row gap-5">
        <div>
          <h2 className="text-4xl font-custom-roca font-light">
            {clinic?.name}
          </h2>
          <p className="font-sans font-light text-xl">{serviceString}</p>
        </div>

        <Button
          color="secondary"
          label="Book a Visit"
          className="w-60 h-16 font-sans font-bold text-[25px] "
          onClick={() => router.push(`/booking&clinic=1`)}
        />
      </div>
    </div>
  );
};

export default ClinicOverviewPage;
