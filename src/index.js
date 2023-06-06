import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./contexts/CartContext/CartContext";
import { AuthContext, AuthProvider } from "./contexts/Auth/AuthContext";
import {
  WishListContext,
  WishListProvider,
} from "./contexts/CartContext/WishListContext";
import {
  CartListContext,
  CartListProvider,
} from "./contexts/CartContext/CartListContext";
// Call make Server
makeServer();

export { CartContext, AuthContext, CartListContext, WishListContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartListProvider>
          <WishListProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </WishListProvider>
        </CartListProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
