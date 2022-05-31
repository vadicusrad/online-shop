import React, { useState, useEffect } from 'react';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import { Box, Container } from '@mui/material';

function Aside({ currentCategory, setCurrentCategory }) {
  const CATEGORIES = 'https://fakestoreapi.com/products/categories';

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let cleanUpFunc = false;
    fetch(CATEGORIES)
      .then((res) => res.json())
      .then((response) => {
        if (!cleanUpFunc) {
          setCategories(response);
        }
      })
      .catch((error) => console.error('oooops!', error.message));

    return () => (cleanUpFunc = true);
  }, []);

  return (
    <Box
      style={{
        width: '100%',
        background: 'rgb(214 221 236 / 95%)',
        position: 'fixed',
        top: '55px',
        left: '0',
        height: '80px',
        zIndex: '100',
      }}
    >
      <Container>
        <FormControl variant='filled' sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id='demo-select-large'>Category</InputLabel>
          <Select
            labelId='demo-select-large'
            id='demo-select-large'
            value={currentCategory}
            label='Category'
            onChange={(e) => {
              setCurrentCategory(e.target.value);
            }}
          >
            <MenuItem value=''>all</MenuItem>
            {categories.map((item, id) => {
              return (
                <MenuItem value={item} key={id}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Container>
    </Box>
  );
}

export default Aside;
