import { useContext } from "react";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import "./WishList.css";
import { CardWishList } from "../../components/WishlistComponent/CardWishList";
import { NavLink } from "react-router-dom";

export const WishList = () => {
  const { showWishList } = useContext(WishListContext);
  return (
    <div>
      <div className="wishlist-header">WishList</div>
      {showWishList?.length === 0 ? (
        <div>
          <h1 id="wishlist-empty-msg">Your wishlist is empty!! </h1>
          <NavLink to="/productList" id="to-productList">
            <button id="btn-to-productList">Shop Now</button>
          </NavLink>
        </div>
      ) : (
        <div className="wishlist-container">
          {showWishList?.map((item) => (
            <div key={item.id}>
              <CardWishList {...item} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
