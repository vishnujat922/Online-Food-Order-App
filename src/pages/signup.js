// import React, { useState } from 'react';
// import {
//   Typography,
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Grid,
// } from '@mui/material';
// import Layout from '../components/layouts/layouts';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       const res = await fetch('https://d979-2401-4900-1ca2-78b6-f0e8-35c7-85ad-49e.ngrok.io/api/registration', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
      
//       if (res.ok) {
//         // Registration was successful
//         const data = await res.json();
//         console.log('Registration successful', data);
//         // You can redirect the user to another page or perform other actions here
//       } else {
//         // Registration failed
//         console.log('Registration failed');
//         // Handle the error or display a message to the user
//       }
//     } catch (error) {
//       console.error('Error in registration', error);
//       // Handle the error or display a message to the user
//     }
//   };

//   return (
//     <Layout>
//       <Container maxWidth="sm">
//         <Paper elevation={3} style={{ padding: '20px', background: '#ffff' }}>
//           <Typography
//             variant="h5"
//             gutterBottom
//             sx={{ color: 'rgb(34, 40, 38)', alignItems: 'center' }}
//           >
//             <b>Signup for My Food Order</b>
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="First Name"
//                   variant="outlined"
//                   fullWidth
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   label="Last Name"
//                   variant="outlined"
//                   fullWidth
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Email"
//                   variant="outlined"
//                   fullWidth
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Password"
//                   variant="outlined"
//                   fullWidth
//                   name="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   label="Confirm Password"
//                   variant="outlined"
//                   fullWidth
//                   name="confirmPassword"
//                   type="password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                   required
//                 />
//               </Grid>
//             </Grid>
//             <Button
//               type="submit"
//               variant="contained"
//               color="primary"
//               fullWidth
//               style={{ marginTop: '4px', height: '50px', fontSize: '21px' }}
//             >
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </Container>
//     </Layout>
//   );
// };

// export default Signup;





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
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('https://161d-2401-4900-1c09-8c5e-b5a1-590a-a479-ec32.ngrok-free.app/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName,lastName,email,password,confirmpassword}),
      });
      
      if (res.ok) {
        // Registration was successful
        const data = await res.json();
        console.log('Registration successful', data);
        // You can redirect the user to another page or perform other actions here
      } else {
        // Registration failed
        console.log('Registration failed');
        // Handle the error or display a message to the user
      }
    } catch (error) {
      console.error('Error in registration', error);
      // Handle the error or display a message to the user
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
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  name="firstName"
                  value={firstName}
                  onChange={(e)=>setFirstName(e.target.value)}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  name="lastName"
                  value={lastName}
                  onChange={(e)=>setLastName(e.target.value)}
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
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
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
                  value={confirmpassword}
                  onChange={(e)=>setConfirmpassword(e.target.value)}
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