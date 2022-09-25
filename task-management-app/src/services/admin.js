import http from "../services/http";

export const getAllTasks = () => {
  return http.get("/tasks/all");
};
