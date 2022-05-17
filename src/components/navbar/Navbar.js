import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Home from "../../containers/home/Home";
import Favorites from "../../containers/favorites/Favorites";
import Cart from "../../containers/cart/Cart";
import Toggle from "../toggle/Toggle";
import logo from "../../assets/icons/Shop App1.svg";
import { RiUser6Fill } from "react-icons/ri";
import { BsSuitHeart } from "react-icons/bs";
import { FaShoppingBasket } from "react-icons/fa";

const Navbar = () => {
  const getCartItems = useSelector((state) => state.cart.cartItems);

  return (
    <header className="header">
      <div className="overlay has-fade"></div>

      <div className="header__menu has-fade"></div>

      <nav className="nav">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to="/" element={<Home />}>
              <img src={logo} alt="logo"></img>
            </Link>
          </div>
        </div>

        <div className="nav__center"></div>

        <div className="nav__right hide-for-mobile">
          <div className="nav__tools">
            <div className="nav__favorites">
              <Link to="/favorites" element={<Favorites />}>
                <BsSuitHeart />
              </Link>
            </div>

            <div className="nav__cart">
              {getCartItems.length === 0 ? (
                <span></span>
              ) : (
                <span className="cart-item-count-container">
                  {getCartItems.length}
                </span>
              )}

              <Link to="/cart" element={<Cart />}>
                <FaShoppingBasket />
              </Link>
            </div>
          </div>
        </div>

        <div
          id="btnToggle"
          className="nav__toggle hide-for-desktop"
          onClick={Toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
