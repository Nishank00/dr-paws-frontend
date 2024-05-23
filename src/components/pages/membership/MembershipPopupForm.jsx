import Button from "@/components/ui/Button";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSelectedMembership } from "@/store/features/membership/membershipSlice";
import { useRouter } from "next/navigation";
import PetService from "@/services/Pet.Service";
import { useLoader } from "@/components/ui/LoaderContext";
import { useToast } from "@/components/ui/ToastProvider";
import Dropdown from "@/components/ui/Dropdown";
import MultipleSelect from "@/components/ui/MultipleSelect";
import paymentService from "@/services/PaymentService";
import { TokenService } from "@/services/Storage.service";

const MembershipPopupForm = ({ membership, memberships, setMemberships }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { startLoading, stopLoading } = useLoader();
  const showToast = useToast();
  const [selectedPlan, setSelectedPlan] = useState({});
  const [selectedPet, setSelectedPet] = useState(null);
  const [servicesTotal, setServicesTotal] = useState(0);
  const [user_id, setUserID] = useState(null);
  const [pets, setPets] = useState([]);

  const selectPlan = (selected) => {
    setMemberships(
      memberships.map((mem) => {
        if (mem.id == membership.id) {
          mem.membership_plans.map((plan) => {
            if (plan.id == selected.id) {
              plan.selected = true;
            } else {
              plan.selected = false;
            }
          });
          setSelectedPlan(mem);
        }
        return mem;
      })
    );
  };

  const handleContinue = () => {
    dispatch(setSelectedMembership({ ...selectedPlan, pet_id: selectedPet }));
    router.push("/membership/checkout");
  };

  const getPets = () => {
    startLoading();
    PetService.getPetsByUserId(user_id)
      .then((response) => {
        if (!response.data.status)
          return showToast(response.data.message, "warning");
        setPets(response.data.data);
      })
      .catch((error) => {
        return showToast(error.message, "error");
      })
      .finally(() => {
        stopLoading();
      });
  };

  const calculateServicesTotal = () => {
    let total = 0;
    membership?.membership_plans.forEach((plan) => {
      total += Number(plan.service_amount);
    });
    setServicesTotal(total);
  };

  const initializeRazorpay = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      // console.log(process.env.RAZORPAY_API);

      // if (!process.env.RAZORPAY_API) return reject("No Razorpay api found");

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const hitCallbackUrl = async (payload) => {
    try {
      startLoading();
      const response = await paymentService.generateCallBackurl({
        paymentInfo: payload,
      });
      const { data } = response;
      stopLoading();

      if (!data?.status) showToast(data?.message);
      return router.push(
        `/membership/order_success/${data?.data?.membership_id}/${data?.data?.order_id}`
      );
      // console.log("Booking done");
    } catch (error) {
      console.log(error);
    }
  };

  const handleOrderGeneration = async (orderObj) => {
    let razorpayInit = await initializeRazorpay();
    // console.log(razorpayInit, process.env.RAZORPAY_API);
    if (!razorpayInit) return razorpayInit;
    const paymentOptions = {
      key: "rzp_test_23WtYxOtJBfjHB",
      amount: Math.round(orderObj?.amount * 100),
      currency: "INR",
      order_id: orderObj?.id,
      handler: async function (response) {
        // console.log(response);
        await hitCallbackUrl(response);
      },
    };

    const rzp = new window.Razorpay(paymentOptions);
    rzp.open();
  };
  const saveMembership = async () => {
    startLoading();
    // console.log(membership);
    try {
      let plansData = membership.membership_plans?.filter((memeberShipObj) => {
        return memeberShipObj.selected;
      })?.[0];
      const response = await paymentService.createOrder({
        membership_id: membership.id,
        pet_id: selectedPet,
        plan_duration: plansData?.plan_duration_in_year,
        membership_plan_id: plansData.id,
        token: TokenService.getToken(),
      });
      const { data } = response;

      if (!data?.status) {
        stopLoading();
        return showToast(data?.message);
      }

      stopLoading();
      handleOrderGeneration(data?.data);
      // console.log(data);
    } catch (error) {
      stopLoading();
      console.log(error);
    }
    // const payload = {
    //   pet_id: membershipData.pet_id,
    //   membership_id: membershipData.id,
    //   membership_expires_at: moment()
    //     .add(
    //       membershipData.membership_plans?.filter(
    //         (item) => item.selected == true
    //       )[0].plan_duration_in_year,
    //       "years"
    //     )
    //     .format("YYYY-MM-DD"),
    // };

    // MembershipService.saveMembership(payload)
    //   .then((response) => {
    //     stopLoading();
    //     showToast(
    //       response.data.message,
    //       response.data.status ? "success" : "warning"
    //     );

    //     if (response.data.status)
    //       return router.push("/membership/order_success");
    //   })
    //   .catch((error) => {
    //     stopLoading();
    //     return showToast(error.message, "error");
    //   });
  };

  useEffect(() => {
    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);
  }, []);

  useEffect(() => {
    if (user_id) getPets();
  }, [user_id]);

  useEffect(() => {
    calculateServicesTotal();
  }, [membership]);

  return (
    <div className="text-primary rounded-2xl flex bg-white font-custom-open-sans">
      <div className="w-full sm:w-2/5 p-8">
        <div className="flex flex-col gap-2">
          <img
            src={`/membership/${membership.image}`}
            alt=""
            className="w-20 h-20"
          />

          <h4 className="text-xl font-custom-roca">{membership.title}</h4>
          <p className="text-sm">{membership.description}</p>
        </div>
        <hr className="my-8 border border-primary3" />

        <h5 className="text-sm font-bold">Includes:</h5>

        <div className="flex flex-col">
          {membership.membership_items.map((membership_item, index) => (
            <div
              key={"popup-m-item" + membership_item.id + index}
              className="flex items-center gap-3"
            >
              <span className="w-1 h-1 rounded-full bg-primary"></span>
              <p className="text-sm">
                {membership_item.service_count} {membership_item.service_name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full sm:w-3/5 bg-primary3 p-10 rounded-r-2xl">
        <p className="text-sm font-bold">Select Pet:</p>
        <MultipleSelect
          options={pets}
          optionLabel={"name"}
          optionValue={"id"}
          onSelect={(selected) => setSelectedPet(selected)}
        />
        <div className="flex mt-4 flex-col gap-5">
          <p className="text-sm font-bold">Choose a payment plan:</p>

          <div className="flex flex-col gap-3">
            {membership.membership_plans.map((membership_plan, index) => (
              <div
                key={"popup-pl-item" + membership_plan.id + index}
                className={`p-5 rounded-2xl bg-white cursor-pointer ${
                  membership_plan?.selected &&
                  membership_plan?.selected === true
                    ? "border-4 border-secondary"
                    : ""
                }`}
                onClick={() => selectPlan(membership_plan)}
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-custom-roca">
                    ₹{membership_plan?.price_yearly?.toLocaleString()}/yr
                  </p>
                  <p className="text-sm">
                    For {membership_plan?.plan_duration_in_year}{" "}
                    {membership_plan?.plan_duration_in_year > 1
                      ? "Years"
                      : "Year"}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm font-bold">
            Total benefits worth ₹{membership.id * 500}
          </p>
        </div>

        <div className="flex items-center justify-end mt-10">
          <Button
            disabled={!selectedPlan?.id || !selectedPet}
            label="Continue"
            color="accent"
            className="w-40 h-10"
            onClick={saveMembership}
          />
        </div>
      </div>
    </div>
  );
};

export default MembershipPopupForm;
