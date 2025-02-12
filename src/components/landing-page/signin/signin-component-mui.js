import React, { useEffect, useState } from 'react';
//import signup from './signup/signup-component-mui';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton'; // Import IconButton
import VisibilityIcon from '@mui/icons-material/Visibility'; // Import the visibility icon
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'; // Import the visibility off icon


export default function SignIn() {
  

  const [popupMessage, setPopupMessage] = useState('');
  const [popupTitle, setPopupTitle] = useState('Confirmation');
  const [open, setOpen] = React.useState(false);
  const [confirmButtonTitle, setConfirmButtonTitle] = useState('Ok');
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const openPopup = (title, message, confirmButtonTitle) => {
    setPopupTitle(title);
    setPopupMessage(message);
    setConfirmButtonTitle(confirmButtonTitle);
    handleOpen();
  };

  //const { setAuthorization } = useAppContext();
  const [showPassword, setShowPassword] = React.useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


  return (
    // <ThemeProvider theme={defaultTheme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile_no"
            label="Mobile Number"
            name="mobile_no"
            autoComplete="mobile_no"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            id="password"
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <IconButton onClick={togglePasswordVisibility} onMouseDown={handleMouseDownPassword} edge="end">
                  {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              )
            }}
          />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="forget-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
                <Link href="signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
          </Grid>
        </Box>
      </Box>
    
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </Container>
    // </ThemeProvider>
  );
}
