import React, { useState } from "react";
import { AiOutlineRight, AiOutlineUp } from "react-icons/ai";

const Sidebar = ({ data, handleShow }) => {
  const [expand, setExpand] = useState(false);

  const hasSubfolders = data.sub && data.sub.length > 0;

  const toggleExpand = () => {
    if (hasSubfolders) {
      setExpand((prevExpand) => !prevExpand);
    }
  };

  const handleItemClick = (item) => {
    if (item.isFolder) {
      // If it's a folder, toggle expand
      toggleExpand();
    } else {
      // If it's a file, handle the click action
      handleShow(item.title);
    }
  };

  return (
    <div>
      <div
        className="folder flex items-center justify-around cursor-pointer gap-10 text-xl w-full text-white font-mono py-5"
        onClick={() => handleItemClick(data)}
      >
        <div>🗂 {data.title}</div>
        <div>
          {hasSubfolders ? expand ? <AiOutlineUp /> : <AiOutlineRight /> : null}
        </div>
      </div>

      {expand && (
        <div>
          {data.sub.map((item, index) => (
            <Sidebar key={index} data={item} handleShow={handleShow} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
