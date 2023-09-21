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

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Layout>
      <Container maxWidth="sm">
        <Paper elevation={3} style={{ padding: '20px', background: '#ffff' }}>
          <Typography variant="h5" gutterBottom sx={{ color: 'rgb(34, 40, 38)', alignItems: 'center' }}>
            <b>Login for My Food Order</b>
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
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

            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: '20px' }}
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Login;