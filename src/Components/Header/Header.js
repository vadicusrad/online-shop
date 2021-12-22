import React from "react";
import "./Header.css";
import HeaderItem from "./HeaderItem/HeaderItem/HeaderItem";
import Cart from "../Cart/Cart";
import CartLogo from "../../static/CartLogo";
import { Link } from "react-router-dom";

function Header({ itemsCount }) {
  return (
    <header className="header">
      <Link className="header-brand" to="/">
        <h1>My Store</h1>
      </Link>
      <div className="header-nav">
        <HeaderItem headerItemName={"Main page"} to={"/"} />
        <HeaderItem headerItemName={"About"} to={"/about"} />
        {/* |
        <HeaderItem
          setModalActive={setModalActive}
          headerItemName={"Sign in"}
          setModalContent={setModalContent}
          modalContent={SignInModal}
          fto={"/features"}
        />
        |
        <HeaderItem
          setModalActive={setModalActive}
          headerItemName={"Sign up"}
          setModalContent={setModalContent}
          modalContent={SignUnModal}
          fto={"/features"}
        /> */}
        |
        <HeaderItem
          headerItemName={<CartLogo />}
          modalContent={Cart}
          to={"/cart"}
        />
        <span id="itemLengthInCart">{itemsCount}</span>
      </div>
    </header>
  );
}

export default Header;
