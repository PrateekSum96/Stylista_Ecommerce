import "./CardProductList.css";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartListContext } from "../../contexts/CartContext/CartListContext";
import { WishListContext } from "../../contexts/CartContext/WishListContext";

const ProductListCard = (item) => {
  const { cart, btnClick } = useContext(CartListContext);
  const { showWishList, btnClickWishList } = useContext(WishListContext);
  const navigate = useNavigate();
  const inTheCart = (item) => {
    return cart?.find((cartItem) => cartItem.id === item.id);
  };

  const inTheWishList = (item) => {
    return showWishList?.find((wishListItem) => wishListItem.id === item.id);
  };
  return (
    <div className="product-card" key={item.id}>
      <Link to={`/productDetail/${item.id}`}>
        <img src={item.image_url} alt={item.title} />
      </Link>

      {item.trending && <div className="trending">Trending</div>}
      <div className="rating-review-size">
        <div className="rating">
          <span>
            <i class="fa-solid fa-star fa-2xs"></i>
            {item.rating}
          </span>
          ||
          <span>{item.reviews}</span>
        </div>
        <div className="size">{item.size}</div>
      </div>
      <div className="product-list-info">
        <div className="product-list-title">
          <Link to={`/productDetail/${item.id}`}>{item.title}</Link>
        </div>
        <div className="description">{item.description}</div>
        <div className="product-list-price">
          <span>&#8377;{item.price}</span>
          <span className="original-price">&#8377;{item.original_price}</span>
        </div>
      </div>

      {!item.in_stock ? (
        <div id="out-of-stock"> Out of Stock</div>
      ) : (
        <div className="btn">
          {inTheCart(item) ? (
            <button onClick={() => navigate("/cart")} id="add-to-cart-btn">
              Go to Cart
            </button>
          ) : (
            <button
              onClick={() => {
                btnClick(item);
              }}
              id="add-to-cart-btn"
            >
              Add to cart
            </button>
          )}

          {inTheWishList(item) ? (
            <button onClick={() => navigate("/wishList")}>
              Go to Wishlist
            </button>
          ) : (
            <button
              onClick={() => {
                btnClickWishList(item);
              }}
            >
              Add to WishList
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export { ProductListCard };
