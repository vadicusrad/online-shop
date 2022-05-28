import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

function About() {
  const navigate = useNavigate();
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '80vh',
    paddingBottom: '50px',
  };
  return (
    <Box style={boxStyles}>
      <Typography variant='h4' component='h1'>
        About this app
      </Typography>
      <Typography textAlign='center'>This is online-store.</Typography>
      <Typography textAlign='center'>
        In this project I used JSX, JavaScript, React and Material UI.
      </Typography>
      <Typography textAlign='center'>
        You can use category filter, information about item in modal window, put
        items in cart, and other basic cart functions.
      </Typography>
      <Typography textAlign='center'>
        In this app I used free API by https://fakestoreapi.com.
      </Typography>
      <Typography textAlign='center'>In plans add sign up function.</Typography>
      <Button sx={{ mt: 3 }} variant='contained' onClick={() => navigate(-1)}>
        Back
      </Button>
    </Box>
  );
}

export default About;
