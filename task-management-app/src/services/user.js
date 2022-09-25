import http from "../services/http";

export const fetchTasks = () => {
  return http.get("/tasks");
};

export const addTask = (addedTask) => {
  return http.post("tasks", addedTask);
};

export const editTask = (id, editedTask) => {
  return http.put(`/tasks/${id}`, editedTask);
};

export const deleteTask = (id) => {
  return http.delete(`/tasks/${id}`);
};

export const markTask = (id, editedTask) => {
  return http.put(`/tasks/${id}`, editedTask);
};
