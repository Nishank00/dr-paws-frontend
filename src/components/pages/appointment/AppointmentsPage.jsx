import React from "react";
import Tabs from "./Tabs";
import AppointmentList from "./AppointmentList";

const AppointmentsPage = () => {
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

  return (
    <div className="body-padding-x body-padding-y text-primary">
      <Tabs tabs={tabs} />
    </div>
  );
};

export default AppointmentsPage;
