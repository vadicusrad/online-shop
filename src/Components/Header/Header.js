import React from 'react';

import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Container, Typography, Box, Badge } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';

function Header({ itemsCount, burgerStateToggle, burgerNavState }) {
  const navLinkStyles = {
    color: 'white',
    textDecoration: 'none',
  };
  return (
    <AppBar position='fixed'>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography component='span' variant='h5'>
            My Store
          </Typography>
          <Box display='flex'>
            <Typography mr='40px' variant='subtitle2'>
              <Link style={navLinkStyles} to={'/'}>
                Main page{' '}
              </Link>
            </Typography>
            <Typography mr='40px' variant='subtitle2'>
              <Link style={navLinkStyles} to={'/about'}>
                About
              </Link>
            </Typography>

            <Badge
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              color='secondary'
              badgeContent={itemsCount}
            >
              <Link style={{ color: 'white' }} to={'/cart'}>
                <ShoppingBasket />
              </Link>
            </Badge>
          </Box>
        </Toolbar>

        <div
          onClick={() => {
            burgerStateToggle();
          }}
          className={
            burgerNavState ? 'header-burger closedBurgerIcon' : 'header-burger'
          }
        >
          <span></span>
        </div>
      </Container>
    </AppBar>
  );
}

export default Header;
