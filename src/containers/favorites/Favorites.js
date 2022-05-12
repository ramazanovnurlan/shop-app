import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

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
        <div className="product-items">
          <div className="search-result-container">
            <div className="search-result-title">
              {/* <h4>{favoritesItemsCount} favorites listed</h4> */}
            </div>
          </div>
          {getFavorites.map((product) => (
            <div
              className="product"
              key={product.id}
              // style={{ border: "4px solid grey" }}
            >
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
      </section>
    </>
  );
};

export default Favorites;
