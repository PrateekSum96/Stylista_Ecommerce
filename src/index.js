import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";

import { CartContext, CartProvider } from "./contexts/CartContext/CartContext";
import { AuthContext, AuthProvider } from "./contexts/Auth/AuthContext";
// Call make Server
makeServer();

export { CartContext, AuthContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
