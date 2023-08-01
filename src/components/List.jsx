import React, { useState, useEffect, useRef } from "react";
import { AiOutlineMore, AiOutlineEye, AiOutlineDownload, AiOutlineDelete } from "react-icons/ai";
import { BsPencil, BsShare, BsFolder2, BsLock } from "react-icons/bs";

const List = ({ dataItem, name, del, view }) => {
  // State to toggle the visibility of the dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);
  
  // Ref to the dropdown menu container to handle clicks outside
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  // Function to handle the delete action
  const handleDelete = () => {
    del(dataItem);
    setShowDropdown(false);
  };

  // Function to handle the view action
  const handleView = () => {
    view(dataItem);
    setShowDropdown(false);
  };

  // useEffect to add click event listener and remove it on unmount
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close the dropdown when clicked outside
      if (
        showDropdown &&
        event.target.closest("#dropdownMenuIconButton") === null &&
        event.target.closest("#dropdownDots") === null
      ) {
        toggleDropdown();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="w-[100%]">
      {/* List Element */}
      <div className="flex justify-between items-center p-3 rounded-md text-white relative">
        <div className="text-lg text-white flex bg-slate-500">
          {/* Display appropriate icon based on the 'name' prop */}
          <div className="pr-3">
            {name
              ? name === "Films"
                ? "🎬"
                : name === "People"
                ? "👨‍👦‍👦"
                : name === "Planets"
                ? "🌑"
                : name === "Starships"
                ? "🚀"
                : name === "Species"
                ? "👽"
                : name === "Vehicles"
                ? "🚐"
                : ""
              : "logo"}
          </div>
          {/* Display the name of the item */}
          <div className="">
            {dataItem ? (name === "Films" ? dataItem.title : dataItem.name) : "Movies Name"}
          </div>
        </div>
        {/* Show additional details in small screens */}
        <div className="sm:hidden">
          {/* Display item details based on the 'name' prop */}
          {name
            ? name === "Films"
              ? dataItem.director
              : name === "People"
              ? dataItem.gender
              : name === "Planets"
              ? dataItem.climate
              : name === "Starships"
              ? dataItem.model
              : name === "Species"
              ? dataItem.average_lifespan
              : name === "Vehicles"
              ? dataItem.model
              : ""
            : "logo"}
        </div>
        <div className="sm:hidden">
          {/* Display item details based on the 'name' prop */}
          {name
            ? name === "Films"
              ? dataItem.release_date
              : name === "People"
              ? dataItem.birth_year
              : name === "Planets"
              ? dataItem.gravity
              : name === "Starships"
              ? dataItem.hyperdrive_rating
              : name === "Species"
              ? dataItem.designation
              : name === "Vehicles"
              ? dataItem.max_atmosphering_speed
              : ""
            : "logo"}
        </div>
        <div className="text-white text-lg font-bold px-3 rounded-md cursor-pointer">
          {/* Dropdown menu icon */}
          <AiOutlineMore
            onClick={toggleDropdown}
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
          />

          {/* Render the dropdown menu when 'showDropdown' is true */}
          {showDropdown && (
            <div
              ref={dropdownRef}
              id="dropdownDots"
              className="z-10 absolute top-full right-5 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconButton bg-white rounded-md"
              >
                {/* Dropdown menu options */}
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white rounded-tr-lg rounded-tl-lg "
                    onClick={handleView}
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white ">
                        <AiOutlineEye className="bg-white" />
                      </div>
                      <div className="bg-white">View</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white"
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
                        <AiOutlineDownload className="bg-white" />
                      </div>
                      <div className="bg-white">Download</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white"
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
                        <BsPencil className="bg-white" />
                      </div>
                      <div className="bg-white">Rename</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white"
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
                        <BsShare className="bg-white" />
                      </div>
                      <div className="bg-white">Share Link</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white"
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
                        <BsLock className="bg-white" />
                      </div>
                      <div className="bg-white">Mark Private</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white rounded-br-lg rounded-bl-lg"
                    onClick={handleDelete}
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
                        <AiOutlineDelete className="bg-white" />
                      </div>
                      <div className="bg-white">Delete</div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
