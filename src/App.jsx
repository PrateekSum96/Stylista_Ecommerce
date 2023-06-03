import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Account } from "./pages/Account/Account";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";

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
      </Routes>
    </div>
  );
}

export default App;
