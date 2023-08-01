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
  const [view, setView] = useState("grid");
  const [showData, setShowData] = useState("");
  const [mainData, setMainData] = useState("");
  const [search, setSearch] = useState("");
  const [deleteData, setDeleteData] = useState({});
  const [viewData, setViewData] = useState({});
  const [loading, setLoading] = useState(false);

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
      {(viewData.title || viewData.name) && (
        <MainModel data={viewData} name={showData} setData={setViewData} />
      )}

      {(deleteData.title || deleteData.name) && (
        <DeleteModel
          data={deleteData}
          name={showData}
          setData={setDeleteData}
        />
      )}
      <div className=" top-2 w-full">
        <Navbar handleSearch={setSearch} />
      </div>
      <div>
        <SidebarWrapper dataFolder={Folder} handleShow={setShowData} />
      </div>

      <div>
        <div className="absolute top-[7rem] left-[5%] w-[90%] grid-list sm:ml-3">
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
              {showData && (
                <>
                  <div className="list-header">
                    <ListStyleHeader setListView={setView} listView={view} />
                  </div>
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
