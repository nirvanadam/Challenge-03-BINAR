import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
// import data from "../data/data.json";

function TodoList() {
  return (
    <>
      {/* Todo List Button */}
      <div className="my-4 mx-3 md:mx-5 lg:mx-10">
        <h1 className="text-center mb-3 font-baiJamure font-medium text-xl">Todo List</h1>
        <div className="flex gap-6">
          <Link to="/all" className="bg-[#263238] rounded-sm w-full text-cyan-400 font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75 text-center">
            All
          </Link>
          <Link to="/done" className="bg-[#263238] rounded-sm w-full text-cyan-400 font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75 text-center">
            Done
          </Link>
          <Link to="/todo" className="bg-[#263238] rounded-sm w-full text-cyan-400 font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75 text-center">
            Todo
          </Link>
        </div>
      </div>

      {/* Data Todo */}
      {/* <div className="mt-10 mx-3 md:mx-5 lg:mx-10 flex flex-col gap-4">
        {data.map((task) => (
          <div key={task.id} className="flex border justify-between border-slate-300 px-4 py-3 rounded-sm">
            <p>{task.task}</p>
            <div className="flex gap-2">
              <input type="checkbox" checked={task.complete} name="" id="" />
              <button>E</button>
              <button>D</button>
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default TodoList;
