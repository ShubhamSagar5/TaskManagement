import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GrTasks } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <FaTasks />,
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportantOutline />,
    },
    {
      title: "Completed Tasks",
      icon: <IoCheckmarkDoneCircleOutline />,
    },
    {
      title: "Incompleted Tasks",
      icon: <GrTasks />,
    },
  ];

  return (
    <div className=" flex flex-col justify-between h-full">
      <div>
        <p className="font-bold text-xl">Stay Organized Always</p>
        <p className="mt-2">har@gmail.com</p>
        <hr />
      </div>
      <div className=" h-2/6 flex flex-col justify-between p-3">
        {data?.map((item, i) => {
          return (
            <div className="flex items-center p-2  gap-4 border border-gray-300 rounded-lg hover:bg-gray-600 hover:text-black hover:border hover:border-black cursor-pointer">
              <span className=""> {item.icon}</span>
              <span> {item.title}</span>
            </div>
          );
        })}
      </div>

      <div className="p-3">
        <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center hover:bg-gray-600 hover:text-black hover:border hover:border-black cursor-pointer">
          <IoMdLogOut />
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
