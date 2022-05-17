import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsAsync } from "../../features/productSlice";
import { PulseLoader } from "react-spinners";
import { addToCart } from "../../features/cartSlice";

const ShopProducts = () => {
  const getProducts = useSelector((state) => state.products.productList);
  const isLoading = useSelector((state) => state.products.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {isLoading ? (
        // <div>Loading...</div>
        <PulseLoader css={{ position: "absolute", top: "50%", left: "50%" }} />
      ) : (
        <section className="product-right-container">
          <div className="product-items">
            <div className="search-result-container">
              <div className="search-result-title">
                <h4>{getProducts.length} products listed</h4>
              </div>
            </div>

            {getProducts.map((product) => (
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
                        <b>{product.price} $</b>
                      </span>
                    </div>
                  </div>
                </Link>

                <div className="product-buttons">
                  <button
                    type="button"
                    className="btn-cart"
                    onClick={() => handleAddToCart(product)}
                  >
                    <b>Add to Cart</b>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: "center" }}>pagination 1 2 3 4</p>
        </section>
      )}
    </>
  );
};

export default ShopProducts;
