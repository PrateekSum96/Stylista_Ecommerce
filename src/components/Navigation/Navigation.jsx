import { useContext } from "react";
import { FilterReducerContext } from "../../contexts/ReducerContext/ReducerContext";
import "./Navigation.css";
import { NavLink, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  const {
    filterState: { search },
    filterDispatch,
  } = useContext(FilterReducerContext);

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
          <NavLink to="/productList">
            <i class="fa-sharp fa-regular fa-compass fa-xl "></i>
          </NavLink>
          <NavLink to="/cart">
            <i class="fa-solid fa-cart-shopping fa-xl"></i>
          </NavLink>
          <NavLink to="/wishList">
            <i class="fa-solid fa-heart fa-xl"></i>
          </NavLink>
          <NavLink to="/account">
            <i class="fa-solid fa-user fa-xl"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};
