import React, { useState, useRef } from 'react';

import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

function Main() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (edit) {
      const change = [...task];
      change.splice(editIndex, 1, newTask);
      setTask([...change]);
      setEdit(false);
      setEditIndex(-1);
      setNewTask('');
    } else {
      if (task.includes(newTask)) return;
      if (newTask) setTask([...task, newTask.trim()]);
      setNewTask('');
    }
  };

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleEdit = (e, index) => {
    setEdit(true);
    setEditIndex(index);
    setNewTask(task[index]);
    inputRef.current.focus();
  };

  const handleDelete = (e, index) => {
    const remove = [...task];
    remove.splice(index, 1);
    setTask([...remove]);
  };

  return (
    <div className="main">
      <h1>Task List</h1>
      <form action="#" onSubmit={handleSubmit} className="form">
        <input
          type="text"
          onChange={handleChange}
          value={newTask || ''}
          ref={inputRef}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <ul className="tarefas">
        {task.map((tasks, index) => (
          <li key={tasks}>
            {tasks}
            <span>
              <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
              <FaWindowClose
                className="delete"
                onClick={(e) => handleDelete(e, index)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/*
className
ul => tarefas
edit => edit
delete => delete
form => form
div principal => main
*/

export default Main;
