import React, { useEffect, useState } from "react";
import { getAllTasks } from "../services/admin";
import AllTasksTable from "../components/AllTasksTable";
import NavbarComponent from "../components/NavbarComponent";

const AdminPage = () => {
  const [allTasks, setAllTasks] = useState([]);
  useEffect(() => {
    getAllTasks().then((res) => {
      console.log(res.data);
      setAllTasks(res.data);
    });
  }, []);

  return (
    <>
      <NavbarComponent />
      <AllTasksTable allTasks={allTasks} />
    </>
  );
};

export default AdminPage;
