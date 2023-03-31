import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

function Add() {
  const navigate = useNavigate();

  const [task, setTask] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const dataLength = data.length;
    data.push({
      id: dataLength + 1,
      task,
      complete: false,
    });

    return navigate("/all");
  };

  return (
    <>
      <h1 className="text-center mb-3 font-baiJamure font-medium text-xl">Todo Input</h1>
      <form className="flex flex-col gap-5 my-2 mx-3 md:mx-5 lg:mx-10 border border-slate-400 p-3" onSubmit={onSubmit}>
        <div className="flex">
          <div className="bg-[#263238] flex p-2 rounded-l-sm">
            <img src="/images/add_icon.svg" width="25px" alt="search_icon" className="invert" />
          </div>
          <input
            type="search"
            name=""
            id=""
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Input / Edit Todo"
            className="w-full border py-1 px-2 rounded-r-sm outline-none transition duration-200 placeholder:text-sm placeholder:font-light placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
          />
        </div>
        <button type="submit" className="bg-[#263238] rounded-sm text-cyan-400 font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75">
          Submit
        </button>
      </form>
    </>
  );
}

export default Add;
