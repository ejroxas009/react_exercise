import React, { useState, useContext } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Joi from "joi";
import { useNavigate, Link } from "react-router-dom";
import { userLogin } from "../services/userAuth";
import { fetchTasks } from "../services/user";
import { LoginContext } from "../Context/LoginContext";
import { getCurrentUserRole } from "../services/userAuth";
import { UserContext } from "../Context/UserContext";
import { Typography } from "@mui/material";

const LoginComponent = () => {
  const userContext = useContext(UserContext);
  const loginContext = useContext(LoginContext);

  const { username, password } = loginContext.loginForm;
  const navigate = useNavigate();
  const handleChange = (event) => {
    loginContext.onLoginForm({
      ...loginContext.loginForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    userLogin(loginContext.loginForm)
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        fetchTasks().then((res) => userContext.onSetTasks(res.data));
        loginContext.onSetUser(getCurrentUserRole());
        if (loginContext.user.isAdmin) {
          navigate("/admin");
        } else if (!loginContext.user.isAdmin) {
          navigate("/user");
        }
      })
      .catch((error) => {
        if (error.response && error.response.data.statusCode === 400) {
          alert(error.response.data.message);
        }
      });
  };

  const schema = Joi.object({
    username: Joi.required(),
    password: Joi.required(),
  });

  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} md={4} sm={4}>
        <Card>
          <CardHeader title="Login" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  onChange={handleChange}
                  value={username}
                  label="Username"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  type="password"
                  onChange={handleChange}
                  value={password}
                  label="Password"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontSize: "12px",
                  }}
                >
                  Not a member?<Link to="/signup"> Signup now</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth>
              Login
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginComponent;
