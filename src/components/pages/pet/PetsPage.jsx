import { useLoader } from "@/components/ui/LoaderContext";
import { useToast } from "@/components/ui/ToastProvider";
import PetService from "@/services/Pet.Service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PetCard from "./PetCard";
import { useDispatch } from "react-redux";
import {
  setPageTitle,
  setPageHeader,
} from "@/store/features/pageHeader/pageHeaderSlice";

const PetsPage = () => {
  // Variables
  const dispatch = useDispatch();
  const colors = [
    "accent",
    "primary",
    "primary2",
    "secondary",
    "secondary2",
    "secondary3",
    "accent",
    "primary",
    "primary2",
    "secondary",
    "secondary2",
    "secondary3",
    "accent",
    "primary",
    "primary2",
    "secondary",
    "secondary2",
    "secondary3",
  ];
  const showToast = useToast();
  const { startLoading, stopLoading } = useLoader();
  const router = useRouter();
  const [pets, setPets] = useState([]);
  const [user_id, setUserID] = useState(null);

  // Methods
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

  useEffect(() => {
    dispatch(
      setPageHeader({
        title: "Your Pets",
        currentMenu: "PETS",
        currentPath: "/pets",
      })
    );
    const u_id = JSON.parse(localStorage.getItem("user_info"))?.id;
    if (!u_id) {
      showToast("Please login in order to view your pets", "warning");
      return router.push("/");
    }

    setUserID(JSON.parse(localStorage.getItem("user_info"))?.id);
  }, []);

  useEffect(() => {
    if (user_id) getPets();
  }, [user_id]);

  return (
    <>
      <div className="flex items-center justify-between text-secondary font-custom-open-sans mb-4">
        <h3 className="text-lg">Your Pets</h3>
        <span className="flex text-xs hover:font-semibold">
          <img src="/pets/plus.svg" alt="+" loading="lazy" />
          <span className="ml-2">Add Pet</span>
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {pets &&
          pets.map((pet, i) => (
            <PetCard backgroundColor={colors[i]} key={pet.id} pet={pet} />
          ))}
      </div>
    </>
  );
};

export default PetsPage;
