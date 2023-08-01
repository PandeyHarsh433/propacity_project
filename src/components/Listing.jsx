import React, { useMemo, useEffect } from "react";
import List from "./List";

const Listing = ({ data, name, delData, view, searchData }) => {
  // Memoize the data prop to prevent unnecessary recalculations when it hasn't changed
  const memoizedData = useMemo(() => data, [data]);

  // Memoize the name prop to prevent unnecessary recalculations when it hasn't changed
  const memoizedName = useMemo(() => name, [name]);

  // Empty useEffect, can be used for handling side effects related to searchData
  useEffect(() => {}, [searchData]);

  // Memoized filtered data based on the search query
  const filteredData = useMemo(() => {
    if (searchData && searchData.trim() !== "") {
      const searchQuery = searchData.toLowerCase().trim();
      return memoizedData.filter((item) => {
        // Based on the 'name' prop, search for matching data items
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
      {/* Header row */}
      <div className="justify-between items-center bg-slate-400 p-3 mx-5 rounded-md hidden md:flex">
        <div className="bg-slate-400 x pl-20">Name</div>
        <div className="bg-slate-400 x pl-20">
          {/* Display header based on the 'name' prop */}
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
          {/* Display header based on the 'name' prop */}
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
      {/* Render the List component for each item in the filtered data */}
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
