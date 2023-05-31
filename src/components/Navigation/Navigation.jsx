import "./Navigation.css";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="brand-name">
          <NavLink to="/">Stylista</NavLink>
        </div>
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" className="search" placeholder="Search products" />
        </div>
        <div className="icons">
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
