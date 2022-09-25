import React from "react";

import TaskTable from "../components/TaskTable";
import NavbarComponent from "../components/NavbarComponent";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const UserPage = ({ onDeleteTask, onComplete }) => {
  useEffect(() => {
    //  userContext.onDefaultIsHome();
  }, []);
  return (
    <>
      <NavbarComponent />

      <Grid container spacing={2} justifyContent="flex-end">
        <Grid item xs={4} md={2} sm={2}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            LinkComponent={Link}
            to="/user/add-task"
            sx={{
              color: "#7c7c7c",
              fontWeight: "bold",
              bgcolor: "white",
              marginTop: "10px",
            }}
          >
            Add Task
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TaskTable onDeleteTask={onDeleteTask} onComplete={onComplete} />;
        </Grid>
      </Grid>
    </>
  );
};

export default UserPage;
