import React from "react";
import data from "../data/data.json";

const unCompletedTask = data.filter((task) => task.complete === false);

function Done() {
  return (
    <>
      <div className="mt-10 mx-3 md:mx-5 lg:mx-10 flex flex-col gap-4">
        {unCompletedTask.map((task) => (
          <div key={task.id} className="flex border justify-between border-slate-300 px-4 py-3 rounded-sm">
            <p>{task.task}</p>
            <div className="flex gap-4">
              <input type="checkbox" checked={task.complete} name="" id="" />
              <button>
                <img src="images/edit_icon.svg" alt="" width="20px" />
              </button>
              <button>
                <img src="images/delete_icon.svg" alt="" width="20px" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Done;
