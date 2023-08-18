import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ProductList } from "./pages/ProductList/ProductList";
import { Navigation } from "./components/Navigation/Navigation";
import { Cart } from "./pages/Cart/Cart";
import { WishList } from "./pages/WishList/WishList";
import { Account } from "./pages/Account/Account";
import { LogIn } from "./pages/LogIn/Login";
import { SignUp } from "./pages/SignUp/SignUp";
import { ProductDetail } from "./pages/ProductDetail/ProductDetail";
import Mockman from "mockman-js";
import { RequireAuth } from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CheckOut } from "./pages/CheckOut/CheckOut";
import { OrderSummery } from "./pages/Order Summery/OrderSummery";

function App() {
  return (
    <div className="App">
      <div className="nav-container">
        <Navigation />
      </div>

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
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut />
            </RequireAuth>
          }
        />
        <Route
          path="/ordersummery"
          element={
            <RequireAuth>
              <OrderSummery />
            </RequireAuth>
          }
        />
        <Route path="/productDetail/:productId" element={<ProductDetail />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

      <footer>
        <div className="footer">
          <div>
            <h3 id="footer-info">About Us</h3>
            Stylista is your ultimate destination for discovering and exploring
            a vast collection of cloths.
          </div>
          <div>
            <h3 id="footer-info">Contact</h3>
            <div>
              <span>Phone:</span> 123456789
            </div>
            <div>
              <span>Email:</span> stylista@abc.com
            </div>
          </div>
          <p> © 2023 Stylista. All rights reserved.</p>
        </div>
      </footer>

      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
