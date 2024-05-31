import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import clinicService from "@/services/Clinic.service";
import { useToast } from "@/components/ui/ToastProvider";

const TabThree = ({ id = null }) => {
  const gridData = [0, 1, 2];
  const showToast = useToast();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await clinicService.getClinicMetaData({
          clinic_id: id,
          type: "reviews",
        });

        const { data } = response;
        if (!data.status) return showToast(data?.message);

        setReviews(data.data);
      } catch (error) {
        console.log(error);
      }
    }

    getReviews();
  }, []);

  return (
    <div className="sm:w-[70%] p-2 mx-auto flex justify-between items-center gap-5">
      {reviews.length
        ? reviews.map((item, index) => (
            <ReviewCard
              key={"gridDataTab3" + index}
              index={index}
              reviewData={item}
            />
          ))
        : "No Reviews found"}
    </div>
  );
};

export default TabThree;
