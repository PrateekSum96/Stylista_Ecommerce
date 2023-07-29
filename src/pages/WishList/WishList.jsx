import { useContext } from "react";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import "./WishList.css";
import { CardWishList } from "../../components/WishlistComponent/CardWishList";

export const WishList = () => {
  const { showWishList } = useContext(WishListContext);
  return (
    <div>
      <div className="wishlist-header">WishList</div>
      {showWishList?.length === 0 ? (
        <h1 id="wishlist-empty-msg">Your wishlist is empty!! </h1>
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
