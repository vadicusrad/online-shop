import React, { useState } from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import { Routes, Route } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import About from "./Components/About/About";
import BaseLayout from "./Components/BaseLayout/BaseLayout";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const itemsCount = cartItems.length;
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<BaseLayout itemsCount={itemsCount} />}>
          <Route
            index
            element={
              <Content setCartItems={setCartItems} cartItems={cartItems} />
            }
          />
          <Route
            path={"cart"}
            element={<Cart setCartItems={setCartItems} cartItems={cartItems} />}
          />
          <Route path={"about"} element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
