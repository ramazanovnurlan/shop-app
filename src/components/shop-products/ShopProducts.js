import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllProductsAsync } from "../../features/productSlice";

const ShopProducts = () => {
  const getProducts = useSelector((state) => state.products.productList);
  const productCount = useSelector((state) => state.products.productCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  return (
    <section className="product-right-container">
      <div className="product-items">
        <div className="search-result-container">
          <div className="search-result-title">
            <h4>{productCount} products listed</h4>
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
                    <b>{product.price}$</b>
                  </span>
                </div>
              </div>
            </Link>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
