import React from "react";
import { BsList } from "react-icons/bs";

const ListStyleHeader = ({ listView, setListView }) => {
  return (
    <div className="flex justify-between items-center text-white text-xl py-5 mb-10 w-full">
      <div className="text-3xl">Films</div>
      <div className="flex">
        <div
          className="bg-white text-gray-500 px-2 py-1 cursor-pointer rounded-bl-md rounded-tl-md font-sans-serif"
          onClick={() => setListView("grid")}
        >
          ▦ {listView === "grid" ? "Grid" : ""}
        </div>
        <div
          className="bg-transparent border border-white px-2 py-1.5 cursor-pointer font-sans-serif flex item-center justify-center pb-2"
          onClick={() => setListView("list")}
        >
          <div className="pt-1">
            <BsList />
          </div>
          <div className="">{listView === "list" ? "List" : ""}</div>
        </div>
      </div>
    </div>
  );
};

export default ListStyleHeader;
