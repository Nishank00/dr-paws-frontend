import { useRouter } from "next/navigation";
import React from "react";

const PetCard = ({ pet = {}, backgroundColor = "primary3" }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/pets/${pet.id}`)}
      className={`w-full bg-${backgroundColor} p-1 flex flex-col items-center rounded-2xl hover:shadow-2xl cursor-pointer`}
    >
      <div className="px-10 py-8 bg-primary4 flex flex-col gap-5 items-center w-full rounded-2xl">
        <div
          className="w-24 h-24 rounded-full"
          style={{
            backgroundImage: `url(${
              pet?.pet_image
                ? pet?.pet_image
                : pet.pet_type_name == "Dog"
                ? "/home/dog.png"
                : "home/cat_cartoon.png"
            })`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            borderRadius: "50%",
          }}
        ></div>
        <h4 className="text-2xl text-secondary font-custom-roca">
          {pet?.name}
        </h4>
      </div>
      <div className="p-3 min-h-9">
        {pet && (
          <h4 className="text-sm font-bold text-white font-custom-roca flex gap-2">
            {pet.pet_membership &&
            Object.keys(pet.pet_membership).length > 0 ? (
              <>
                {" "}
                <span>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 0.5C8.23712 0.5 9.24 1.57452 9.24 2.9V5.6H11.76C12.9971 5.6 14 6.67452 14 8C14 9.32548 12.9971 10.4 11.76 10.4H9.24V13.1C9.24 14.4255 8.23712 15.5 7 15.5C5.76288 15.5 4.76 14.4255 4.76 13.1V10.4H2.24C1.00288 10.4 0 9.32548 0 8C0 6.67452 1.00288 5.6 2.24 5.6H4.76V2.9C4.76 1.57452 5.76288 0.5 7 0.5Z"
                      fill="#FDC776"
                    />
                  </svg>
                </span>
                <span>{pet.pet_membership?.title || "Not a member"}</span>
                <span>
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 0.5C8.23712 0.5 9.24 1.57452 9.24 2.9V5.6H11.76C12.9971 5.6 14 6.67452 14 8C14 9.32548 12.9971 10.4 11.76 10.4H9.24V13.1C9.24 14.4255 8.23712 15.5 7 15.5C5.76288 15.5 4.76 14.4255 4.76 13.1V10.4H2.24C1.00288 10.4 0 9.32548 0 8C0 6.67452 1.00288 5.6 2.24 5.6H4.76V2.9C4.76 1.57452 5.76288 0.5 7 0.5Z"
                      fill="#FDC776"
                    />
                  </svg>
                </span>
              </>
            ) : (
              "Not a member"
            )}
          </h4>
        )}
      </div>
    </div>
  );
};

export default PetCard;
