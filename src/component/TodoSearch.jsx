import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function TodoSearch() {
  return (
    <>
      {/* Todo Seacrh */}
      <div className="my-5 mx-3 md:mx-5 lg:mx-10">
        <h1 className="text-center mb-3 font-baiJamure font-medium text-xl">Todo Search</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 border border-slate-400 rounded-sm p-4">
          {/* Search Bar */}
          <form className="flex">
            <div className="bg-[#263238] flex p-2 rounded-l-sm">
              <img src="/images/search_icon.svg" width="25px" alt="search_icon" className="invert" />
            </div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Search Todo"
              className="w-full border py-1 px-2 rounded-r-sm outline-none transition duration-200 placeholder:text-sm placeholder:font-light placeholder:transition placeholder:duration-500 focus:placeholder:-translate-x-48 focus:border-[#263238] invalid:focus:border-red-600"
            />
          </form>
          {/* Search Bar End */}

          <button className="bg-[#263238] rounded-sm text-cyan-400 font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75">Search</button>
          <Link to="/add" className="md:col-span-2 bg-[#263238] rounded-sm text-cyan-400 text-center font-medium py-2 hover:bg-gray-900 active:scale-95 transition duration-75">
            Add New Task
          </Link>
        </div>
      </div>
    </>
  );
}

export default TodoSearch;
