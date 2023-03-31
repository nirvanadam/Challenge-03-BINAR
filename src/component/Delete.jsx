import React from "react";

function Delete() {
  return (
    <>
      <div className="flex gap-8 my-6 mx-5 lg:mx-10">
        <button className="bg-red-600 w-full py-2 rounded-sm text-white font-medium hover:bg-red-700 active:scale-95 transition duration-75">Delete done tasks</button>
        <button className="bg-red-600 w-full py-2 rounded-sm text-white font-medium hover:bg-red-700 active:scale-95 transition duration-75">Delete all tasks</button>
      </div>
    </>
  );
}

export default Delete;
