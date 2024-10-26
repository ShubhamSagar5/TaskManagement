import React from "react";
import { FaTasks } from "react-icons/fa";
import { MdLabelImportantOutline } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { GrTasks } from "react-icons/gr";
import { IoMdLogOut } from "react-icons/io";
import { NavLink } from "react-router-dom";
import '../../App.css'

const Sidebar = () => {
  const data = [
    {
      title: "All Tasks",
      icon: <FaTasks size={20}/>,
      path:"/"
    },
    {
      title: "Important Tasks",
      icon: <MdLabelImportantOutline size={20} />,
      path:"/important"
    },
    {
      title: "Completed Tasks",
      icon: <IoCheckmarkDoneCircleOutline size={20} />,
      path:"/completed"
    },
    {
      title: "Incompleted Tasks",
      icon: <GrTasks size={20} />,
      path:"/incomplete",
    },
  ];

  return (
    <div className=" flex flex-col justify-between h-full">
      <div>
        <p className="font-bold text-xl">Stay Organized Always</p>
        <p className="mt-2">har@gmail.com</p>
        <hr />
      </div>
      <div className=" h-2/6 flex flex-col gap-4 justify-between p-2">
        {data?.map((item, i) => {
          return (
           <NavLink to={item.path}  className={({isActive}) => (isActive ? 'active-link' : "")} >
            <div className="flex items-center p-2  gap-4  rounded-lg hover:bg-gray-700 hover:border hover:border-black cursor-pointer">
              <span className=""> {item.icon}</span>
              <span> {item.title}</span>
            </div>
           </NavLink> 
          );
        })}
      </div>

      <div className="p-3">
        <div className="flex gap-3 border border-gray-300 rounded-lg p-2 items-center hover:bg-gray-700  hover:border hover:border-black cursor-pointer">
          <IoMdLogOut size={20}/>
          <button>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
