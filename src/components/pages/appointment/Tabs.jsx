import React, { useEffect, useRef, useState } from "react";

const Tabs = ({ tabs, active }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      if (currentTab) {
        setTabUnderlineLeft(currentTab.offsetLeft);
        setTabUnderlineWidth(currentTab.clientWidth);
      }
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative mb-6 w-full">
        <div className="flex w-full space-x-8 border-b-2 pb-4">
          {tabs.map((tab, index) => {
            return (
              <button
                key={index}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`text-primary font-custom-open-sans w-auto text-md  cursor-pointer mx-1 rounded-full mt-12`}
                onClick={() => {
                  setActiveTabIndex(index);
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-2 bg-primary transition-all duration-300"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div>
        {tabs.map((tab) =>
          tab.id === activeTabIndex + 1 ? (
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
