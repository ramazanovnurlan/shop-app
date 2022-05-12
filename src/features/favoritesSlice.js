import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favoritesItems: localStorage.getItem("favoritesItems")
    ? JSON.parse(localStorage.getItem("favoritesItems"))
    : [],
  favoritesItemsCount: 0,
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const existingIndex = state.favoritesItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.favoritesItems[existingIndex] = {
          ...state.favoritesItems[existingIndex],
          cartQuantity: state.favoritesItems[existingIndex].cartQuantity + 1,
        };
        toast.info("Increased product quantity", {
          position: "bottom-left",
        });
      } else {
        let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.favoritesItems.push(tempProductItem);
        toast.success("Product added to Favorites", {
          position: "bottom-left",
        });
      }
      localStorage.setItem(
        "favoritesItems",
        JSON.stringify(state.favoritesItems)
      );
    },
    // removeProductToCart(state,payload):{

    // },
  },
});

export const { addToFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
