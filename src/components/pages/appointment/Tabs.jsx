import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`cursor-pointer text-lg text-center ${
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
