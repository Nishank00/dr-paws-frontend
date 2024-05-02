import React, { useEffect, useState } from "react";

const Tabs = ({ tabs, active }) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  useEffect(() => {
    if (active) setActiveTab(active);
  }, [active]);
  return (
    <div>
      <div className="flex ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer text-sm md:text-lg text-center ${
              activeTab === tab.id ? "font-semibold" : "font-normal"
            } px-4 py-2`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="h-2 bg-primary3 rounded-xl"></div>
      <div>
        {tabs.map((tab) =>
          tab.id === activeTab ? (
            <div key={tab.id} className="py-2">
              {tab.content}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Tabs;
