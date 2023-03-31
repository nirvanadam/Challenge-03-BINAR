import React, { useState } from "react";
import data from "../data/data.json";

function Done() {
  const [task, setTask] = useState(data);

  const handleDelete = (id) => {
    const updatedTasks = task.filter((task) => task.id !== id);
    setTask(updatedTasks);
  };

  return (
    <>
      <form action="">
        <div className="mt-10 mx-3 md:mx-5 lg:mx-10 flex flex-col gap-4">
          {data.map((task) => (
            <div key={task.id} className="flex border justify-between border-slate-300 px-4 py-3 rounded-sm">
              <p>{task.task}</p>
              <div className="flex gap-4">
                <input type="checkbox" checked={task.complete} name="" id="" />
                <button>
                  <img src="images/edit_icon.svg" alt="" width="20px" />
                </button>
                <button onClick={() => handleDelete(task.id)}>
                  <img src="images/delete_icon.svg" alt="" width="20px" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </form>
    </>
  );
}

export default Done;
