import axios from 'axios';
import { Navigate } from 'react-router-dom';

const api = axios.create({
  // baseURL: 'https://student-task-manager-api-1.onrender.com/api/v1',
  baseURL: 'http://localhost:4000/api/v1',
  timeout: 10000,
});

api.interceptors.request.use((req) => {
  if (localStorage.getItem('token'))
    req.headers.token = localStorage.getItem('token');

  return req;
});

api.interceptors.response.use((res) => res,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export const registerUser = (userData) => api.post('/user/register', userData);
export const loginUser = async (credentials) =>{
  return await api.post('/user/login', credentials)
};

export const getTasks = () => api.get('/tasks');
export const createTask = (task) => api.post('/tasks', task);
export const updateTask = (id, updates) => api.put(`/tasks/${id}`, updates);
export const deleteTask = (id) => api.delete(`/tasks/${id}`);

export const getRecentActivity = () => api.get("/activity");

export default api;