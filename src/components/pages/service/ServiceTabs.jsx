import React, { useState } from "react";

const ServiceTabs = ({ tabs, defaultTab, onSelect }) => {
  const [selectedTab, setSelectedTab] = useState(defaultTab);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    onSelect(tab);
  };

  return (
    <div className="flex border-b-8 border-gray-300">
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`cursor-pointer h-full py-2 px-4 ${
            tab === selectedTab
              ? "border-b-8 border-blue-500"
              : "border-b border-transparent"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default ServiceTabs;
