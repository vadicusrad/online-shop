import React from 'react';

import CartItem from './CartItem/CartItem';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Divider,
  ListItem,
  Stack,
  Typography,
} from '@mui/material';

function Cart({ cartItems, setCartItems }) {
  const navigate = useNavigate();
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '70vh',
    minHeight: '300px',
    marginBottom: '200px',
  };
  if (cartItems.length) {
    return (
      <Box mb='300px' style={boxStyles}>
        <Typography variant='h4' component='h1'>
          Shopping cart
        </Typography>

        <Typography mb='20px' mt='20px' variant='subtitle2'>
          Great choise!
        </Typography>
        <Divider sx={{ width: '100%', margin: '0 auto' }} variant='inset' />
        <Stack spacing={2} sx={{ width: '100%', paddingTop: '20px' }}>
          {cartItems.map((item, index) => {
            return (
              <CartItem
                setCartItems={setCartItems}
                cartItems={cartItems}
                key={index}
                index={index + 1}
                item={item}
              />
            );
          })}
          <ListItem
            sx={{ width: '100p%', justifyContent: 'flex-end' }}
            alignItems='center'
          >
            <Typography sx={{ mr: '30px' }} variant='h5'>
              Total: {getSum(cartItems)}
            </Typography>

            <Button color='success' variant='contained'>
              Payment
            </Button>
          </ListItem>
          <Button
            style={{
              width: '100px',
              margin: '0 auto',
              marginBottom: '150px',
              marginTop: '50px',
            }}
            variant='contained'
            onClick={() => navigate(-1)}
          >
            Back
          </Button>
        </Stack>
      </Box>
    );
  }

  function getSum(cartItems) {
    let sum = 0;
    cartItems.forEach((item) => {
      sum = sum + item.price * item.count;
    });

    return sum.toFixed(2);
  }

  return (
    <Box style={boxStyles}>
      <Typography variant='h4' component='h1'>
        Shopping cart
      </Typography>
      <div className='Cart-content'>
        <Typography mb='50px' mt='50px' variant='subtitle2'>
          Your basket is empty
        </Typography>
      </div>
      <Button
        variant='contained'
        color='primary'
        size='medium'
        onClick={() => navigate(-1)}
      >
        Back
      </Button>
    </Box>
  );
}

export default Cart;
