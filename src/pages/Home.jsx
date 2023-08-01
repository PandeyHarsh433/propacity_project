import React, { useEffect, useState, useRef } from "react";
import Folder from "../components/data/Folder";
import Navbar from "../components/Navbar";
import GridList from "../components/GridList";
import Listing from "../components/Listing";
import ListStyleHeader from "../components/ListStyleHeader";
import Hero from "../components/Hero";
import DeleteModel from "../components/models/DeleteModel";
import MainModel from "../components/models/MainModel";
import SidebarWrapper from "../components/SidebarWrapper";

const Home = () => {
  // State variables to manage different parts of the component
  const [view, setView] = useState("grid");
  const [showData, setShowData] = useState("");
  const [mainData, setMainData] = useState("");
  const [search, setSearch] = useState("");
  const [deleteData, setDeleteData] = useState({});
  const [viewData, setViewData] = useState({});
  const [loading, setLoading] = useState(false);

  // Fetch data for the selected category when the showData state changes
  const fetchData = async () => {
    if (showData) {
      setLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/${showData.toLowerCase()}`
      );
      const data = await response.json();
      setMainData(data.results);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [showData]);

  return (
    <div className="relative">
      {/* Show MainModel modal if viewData has title or name */}
      {(viewData.title || viewData.name) && (
        <MainModel data={viewData} name={showData} setData={setViewData} />
      )}

      {/* Show DeleteModel modal if deleteData has title or name */}
      {(deleteData.title || deleteData.name) && (
        <DeleteModel
          data={deleteData}
          name={showData}
          setData={setDeleteData}
        />
      )}

      {/* Navbar component for search functionality */}
      <div className="top-2 w-full">
        <Navbar handleSearch={setSearch} />
      </div>

      {/* SidebarWrapper component for displaying the sidebar with data from Folder */}
      <div>
        <SidebarWrapper dataFolder={Folder} handleShow={setShowData} />
      </div>

      {/* Main content area */}
      <div>
        <div className="absolute top-[7rem] left-[5%] w-[90%] grid-list sm:ml-3">
          {/* Show loading indicator if data is being fetched */}
          {loading ? (
            <div className="text-center">
              <div className="list-header">
                <ListStyleHeader setListView={setView} listView={view} />
              </div>
              <div className="text-3xl text-white font-bold animate-pulse mt-40">
                Loading..
              </div>
            </div>
          ) : (
            <>
              {/* Render the list header based on the selected view */}
              {showData && (
                <>
                  <div className="list-header">
                    <ListStyleHeader setListView={setView} listView={view} />
                  </div>
                  {/* Render GridList or Listing based on the selected view */}
                  {view === "grid" && showData ? (
                    <GridList
                      data={mainData}
                      name={showData}
                      delData={setDeleteData}
                      view={setViewData}
                      searchData={search}
                    />
                  ) : (
                    <Listing
                      data={mainData}
                      name={showData}
                      delData={setDeleteData}
                      view={setViewData}
                      searchData={search}
                    />
                  )}
                </>
              )}

              {/* Show Hero component when no category is selected */}
              {!showData && (
                <div className="absolute left-40 sm:left-10 top-10 hero-style">
                  <Hero />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
