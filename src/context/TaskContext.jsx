import { createContext, useState } from "react";

import {
  getTasks,
  createTask,
  deleteTask,
} from "../services/api";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  // Get all tasks
  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();
      window.localStorage.setItem("tasks", JSON.stringify(data));
      //  window.localStorage.setItem("tasks", data);
      setTasks(data);
    } catch (err) {
      console.log("Fetch error:", err);
    }
  };

  // Add task
  const addTask = async (title) => {
    try {
      const { data } = await createTask({ title });
      setTasks([...tasks, data]);
    } catch (err) {
      console.log("Add error:", err);
    }
  };

  // Delete task
  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t._id !== id));
    } catch (err) {
      console.log("Delete error:", err);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTasks,
        addTask,
        removeTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
