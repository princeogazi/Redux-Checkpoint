import React, { useState } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";

const ListTask = () => {
  const [filter, setFilter] = useState("all");
  const tasks = useSelector((state) => state.tasks);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "done") return task.isDone;
    if (filter === "notDone") return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <label><b>Filter: </b></label>
        <select onChange={(e) => setFilter(e.target.value)} style={{marginTop: "10px"}}>
          <option value="all">All</option>
          <option value="done">Done</option>
          <option value="notDone">Not Done</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListTask;
