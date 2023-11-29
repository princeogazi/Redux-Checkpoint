import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../JS/actions/actions";

const AddTask = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(
        addTask({ id: Date.now(), description: newTask, isDone: false })
      );
      setNewTask("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add task..."
        style={{width: "350px", height: "30px", borderRadius: "5px"}}
      />
      <button onClick={handleAddTask} style={{borderRadius: "5px", marginLeft: "5px", height: "30px"}}>Add Task</button> 
    </div>
  );
};

export default AddTask;
