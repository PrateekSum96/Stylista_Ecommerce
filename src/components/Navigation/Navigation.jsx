import { useContext, useEffect } from "react";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";
import "./Navigation.css";
import { NavLink, useNavigate } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const Navigation = () => {
  const { cart, cartToShow } = useContext(CartListContext);
  const { showWishList, wishlistToShow } = useContext(WishListContext);
  const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const {
    filterState: { search },
    filterDispatch,
  } = useContext(FilterReducerContext);

  const checkActive = ({ isActive }) => ({
    backgroundColor: isActive && "black",
  });
  useEffect(() => {
    setTimeout(() => {
      wishlistToShow();
      cartToShow();
    }, 100);

    // eslint-disable-next-line
  }, [isLoggedIn]);

  return (
    <div>
      <nav className="navigation">
        <div className="brand-name">
          <NavLink
            to="/"
            onClick={() => {
              filterDispatch({
                type: "CLEAR_FILTER",
              });
            }}
          >
            Stylista
          </NavLink>
        </div>
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            className="search"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              filterDispatch({
                type: "FILTER_BY_SEARCH",
                payload: e.target.value,
              });
              navigate("/productList");
            }}
          />
        </div>
        <div className="icons">
          <NavLink to="/productList" style={checkActive} id="nav-link">
            <i class="fa-sharp fa-regular fa-compass fa-xl"></i>
          </NavLink>
          <NavLink to="/cart" style={checkActive} id="nav-link">
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
            {cart?.length > 0 && <div className="item-num">{cart?.length}</div>}
          </NavLink>
          <NavLink to="/wishList" style={checkActive} id="nav-link">
            <i class="fa-solid fa-heart fa-xl"></i>
            {showWishList?.length > 0 && (
              <div className="item-num">{showWishList?.length}</div>
            )}
          </NavLink>
          <NavLink to="/account" style={checkActive} id="nav-link">
            <i class="fa-solid fa-user fa-xl"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
