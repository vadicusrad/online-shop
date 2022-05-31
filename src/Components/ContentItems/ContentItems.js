import React, { useEffect, useState } from 'react';
import Card from './Card/Card';
import ModalWindow from '../ModalWindow/ModalWindow';
import { Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
function ContentItems({
  currentCategory,
  setCartItems,
  checkSameItems,
  modalActive,
  setModalActive,
  modalContent,
  setModalContent,
}) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState([true]);

  useEffect(() => {
    let cleanUpFunc = false;
    setLoading(true);
    fetch(`https://fakestoreapi.com/products${currentCategory}`)
      .then((res) => res.json())
      .then((response) => {
        if (!cleanUpFunc) {
          addCounToItems(response);
        }
      });

    return () => (cleanUpFunc = true);
  }, [currentCategory]);

  function addCounToItems(response) {
    response.forEach((item) => {
      item.count = 1;
    });
    setItems(response);
    setLoading(false);
  }

  if (loading) {
    return (
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography mb='30px'>
          Waiting very slowly response from Fake API server)
        </Typography>

        <CircularProgress color='secondary' size='100px' />
      </Box>
    );
  }

  return (
    <>
      <ModalWindow
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalContent={modalContent}
      />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        mt='130px !important'
        mb='200px'
      >
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              setModalContent={setModalContent}
              setModalActive={setModalActive}
              modalActive={modalActive}
              checkSameItems={checkSameItems}
              setCartItems={setCartItems}
              cardProps={item}
            />
          );
        })}
      </Grid>
    </>
  );
}

export default ContentItems;
