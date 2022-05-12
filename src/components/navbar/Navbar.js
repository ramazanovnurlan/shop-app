import { AiOutlineUser, AiFillHeart, AiFillShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import Home from "../../containers/home/Home";
import Shop from "../../containers/shop/Shop";
import Favorites from "../../containers/favorites/Favorites";
import Cart from "../../containers/cart/Cart";
import Toggle from "../toggle/Toggle";

const Navbar = () => {
  return (
    <header className="header">
      <div className="overlay has-fade"></div>

      <div className="header__menu has-fade"></div>

      <nav className="nav">
        <div className="nav__left">
          <div className="nav__logo">
            <Link to="/" element={<Home />}>
              <b>Shop App</b>
            </Link>
          </div>
        </div>

        <div className="nav__center"></div>

        <div className="nav__right hide-for-mobile">
          <div className="nav__tools">
            <div className="nav__favorites">
              <Link to="/favorites" element={<Favorites />}>
                <AiFillHeart />
              </Link>
            </div>

            <div className="nav__cart">
              {/* <span>2</span>`q */}
              <Link to="/cart" element={<Cart />}>
                <AiFillShopping />
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
