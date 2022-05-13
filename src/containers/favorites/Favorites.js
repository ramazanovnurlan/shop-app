import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineClose } from "react-icons/ai";
import { removeFromFavorites } from "../../features/favoritesSlice";

const Favorites = () => {
  const getFavorites = useSelector((state) => state.favorites.favoritesItems);
  // const favoritesItemsCount = useSelector(
  //   (state) => state.favorites.favoritesItemsCount
  // );
  const dispatch = useDispatch();
  // console.log(favoritesItemsCount);

  return (
    <>
      <Navbar />
      <section className="product-favorites-container">
        <h2>Favorites</h2>
        {getFavorites.length === 0 ? (
          <div className="favorites-empty">
            <p>Your favorites is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <div className="product-items">
            <div className="search-result-container">
              <div className="search-result-title">
                <h4>{getFavorites.length} favorites listed</h4>
              </div>
            </div>
            {getFavorites.map((product) => (
              <div
                className="product"
                key={product.id}
                // style={{ border: "4px solid grey" }}
              >
                <span onClick={() => dispatch(removeFromFavorites(product))}>
                  <AiOutlineClose />
                </span>
                <Link to={`/products/${product.id}`}>
                  <div className="product-content">
                    <div className="product-img">
                      <img src={product.mainImageUrl} alt="" />
                    </div>
                  </div>

                  <div className="product-info">
                    <div className="product-name">
                      <p className="text-overflow">
                        <abbr
                          title={product.productName}
                          style={{ textDecoration: "none" }}
                        >
                          {product.productName}
                        </abbr>
                      </p>
                    </div>
                    <div className="product-price">
                      <span>
                        <b>{product.price}$</b>
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Favorites;
