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
          width: '100p%',
          justifyContent: 'space-between',
        }}
        alignItems='center'
      >
        <Typography sx={{ width: '200px' }} variant='subtitle2' component='h6'>
          {item.title}
        </Typography>

        <Box
          component='img'
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
          }}
          src={item.image}
          alt={item.title}
        />

        <Typography style={{ marginRight: '30px' }} variant='subtitle1'>
          price: <strong>{item.price} </strong> $
        </Typography>

        <ButtonGroup disableElevation variant='contained'>
          <Button variant='contained' onClick={() => incrItemCount(item)}>
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
          <Button variant='contained' onClick={() => decrItemCount(item)}>
            -
          </Button>
        </ButtonGroup>
      </ListItem>
      <Divider variant='inset' />
    </>
  );
}

export default CartItem;
