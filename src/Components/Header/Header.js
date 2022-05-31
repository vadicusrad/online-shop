import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Container, Typography, Box, Badge } from '@mui/material';
import { ShoppingBasket } from '@mui/icons-material';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

function Header({ itemsCount }) {
  const navLinkStyles = {
    color: 'black',
    textDecoration: 'none',
    margin: '0px',
  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position='fixed'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            My Fake Store
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
                <Link
                  onClick={handleCloseNavMenu}
                  style={navLinkStyles}
                  to={'/'}
                >
                  Main page
                </Link>
              </MenuItem>

              <MenuItem>
                <Link
                  onClick={handleCloseNavMenu}
                  style={navLinkStyles}
                  to={'/about'}
                >
                  About
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant='h6'
            noWrap
            component='a'
            href='/'
            sx={{
              mr: 4,

              fontFamily: 'Roboto',
              fontWeight: 700,
              fontSize: '1.5rem',
              color: 'inherit',
              textDecoration: 'none',
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
            }}
          >
            My Fake Store
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Link style={navLinkStyles} to={'/'}>
              <Button sx={{ color: 'white', display: 'block' }}>
                Main page
              </Button>
            </Link>

            <Link style={navLinkStyles} to={'/about'}>
              <Button sx={{ color: 'white', display: 'block' }}>About</Button>
            </Link>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
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
      </Container>
    </AppBar>
  );
}

export default Header;
