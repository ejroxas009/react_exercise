import React from "react";
import TaskForm from "../components/TaskForm";
import { addTask } from "../services/user";
import NavbarComponent from "../components/NavbarComponent";

const AddTaskPage = () => {
  const handleSubmit = (event, form) => {
    event.preventDefault();
    addTask(form).then((res) => {
      alert("A task is added to the list");
    });
  };
  return (
    <>
      <NavbarComponent />
      <TaskForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddTaskPage;
