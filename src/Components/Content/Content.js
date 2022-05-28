import React from 'react';
import Aside from '../Aside/Asaide';
import ContentItems from '../ContentItems/ContentItems';
import { useState } from 'react';

function Content({
  cartItems,
  setCartItems,
  burgerNavState,
  burgerStateToggle,
}) {
  const [currentCategory, setCurrentCategory] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [modalContent, setModalContent] = useState([]);

  function checkSameItems(item) {
    if (!cartItems.length) {
      setCartItems((cartItems) => [...cartItems, item]);
      return;
    } else if (!cartItems.find((cartItem) => cartItem.id === item.id)) {
      setCartItems((cartItems) => [...cartItems, item]);
      return;
    } else {
      cartItems.forEach((cartItem) => {
        if (cartItem.id === item.id) {
          cartItem.count++;
          return;
        }
      });
    }
  }

  let currentCategoryLink = `/category/${encodeURIComponent(currentCategory)}`;

  if (!currentCategory) {
    currentCategoryLink = '';
  }

  return (
    <>
      {/* <Aside
        burgerStateToggle={burgerStateToggle}
        burgerNavState={burgerNavState}
        setCurrentCategory={setCurrentCategory}
      /> */}

      <ContentItems
        setModalContent={setModalContent}
        modalContent={modalContent}
        setModalActive={setModalActive}
        modalActive={modalActive}
        checkSameItems={checkSameItems}
        setCartItems={setCartItems}
        cartItems={cartItems}
        currentCategory={currentCategoryLink}
        style={{ height: '90vh' }}
      />
    </>
  );
}

export default Content;
