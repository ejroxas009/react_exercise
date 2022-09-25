import React from "react";
import SignUpComponent from "../components/SignUpComponent";
import { Grid } from "@mui/material";

const SignupPage = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginTop: "30vh", marginLeft: "20px" }}
      >
        <Grid item md={3} sm={3} xs={0}>
          <h1>Task Management App</h1>
        </Grid>
        <Grid item xs={12} md={9} sm={9}>
          <SignUpComponent />
        </Grid>
      </Grid>
    </>
  );
};

export default SignupPage;
