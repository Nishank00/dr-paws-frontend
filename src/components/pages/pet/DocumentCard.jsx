import DeletePopup from "@/components/ui/DeletePopup";
import SharePopup from "@/components/ui/SharePopup";
import { useToast } from "@/components/ui/ToastProvider";
import PetService from "@/services/Pet.Service";
import React, { useState } from "react";

const Popover = ({ showPopover = false, onDelete, onShare }) => {
  return (
    showPopover && (
      <div className="w-48 bg-primary rounded-lg shadow-lg text-white font-custom-open-sans ml-44 -mt-20 z-50">
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

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const handleDelete = () => {
    PetService.deleteDocument(document.id).then((response) => {
      if (!response.data.status)
        return showToast(response.data.message, "warning");
      showToast(response.data.message, "success");
      togglePopover();
      onRefresh();
    });
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
        onDelete={() => setDeletePop(true)}
        onShare={() => setShare(true)}
      />

      <SharePopup isOpen={share} onClose={() => setShare(false)} />
      <DeletePopup isOpen={deletePop} onClose={setDeletePop} />
    </div>
  );
};

export default DocumentCard;
