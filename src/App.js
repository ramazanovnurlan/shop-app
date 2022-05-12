import * as React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import "./App.css";
import "../src/assets/scss/style.css";
import Shop from "./containers/shop/Shop";
import Detail from "./containers/detail/Detail";
import Favorites from "./containers/favorites/Favorites";
import Cart from "./containers/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate replace to="/shop" />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:productId" element={<Detail />} />

        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/admin/listProducts" element={<ListProducts />} />
        <Route path="/admin/addProduct" element={<AddProduct />} />
        <Route path="/admin/editProduct/:productId" element={<EditProduct />} /> */}
        <Route>Not Found</Route>
      </Routes>
    </>
  );
}

export default App;