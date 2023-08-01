import React from "react";
import hero from "./../../assets/hero.jpg";

export default function MainModal({ data, name, setData }) {
  const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-transparent shadow-xl top-20">
            <div className="relative w-auto my-6 mx-auto max-w-2xl shadow-2xl bg-gray-600 rounded-lg">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none top-40 ">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t text-center  bg-gray-600">
                  <h3 className="text-3xl font-semibold text-white bg-gray-600">
                    {name} Details
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto mx-auto bg-gray-600">
                  <img
                    src={hero}
                    alt="Image"
                    className="w-[80%] ml-[10%] rounded-md border border-white bg-gray-600"
                  />
                  <div className="text-white my-5 bg-gray-600">
                    <div className="bg-gray-600">
                      <div className="text-xl my-2 bg-gray-600">Title</div>
                      <div className="bg-white text-black p-3 rounded-md">
                        {data
                          ? name === "Films"
                            ? ` ${data.title}`
                            : ` ${data.name}`
                          : "Movies Name"}
                      </div>
                    </div>
                    <div className="bg-gray-600">
                      <div className="text-xl my-2 bg-gray-600">
                        Opening Crawl
                      </div>
                      <div className="bg-white text-black p-3 rounded-md">
                        {data
                          ? name === "Films"
                            ? `${data.opening_crawl}`
                            : name === "People"
                            ? `height : ${data.height} , Hair color : ${data.hair_color}, Skin Color : ${data.skin_color} , Birth Year : ${data.birth_year} and Gender : ${data.gender}`
                            : name === "Planets"
                            ? `Rotation Period : ${data.rotation_period} , Orbital Period : ${data.orbital_period} , Climate : ${data.climate} , Gravity : ${data.gravity}`
                            : name === "Starships"
                            ? `Manufacturer : ${data.manufacturer} and Max Speed : ${data.max_atmosphering_speed}`
                            : name === "Species"
                            ? `Eye Color : [${data.eye_colors}] ,  Hair Color : [${data.hair_colors}], Skin Color : [${data.skin_colors}]`
                            : name === "Vehicles"
                            ? `Manufacturer : ${data.manufacturer} and Max Speed : ${data.max_atmosphering_speed}`
                            : ""
                          : "logo"}
                      </div>
                    </div>
                    <div className="bg-gray-600">
                      <div className="text-xl my-2 bg-gray-600">Genere</div>
                      <div className="bg-white text-black p-3 rounded-md">
                        Super Hero
                      </div>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-solid border-slate-200 rounded-b bg-gray-600">
                  <button
                    className="text-red-600 bg-black font-bold uppercase px-[45%] py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-white"
                    type="button "
                    onClick={() => {
                      setShowModal(false);
                      setData({});
                    }}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
