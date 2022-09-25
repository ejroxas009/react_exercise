import http from "./http";
import jwtDecode from "jwt-decode";

export const userLogin = (user) => {
  return http.post("/auth", user);
};

export const userSignup = (user) => {
  return http.post("/users", user);
};

export const adminCheck = (id, updatedForm) => {
  return http.put(`/users/${id}`, updatedForm);
};

export const getCurrentUserRole = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    const decoded = jwtDecode(accessToken);
    return decoded;
  }
  return "empty";
};
