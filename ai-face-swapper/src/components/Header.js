import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          FaceMingle
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/generate">Generate</Button>
        <Button color="inherit" href="/login">Login</Button>
        <Button color="inherit" href="/signup">Signup</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
