"use client";
import Image from "next/image";
import React from "react";
import Popup from "./Popup";

const SharePopup = ({ isOpen, onClose, url }) => {
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          url: process.env.NEXT_PUBLIC_API_UPLOAD_URL + "/" + url,
        });
      } else {
        showToast("Web Share API not supported", "warning");
      }
    } catch (error) {
      console.error("Error sharing document:", error);
    }
  };
  return (
    <>
      <Popup hideClose isOpen={isOpen}>
        <div className="w-full max-w-md bg-[#33495F] shadow-lg rounded-md p-6 relative">
          <div className="flex items-center">
            <h3
              style={{ fontFamily: "Roca Bold, sans-serif" }}
              className="text-2xl font-bold flex-1 text-white"
            >
              Share
            </h3>
            <div onClick={onClose}>
              <Cross />
            </div>
          </div>
          <div className="my-8">
            <div className="space-x-6 justify-around flex mt-6 text-center">
              <button
                type="button"
                className="flex gap-2 flex-col items-center justify-center rounded-full border-none outline-none"
                onClick={handleShare}
              >
                <WhatsApp />
                <span>Whatsapp</span>
              </button>
              <button
                type="button"
                className="flex gap-2 flex-col items-center justify-center rounded-full border-none outline-none"
                onClick={handleShare}
              >
                <Telegram />
                <span>Telegram</span>
              </button>
              <button
                type="button"
                className="flex gap-2 flex-col items-center justify-center rounded-full border-none outline-none"
                onClick={handleShare}
              >
                <Image src="/mail.svg" alt="" height={44} width={44} />
                <span>Gmail</span>
              </button>
              <button
                type="button"
                className="flex gap-2 flex-col items-center justify-center rounded-full border-none outline-none"
                onClick={handleShare}
              >
                <More />
                <span>More</span>
              </button>
              {/* Add similar buttons for other platforms */}
            </div>
          </div>
        </div>
      </Popup>
    </>
  );
};

export default SharePopup;

const WhatsApp = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2843_12090)">
      <path
        d="M38 0H6C2.68629 0 0 2.68629 0 6V38C0 41.3137 2.68629 44 6 44H38C41.3137 44 44 41.3137 44 38V6C44 2.68629 41.3137 0 38 0Z"
        fill="#23D366"
      />
      <path
        d="M31.7003 12.3016C29.4114 9.98988 26.3717 8.57216 23.1295 8.30419C19.8874 8.03623 16.6562 8.93565 14.0188 10.8402C11.3814 12.7448 9.51141 15.5292 8.74614 18.6911C7.98086 21.853 8.37068 25.1843 9.84527 28.0841L8.39777 35.1116C8.38276 35.1816 8.38233 35.2539 8.39653 35.324C8.41072 35.3941 8.43923 35.4605 8.48027 35.5191C8.5404 35.6081 8.62622 35.6765 8.72629 35.7154C8.82635 35.7543 8.93589 35.7617 9.04027 35.7366L15.9278 34.1041C18.8194 35.5414 22.1272 35.9062 25.2626 35.1335C28.3979 34.3608 31.1575 32.5009 33.0502 29.8846C34.9429 27.2682 35.846 24.0653 35.5988 20.8456C35.3516 17.6259 33.9702 14.5984 31.7003 12.3016ZM29.5528 29.4416C27.9691 31.0209 25.9298 32.0634 23.7222 32.4222C21.5146 32.781 19.2501 32.438 17.2478 31.4416L16.2878 30.9666L12.0653 31.9666L12.0778 31.9141L12.9528 27.6641L12.4828 26.7366C11.4597 24.7273 11.0988 22.4457 11.4517 20.2187C11.8047 17.9917 12.8535 15.9336 14.4478 14.3391C16.451 12.3365 19.1677 11.2115 22.0003 11.2115C24.8329 11.2115 27.5495 12.3365 29.5528 14.3391C29.5698 14.3587 29.5882 14.3771 29.6078 14.3941C31.5862 16.4019 32.6907 19.1105 32.6804 21.9292C32.6701 24.748 31.5458 27.4484 29.5528 29.4416Z"
        fill="white"
      />
      <path
        d="M29.1781 26.3241C28.6606 27.1391 27.8431 28.1366 26.8156 28.3841C25.0156 28.8191 22.2531 28.3991 18.8156 25.1941L18.7731 25.1566C15.7506 22.3541 14.9656 20.0216 15.1556 18.1716C15.2606 17.1216 16.1356 16.1716 16.8731 15.5516C16.9897 15.4521 17.128 15.3812 17.2768 15.3447C17.4257 15.3082 17.5811 15.307 17.7305 15.3413C17.8799 15.3755 18.0192 15.4443 18.1373 15.542C18.2554 15.6397 18.349 15.7637 18.4106 15.9041L19.5231 18.4041C19.5954 18.5662 19.6222 18.7449 19.6006 18.9211C19.579 19.0973 19.5099 19.2642 19.4006 19.4041L18.8381 20.1341C18.7174 20.2848 18.6446 20.4682 18.629 20.6607C18.6134 20.8532 18.6557 21.0459 18.7506 21.2141C19.0656 21.7666 19.8206 22.5791 20.6581 23.3316C21.5981 24.1816 22.6406 24.9591 23.3006 25.2241C23.4772 25.2962 23.6714 25.3138 23.8581 25.2746C24.0448 25.2354 24.2155 25.1412 24.3481 25.0041L25.0006 24.3466C25.1265 24.2224 25.2831 24.1339 25.4544 24.09C25.6256 24.0461 25.8055 24.0483 25.9756 24.0966L28.6181 24.8466C28.7639 24.8913 28.8975 24.9688 29.0087 25.073C29.12 25.1773 29.2059 25.3056 29.2599 25.4482C29.314 25.5908 29.3347 25.7438 29.3205 25.8956C29.3063 26.0474 29.2576 26.194 29.1781 26.3241Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2843_12090">
        <rect width="44" height="44" rx="22" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const Telegram = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_2843_12100)">
      <path
        d="M22 44C34.1503 44 44 34.1503 44 22C44 9.84974 34.1503 0 22 0C9.84974 0 0 9.84974 0 22C0 34.1503 9.84974 44 22 44Z"
        fill="#039BE5"
      />
      <path
        d="M10.0668 21.5247L31.2785 13.3462C32.263 12.9905 33.1228 13.5864 32.8038 15.075L32.8057 15.0732L29.194 32.0884C28.9263 33.2947 28.2095 33.588 27.2067 33.0197L21.7067 28.9662L19.0538 31.5219C18.7605 31.8152 18.513 32.0627 17.9447 32.0627L18.3352 26.4655L28.5285 17.2567C28.9722 16.8662 28.4295 16.6462 27.8447 17.0349L15.2478 24.9659L9.81749 23.2719C8.63866 22.8979 8.61299 22.093 10.0668 21.5247Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_2843_12100">
        <rect width="44" height="44" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const More = () => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="44" height="44" rx="10" fill="#F7F1DE" />
    <path
      d="M15 24.75C13.48 24.75 12.25 23.52 12.25 22C12.25 20.48 13.48 19.25 15 19.25C16.52 19.25 17.75 20.48 17.75 22C17.75 23.52 16.52 24.75 15 24.75ZM15 20.75C14.31 20.75 13.75 21.31 13.75 22C13.75 22.69 14.31 23.25 15 23.25C15.69 23.25 16.25 22.69 16.25 22C16.25 21.31 15.69 20.75 15 20.75Z"
      fill="#292D32"
    />
    <path
      d="M29 24.75C27.48 24.75 26.25 23.52 26.25 22C26.25 20.48 27.48 19.25 29 19.25C30.52 19.25 31.75 20.48 31.75 22C31.75 23.52 30.52 24.75 29 24.75ZM29 20.75C28.31 20.75 27.75 21.31 27.75 22C27.75 22.69 28.31 23.25 29 23.25C29.69 23.25 30.25 22.69 30.25 22C30.25 21.31 29.69 20.75 29 20.75Z"
      fill="#292D32"
    />
    <path
      d="M22 24.75C20.48 24.75 19.25 23.52 19.25 22C19.25 20.48 20.48 19.25 22 19.25C23.52 19.25 24.75 20.48 24.75 22C24.75 23.52 23.52 24.75 22 24.75ZM22 20.75C21.31 20.75 20.75 21.31 20.75 22C20.75 22.69 21.31 23.25 22 23.25C22.69 23.25 23.25 22.69 23.25 22C23.25 21.31 22.69 20.75 22 20.75Z"
      fill="#292D32"
    />
  </svg>
);

export const Cross = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="w-3.5 cursor-pointer shrink-0 fill-white"
    viewBox="0 0 320.591 320.591"
  >
    <path
      d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
      data-original="#000000"
    ></path>
    <path
      d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
      data-original="#000000"
    ></path>
  </svg>
);
