import React, { useContext } from "react";

import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import { UserContext } from "../Context/UserContext";
import { Grid } from "@mui/material";

const TaskTable = ({ onDeleteTask, onComplete }) => {
  const userContext = useContext(UserContext);
  return (
    <>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#F2AA4CFF" }}>
                <TableRow>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Task Number
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Task
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Status
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userContext.tasks.map((task, index) => (
                  <TableRow key={task.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>
                      {task.completed ? "Done" : "On-going"}
                    </TableCell>

                    <TableCell>
                      {task.completed ? (
                        false
                      ) : (
                        <span>
                          {" "}
                          <IconButton
                            onClick={() => {
                              onComplete(task.id, { ...task, completed: true });
                            }}
                          >
                            <DoneIcon />
                          </IconButton>
                          <IconButton
                            onClick={userContext.onToggleIsHome}
                            LinkComponent={Link}
                            to={`/user/task/${task.id}/edit`}
                          >
                            <EditIcon />
                          </IconButton>
                        </span>
                      )}

                      <IconButton
                        onClick={() => {
                          onDeleteTask(task.id);
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default TaskTable;
