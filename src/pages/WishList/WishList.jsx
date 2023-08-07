import { useContext, useEffect } from "react";
import { WishListContext } from "../../contexts/CartContext/WishListContext";
import "./WishList.css";
import { CardWishList } from "../../components/WishlistComponent/CardWishList";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/Auth/AuthContext";

export const WishList = () => {
  const { showWishList, wishlistToShow, wishListLoader } =
    useContext(WishListContext);
  const { isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    if (isLoggedIn) {
      wishlistToShow();
    }
    // eslint-disable-next-line
  }, [isLoggedIn]);
  const navigate = useNavigate();
  return (
    <div>
      <div className="wishlist-header">WishList</div>
      {wishListLoader ? (
        <h1 id="wishList-loader">Loading...</h1>
      ) : (
        <div>
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
      )}
    </div>
  );
};
