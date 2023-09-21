import React, { useState } from 'react';
import {
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Grid,
} from '@mui/material';
import Layout from '../components/layouts/layouts';

const Signup = () => {
  const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    // email: '',
    // password: '',
    // confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // https://6475042e7de100807b1c11bc.mockapi.io/register
    try {  //https://8fee-2401-4900-1ca3-718-4cd8-a244-eabd-4482.ngrok.io
      const response = await fetch('https://6475042e7de100807b1c11bc.mockapi.io/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Authorization': 'Bearer YourAccessTokenHere', // Replace with your actual access token
        },
        body: JSON.stringify(formData), // Send the form data as JSON
      });

      if (response.ok) {
        alert('Registration Successful');

      } else {
        try {
          const responseData = await response.json();
          alert(`Registration failed: ${responseData.error}`); // Assuming the API returns an error message in JSON
        } catch (error) {
          console.error('Error parsing JSON response:', error);
          alert('Registration failed: An error occurred');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <Layout>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', background: '#ffff' }}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: 'rgb(34, 40, 38)', alignItems: 'center' }}
          >
            <b>Signup for My Food Order</b>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Confirm Password"
                  variant="outlined"
                  fullWidth
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '4px', height: '50px', fontSize: '21px' }}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Signup;
