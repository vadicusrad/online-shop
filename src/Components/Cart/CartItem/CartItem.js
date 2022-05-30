import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid,
  ListItem,
  Typography,
} from '@mui/material';
import React from 'react';

function CartItem({ item, cartItems, setCartItems }) {
  function incrItemCount(item) {
    let newArr = [...cartItems];
    newArr.forEach((arrItem) => {
      if (arrItem === item) {
        arrItem.count++;
      }
      setCartItems(newArr);
    });
  }

  function decrItemCount(item) {
    let newArr = [...cartItems];

    newArr.forEach((arrItem, i) => {
      if (arrItem === item) {
        if (arrItem.count === 1) {
          newArr.splice(i, 1);
        } else {
          arrItem.count--;
        }
      }
      setCartItems(newArr);
    });
  }

  return (
    <>
      <ListItem
        sx={{
          height: '120px',
          width: '100%',
          justifyContent: 'space-between',
        }}
        alignItems='center'
      >
        <Grid container gridTemplateRows='auto'>
          <Grid item xs={6} md={3} sx={{ width: '200px' }}>
            <Typography variant='subtitle2' component='h6'>
              {item.title}
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box
              component='img'
              sx={{
                width: '100px',
                height: '100px',
                objectFit: 'contain',
              }}
              src={item.image}
              alt={item.title}
            />
          </Grid>
          <Grid item xs={6} md={3} sx={{ width: '200px' }}>
            <ButtonGroup disableElevation variant='contained'>
              <Button
                size='small'
                variant='contained'
                onClick={() => incrItemCount(item)}
              >
                +
              </Button>
              <Typography
                alignSelf='center'
                ml='20px'
                mr='20px'
                variant='subtitle1'
              >
                {item.count}
              </Typography>
              <Button
                size='small'
                variant='contained'
                onClick={() => decrItemCount(item)}
              >
                -
              </Button>
            </ButtonGroup>
          </Grid>
          <Grid item xs={6} md={3} sx={{ width: '200px' }}>
            <Typography
              style={{ marginRight: '30px', width: '100%', height: '100%' }}
              variant='subtitle1'
            >
              price: <strong>{item.price} </strong> $
            </Typography>
          </Grid>
        </Grid>
      </ListItem>
      <Divider variant='inset' />
    </>
  );
}

export default CartItem;
