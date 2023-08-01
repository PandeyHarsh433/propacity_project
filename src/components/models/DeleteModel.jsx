import React from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const DeleteModal = ({ data, name, setData }) => {
  const handleClick = () => {
    setData({});
  };

  return (
    <div
      className="min-w-screen h-screen animated fadeIn faster fixed left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-transparent"
      id="modal-id"
    >
      <div className="w-full max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg bg-gray-400">
        <div className="bg-gray-400">
          <div className="text-center p-5 flex-auto justify-center bg-gray-400">
            <AiOutlineExclamationCircle className="w-16 h-16 flex items-center text-red-500 mx-auto bg-gray-400" />
            <h2 className="text-xl font-bold py-4 bg-gray-400">Caution!</h2>
            <p className="text-sm text-gray-800 px-8 bg-gray-400">
              Are you sure you want to delete
              {data
                ? name === "Films"
                  ? ` ${data.title}`
                  : ` ${data.name}`
                : "Movies Name"}
              ?
            </p>
          </div>
          <div className="p-3 mt-2 text-center space-x-4 md:block bg-gray-400">
            <button
              className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100"
              onClick={handleClick}
            >
              Cancel
            </button>
            <button
              className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600"
              onClick={handleClick}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
