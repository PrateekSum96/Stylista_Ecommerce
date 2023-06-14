import { useContext } from "react";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import { WishListCard } from "./WishlistCard";
import "./WishList.css";

export const WishList = () => {
  const { showWishList } = useContext(WishListContext);
  return (
    <div>
      <div>
        {showWishList?.length === 0 ? (
          <h1 id="wishlist-empty-msg">Your wishlist is empty!! </h1>
        ) : (
          <div className="wishlist-container">
            {showWishList?.map((item) => (
              <div key={item.id}>
                <WishListCard {...item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
