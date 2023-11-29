import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../JS/actions/actions';

function Task({ task }) {
  const [editMode, setEditMode] = useState(false);
  const [editedTask, setEditedTask] = useState(task.description);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, editedTask));
    setEditMode(false);
  };

  return (
    <div>
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} className='tasklist'/>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedTask}
            onChange={(e) => setEditedTask(e.target.value)}
            style={{width: "200px", height: "30px", borderRadius: "5px"}}
          />
          <button onClick={handleEdit} style={{borderRadius: "5px", marginLeft: "5px", height: "30px"}}>Save</button>
        </>
      ) : (
        <>
          <span>{task.description}</span>
          <button onClick={() => setEditMode(true)} style={{borderRadius: "5px", marginLeft: "5px", height: "30px"}}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Task;