import React from "react";
import Link from "next/link";
import Button from "../ui/Button";

const Menus = ({ applyParentClass = "" }) => (
  <div className={applyParentClass}>
    <ul className="flex flex-col md:flex-row md:items-center md:justify-center mt-5 lg:mt-0">
      <li className="my-1 md:mx-3">
        <Link className="" href="#">
          Locations
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="#">
          Our Services
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="#">
          Our Team
        </Link>
      </li>

      <li className="my-1 md:mx-3">
        <Link className="" href="#">
          Membership
        </Link>
      </li>
    </ul>
  </div>
);

const NewHeader = () => {
  return (
    <div className="body-padding-x body-padding-y text-primary bg-primary3">
      <nav className="flex items-center justify-between">
        <div id="logo">
          <Link href="/">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d33c50d9807ec772184fb6f5d47b95056196041f13665f4a3c3bf67d9f7ee7c2?"
              className="aspect-[2.55] object-contain object-center w-[125px] justify-center items-center overflow-hidden shrink-0 max-w-full"
            />
          </Link>
        </div>
        <Menus applyParentClass="hidden lg:block" />
        <div className="flex items-center">
          <Button label="Book a Visit" />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f456f7a9bed0628bc91e7851c1beccfa0ff3a43c8c32b0e1c52c5bcaa9d1dae9?"
            className="h-10 border-5 border-primary p-2"
          />
          <div className="block md:hidden">
            <button
              type="button"
              className="ml-1 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5 inline-flex items-center justify-center w-10 h-10"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <Menus applyParentClass="block lg:hidden" />
    </div>
  );
};

export default NewHeader;
