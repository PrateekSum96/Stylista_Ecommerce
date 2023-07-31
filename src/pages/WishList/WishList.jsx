import { useContext } from "react";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import "./WishList.css";
import { CardWishList } from "../../components/WishlistComponent/CardWishList";
import { useNavigate } from "react-router-dom";

export const WishList = () => {
  const { showWishList } = useContext(WishListContext);
  const navigate = useNavigate();
  return (
    <div>
      <div className="wishlist-header">WishList</div>
      {showWishList?.length === 0 ? (
        <div>
          <h1 id="wishlist-empty-msg">Your wishlist is empty!! </h1>

          <button
            id="btn-to-productList"
            onClick={() => navigate("/productList")}
          >
            Shop Now
          </button>
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
