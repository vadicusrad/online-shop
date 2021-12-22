import React from "react";
import "./Content.css";
import Aside from "../Aside/Asaide";
import ContentItems from "../ContentItems/ContentItems";
import { useState } from "react/cjs/react.development";

function Content({ cartItems, setCartItems }) {
  const [currentCategory, setCurrentCategory] = useState("");
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
    currentCategoryLink = "";
  }

  return (
    <div className="Content">
      <Aside setCurrentCategory={setCurrentCategory} />

      <ContentItems
        setModalContent={setModalContent}
        modalContent={modalContent}
        setModalActive={setModalActive}
        modalActive={modalActive}
        checkSameItems={checkSameItems}
        setCartItems={setCartItems}
        cartItems={cartItems}
        currentCategory={currentCategoryLink}
      />
    </div>
  );
}

export default Content;
