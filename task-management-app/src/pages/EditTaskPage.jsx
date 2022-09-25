import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { editTask } from "../services/user";
import NavbarComponent from "../components/NavbarComponent";
import { UserContext } from "../Context/UserContext";
const EditTaskPage = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const params = useParams();

  const { id, completed, userId, ...task } = userContext.tasks.find(
    (task) => task.id === +params.id
  );

  const handleSubmit = (event, form) => {
    event.preventDefault();
    editTask(params.id, form).then((res) => {
      alert("Edit successful");
      navigate("/user");
    });
  };

  return (
    <>
      <NavbarComponent />
      <TaskForm initialValue={task} onSubmit={handleSubmit} />;
    </>
  );
};

export default EditTaskPage;
