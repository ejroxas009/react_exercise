import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Joi from "joi";
import { userSignup, adminCheck } from "../services/userAuth";

const SignUpComponent = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const { name, username, password } = signUpForm;

  const handleChange = (event) => {
    setSignUpForm({
      ...signUpForm,
      [event.currentTarget.name]: event.currentTarget.value,
    });
    const { error } = schema
      .extract(event.currentTarget.name)
      .label(event.currentTarget.name)
      .validate(event.currentTarget.value);
    if (error) {
      setErrors({
        ...errors,
        [event.currentTarget.name]: error.details[0].message,
      });
    } else {
      delete errors[event.currentTarget.name];
      setErrors(errors);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userId;
    userSignup(signUpForm)
      .then((res) =>
        adminCheck(res.data.id, { ...signUpForm, isAdmin: false }).then((res) =>
          console.log(res)
        )
      )
      .catch((error) => {
        if (error.response && error.response.data.statusCode === 400) {
          alert(error.response.data.message);
        }
      });
  };

  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(5).max(15).required(),
    password: Joi.string().min(8).required(),
  });

  const isSignUpFormInvalid = () => {
    const result = schema.validate(signUpForm);
    return !!result.error;
  };
  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs={12} md={4} sm={4}>
        <Card>
          <CardHeader title="Register" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  onChange={handleChange}
                  value={name}
                  error={!!errors.name}
                  helperText={errors.name}
                  label="Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="username"
                  onChange={handleChange}
                  value={username}
                  error={!!errors.username}
                  helperText={errors.username}
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
                  error={!!errors.password}
                  helperText={errors.password}
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
                  Already a member?<Link to="/login"> Login now</Link>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth disabled={isSignUpFormInvalid()}>
              Register
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUpComponent;
