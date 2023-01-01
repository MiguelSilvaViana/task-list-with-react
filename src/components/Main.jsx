import React, { useState, useRef, useEffect } from 'react';

import Form from './Form/Index';
import Tasks from './Tasks/index';

import './Main.css';

function Main() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const inputRef = useRef(null);

  // loading the components of the localStorage
  useEffect(() => {
    const taskInLocalStorage = localStorage.getItem('tasks');
    // console.log('loading tasks', taskInLocalStorage);
    if (taskInLocalStorage) setTask(JSON.parse(taskInLocalStorage));
  }, []);

  useEffect(() => {
    if (newTask === '') localStorage.setItem('tasks', JSON.stringify(task));
  }, [task]);

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
    setNewTask('');
    const remove = [...task];
    remove.splice(index, 1);
    setTask([...remove]);
  };

  return (
    <div className="main">
      <h1>Task List</h1>

      <Form
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        newTask={newTask}
        inputRef={inputRef}
      />
      <Tasks handleDelete={handleDelete} handleEdit={handleEdit} task={task} />
    </div>
  );
}

export default Main;
