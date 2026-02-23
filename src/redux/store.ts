import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartReducer from "./features/cartSlice";
import favoritesReducer from "./features/favoritesSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "favorites"],
};

const rootReducer = {
  cart: cartReducer,
  favorites: favoritesReducer,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

// Type for RootState
export type RootState = ReturnType<typeof store.getState>;

// Type for AppDispatch
export type AppDispatch = typeof store.dispatch;
