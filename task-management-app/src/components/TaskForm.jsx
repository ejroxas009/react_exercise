import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Joi from "joi";
import { addTask } from "../services/user";

const TaskForm = ({ onSubmit, initialValue }) => {
  const [taskForm, setTaskForm] = useState(
    initialValue
      ? initialValue
      : {
          title: "",
        }
  );

  //  / const { title } = taskForm;
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setTaskForm({
      ...taskForm,
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   addTask(taskForm).then((res) => {
  //     console.log(res);
  //   });
  // };

  const schema = Joi.object({
    title: Joi.string().min(3).required(),
  });

  const isSignUpFormInvalid = () => {
    const result = schema.validate(taskForm);
    return !!result.error;
  };
  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={(event) => {
        onSubmit(event, taskForm);
        setTaskForm({ title: "" });
      }}
      sx={{ marginTop: "25vh" }}
    >
      <Grid item xs={12} md={4} sm={4}>
        <Card>
          <CardHeader title={initialValue ? "Edit Task" : "Add Task"} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="title"
                  onChange={handleChange}
                  value={taskForm.title}
                  error={!!errors.title}
                  helperText={errors.title}
                  label="Task Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <CardActions>
            <Button type="submit" fullWidth disabled={isSignUpFormInvalid()}>
              Submit
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TaskForm;
