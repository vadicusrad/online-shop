import React, { useState } from 'react';
import './App.css';
import Content from './Components/Content/Content';
import { Routes, Route } from 'react-router-dom';
import Cart from './Components/Cart/Cart';
import About from './Components/About/About';
import BaseLayout from './Components/BaseLayout/BaseLayout';
import { Container } from '@mui/material';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [burgerNavState, setBurgerNavState] = useState(false);

  const burgerStateToggle = () => {
    setBurgerNavState(!burgerNavState);
  };

  const itemsCount = cartItems.length;
  return (
    <Container sx={{ mt: '80px' }}>
      <Routes>
        <Route
          path={'/'}
          element={
            <BaseLayout
              burgerNavState={burgerNavState}
              burgerStateToggle={burgerStateToggle}
              itemsCount={itemsCount}
            />
          }
        >
          <Route
            index
            element={
              <Content
                burgerStateToggle={burgerStateToggle}
                burgerNavState={burgerNavState}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
            }
          />
          <Route
            path={'cart'}
            element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
          />
          <Route path={'about'} element={<About />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
