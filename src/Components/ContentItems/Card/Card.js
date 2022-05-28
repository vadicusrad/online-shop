import React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

function myCard({
  cardProps,
  checkSameItems,
  setModalActive,
  setModalContent,
}) {
  const myCardProps = cardProps;

  const cardStyles = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const cardMediaStyles = {
    objectFit: 'contain',
  };
  const boxStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '140px',
    marginTop: '10px',
  };
  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card
        onClick={() => {
          setModalActive(true);
          setModalContent(myCardProps);
        }}
        style={cardStyles}
      >
        <CardContent>
          <CardMedia
            component='img'
            height='150px'
            image={myCardProps.image}
            alt={myCardProps.title}
            style={cardMediaStyles}
          />
          <Box style={boxStyles}>
            <Typography
              height='100px'
              nowrap='true'
              align='center'
              gutterBottom
              variant='subtitle2'
            >
              {myCardProps.title}
            </Typography>
            <Typography variant='body1'>
              price: <strong>{myCardProps.price} </strong> $
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            color='primary'
            size='medium'
            fullWidth={true}
            onClick={(e) => {
              checkSameItems(myCardProps);
              e.stopPropagation();
            }}
            variant='contained'
          >
            Buy
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default myCard;
