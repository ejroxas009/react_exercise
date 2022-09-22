import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import Joi from "joi";

const buttonTheme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
  },
});

const ProductForm = ({ onSubmit, initialValue }) => {
  const [form, setForm] = useState(
    initialValue || {
      name: "",
      description: "",
      price: "",
      quantityInStock: "",
      imageFileName: "",
      imageUrl: "",
    }
  );
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    description: Joi.string().min(3).max(10000000000).required(),
    price: Joi.number().min(0).max(10000000000).required(),
    quantityInStock: Joi.number().min(0).max(10000000000).allow("").optional(),
    imageFileName: Joi.string()
      .min(3)
      .max(500)
      .allow(null)
      .allow("")
      .optional(),
    imageUrl: Joi.string().min(3).max(500).required(),
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.currentTarget.name]: event.currentTarget.value });

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
    onSubmit(form);
    navigate("/");
    // console.log(form);
  };

  const isFormInvalid = () => {
    const result = schema.validate(form);
    // console.log(result.error);
    return !!result.error;
  };

  return (
    <Grid
      container
      justifyContent="center"
      component="form"
      onSubmit={handleSubmit}
    >
      <Grid item xs={6}>
        <Card>
          <CardHeader title={`${initialValue ? "Edit" : "Add"} Product`} />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="name"
                  error={!!errors.name}
                  helperText={errors.name}
                  value={form.name}
                  onChange={handleChange}
                  label="Name"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={form.description}
                  onChange={handleChange}
                  error={!!errors.description}
                  helperText={errors.description}
                  label="Description"
                  name="description"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={form.price}
                  error={!!errors.price}
                  helperText={errors.price}
                  label="Price"
                  onChange={handleChange}
                  name="price"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={form.quantityInStock}
                  onChange={handleChange}
                  error={!!errors.quantityInStock}
                  helperText={errors.quantityInStock}
                  label="Quantity In Stock"
                  name="quantityInStock"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={form.imageFileName}
                  onChange={handleChange}
                  error={!!errors.imageFileName}
                  helperText={errors.imageFileName}
                  label="Image File Name"
                  name="imageFileName"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={form.imageUrl}
                  onChange={handleChange}
                  error={!!errors.imageUrl}
                  helperText={errors.imageUrl}
                  label="Image URL"
                  name="imageUrl"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
          </CardContent>
          <ThemeProvider theme={buttonTheme}>
            <CardActions>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                disabled={isFormInvalid()}
              >
                {/* disabled={isFormInvalid()} */}
                Submit
              </Button>
            </CardActions>
          </ThemeProvider>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProductForm;
