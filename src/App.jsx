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

function App() {
  return (
    <div className="App">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productList" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
    </div>
  );
}

export default App;
