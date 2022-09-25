import React from "react";
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
import Grid from "@mui/material/Grid";

const AllTasksTable = ({ allTasks }) => {
  //console.log(allTasks);
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "20px" }}
      >
        <Grid item xs={12} md={9} sm={9} lg={9}>
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
                    User ID
                  </TableCell>
                  <TableCell sx={{ fontWeight: "bold", color: "white" }}>
                    Status
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allTasks.map((task, index) => (
                  <TableRow key={task.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{task.title}</TableCell>
                    <TableCell>{task.userId}</TableCell>
                    <TableCell>
                      {task.completed ? "Done" : "On-going"}
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

export default AllTasksTable;
