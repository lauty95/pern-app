import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import Task from './Task';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  const addTask = async (task) => {
    const response = await axios.post('http://localhost:3001/tasks', task);
    setTasks([...tasks, response.data]);
  };

  const updateTask = async (task) => {
    const response = await axios.put(`http://localhost:3001/tasks/${task.id}`, task);
    setTasks(tasks.map(t => t.id === task.id ? response.data : t));
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      {tasks.map(task => (
        <Task key={task.id} task={task} updateTask={updateTask} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;
