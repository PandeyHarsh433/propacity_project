import React, { useEffect, useMemo } from "react";
import Grid from "./Grid";

const GridList = ({ data, name, delData, view, searchData }) => {
  // Memoize the data prop to prevent unnecessary recalculations when it hasn't changed
  const memoizedData = useMemo(() => data || [], [data]);

  // Memoize the name prop to prevent unnecessary recalculations when it hasn't changed
  const memoizedName = useMemo(() => name, [name]);

  // Empty useEffect, can be used for handling side effects related to searchData
  useEffect(() => {}, [searchData]);

  // Memoized filtered data based on the search query
  const filteredData = useMemo(() => {
    if (searchData && searchData.trim() !== "") {
      const searchQuery = searchData.toLowerCase().trim();
      return memoizedData.filter((item) => {
        if (!item) {
          return false;
        }
        // Based on the 'name' prop, search for matching data items
        if (name === "Film" && item.title) {
          return item.title.toLowerCase().includes(searchQuery);
        } else if (item.name) {
          return item.name.toLowerCase().includes(searchQuery);
        }
        return false;
      });
    } else {
      return memoizedData;
    }
  }, [searchData, memoizedData, name]);

  return (
    <div className="flex flex-wrap gap-3 justify-evenly item-center">
      {/* Render the Grid component for each item in the filtered data */}
      {filteredData.map((item, index) => (
        <Grid
          dataItem={item}
          name={memoizedName}
          del={delData}
          view={view}
          key={index}
        />
      ))}
    </div>
  );
};

export default GridList;
