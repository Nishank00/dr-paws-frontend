import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import AppointmentList from "./AppointmentList";
import { useSearchParams } from "next/navigation";

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const searchParams = useSearchParams();
  const list = searchParams.get("list");

  const tabs = [
    { id: 1, label: "All", content: <AppointmentList /> },
    {
      id: 2,
      label: "Upcoming",
      content: <AppointmentList listType="UPCOMING" />,
    },
    { id: 3, label: "Past", content: <AppointmentList listType="PAST" /> },
    {
      id: 4,
      label: "Cancelled",
      content: <AppointmentList listType="CANCELLED" />,
    },
  ];

  useEffect(() => {
    if (list) {
      setActiveTab(
        list === "ALL"
          ? 1
          : list === "UPCOMING"
          ? 2
          : list === "PAST"
          ? 3
          : list === "CANCELLED"
          ? 4
          : 1
      );
    }
  }, []);

  return (
    <div className="sm:body-padding-x body-padding-y text-xs lg:text-lg flex justify-center lg:block text-primary px-8 ">
      <Tabs tabs={tabs} active={activeTab} />
    </div>
  );
};

export default AppointmentsPage;
