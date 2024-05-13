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
import Popup from "@/components/ui/Popup";
import PetForm from "../petProile/PetForm";
import Button from "@/components/ui/Button";

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
  const [showPetForm, setShowPetForm] = useState(false);

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

  const openPetForm = () => setShowPetForm(true);
  const closePetForm = () => setShowPetForm(false);

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
        <Button
          label="+&nbsp;&nbsp;Add Pet"
           className="w-fit"
          onClick={openPetForm}
        />
      </div>
      {pets && pets.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {pets.map((pet, i) => (
            <PetCard backgroundColor={colors[i]} key={pet.id} pet={pet} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-8 p-10">
          <p className="text-secondary text-2xl text-center opacity-70 font-custom-roca">
            You haven&apos;t added any pets yet
          </p>
          <Button
            label="+&nbsp;&nbsp;Add Pet"
            className="bg-white hover:bg-secondary border-2 border-secondary px-4 py-2 text-secondary hover:text-white w-40"
            onClick={openPetForm}
          />
        </div>
      )}

      <Popup isOpen={showPetForm} onClose={closePetForm}>
        <PetForm onPetAdded={getPets} closePopup={closePetForm} />
      </Popup>
    </>
  );
};

export default PetsPage;
