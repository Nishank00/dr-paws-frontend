import Button from "@/components/ui/Button";
import React from "react";

const MembershipCard = () => {
  return (
    <div className="text-primary font-custom-open-sans border border-secondary rounded-2xl">
      {/* Head */}
      <div className="flex items-center justify-center gap-3 px-2 py-6 bg-[#E8FBFF] rounded-t-2xl">
        <img src="/user_membership/membership_0.svg" alt=" " loading="lazy" />
        <h3 className="font-custom-roca font-semibold text-lg">
          Star Care & Grooming
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

          <h2 className="text-secondary text-xl font-custom-roca">Mona</h2>
        </div>

        <div className="mt-2 flex gap-6">
          <div className="flex flex-col">
            <p className="text-secondary text-sm">Expires on:</p>
            <h4 className="text-lg font-semibold">March 31, 2024</h4>
          </div>

          <div className="flex flex-col">
            <p className="text-secondary text-sm">Next Payment On:</p>
            <h4 className="text-lg font-semibold">Feb 5, 2024</h4>
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
            className="border border-secondary text-secondary bg-inherit"
          />
          <Button label="Renew Plan" color="secondary" />
        </div>
      </div>

      {/* Plan Benefits */}
      <div className="px-8 my-5">
        <h5 className="text-sm font-bold mb-3">Includes:</h5>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">Unlimited vet consultations</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">12 free spa sessions per year</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">2 free haircuts every year</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">50% off any other grooming service</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">Free annual vaccination boosters</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">Free nutritional consultation</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">Annual deworming</p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">
              25% discount on diagnostic tests and scans
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">
              25% discount on planned surgeries and procedures
            </p>
          </div>

          <div className="flex items-center gap-2">
            <img src="/user_membership/item_check.svg" alt=" " loading="lazy" />
            <p className="text-sm">15% off retail products & medicines</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembershipCard;
