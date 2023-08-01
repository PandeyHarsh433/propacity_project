import React, { useEffect, useMemo } from "react";
import Grid from "./Grid";

const GridList = ({ data, name, delData, view, searchData }) => {
  const memoizedData = useMemo(() => data || [], [data]);
  const memoizedName = useMemo(() => name, [name]);

  useEffect(() => {}, [searchData]);

  const filteredData = useMemo(() => {
    if (searchData && searchData.trim() !== "") {
      const searchQuery = searchData.toLowerCase().trim();
      return memoizedData.filter((item) => {
        if (!item) {
          return false;
        }
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
