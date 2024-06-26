import DeletePopup from "@/components/ui/DeletePopup";
import SharePopup from "@/components/ui/SharePopup";
import { useToast } from "@/components/ui/ToastProvider";
import PetService from "@/services/Pet.Service";
import React, { useState,useRef ,useEffect} from "react";
import { useSelector } from "react-redux";

const Popover = ({ showPopover = false,setShowPopover, onDelete, onShare }) => {
  const popupRef = useRef(null);

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopover(false);
    }
  };

  useEffect(() => {
    if (showPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);
  return (
    showPopover && (
      <div ref={popupRef} className="md:w-48 w-28 bg-primary rounded-lg shadow-lg text-white font-custom-open-sans ml-44 -mt-20 z-50 relative">
        <div className="py-1">
          <button
            className="block px-4 py-2 text-sm hover:opacity-45 w-full text-left"
            onClick={onDelete}
          >
            Delete
          </button>
          <button
            className="block px-4 py-2 text-sm hover:opacity-45 w-full text-left"
            onClick={onShare}
          >
            Share
          </button>
        </div>
      </div>
    )
  );
};

const DocumentCard = ({ document, onRefresh = () => {} }) => {
  const showToast = useToast();
  const [showPopover, setShowPopover] = useState(false);
  const [share, setShare] = useState(false);
  const [deletePop, setDeletePop] = useState(false);
  console.log({ document });
  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const { selectedPetInfo } = useSelector((state) => state.userSession);

  const handleDelete = async (type) => {
    if (!type) {
      togglePopover();
      setDeletePop(false);
      return;
    }

    const response = await PetService.deleteDocument({
      pet_id: selectedPetInfo?.pet_id,
      document_id: document?.id,
    });

    if (!response.data.status)
      return showToast(response.data.message, "warning");

    showToast(response.data.message, "success");
    togglePopover();
    onRefresh();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          url: process.env.NEXT_PUBLIC_API_UPLOAD_URL + "/" + document.url,
        });
      } else {
        showToast("Web Share API not supported", "warning");
      }
    } catch (error) {
      console.error("Error sharing document:", error);
    }
  };

  return (
    <div className="z-0">
      <div className="bg-primary3 h-20"></div>
      <div className="w-full flex items-center justify-between gap-2 p-3 bg-primary3 bg-opacity-30">
        <p className="text-secondary text-xs font-custom-open-sans max-w-[90%] overflow-hidden">
          {document.name || document.url || "Document"}
        </p>
        <span
          className="cursor-pointer hover:opacity-35"
          onClick={togglePopover}
        >
          <img
            src="/icons/dots-vertical.svg"
            alt=" "
            loading="lazy"
            className="w-7 h-4"
          />
        </span>
      </div>
      <Popover
        showPopover={showPopover}
        // onDelete={handleDelete}
        // onShare={handleShare}
        setShowPopover={setShowPopover}
        onDelete={() => setDeletePop(true)}
        onShare={() => setShare(true)}
      />

      <SharePopup
        isOpen={share}
        onClose={() => setShare(false)}
        url={document?.url}
      />
      <DeletePopup isOpen={deletePop} onClose={handleDelete} />
    </div>
  );
};

export default DocumentCard;
