import React, { useState, useEffect, useRef } from "react";
import int from "./../assets/int.jpg";
import { AiOutlineMore } from "react-icons/ai";
import {
  AiOutlineEye,
  AiOutlineDownload,
  AiOutlineDelete,
} from "react-icons/ai";
import { BsPencil, BsShare, BsLock } from "react-icons/bs";

const Grid = ({ dataItem, name, del ,view}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleDelete = () => {
    del(dataItem);
    setShowDropdown(false);
  };

  const handleView = () => {
    view(dataItem);
    setShowDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
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
    <div className="w-[20rem]">
      <img src={int} className="contain rounded-md" alt="Image" />
      <div className="flex justify-between items-center px-3 bg-slate-500 py-3 rounded-md mt-1 relative">
        <div className="text-lg text-white flex">
          <div className="bg-slate-500 pr-3">
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
          <div className="bg-slate-500">
            {dataItem
              ? name === "Films"
                ? dataItem.title
                : dataItem.name
              : "Movies Name"}
          </div>
        </div>
        <div className="text-white text-lg px-3 rounded-md cursor-pointer bg-slate-500 font-bold">
          <AiOutlineMore
            onClick={toggleDropdown}
            id="dropdownMenuIconButton"
            data-dropdown-toggle="dropdownDots"
            className="bg-slate-500"
          />

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
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white bg-white rounded-tr-lg rounded-tl-lg"
                    onClick={handleView}
                  >
                    <div className="flex justify-start gap-3 bg-white items-center">
                      <div className="bg-white">
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

export default Grid;