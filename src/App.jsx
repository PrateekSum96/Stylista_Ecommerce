import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Account } from "./pages/Account/Account";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import { LogIn } from "./pages/LogIn/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import Mockman from "mockman-js";
import { RequireAuth } from "./components/RequireAuth";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishList"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
        <Route
          path="/account"
          element={
            <RequireAuth>
              <Account />
            </RequireAuth>
          }
        />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
