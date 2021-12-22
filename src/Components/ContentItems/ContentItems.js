import React, { useEffect, useState } from "react";
import "./ContentItems.css";
import Card from "./Card/Card";
import LoaderAnimation from "../LoaderAnimation/LoaderAnimation";
import ModalWindow from "../ModalWindow/ModalWindow";

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
    return <LoaderAnimation />;
  }

  return (
    <div className="Content-items">
      <ModalWindow
        modalActive={modalActive}
        setModalActive={setModalActive}
        modalContent={modalContent}
      />
      {items.map((item, index) => {
        return (
          <Card
            setModalContent={setModalContent}
            setModalActive={setModalActive}
            modalActive={modalActive}
            checkSameItems={checkSameItems}
            setCartItems={setCartItems}
            cardProps={item}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default ContentItems;
