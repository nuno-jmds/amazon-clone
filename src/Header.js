import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Icon } from "@material-ui/core";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  //console.log(basket);
  return (
    <nav className="header">
      {/**logo on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
          alt="amazon logo"
        />
      </Link>
      {/**search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/**3Links */}
      <div className="header__nav">
        {/**first Link */}
        <Link className="header__link" to={!user && "/login"}>
          {user ? (
            <div className="header__option" onClick={() => auth.signOut()}>
              <span className="header__optionLineOne">Hello, {user.email}</span>
              <span className="header__optionLineTwo">Sign out</span>
            </div>
          ) : (
            <div className="header__option">
              <span className="header__optionLineOne">Hello,</span>
              <span className="header__optionLineTwo">Sign in</span>
            </div>
          )}
        </Link>

        {/**second Link */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">{`&`} Orders</span>
          </div>
        </Link>
        {/**third Link */}
        <Link className="header__link" to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/**basket icon with number */}
        <Link className="header__link" to="/checkout">
          <div className="header__optionBasket">
            <div className="header__optionBasketItems">
              {/**number of items */}
              <span className="header__optionLineTwo header__optionbasketCount">
                {basket?.length}
              </span>
              {/**shoping basket icon */}
              <ShoppingBasketIcon></ShoppingBasketIcon>
            </div>
            <div className="header__optionBasketItems2">
              <span className="header__optionLineOne">Shoping-</span>
              <span className="header__optionLineTwo">Basket</span>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
