import { configureStore } from "@reduxjs/toolkit";
import cardsReducer from "./slice";
export default configureStore({
  reducer: {
    cards: cardsReducer,
  },
});
