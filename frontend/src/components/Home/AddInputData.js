import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCancel } from "react-icons/md";
import { toast } from "react-hot-toast";

const AddInputData = ({
  setAddInputData,
  setShowCard,
  updatedData,
  setUpdatedData,
}) => {
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const hadleShowCard = () => {
    setAddInputData(false);
    setShowCard(true);

    setUpdatedData({
      id: "",
      title: "",
      description: "",
    });

    setData({
      title: "",
      description: "",
    });
  };

  const handleData = (e) => {
   
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const createTasks = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3001/api/v1/createTasks",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
      hadleShowCard();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const updateTasks = async () => {
    try {
  
      const res = await axios.put(
        `http://localhost:3001/api/v1/updateTasks/${updatedData.id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      toast.success(res.data.message);
      hadleShowCard()
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  

  useEffect(() => {
    if (updatedData.id) {
      setData({
        title: updatedData.title,
        description: updatedData.description,
      });
    }
  }, [updatedData]);

  return (
    <>
      <div
        className="cursor-pointer absolute w-9/12 flex justify-end"
        onClick={hadleShowCard}
      >
        <MdCancel size={40} />
      </div>
      <div className="w-full h-[93vh] bg-gray-900  rounded-lg flex flex-col items-center pt-32">
        <div className="mb-4">
          <p className="text-3xl text-white ">Add Tasks</p>
        </div>
        <div className="w-full flex flex-col justify-center items-center p-1 text-white">
          <input
            className="w-2/6 mb-3 bg-gray-800 rounded-sm px-2 py-3  text-xl outline-none"
            type="text"
            name="title"
            id=""
            placeholder="Title "
            onChange={handleData}
            value={data.title}
          />
          <textarea
            className="w-2/6 bg-gray-800 rounded-sm px-2 py-3  text-xl outline-none"
            rows={10}
            name="description"
            id=""
            placeholder="Description....."
            onChange={handleData}
            value={data.description}
          ></textarea>
        </div>

        {updatedData.id === "" ? (
          <div className="mt-3 bg-blue-900 w-[90px] rounded-md py-3 text-center">
            <button onClick={createTasks}>Submit</button>
          </div>
        ) : (
          <div className="mt-3 bg-blue-900 w-[90px] rounded-md py-3 text-center">
            <button onClick={updateTasks}>Update</button>
          </div>
        )}
      </div>{" "}
    </>
  );
};

export default AddInputData;
