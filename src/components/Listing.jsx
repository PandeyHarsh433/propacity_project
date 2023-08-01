import React, { useMemo, useEffect } from "react";
import List from "./List";

const Listing = ({ data, name, delData, view, searchData }) => {
  const memoizedData = useMemo(() => data, [data]);
  const memoizedName = useMemo(() => name, [name]);

  useEffect(() => {
    // Add any logic you want to execute when the `searchData` prop changes
    // For example, you could apply additional filtering or sorting here
  }, [searchData]);

  const filteredData = useMemo(() => {
    if (searchData && searchData.trim() !== "") {
      const searchQuery = searchData.toLowerCase().trim();
      return memoizedData.filter((item) => {
        if (name === "Film" && item.title) {
          return item.title.toLowerCase().includes(searchQuery);
        } else if (item.name) {
          return item.name.toLowerCase().includes(searchQuery);
        }
        return false; // Handle cases where item.title or item.name is not available
      });
    } else {
      return memoizedData;
    }
  }, [searchData, memoizedData, name]);

  return (
    <div className="flex flex-col gap-2 flex-nowrap w-100%">
      <div className="justify-between items-center bg-slate-400 p-3 mx-5 rounded-md hidden md:flex">
        <div className="bg-slate-400 x pl-20">Name</div>
        <div className="bg-slate-400 x pl-20">
          {memoizedName
            ? memoizedName === "Films"
              ? "Director"
              : memoizedName === "People"
              ? "Gender"
              : memoizedName === "Planets"
              ? "Climate"
              : memoizedName === "Starships"
              ? "Model"
              : memoizedName === "Species"
              ? "LifeSpan"
              : memoizedName === "Vehicles"
              ? "Model"
              : ""
            : "logo"}
        </div>
        <div className="bg-slate-400 x pl-20">
          {memoizedName
            ? memoizedName === "Films"
              ? "Release Date"
              : memoizedName === "People"
              ? "Birth Year"
              : memoizedName === "Planets"
              ? "Gravity"
              : memoizedName === "Starships"
              ? "Hyperdrive Rating"
              : memoizedName === "Species"
              ? "Designation"
              : memoizedName === "Vehicles"
              ? "Top Speed"
              : ""
            : "logo"}
        </div>
        <div className="bg-slate-400 x pl-20"></div>
      </div>
      {filteredData.map((item, index) => {
        return (
          <List
            dataItem={item}
            name={memoizedName}
            del={delData}
            key={index}
            view={view}
          />
        );
      })}
    </div>
  );
};

export default Listing;
