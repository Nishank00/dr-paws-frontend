import Button from "@/components/ui/Button";
import Popup from "@/components/ui/Popup";
import React, { useState } from "react";
import MembershipPopupForm from "./MembershipPopupForm";

const MembershipCardNew = ({
  membership = {},
  memberships,
  setMemberships,
}) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [selectedMembership, setSelectedMembership] = useState({});

  const showPopup = () => setOpenPopup(true);
  const closePopup = () => setOpenPopup(false);

  const selectClicked = (membership) => {
    setSelectedMembership(membership);
    showPopup();
  };

  return (
    <>
      <div
        className={`bg-[${membership?.background_color}] px-4 py-10 flex flex-col gap-5 text-primary font-custom-open-sans rounded-2xl hover:shadow-lg  `}
      >
        {/* Header */}
        <div className="flex flex-col gap-2">
          <img
            src={`/membership/${membership?.image}`}
            alt=""
            loading="lazy"
            className="w-28 h-28 self-center"
          />

          <h3 className="text-xl font-custom-roca">{membership?.title}</h3>
          <p className="text-sm sm:max-h-10 md:max-h-10  ">{membership?.description}</p>
        </div>
        <div className="md:pt-20 sm:pt-10">
        <p className="text-sm font-bold">Includes:</p>
        </div>
        <div className="flex flex-col   gap-4 h-full">
          {membership?.membership_items?.map((membership_item, index) => (
            <div
              className="flex border-b-2  border-x-primary2 py-4 items-center gap-2"
              key={membership?.title + index}
            >
              <img src={`/membership/${membership.item_icon}`} alt="" />
              <p className="text-sm">
                {membership_item?.service_count} {membership_item.service_name}
              </p>
            </div>
          ))}
        </div>

        <Button
          onClick={() => selectClicked(membership)}
          label="Select"
          color="secondary"
          className=""
        />
      </div>

      <Popup isOpen={openPopup} onClose={closePopup}>
        <MembershipPopupForm
          membership={selectedMembership}
          memberships={memberships}
          setMemberships={setMemberships}
        />
      </Popup>
    </>
  );
};

export default MembershipCardNew;
