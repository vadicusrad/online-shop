import { Box, Link, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  const boxStyles = {
    color: 'white',
    height: '90px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    position: 'fixed',
    bottom: '0px',
    left: '0px',
    marginTop: '20px',
    paddingTop: '0',
    flexDirection: 'column',
  };
  return (
    <footer>
      <Box pt={5} style={boxStyles} sx={{ bgcolor: 'text.primary' }}>
        <Typography>
          Made with hate and love by{' '}
          <Link
            color='#fff'
            target='_blank'
            rel='nofollow noopener noreferrer'
            href='https://t.me/Vadicus'
          >
            Vadicus
          </Link>
        </Typography>
        <Typography ml='20px'>{new Date().getFullYear()}</Typography>
      </Box>
    </footer>
  );
}

export default Footer;
