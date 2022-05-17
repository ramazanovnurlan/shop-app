import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      const cartItem = state.cartItems.find((x) => x.id === action.payload.id);

      if (action.payload && !cartItem) {
        if (existingIndex >= 0) {
          state.cartItems[existingIndex] = {
            ...state.cartItems[existingIndex],
            cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
          };
        } else {
          let tempProductItem = { ...action.payload, cartQuantity: 1 };
          state.cartItems.push(tempProductItem);
          toast.success("The product was added to the card", {
            position: "bottom-left",
            theme: "dark",
            autoClose: 1000,
            pauseOnHover: false,
            hideProgressBar: true,
          });
        }
      } else {
        // alert("This product is already on the card");
        toast.info("This product is already on the card", {
          position: "bottom-left",
          theme: "dark",
          autoClose: 1000,
          pauseOnHover: false,
          hideProgressBar: true,
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    decreaseProduct(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increaseProduct(state, action) {
      const existingIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          cartQuantity: state.cartItems[existingIndex].cartQuantity + 1,
        };
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProductItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems.forEach((cartItem) => {
        if (cartItem.id === action.payload.id) {
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      });
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
  },
});

export const {
  addToCart,
  decreaseProduct,
  increaseProduct,
  removeFromCart,
  getTotals,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
