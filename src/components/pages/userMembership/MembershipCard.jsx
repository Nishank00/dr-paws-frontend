import Button from "@/components/ui/Button";
import React from "react";
import moment from "moment";

const MembershipCard = ({ membership = {} }) => {
  return (
    <div className="text-primary font-custom-open-sans border border-secondary rounded-2xl">
      {/* Head */}
      <div
        className={
          `flex items-center justify-center gap-3 px-6 py-2 rounded-t-2xl ` +
          ` bg-[${membership?.background_color}]`
        }
      >
        <img
          src={`/membership/${membership?.image}`}
          alt=" "
          loading="lazy"
          className="w-6 h-6"
        />
        <h3 className="font-custom-roca font-semibold text-lg">
          {membership.title}
        </h3>
        <img src="/user_membership/plus_filled.svg" alt=" " loading="lazy" />
      </div>

      {/* Membership Details */}
      <div className="px-2">
        <div className="mt-2 flex items-center gap-5">
          <div id="pet_image">
            <img
              src="/petting-dog.png"
              alt=" "
              loading="lazy"
              className="w-12 h-12 rounded-full"
            />
          </div>

          <h2 className="text-secondary text-xl font-custom-roca">
            {membership.name}
          </h2>
        </div>

        <div className="mt-2 flex gap-6">
          <div className="flex flex-col">
            <p className="text-secondary text-sm">Expires on:</p>
            <h4 className="text-lg font-semibold">
              {membership.membership_expires_at
                ? moment(membership.membership_expires_at).format("LL")
                : "NA"}
            </h4>
          </div>

          <div className="flex flex-col">
            <p className="text-secondary text-sm">Next Payment On:</p>
            <h4 className="text-lg font-semibold">
              {membership.membership_expires_at
                ? moment(membership.membership_expires_at).format("LL")
                : "NA"}
            </h4>
          </div>
        </div>

        <div className="flex items-center justify-between gap-1">
          <progress
            value={50}
            max={100}
            className="w-3/4 h-2 [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg   [&::-webkit-progress-bar]:bg-primary3 [&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary"
          />
          <span>50%</span>
          <img src="/user_membership/info.svg" alt=" " loading="lazy" />
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            label="Cancel Renewal"
            className="border border-secondary text-secondary bg-inherit hover:text-white hover:bg-secondary text-sm p-3"
          />
          <Button
            label="Renew Plan"
            color="secondary"
            className="text-sm p-3"
          />
        </div>
      </div>

      {/* Plan Benefits */}
      <div className="px-8 my-5">
        <h5 className="text-sm font-bold mb-3">Includes:</h5>

        <div className="flex flex-col gap-4">
          {membership?.membership_items?.map((membership_item, index) => (
            <div
              key={membership?.title + index}
              className="flex items-center gap-2"
            >
              <img
                src={`/membership/${membership.item_icon}`}
                alt=" "
                loading="lazy"
              />
              <p className="text-sm">
                {membership_item?.service_count} {membership_item.service_name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
