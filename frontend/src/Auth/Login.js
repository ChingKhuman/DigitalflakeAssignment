import * as React from 'react';

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import image289 from '../Images/image289.jpg'
import axios from 'axios'




// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function Login() {

    const [showPassword, setShowPassword] = React.useState(false);
    const [email, setEmail]= React.useState()
    const [password, setPassword] = React.useState()

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  axios.defaults.withCredentials = true;
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:6000/user/login', {
        email,password
    }).then(res => console.log(res.data))
    .catch(err => console.log(err))
    
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <img src={image289} alt="Category" style={{ width: '251px', height: '108px', paddingRight:'15px' }} /> 
          
          <Typography component="h4" variant="h6">
            Welcome to Digitalflake Admin
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
             
        
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email ID"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
        required
        fullWidth
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        id="password"
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
        InputProps={{
          endAdornment: (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                paddingRight: '8px', // Adjust the padding as needed
                cursor: 'pointer',
              }}
              onClick={handleTogglePasswordVisibility}
            >
                {showPassword ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
             
            </div>
          ),
        }}
      />
               
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#5C218B' }}
            >
             Login
            </Button>
            
          </Box>
        </Box>
 
      </Container>
    </ThemeProvider>
  );
}