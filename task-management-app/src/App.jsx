import NavbarComponent from "./components/NavbarComponent";
import CssBaseline from "@mui/material/CssBaseline";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import UserPage from "./pages/UserPage";

import AddTaskPage from "./pages/AddTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminPage from "./pages/AdminPage";
import { fetchTasks, deleteTask, markTask } from "./services/user";
import { useEffect, useState, useContext } from "react";
import { LoginContext } from "./Context/LoginContext";
import { UserContext } from "./Context/UserContext";
import { getCurrentUserRole } from "./services/userAuth";
import "./App.css";

function App() {
  const loginContext = useContext(LoginContext);
  const userContext = useContext(UserContext);
  //const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      fetchTasks().then((res) => userContext.onSetTasks(res.data));
    }
  }, [userContext.tasks]);

  useEffect(() => {
    loginContext.onSetUser(getCurrentUserRole());
  }, []);

  const handleDeleteTask = (id) => {
    deleteTask(id).then((res) => {
      userContext.onSetTasks(
        userContext.tasks.filter((task) => task.id !== id)
      );
    });
  };

  const handleMarkAsComplete = (id, editedTask) => {
    markTask(id, editedTask).then((res) => {
      console.log(res);
      userContext.onSetTasks(
        userContext.tasks.filter((task) => {
          if (task.id === id) {
            return editedTask;
          }

          return task;
        })
      );
    });
  };

  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
        <Route
          path="/user"
          element={
            loginContext.user !== "empty" && !loginContext.user.isAdmin ? (
              <UserPage
                onDeleteTask={handleDeleteTask}
                onComplete={handleMarkAsComplete}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/user/add-task"
          element={
            loginContext.user !== "empty" && !loginContext.user.isAdmin ? (
              <AddTaskPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/user/task/:id/edit"
          element={
            loginContext.user !== "empty" && !loginContext.user.isAdmin ? (
              <EditTaskPage />
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route path="/not-found" element={<NotFoundPage />}></Route>
        <Route path="*" element={<Navigate to="/not-found" />}></Route>
        <Route
          path="/admin"
          element={
            loginContext.user !== "empty" && loginContext.user.isAdmin ? (
              <AdminPage />
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

//----thursday
//Navbar -done
//loginForm - done
//registerForm-done
//routing  - done

//user page

//Edit task - done
//Delete Task - done

//Mark as complete -done

//Navbar:
//logout - done
//home button- use context api - done

//Admin page -ui
//avatar - done
//Route guards :
//user Routes -done
//admin routes

//login to signup
//signup to login
//Extras:
//Search feature

//add task - alert, navbar, clear form
//edit task - alert, navbar, clear form
